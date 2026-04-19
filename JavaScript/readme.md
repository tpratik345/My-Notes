# JavaScript Interview Question Bank – Detailed Questions & Answers


## JavaScript Interview Question Bank – Index

| #  | Question                                                                                             |
| -- | ---------------------------------------------------------------------------------------------------- |
| 1  | [What is Hoisting?](#1-what-is-hoisting)                                                             |
| 2  | [Difference between var, let and const](#2-difference-between-var-let-and-const)                     |
| 3  | [What is a Regular Expression?](#3-what-is-a-regular-expression)                                     |
| 4  | [What is Promise?](#4-what-is-promise)                                                               |
| 5  | [Explain async and await](#5-explain-async-and-await)                                                |
| 6  | [What are Callbacks and Callback Hell?](#6-what-are-callbacks-and-callback-hell)                     |
| 7  | [What is Debounce and Throttle?](#7-what-is-debounce-and-throttle)                                   |
| 8  | [Explain Event Bubbling and Event Capturing](#8-explain-event-bubbling-and-event-capturing)          |
| 9  | [What is Closure?](#9-what-is-closure)                                                               |
| 10 | [What are First Class Functions?](#10-what-are-first-class-functions)                                |
| 11 | [Explain Event Loop](#11-explain-event-loop)                                                         |
| 12 | [What is Callback Queue?](#12-what-is-callback-queue)                                                |
| 13 | [What is Event Delegation?](#13-what-is-event-delegation)                                            |
| 14 | [What is Currying?](#14-what-is-currying)                                                            |
| 15 | [What are Microtasks?](#15-what-are-microtasks)                                                      |
| 16 | [What is Prototype?](#16-what-is-prototype)                                                          |
| 17 | [Difference between bind, call and apply](#17-difference-between-bind-call-and-apply)                |
| 18 | [Difference between Shallow Copy and Deep Copy](#18-difference-between-shallow-copy-and-deep-copy)   |
| 19 | [What is Encapsulation?](#19-what-is-encapsulation)                                                  |
| 20 | [How to Compare Two Objects?](#20-how-to-compare-two-objects)                                        |
| 21 | [Pass by Value vs Pass by Reference](#21-pass-by-value-vs-pass-by-reference)                         |
| 22 | [Prototype Inheritance vs Classical Inheritance](#22-prototype-inheritance-vs-classical-inheritance) |
| 23 | [What is Memoization?](#23-what-is-memoization)                                                      |
| 24 | [Static Method vs Instance Method](#24-static-method-vs-instance-method)                             |
| 25 | [What is `this` Keyword?](#25-what-is-this-keyword)                                                  |
| 26 | [What is Type Coercion?](#26-what-is-type-coercion)                                                  |
| 27 | [What is an IIFE?](#27-what-is-an-iife)                                                              |
| 28 | [What is an Anonymous Function?](#28-what-is-an-anonymous-function)                                  |
| 29 | [What are Higher Order Functions?](#29-what-are-higher-order-functions)                              |
| 30 | [What is Constructor and super?](#30-what-is-constructor-and-super)                                  |
| 31 | [Arrow Function vs Normal Function](#31-arrow-function-vs-normal-function)                           |
| 32 | [Difference between DOM and BOM](#32-difference-between-dom-and-bom)                                 |
| 33 | [Rest vs Spread Operator](#33-rest-vs-spread-operator)                                               |
| 34 | [What is Generator Function?](#34-what-is-generator-function)                                        |
| 35 | [Difference between Set and WeakSet](#35-difference-between-set-and-weakset)                         |
| 36 | [Difference between Map and WeakMap](#36-difference-between-map-and-weakmap)                         |
| 37 | [What is Temporal Dead Zone?](#37-what-is-temporal-dead-zone)                                        |
| 38 | [What are Design Patterns in JavaScript?](#38-what-are-design-patterns-in-javascript)                |
| 39 | [Difference between defer, async and script tag](#39-difference-between-defer-async-and-script-tag)  |
| 40 | [What is Window Object?](#40-what-is-window-object)                                                  |
| 41 | [What is Strict Mode?](#41-what-is-strict-mode)                                                      |
| 42 | [What are Typed Arrays?](#42-what-are-typed-arrays)                                                  |
| 43 | [Difference between Java and JavaScript](#43-difference-between-java-and-javascript)                 |
| 44 | [What is delete operator?](#44-what-is-delete-operator)                                              |
| 45 | [Difference between slice and splice](#45-difference-between-slice-and-splice)                       |
| 46 | [Difference between ES5 and ES6](#46-difference-between-es5-and-es6)                                 |
| 47 | [Compile Time Error vs Runtime Error](#47-compile-time-error-vs-runtime-error)                       |
| 48 | [Difference between setTimeout and setInterval](#48-difference-between-settimeout-and-setinterval)   |
| 49 | [What is Execution Context?](#49-what-is-execution-context)                                          |
| 50 | [Strongly Typed vs Loosely Typed](#50-strongly-typed-vs-loosely-typed)                               |
| 51 | [Difference between Object and Array](#51-difference-between-object-and-array)                       |
| 52 | [sort() with and without compare function](#52-sort-with-and-without-compare-function)               |
| 53 | [What is localeCompare()?](#53-what-is-localecompare)                                                |
| 54 | [What are Interceptors?](#54-what-are-interceptors)                                                  |
| 55 | [Difference between undefined and null](#55-difference-between-undefined-and-null)                   |
| 56 | [What are Polyfills?](#56-what-are-polyfills)                                                        |
| 57 | [What is Axios?](#57-what-is-axios)                                                                  |
| 58 | [What are Implicit Global Variables?](#58-what-are-implicit-global-variables)                        |
| 59 | [Why does `typeof null` return `object`?](#59-why-does-typeof-null-return-object)                    |
| 60 | [What is Nullish Coalescing Operator?](#60-what-is-nullish-coalescing-operator)                      |
| 61 | [What are preventDefault() and stopPropagation()?](#61-what-are-preventdefault-and-stoppropagation)  |
| 62 | [Difference between for...of and for...in](#62-difference-between-forof-and-forin)                   |
| 63 | [What is AbortController?](#63-what-is-abortController)                                              |

## 1. What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

```js
console.log(a); // undefined
var a = 10;
```

Internally JavaScript treats it as:

```js
var a;
console.log(a);
a = 10;
```

* `var` is hoisted and initialized with `undefined`
* `let` and `const` are hoisted but remain in `Temporal Dead Zone`
* Function declarations are fully hoisted

```js
console.log(a); // ReferenceError
. //TDZ
. //TDZ
. //TDZ
. //TDZ
let a = 10;
```

```js
sayHello();

function sayHello() {
  console.log('Hello'); // Hello
}
```

---

## 2. Difference between var, let and const

| Feature    | var      | let   | const |
| ---------- | -------- | ----- | ----- |
| Scope      | Function | Block | Block |
| Re-declare | Yes      | No    | No    |
| Re-assign  | Yes      | Yes   | No    |
| Hoisted    | Yes      | Yes   | Yes   |
| TDZ        | No       | Yes   | Yes   |

```js
var a = 1;
let b = 2;
const c = 3;
```

`const` does not make objects immutable.

```js
const user = { name: 'John' };
user.name = 'Sam'; // allowed
```

---

## 3. What is a Regular Expression?

A Regular Expression (Regex) is a pattern used to match text.

```js
const regex = /^[A-Z][a-z]+$/;
console.log(regex.test('Pratik')); // true
```

Common patterns:

* `\d` → digit
* `\D` → non-digit
* `\w` → word character
* `\W` → non-word character
* `\s` → white spaces
* `\S` → non-white spaces
* `+` → one or more
* `*` → zero or more
* `^` → starts with
* `$` → ends with

Example:

```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

---

## 4. What is Promise()?

* The Promise is an object represents the eventual completion or failure of an asynchronous operation and its resulting value.
* Promises have three states - `pending`, `fulfilled`, and `rejected`.
* When you create a Promise, you pass an executor function that receives two parameters: `resolve` and `reject`
* Calling resolve fulfills the Promise with a value, while reject signals an error or failure.
* You handle them using .then() for success and .catch() for errors.
* .finally() runs regardless of the outcome.
* Promises help avoid callback hell by flattening asynchronous code.

For example:
```js
fetch('/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

Misc:
`Promise.resolve()` returns a promise that is already resolved.

```js
Promise.resolve(100)
  .then(value => console.log(value));
```

Output:

```js
100
```

Useful when you want to convert a value into a promise.

---

## 5. Explain async and await

`async` makes a function return a promise.
`await` pauses execution until promise resolves. (blocks the code until promise is Resolved or Rejected)

```js
async function getData() {
  try {
    const res = await fetch('/data');
    const data = await res.json();
    console.log(data); // data will be logged only after reolving above promise
  } catch (err) {
    console.error(err);
  }
}
```

Equivalent promise version:

```js
function fetchData() {
  return Promise.resolve('Done')
    .then(result => console.log(result));
}
```

---

## 6. What are Callbacks and Callback Hell?

A callback is a function passed as arguments to other functions.

```js
setTimeout(() => {
  console.log('Executed');
}, 1000);
```

Callback Hell:
The problem with callbacks arises when multiple asynchronous operations depend on each other, causing deeply nested structures — what we call callback hell.

```js
login(user, function() {
  getProfile(function() {
    getPosts(function() {
      console.log('Done');
    });
  });
});
```

Problems:
* Difficult to read
* Difficult to debug
* Hard to maintain

Use Promises or async/await to solve it.

---

## 7. What is Debounce and Throttle?

### Debounce

Executes function only after user stops triggering it.

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

Use case:
* Search input
* Resize event

### Throttle

Executes function only once in given interval.

```js
function throttle(fn, limit) {
  let flag = true;

  return function (...args) {
    if (!flag) return;

    fn.apply(this, args);
    flag = false;

    setTimeout(() => {
      flag = true;
    }, limit);
  };
}
```

Use case:
* Scroll event
* Mouse movement

---

## 8. Explain Event Bubbling and Event Capturing

Event Bubbling: Event moves from child to parent.

Event Capturing: Event moves from parent to child.

```js
parent.addEventListener('click', () => console.log('parent'));
child.addEventListener('click', () => console.log('child'));
```

Default behavior is bubbling.

To enable capturing:

```js
parent.addEventListener('click', handler, true);
```

---

## 9. What is Closure?

A closure is a function that remembers variables from its outer scope even after outer function is executed.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

Use cases:

* Data hiding
* Memoization
* Currying

---

## 10. What are First Class Functions?

Functions are first class citizens in JavaScript.

That means functions can:

* Be assigned to variable
* Be passed as argument
* Be returned from another function

```js
const greet = function () {
  return 'Hello';
};
```

---

## 11. Explain Event Loop

JavaScript is single-threaded but can handle asynchronous operations using Event Loop.

At a high level, the JavaScript runtime has a call stack, a heap, and two important queues — the macro task queue and the microtask queue.

The event loop’s job is to constantly check whether the call stack is empty; if it is, it takes the next task from the queue based on priority and pushes it onto the stack for execution.

Microtasks, like Promises and queueMicrotask, have higher priority — they run right after the current stack completes, before the next macrotask (like setTimeout).

Flow:

1. Call Stack
2. Web APIs
3. Callback Queue (low prio) / Microtask Queue (high prio)
4. Event Loop

```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

Output:

```js
Start
End
Promise
Timeout
```

Because microtasks execute before callback queue.

---

## 12. What is Callback Queue?

Callback Queue stores asynchronous callbacks like `setTimeout`.

```js
setTimeout(() => console.log('Hi'), 1000);
```

After timer completes, callback goes to queue.

---

## 13. What is Event Delegation?

Event Delegation attaches event listener to parent instead of children.

```js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});
```

Benefits:

* Better performance
* Works for dynamically added elements

---

## 14. What is Currying?

Currying converts a function with multiple arguments into multiple functions with one argument.

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5
```

---

## 15. What are Microtasks?

Microtasks have higher priority than callback queue.

Examples:

* Promise.then
* queueMicrotask
* MutationObserver

```js
Promise.resolve().then(() => console.log('microtask'));
```

---

## 16. What is Prototype?

Every JavaScript object has a hidden property called prototype.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log('Hi');
};
```

---

## 17. Difference between bind, call and apply

| Method | Executes Immediately | Arguments       |
| ------ | -------------------- | --------------- |
| call   | Yes                  | Comma separated |
| apply  | Yes                  | Array           |
| bind   | No                   | Comma separated |

```js
function greet(city) {
  console.log(this.name, city);
}

greet.call({ name: 'John' }, 'Pune');
greet.apply({ name: 'John' }, ['Pune']);
const fn = greet.bind({ name: 'John' }, 'Pune');
```

---

## 18. Difference between Shallow Copy and Deep Copy

Shallow copy copies only first level.

```js
const obj = { a: 1, b: { c: 2 } };
const copy = { ...obj };
```

Changing nested object affects original.

Deep copy copies all nested levels.

```js
const deep = structuredClone(obj);
```

---

## 19. What is Encapsulation?

Encapsulation means hiding data and exposing only necessary methods.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }
}
```

---

## 20. How to Compare Two Objects?

Wrong:

```js
{} === {}
```

Returns false because objects compare by reference.

Correct ways:

```js
JSON.stringify(obj1) === JSON.stringify(obj2)
```

or use deep comparison function.

---

## 21. Pass by Value vs Pass by Reference

| Primitive     | Object            |
| ------------- | ----------------- |
| Pass by value | Pass by reference |

```js
let a = 10;
let b = a;
b = 20;
```

`a` remains 10.

Objects:

```js
const obj1 = { x: 1 };
const obj2 = obj1;
obj2.x = 5;
```

Now both have `x = 5`.

---

## 22. Prototype Inheritance vs Classical Inheritance

JavaScript uses prototype inheritance.

```js
const parent = {
  greet() {
    console.log('Hello');
  }
};

const child = Object.create(parent);
```

Classical inheritance is used in Java/C++.

---

## 23. What is Memoization?

Memoization stores previous function result.

```js
function memoizedAdd() {
  const cache = {};

  return function (num) {
    if (cache[num]) return cache[num];

    cache[num] = num + 10;
    return cache[num];
  };
}
```

---

## 24. Static Method vs Instance Method

```js
class User {
  static company() {
    return 'Google';
  }

  greet() {
    return 'Hello';
  }
}
```

* Static method → called on class
* Instance method → called on object

---

## 25. What is `this` Keyword?

`this` refers to current execution context.

```js
const obj = {
  name: 'Pratik',
  show() {
    console.log(this.name);
  }
};
```

Arrow functions do not have their own `this`.

---

## 26. What is Type Coercion?

Automatic conversion of one type to another.

```js
'5' + 2 // '52'
'5' - 2 // 3
```

---

## 27. What is an IIFE?

Immediately Invoked Function Expression.

```js
(function () {
  console.log('Executed');
})();
```

Used to create private scope.

---

## 28. What is an Anonymous Function?

Function without name.

```js
const greet = function () {
  console.log('Hi');
};
```

---

## 29. What are Higher Order Functions?

A function that takes another function as argument or returns function.

```js
arr.map(item => item * 2);
```

Examples:

* map
* filter
* reduce

---

## 30. What is Constructor and super?

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```

`super()` calls parent constructor.

---

## 31. Arrow Function vs Normal Function

| Arrow Function        | Normal Function    |
| --------------------- | ------------------ |
| No own `this`         | Has own `this`     |
| Cannot be constructor | Can be constructor |
| Short syntax          | Longer syntax      |

---

## 32. Difference between DOM and BOM

DOM → Document Object Model
BOM → Browser Object Model

Examples:

* DOM: `document.getElementById()`
* BOM: `window.location`, `navigator`

---

## 33. Rest vs Spread Operator

Rest collects values.

```js
function sum(...nums) {}
```

Spread expands values.

```js
const arr2 = [...arr1];
```

---

## 34. What is Generator Function?

```js
function* generator() {
  yield 1;
  yield 2;
}
```

Generators pause execution using `yield`.

---

## 35. Difference between Set and WeakSet

| Set              | WeakSet             |
| ---------------- | ------------------- |
| Stores any value | Stores objects only |
| Iterable         | Not iterable        |

---

## 36. Difference between Map and WeakMap

| Map          | WeakMap          |
| ------------ | ---------------- |
| Any key type | Only object keys |
| Iterable     | Not iterable     |

---

## 37. What is Temporal Dead Zone?

TDZ is the period between variable declaration hoisting and initialization.

```js
console.log(a);
let a = 10;
```

Throws ReferenceError.

---

## 38. What are Design Patterns in JavaScript?

Common patterns:

* Module Pattern
* Singleton Pattern
* Observer Pattern
* Factory Pattern

---

## 39. Difference between defer, async and script tag

| Attribute | Behavior                             |
| --------- | ------------------------------------ |
| Normal    | Blocks HTML parsing                  |
| async     | Loads parallel, executes immediately |
| defer     | Loads parallel, executes after HTML  |

```html
<script src="app.js" defer></script>
```

---

## 40. What is Window Object?

Global object in browser.

```js
window.alert('Hello');
```

---

## 41. What is Strict Mode?

```js
'use strict';
```

Benefits:

* Prevents accidental globals
* Throws more errors

---

## 42. What are Typed Arrays?

Typed arrays allow handling binary data efficiently.

```js
const arr = new Uint8Array([1, 2, 3]);
```

---

## 43. Difference between Java and JavaScript

| Java           | JavaScript         |
| -------------- | ------------------ |
| Compiled       | Interpreted        |
| Strongly typed | Dynamically typed  |
| OOP language   | Scripting language |

---

## 44. What is delete operator?

```js
const obj = { a: 1 };
delete obj.a;
```

Deletes property from object.

---

## 45. Difference between slice and splice

| slice                    | splice             |
| ------------------------ | ------------------ |
| Does not modify original | Modifies original  |
| Returns copied portion   | Adds/removes items |

---

## 46. Difference between ES5 and ES6

ES6 introduced:

* let/const
* Arrow functions
* Classes
* Template literals
* Modules
* Promises

---

## 47. Compile Time Error vs Runtime Error

Compile time:

```js
console.log(a;
```

Runtime:

```js
console.log(x.y);
```

---

## 48. Difference between setTimeout and setInterval

`setTimeout` runs once.

`setInterval` runs repeatedly.

---

## 49. What is Execution Context?

JavaScript creates:

* Global Execution Context
* Function Execution Context

Each contains:

* Variable Environment
* Scope Chain
* `this`

---

## 50. Strongly Typed vs Loosely Typed

JavaScript is loosely typed.

```js
let a = 10;
a = 'hello';
```

---

## 51. Difference between Object and Array

| Object         | Array              |
| -------------- | ------------------ |
| Key-value pair | Indexed collection |

---

## 52. sort() with and without compare function

```js
[10, 2, 5].sort();
```

Output:

```js
[10, 2, 5]
```

Because sort converts to string.

Correct:

```js
[10, 2, 5].sort((a, b) => a - b);
```

---

## 53. What is localeCompare()?

```js
'a'.localeCompare('b');
```

Used for string comparison.

---

## 54. What are Interceptors?

Interceptors modify request or response before handling.

Mostly used in Axios.

```js
axios.interceptors.request.use(config => config);
```

---

## 55. Difference between undefined and null

| undefined             | null                    |
| --------------------- | ----------------------- |
| Variable not assigned | Intentional empty value |

```js
let a;
let b = null;
```

---

## 56. What are Polyfills?

Polyfills provide support for modern features in old browsers.

Example:

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function () {};
}
```

---

## 57. What is Axios?

Axios is a promise-based HTTP client.

```js
axios.get('/users')
  .then(res => console.log(res.data));
```

---

## 58. What are Implicit Global Variables?

```js
function test() {
  name = 'John';
}
```

Without `var/let/const`, variable becomes global.

---

## 59. Why does `typeof null` return `object`?

```js
typeof null // 'object'
```

This is a historical bug in JavaScript.

---

## 60. What is Nullish Coalescing Operator?

```js
const value = input ?? 'default';
```

Returns right side only if left side is `null` or `undefined`.

---

## 61. What are preventDefault() and stopPropagation()?

```js
e.preventDefault();
e.stopPropagation();
```

* `preventDefault()` stops default browser action
* `stopPropagation()` stops bubbling

---

## 62. Difference between for...of and for...in

| for...of        | for...in      |
| --------------- | ------------- |
| Iterates values | Iterates keys |

```js
for (const value of arr) {}
for (const key in obj) {}
```

---

## 63. What is AbortController?

AbortController is a browser / Node.js API that lets you cancel operations by sending an "abort signal".

It works together with:
* fetch
* Streams
* Some libraries like `Axios`
* Your own `async` functions

Basic flow:
* Create an `AbortController`
* Pass `controller.signal` to the async operation
* Call `controller.abort()` when you want to stop it

Example: Cancel a fetch request
```js
  const controller = new AbortController();

  fetch("https://api.example.com/data", {signal: controller.signal})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err.name === "AbortError") {
        console.log("Request was cancelled");
      } else {
        console.error(err);
      }
    });

  // Cancel after 2 seconds
  setTimeout(() => {
    controller.abort();
  }, 2000);
```

Using AbortController with async/await
```js
  async function getData() {
    const controller = new AbortController();

    setTimeout(() => controller.abort(), 2000);

    try {
      const response = await fetch("https://api.example.com/users", {
        signal: controller.signal
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error(err);
      }
    }
  }
```

Cancelling Previous API Calls in React
This is common in search bars or autocomplete.
```jsx
  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/search?q=${searchTerm}`, {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => {
      controller.abort(); // cancel previous request
    };
  }, [searchTerm]);
```

# Frequently Asked Tricky Interview Questions

## What is output?

```js
console.log([] == ![]);
```

Output:

```js
true
```

Because:

```js
![] => false
[] == false
[] => ''
false => 0
'' == 0 => true
```

---

## What is output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```js
3
3
3
```

Because `var` is function scoped.

Using `let` gives:

```js
0
1
2
```

---

## What is output?

```js
console.log(typeof NaN);
```

Output:

```js
number
```

---

## What is output?

```js
console.log(0.1 + 0.2 === 0.3);
```

Output:

```js
false
```

Because of floating point precision.

---

# Bonus: Interview — 8 moderate→hard JS questions (with answers)

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

## 2 — Implement a function `deepClone(obj)` handling arrays, objects, Dates, RegExp, and circular references. (Explain approach.)

Answer (approach):
* Use recursion with a WeakMap to track visited objects to handle cycles.
* For built-ins, create appropriate clones (new Date, new RegExp).
* For arrays, clone each element. For plain objects, iterate own properties.
* Example sketch omitted for brevity; mention performance and edge cases (functions, prototype chain, symbols).

## 3 — How do you implement `debounce`? Provide code and explain edge cases (immediate invocation, trailing calls).

Answer:

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

## 5 — Explain why typeof `null === 'object'` and how to reliably check for null.

Answer: It's a historical bug left for backward compatibility: null is a primitive but typeof null returns 'object'. Use value === null to check consistently.

## 6 — How to avoid race conditions when using async functions that update shared state (e.g., multiple fetches updating UI)?

Answer: Use techniques like tracking request tokens (only apply results for latest token), abort controllers (AbortController), or serialize operations. Example: increment a requestId and only apply result if requestId === currentRequestId.

## 7 — Explain this in JS with examples for method call, function call, constructor, arrow function, and bind.

Answer:

* Method call: obj.fn() — this is obj.
* Function call: fn() in strict mode this is undefined, else window.
* Constructor: new Fn() — this is the new object.
* Arrow function: this lexical from outer scope.
* bind: returns function with this permanently set.

Example snippet and caveat: const f = obj.fn; f(); loses this — use bind or arrow.

## 8 — Optimize a function that does heavy CPU work in the browser without blocking UI. What options exist?

Answer: Offload CPU work to Web Workers to avoid blocking main thread. Other strategies: break the work into chunks with setTimeout/requestIdleCallback, use WebAssembly for compute-heavy tasks, or optimize algorithmic complexity.
