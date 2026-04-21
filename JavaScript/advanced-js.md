## 1 — Explain the event loop with an example that shows ordering of `console.log` calls between `setTimeout`, `Promise`, and immediate code.

Answer: Immediate synchronous code runs first. Then `microtasks` (Promise callbacks) run, then `macrotasks` (timers).

Example:
```js
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
// Output order: A, D, C, B
```

Explanation: A and D are sync. Promise then is microtask executed after current stack but before macrotasks. setTimeout callback is macrotask.

---

## 2 — Implement a function `deepClone(obj)` handling arrays, objects, Dates, RegExp, and circular references. (Explain approach.) (IMP)

### To deeply clone an object, we need to:
1. Return primitive values directly (`number`, `string`, `boolean`, `null`, `undefined`, etc.)
2. Handle special object types like:
  - Arrays
  - Plain Objects
  - Date
  - RegExp
3. Detect and preserve circular references

The easiest way to handle circular references is by using a WeakMap.

### Approach Explained:
* WeakMap stores original object → cloned object mapping.
* Before cloning an object, check if it already exists in WeakMap.
  - If yes, return the already-created clone.
  - This prevents infinite recursion in circular references.
* Arrays and objects are cloned recursively.
* Date is recreated using its timestamp.
* RegExp is recreated using its source and flags.

```js
function deepClone(obj, seen = new WeakMap()) {
  // Handle primitives and functions
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const clonedArr = [];
    seen.set(obj, clonedArr);

    for (let i = 0; i < obj.length; i++) {
      clonedArr[i] = deepClone(obj[i], seen);
    }

    return clonedArr;
  }

  // Handle Object
  const clonedObj = {};
  seen.set(obj, clonedObj);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key], seen);
    }
  }

  return clonedObj;
}
```

```js
const original = {
  name: "Pratik",
  age: 27,
  hobbies: ["coding", "gaming"],
  createdAt: new Date(),
  pattern: /hello/gi
};

// Circular reference
original.self = original;

const copy = deepClone(original);

console.log(copy);
console.log(copy !== original); // true
console.log(copy.hobbies !== original.hobbies); // true
console.log(copy.createdAt instanceof Date); // true
console.log(copy.pattern instanceof RegExp); // true
console.log(copy.self === copy); // true
```

Time Complexity: `O(n)` where n is the number of nested properties/elements.

Space Complexity: `O(n)` because of recursion stack + WeakMap.


### In the above code can we use `Map` instead of `WeakMap`?

Yes, but difference is memory behavior:
* `Map` keeps strong references to its keys.
* Even after cloning is finished, if that `Map` is still reachable, the original objects cannot be garbage collected.
* `WeakMap` allows those objects to be garbage collected automatically once nothing else references them.

With `Map`:
```js
let obj = { a: 1 };

const map = new Map();
map.set(obj, "cloned");

obj = null;

// The original object is still kept alive inside map
```

With `WeakMap`:
```js
let obj = { a: 1 };

const weakMap = new WeakMap();
weakMap.set(obj, "cloned");

obj = null;

// Now the original object can be garbage collected
```

### Usecase:
  * Use `Map` if you just need correctness and don't care about temporary memory retention.
  * Use `WeakMap` when tracking objects temporarily (like deep clone), because it is safer and avoids memory leaks.

---

## 3 — How do you implement `debounce`? Provide code and explain edge cases (immediate invocation, trailing calls).

Answer:

`debounce` delays function execution until a certain amount of time has passed since the last call.

```js
function debounce(fn, wait, immediate = false) {
  let timer;
  return function(...args) {
    const ctx = this;
    clearTimeout(timer);
    if (immediate && !timer) {
      fn.apply(ctx, args);
    }
    timer = setTimeout(() => {
      if (!immediate) fn.apply(ctx, args);
      timer = null;
    }, wait);
  };
}
```

Explanation: immediate controls leading-edge invocation. Clearing previous timer ensures only last call within interval runs.

### How to cancel a pending debounce?

```js
function debounce(fn, delay) {
  let timer;

  function debounced(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

const search = debounce(() => {
  console.log("Searching...");
}, 500);

search();
search.cancel();
```
No execution happens because the pending timer is removed.

---

## 4 — What is prototypal inheritance? Show how to create inheritance without class.

Answer:
```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.greet = function(){ return `Hi ${this.name}`; };

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const c = new Child('A', 10);
console.log(c.greet());
```

Explanation: `Object.create` sets prototype chain; Parent.call(this, ...) sets instance properties.

---

## 5 — Explain why typeof `null === 'object'` and how to reliably check for null.

Answer: It's a historical bug left for backward compatibility: null is a primitive but typeof null returns 'object'. Use value === null to check consistently.

---

## 6 — How to avoid race conditions when using async functions that update shared state (e.g., multiple fetches updating UI)?

Answer: Use techniques like tracking request tokens (only apply results for latest token), abort controllers (AbortController), or serialize operations. Example: increment a requestId and only apply result if requestId === currentRequestId.

---

## 7 — Explain `this` in JS with examples for method call, function call, constructor, arrow function, and bind.

Answer:

* Method call: obj.fn() — `this` is obj.
* Function call: fn() in strict mode `this` is undefined, else window.
* Constructor: new Fn() — `this` is the new object.
* Arrow function: `this` lexical from outer scope.
* bind: returns function with `this` permanently set.

Example snippet and caveat: const f = obj.fn; f(); loses `this` — use bind or arrow.

---

## 8 — Optimize a function that does heavy CPU work in the browser without blocking UI. What options exist?

Answer: Offload CPU work to Web Workers to avoid blocking main thread. Other strategies: break the work into chunks with setTimeout/requestIdleCallback, use WebAssembly for compute-heavy tasks, or optimize algorithmic complexity.

---

## 9 - How Garbage Collection works in JavaScript

Garbage Collection in JavaScript is the process of automatically freeing memory that is no longer being used.

Example:
```js
let user = {
  name: "Pratik"
}

user = null;
```
The object is stored in memory, and the variable user points to it.
After setting user to null, there is no longer any reference to that object, so the garbage collector can remove it.


### Mark-and-Sweep Algorithm
Most JavaScript engines use the Mark-and-Sweep algorithm.

Steps:
  * Start from root references
    - global variables
    - current function variables
  * Mark everything reachable
  * Remove everything unmarked

```js
let a = { name: "A" };
let b = { name: "B" };

a.friend = b;
b.friend = a;

a = null;
b = null;
```

Even though the two objects reference each other, neither is reachable anymore from any root variable.
So both are removed.

```js
No root --> A <--> B
```

Even if there are Circular References it is not a Problem
```js
let obj = {};
obj.self = obj;

obj = null;
```
Even though `obj.self` points back to itself, the object is unreachable from any root variable, so it is collected.

### Why `Map` Can Cause Memory Leaks

```js
let obj = { a: 1 };

const map = new Map();
map.set(obj, "value");

obj = null;
```
The object is still stored as a key in the `Map`, so it remains reachable.
```js
map --> key(obj)
```
Therefore it cannot be garbage collected.

### Why `WeakMap` Helps

```js
let obj = { a: 1 };

const weakMap = new WeakMap();
weakMap.set(obj, "value");

obj = null;
```
A `WeakMap` does not keep a strong reference to the object.

Once `obj = null`, the object can be garbage collected.

That is why `WeakMap` is often used in:
  * Deep clone implementations
  * Caching
  * Private object metadata


### Common Memory Leak Examples

1. Forgotten Event Listeners
  ```js
  button.addEventListener("click", handler);
  ```
  If the button is removed from the page but the listener still exists, memory may stay allocated.

2. Timers
  ```js
  setInterval(() => {
    console.log("running");
  }, 1000);
  ```
  If never cleared, the callback and related variables remain in memory.

  Use:

  ```js
  clearInterval(id);
  ```

3. Closures Holding Large Data
  ```js
  function create() {
    const hugeArray = new Array(1000000).fill("*");

    return function () {
      console.log(hugeArray.length);
    };
  }
  ```
  The inner function keeps hugeArray alive because it closes over it.

### Generational Garbage Collection
Modern engines optimize further using generations:
  * Young generation → newly created objects
  * Old generation → objects that survive for a long time

Most objects die quickly, so engines collect the young generation more often for better performance.

This is one reason JavaScript memory management is fast in engines like V8.

