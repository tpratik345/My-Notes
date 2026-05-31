## 1. What is the output?

```js
setTimeout(() => console.log(1))
Promise.resolve().then(() => console.log(2));
Promise.resolve().then(() => setTimeout(() => console.log(3)));
new Promise(() => console.log(4));
setTimeout(() => console.log(5));
```

<details>
  <summary>Answer</summary>

### 4 2 1 5 3

</details>

<details>
  <summary>Explaination</summary>

  Explanation:
```js
    setTimeout(() => console.log(1))          // Line A
    Promise.resolve().then(() => console.log(2)); // Line B
    Promise.resolve().then(() => setTimeout(() => console.log(3))); // Line C
    new Promise(() => console.log(4));        // Line D
    setTimeout(() => console.log(5));         // Line E
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
