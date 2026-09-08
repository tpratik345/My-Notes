## 1. What is the output?

```js
setTimeout(() => console.log(1));
Promise.resolve().then(() => console.log(2));
Promise.resolve().then(() => setTimeout(() => console.log(3)));
new Promise(() => console.log(4));
setTimeout(() => console.log(5));
```

<details>
  <summary>Output</summary>

### 4 2 1 5 3

</details>

<details>
  <summary>Explaination</summary>

```js
setTimeout(() => console.log(1)); // Line A
Promise.resolve().then(() => console.log(2)); // Line B
Promise.resolve().then(() => setTimeout(() => console.log(3))); // Line C
new Promise(() => console.log(4)); // Line D
setTimeout(() => console.log(5)); // Line E
```

Line D: new Promise(() => console.log(4));

This line creates a new Promise, and the executor function (the function passed to the Promise constructor) runs immediately.
So console.log(4) executes synchronously and outputs 4 right away.

Line B: Promise.resolve().then(() => console.log(2));

This is a resolved Promise, so its .then() callback is scheduled as a microtask.
Microtasks are executed after the current synchronous code completes, but before any macrotasks (like setTimeout callbacks).
So console.log(2) will execute next, outputting 2.

Line C: Promise.resolve().then(() => setTimeout(() => console.log(3)));

This line is also a resolved Promise, so the .then() callback is scheduled as a microtask.
Inside this callback, setTimeout schedules console.log(3) as a macrotask.
This macrotask (for console.log(3)) will be executed in the next event loop, after all other synchronous code and microtasks have finished.

Line A: setTimeout(() => console.log(1));

This schedules console.log(1) as a macrotask to be executed in the next event loop cycle, after all synchronous code and microtasks have completed.

Line E: setTimeout(() => console.log(5));

This also schedules console.log(5) as a macrotask in the next event loop cycle, just like the previous setTimeout.

</details>

## 2. What is the output?

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

setTimeout(() => {
    Promise.resolve().then(() => console.log("E"));
    console.log("F");
}, 0);

Promise.resolve().then(() => setTimeout(() => console.log("G"), 0));
```

<details>
  <summary> Output </summary>

### A, D, C, B, F, E, G

</details>

<details>
  <summary> Explaination </summary>
Good try! You’re very close, but there’s a small difference in the order due to the handling of microtasks and macrotasks. Let’s break it down step-by-step.

Here's the code again for reference:

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

setTimeout(() => {
    Promise.resolve().then(() => console.log("E"));
    console.log("F");
}, 0);

Promise.resolve().then(() => setTimeout(() => console.log("G"), 0));
```

### Step-by-Step Execution:

1. **Synchronous Code**:
    - `console.log("A");` → **A** is logged.
    - `console.log("D");` → **D** is logged.

2. **Microtasks** (Promises):
    - `Promise.resolve().then(() => console.log("C"));` → **C** is logged.
    - `Promise.resolve().then(() => setTimeout(() => console.log("G"), 0));` → This schedules a new `setTimeout` for **G** (which will run in the next macrotask queue).

3. **Macrotasks** (setTimeout callbacks):
    - The first `setTimeout(() => console.log("B"), 0);` callback is executed → **B** is logged.
    - The second `setTimeout` callback:
        - Inside it, `Promise.resolve().then(() => console.log("E"));` schedules **E** in the microtask queue.
        - Then `console.log("F");` is executed → **F** is logged.

    - The microtask **E** (from the inner Promise in the second `setTimeout`) runs after the macrotask → **E** is logged.
    - The last `setTimeout` callback (for **G**) runs → **G** is logged.

### Final Output Sequence:

```
A, D, C, B, F, E, G
```

### Explanation of Key Points:

- **Microtasks** (like `.then()` callbacks) always run after the current synchronous code but before the next macrotask (such as `setTimeout`).
- Inner `setTimeout` callbacks inside a `then` will only be added to the queue for the next macrotask round.

</details>

---

## 3. What is the output?

```js
console.log("X");

setTimeout(() => console.log("Y"), 0);

Promise.resolve().then(() => {
    console.log("Z");
    setTimeout(() => console.log("A"), 0);
});

Promise.resolve().then(() => console.log("B"));

console.log("W");

setTimeout(() => {
    console.log("C");
    Promise.resolve().then(() => console.log("D"));
}, 0);

Promise.resolve().then(() => setTimeout(() => console.log("E"), 0));
```

<details>
  <summary>Output</summary>

### X, W, Z, B, Y, C, D, A, E

</details>

<details>
  <summary>Explaination</summary>

### Step-by-Step Execution:

1. **Synchronous Code**:
    - `console.log("X");` → **X** is logged.
    - `console.log("W");` → **W** is logged.

2. **Microtasks** (Promises):
    - `Promise.resolve().then(() => { console.log("Z"); ... });`
        - **Z** is logged.
        - Inside this `then`, a `setTimeout(() => console.log("A"), 0);` is scheduled, which will execute in the next macrotask queue.

    - `Promise.resolve().then(() => console.log("B"));` → **B** is logged.
    - `Promise.resolve().then(() => setTimeout(() => console.log("E"), 0));` schedules **E** to run in the next macrotask queue.

3. **Macrotasks** (setTimeout callbacks):
    - First `setTimeout(() => console.log("Y"), 0);` callback runs → **Y** is logged.
    - The second `setTimeout` callback:
        - Inside it, `console.log("C");` runs → **C** is logged.
        - Then `Promise.resolve().then(() => console.log("D"));` is scheduled as a microtask and executes immediately → **D** is logged.

    - The third `setTimeout(() => console.log("A"), 0);` (from inside the `then` callback) runs → **A** is logged.
    - The last `setTimeout(() => console.log("E"), 0);` (from a Promise callback) runs → **E** is logged.

### Final Output Sequence:

```
X, W, Z, B, Y, C, D, A, E
```

</details>

## 4. What is the output?

```js
console.log("1");

setTimeout(() => console.log("2"), 100);

Promise.resolve().then(() => console.log("3"));

setTimeout(() => {
    console.log("4");
    Promise.resolve().then(() => console.log("5"));
}, 0);

Promise.resolve().then(() => setTimeout(() => console.log("6"), 50));

console.log("7");

setTimeout(() => console.log("8"), 0);

Promise.resolve().then(() => console.log("9"));
```

<details>
  <summary>Output</summary>

### 1, 7, 3, 9, 4, 5, 8, 6, 2

</details>
<details>
  <summary>Explaination</summary>

### Step-by-Step Execution:

1. **Synchronous Code**:

   * `console.log("1");` → **1** is logged.
   * `console.log("7");` → **7** is logged.

2. **Microtasks** (Promises):

   * `Promise.resolve().then(() => console.log("3"));` → **3** is logged.
   * `Promise.resolve().then(() => console.log("9"));` → **9** is logged.
   * `Promise.resolve().then(() => setTimeout(() => console.log("6"), 50));` schedules **6** to run in the next macrotask queue after 50ms.

3. **Macrotasks** (setTimeout callbacks):

   * `setTimeout(() => console.log("2"), 100);` will log **2** after 100ms.
   * `setTimeout(() => { console.log("4"); ... }, 0);`

     * Runs first among the `setTimeout` calls because it has a delay of `0ms`.
     * Inside it, `console.log("4");` logs **4**.
     * Then `Promise.resolve().then(() => console.log("5"));` is scheduled as a microtask, which executes immediately after **4** → **5** is logged.
   * `setTimeout(() => console.log("8"), 0);` runs next in the macrotask queue → **8** is logged.
   * `setTimeout(() => console.log("6"), 50);` (scheduled earlier by a Promise) runs after 50ms → **6** is logged.

### Final Output Sequence:

```
1, 7, 3, 9, 4, 5, 8, 6, 2
```

### Explanation of Key Points:

* **Microtasks** (from `then`) always run after the current synchronous code but before the next macrotask.
* Macrotasks (like `setTimeout`) with the same delay (0ms) run in the order they were scheduled.
* Longer delays (`setTimeout` with `100ms` in this case) run later.
</details>

## 5. What is the output?

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise in Timeout 1"));
}, 10);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout in Promise 1");
  }, 0);
});

Promise.resolve().then(() => console.log("Promise 2"));

setTimeout(() => {
  console.log("Timeout 2");
  Promise.resolve().then(() => console.log("Promise in Timeout 2"));
}, 0);

console.log("End");

Promise.resolve().then(() => console.log("Promise 3"));

setTimeout(() => console.log("Timeout 3"), 5);
```

<details>
  <summary>Output</summary>

### Start, End, Promise 1, Promise 2, Promise 3, Timeout 2, Promise in Timeout 2, Timeout 3, Timeout in Promise 1, Timeout 1, Promise in Timeout 1

</details>

<details>
  <summary> Explaination </summary>


### Step-by-Step Execution:

1. **Synchronous Code**:

   * `console.log("Start");` → **"Start"** is logged.
   * `console.log("End");` → **"End"** is logged.

2. **Microtasks** (Promises):

   * `Promise.resolve().then(() => { console.log("Promise 1"); ... });`

     * **"Promise 1"** is logged.
     * Inside this `then`, `setTimeout(() => console.log("Timeout in Promise 1"), 0);` is scheduled.
   * `Promise.resolve().then(() => console.log("Promise 2"));` → **"Promise 2"** is logged.
   * `Promise.resolve().then(() => console.log("Promise 3"));` → **"Promise 3"** is logged.

3. **Macrotasks** (setTimeout callbacks):

   * The first `setTimeout(..., 10)` callback is delayed, so it waits until after the shorter delays have finished.
   * The second `setTimeout(..., 0)` callback:

     * `console.log("Timeout 2");` → **"Timeout 2"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("Promise in Timeout 2"));` is scheduled as a microtask, which executes immediately after this macrotask → **"Promise in Timeout 2"** is logged.
   * The third `setTimeout(..., 5)` callback runs next → **"Timeout 3"** is logged.
   * The fourth `setTimeout(..., 0)` from the `then` of "Promise 1" runs → **"Timeout in Promise 1"** is logged.
   * Finally, `setTimeout(..., 10)` callback (from the first line) runs:

     * `console.log("Timeout 1");` → **"Timeout 1"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("Promise in Timeout 1"));` is scheduled as a microtask and runs immediately after → **"Promise in Timeout 1"** is logged.

### Final Output Sequence:

```
Start, End, Promise 1, Promise 2, Promise 3, Timeout 2, Promise in Timeout 2, Timeout 3, Timeout in Promise 1, Timeout 1, Promise in Timeout 1
```

### Explanation of Key Points:

* **Microtasks** (from Promises) always run after the current synchronous code but before any macrotasks.
* Macrotasks (`setTimeout`) with the same delay (0ms) run in the order they were scheduled.
* Promises created within a macrotask (like `Promise in Timeout 1`) are added to the microtask queue and run immediately after the current macrotask completes.

</details>

## 6. What is the output?

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 20);

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 10);
});

setTimeout(() => {
  console.log("F");
  Promise.resolve().then(() => console.log("G"));
}, 0);

Promise.resolve().then(() => console.log("H"));

setTimeout(() => console.log("I"), 5);

console.log("J");

Promise.resolve().then(() => {
  console.log("K");
  setTimeout(() => {
    console.log("L");
    Promise.resolve().then(() => console.log("M"));
  }, 15);
});
```
<details>
  <summary> Output </summary>

### A, J, D, H, K, F, G, I, E, L, M, B, C

</details>

<details>
  <summary> Explaination </summary>

### Step-by-Step Execution

1. **Synchronous Code**:

   * `console.log("A");` → **"A"** is logged.
   * `console.log("J");` → **"J"** is logged.

2. **Microtasks** (Promises):

   * `Promise.resolve().then(() => { console.log("D"); ... });`

     * **"D"** is logged.
     * Inside this `then`, `setTimeout(() => console.log("E"), 10);` is scheduled to run after 10ms.
   * `Promise.resolve().then(() => console.log("H"));` → **"H"** is logged.
   * `Promise.resolve().then(() => { console.log("K"); ... });`

     * **"K"** is logged.
     * Inside this `then`, `setTimeout(() => { console.log("L"); ... }, 15);` is scheduled to run after 15ms.

3. **Macrotasks** (setTimeout callbacks):

   * The `setTimeout(..., 0)` callback:

     * `console.log("F");` → **"F"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("G"));` is scheduled as a microtask, which runs immediately after this macrotask → **"G"** is logged.
   * The `setTimeout(..., 5)` callback:

     * `console.log("I");` → **"I"** is logged.
   * The `setTimeout(..., 10)` callback from the `then` inside "D":

     * `console.log("E");` → **"E"** is logged.
   * The `setTimeout(..., 15)` callback from the `then` inside "K":

     * `console.log("L");` → **"L"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("M"));` is scheduled as a microtask, which runs immediately after this macrotask → **"M"** is logged.
   * Finally, the `setTimeout(..., 20)` callback:

     * `console.log("B");` → **"B"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("C"));` is scheduled as a microtask, which runs immediately after this macrotask → **"C"** is logged.

### Final Output Sequence

```
A, J, D, H, K, F, G, I, E, L, M, B, C
```

</details>


## 7. What is the output?

Nice work! Your answer is correct! 🎉 Let's walk through the steps to confirm the output.

Here's the code again:

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => {
    console.log("3");
    setTimeout(() => console.log("4"), 10);
  });
}, 5);

Promise.resolve().then(() => {
  console.log("5");
  setTimeout(() => {
    console.log("6");
    Promise.resolve().then(() => console.log("7"));
  }, 0);
});

setTimeout(() => {
  console.log("8");
  Promise.resolve().then(() => console.log("9"));
}, 0);

Promise.resolve().then(() => {
  console.log("10");
  Promise.resolve().then(() => console.log("11"));
});

setTimeout(() => console.log("12"), 15);

console.log("13");
```

<details>
  <summary>Output<summary>

### 1, 13, 5, 10, 11, 8, 9, 6, 7, 2, 3, 4, 12

</details>


<details>
  <summary> Explaination </summary>

### Step-by-Step Execution:

1. **Synchronous Code**:

   * `console.log("1");` → **"1"** is logged.
   * `console.log("13");` → **"13"** is logged.

2. **Microtasks (Promises)**:

   * `Promise.resolve().then(() => { console.log("5"); ... });`

     * **"5"** is logged.
     * Inside this `then`, `setTimeout(() => console.log("6"); ... , 0);` is scheduled with a delay of 0ms.
   * `Promise.resolve().then(() => { console.log("10"); ... });`

     * **"10"** is logged.
     * Then `Promise.resolve().then(() => console.log("11"));` inside it runs as a nested microtask → **"11"** is logged.

3. **Macrotasks (setTimeout callbacks)**:

   * The first `setTimeout(..., 0)` callback:

     * `console.log("8");` → **"8"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("9"));` is scheduled as a microtask, which executes immediately after this macrotask → **"9"** is logged.
   * The second `setTimeout(..., 0)` callback from the `then` inside "5":

     * `console.log("6");` → **"6"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("7"));` is scheduled as a microtask, which runs immediately after this macrotask → **"7"** is logged.
   * The `setTimeout(..., 5)` callback:

     * `console.log("2");` → **"2"** is logged.
     * Inside it, `Promise.resolve().then(() => { console.log("3"); ... });` is scheduled as a microtask and runs immediately after → **"3"** is logged.
     * Then `setTimeout(() => console.log("4"), 10);` is scheduled with a 10ms delay.
   * The `setTimeout(..., 15)` callback:

     * `console.log("12");` → **"12"** is logged.
   * Finally, the delayed `setTimeout(..., 10)` callback from the `then` inside "2":

     * `console.log("4");` → **"4"** is logged.

### Final Output Sequence:

```
1, 13, 5, 10, 11, 8, 9, 6, 7, 2, 3, 4, 12
```

### Explanation of Key Points:

* **Microtasks (Promises)** always complete before the next macrotask (such as `setTimeout`).
* **Macrotasks with the same delay** (0ms) execute in the order they were scheduled.
* The nested `setTimeout(..., 10)` scheduled inside the Promise resolves only after all preceding tasks are done.

</details>


## 8. What is the output?

Good job! You've got the correct sequence. Let's break down the execution step-by-step to confirm why the output is in this order.

Here’s the code again:

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 10);

new Promise((resolve) => {
  console.log("D");
  resolve();
}).then(() => {
  console.log("E");
  setTimeout(() => console.log("F"), 0);
});

Promise.resolve().then(() => {
  console.log("G");
});

setTimeout(() => {
  console.log("H");
  new Promise((resolve) => {
    console.log("I");
    resolve();
  }).then(() => console.log("J"));
}, 5);

console.log("K");

Promise.resolve().then(() => {
  console.log("L");
  new Promise((resolve) => {
    console.log("M");
    resolve();
  }).then(() => console.log("N"));
});

setTimeout(() => console.log("O"), 0);

console.log("P");
```

<details>
  <summary> Output </summary>

### A, D, K, P, G, E, L, M, N, O, F, H, I, J, B, C

</details>

<details>

  <summary> Explaination </summary>

### Step-by-Step Execution:

1. **Synchronous Code**:

   * `console.log("A");` → **"A"** is logged.
   * `new Promise((resolve) => { console.log("D"); resolve(); })`:

     * **"D"** is logged immediately as part of the synchronous part of the `new Promise` executor function.
     * The promise is resolved, and `.then(() => console.log("E"))` is scheduled as a microtask.
   * `console.log("K");` → **"K"** is logged.
   * `console.log("P");` → **"P"** is logged.

2. **Microtasks (Promises)**:

   * `Promise.resolve().then(() => console.log("G"));` → **"G"** is logged.
   * The `.then(() => console.log("E"))` from the `new Promise` that logged "D" runs:

     * **"E"** is logged.
     * Inside this `.then`, `setTimeout(() => console.log("F"), 0);` is scheduled as a macrotask with 0ms delay.
   * `Promise.resolve().then(() => { console.log("L"); ... });`:

     * **"L"** is logged.
     * Inside it, `new Promise((resolve) => { console.log("M"); resolve(); })` runs immediately as part of the synchronous part of the executor function:

       * **"M"** is logged.
       * The `.then(() => console.log("N"))` for this promise is scheduled as a microtask, which runs immediately after → **"N"** is logged.

3. **Macrotasks (setTimeout callbacks)**:

   * `setTimeout(() => console.log("O"), 0);` → **"O"** is logged.
   * The `setTimeout(() => console.log("F"), 0);` scheduled in the `.then` of "E" runs next → **"F"** is logged.
   * `setTimeout(() => { console.log("H"); ... }, 5);` runs after 5ms:

     * **"H"** is logged.
     * Inside it, `new Promise((resolve) => { console.log("I"); resolve(); })` runs immediately:

       * **"I"** is logged.
       * The `.then(() => console.log("J"))` for this promise is scheduled as a microtask, which runs immediately after this macrotask → **"J"** is logged.
   * Finally, `setTimeout(() => { console.log("B"); ... }, 10);`:

     * **"B"** is logged.
     * Inside it, `Promise.resolve().then(() => console.log("C"));` is scheduled as a microtask, which runs immediately after this macrotask → **"C"** is logged.

### Final Output Sequence:

```
A, D, K, P, G, E, L, M, N, O, F, H, I, J, B, C
```

</details>