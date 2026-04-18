# JavaScript Interview Question Bank – Detailed Questions & Answers

# 1. What is Hoisting?

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
* `let` and `const` are hoisted but remain in Temporal Dead Zone
* Function declarations are fully hoisted

```js
sayHello();

function sayHello() {
  console.log('Hello');
}
```

---

# 2. Difference between var, let and const

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

# 3. What is a Regular Expression?

A Regular Expression (Regex) is a pattern used to match text.

```js
const regex = /^[A-Z][a-z]+$/;
console.log(regex.test('Pratik')); // true
```

Common patterns:

* `\d` → digit
* `\w` → word character
* `+` → one or more
* `*` → zero or more
* `^` → starts with
* `$` → ends with

Example:

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

# 4. What is Promise.resolve()?

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

# 5. Explain async and await

`async` makes a function return a promise.
`await` pauses execution until promise resolves.

```js
async function fetchData() {
  const result = await Promise.resolve('Done');
  console.log(result);
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

# 6. What are Callbacks and Callback Hell?

A callback is a function passed into another function.

```js
setTimeout(() => {
  console.log('Executed');
}, 1000);
```

Callback Hell:

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

# 7. What is Debounce and Throttle?

## Debounce

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

## Throttle

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

# 8. Explain Event Bubbling and Event Capturing

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

# 9. What is Closure?

A closure is a function that remembers variables from its outer scope even after outer function is executed.

```js
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Use cases:

* Data hiding
* Memoization
* Currying

---

# 10. What are First Class Functions?

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

# 11. Explain Event Loop

JavaScript is single-threaded but can handle asynchronous operations using Event Loop.

Flow:

1. Call Stack
2. Web APIs
3. Callback Queue / Microtask Queue
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

# 12. What is Callback Queue?

Callback Queue stores asynchronous callbacks like `setTimeout`.

```js
setTimeout(() => console.log('Hi'), 1000);
```

After timer completes, callback goes to queue.

---

# 13. What is Event Delegation?

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

# 14. What is Currying?

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

# 15. What are Microtasks?

Microtasks have higher priority than callback queue.

Examples:

* Promise.then
* queueMicrotask
* MutationObserver

```js
Promise.resolve().then(() => console.log('microtask'));
```

---

# 16. What is Prototype?

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

# 17. Difference between bind, call and apply

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

# 18. Difference between Shallow Copy and Deep Copy

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

# 19. What is Encapsulation?

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

# 20. How to Compare Two Objects?

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

# 21. Pass by Value vs Pass by Reference

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

# 22. Prototype Inheritance vs Classical Inheritance

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

# 23. What is Memoization?

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

# 24. Static Method vs Instance Method

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

# 25. What is `this` Keyword?

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

# 26. What is Type Coercion?

Automatic conversion of one type to another.

```js
'5' + 2 // '52'
'5' - 2 // 3
```

---

# 27. What is an IIFE?

Immediately Invoked Function Expression.

```js
(function () {
  console.log('Executed');
})();
```

Used to create private scope.

---

# 28. What is an Anonymous Function?

Function without name.

```js
const greet = function () {
  console.log('Hi');
};
```

---

# 29. What are Higher Order Functions?

A function that takes another function as argument or returns function.

```js
arr.map(item => item * 2);
```

Examples:

* map
* filter
* reduce

---

# 30. What is Constructor and super?

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

# 31. Arrow Function vs Normal Function

| Arrow Function        | Normal Function    |
| --------------------- | ------------------ |
| No own `this`         | Has own `this`     |
| Cannot be constructor | Can be constructor |
| Short syntax          | Longer syntax      |

---

# 32. Difference between DOM and BOM

DOM → Document Object Model
BOM → Browser Object Model

Examples:

* DOM: `document.getElementById()`
* BOM: `window.location`, `navigator`

---

# 33. Rest vs Spread Operator

Rest collects values.

```js
function sum(...nums) {}
```

Spread expands values.

```js
const arr2 = [...arr1];
```

---

# 34. What is Generator Function?

```js
function* generator() {
  yield 1;
  yield 2;
}
```

Generators pause execution using `yield`.

---

# 35. Difference between Set and WeakSet

| Set              | WeakSet             |
| ---------------- | ------------------- |
| Stores any value | Stores objects only |
| Iterable         | Not iterable        |

---

# 36. Difference between Map and WeakMap

| Map          | WeakMap          |
| ------------ | ---------------- |
| Any key type | Only object keys |
| Iterable     | Not iterable     |

---

# 37. What is Temporal Dead Zone?

TDZ is the period between variable declaration hoisting and initialization.

```js
console.log(a);
let a = 10;
```

Throws ReferenceError.

---

# 38. What are Design Patterns in JavaScript?

Common patterns:

* Module Pattern
* Singleton Pattern
* Observer Pattern
* Factory Pattern

---

# 39. Difference between defer, async and script tag

| Attribute | Behavior                             |
| --------- | ------------------------------------ |
| Normal    | Blocks HTML parsing                  |
| async     | Loads parallel, executes immediately |
| defer     | Loads parallel, executes after HTML  |

```html
<script src="app.js" defer></script>
```

---

# 40. What is Window Object?

Global object in browser.

```js
window.alert('Hello');
```

---

# 41. What is Strict Mode?

```js
'use strict';
```

Benefits:

* Prevents accidental globals
* Throws more errors

---

# 42. What are Typed Arrays?

Typed arrays allow handling binary data efficiently.

```js
const arr = new Uint8Array([1, 2, 3]);
```

---

# 43. Difference between Java and JavaScript

| Java           | JavaScript         |
| -------------- | ------------------ |
| Compiled       | Interpreted        |
| Strongly typed | Dynamically typed  |
| OOP language   | Scripting language |

---

# 44. What is delete operator?

```js
const obj = { a: 1 };
delete obj.a;
```

Deletes property from object.

---

# 45. Difference between slice and splice

| slice                    | splice             |
| ------------------------ | ------------------ |
| Does not modify original | Modifies original  |
| Returns copied portion   | Adds/removes items |

---

# 46. Difference between ES5 and ES6

ES6 introduced:

* let/const
* Arrow functions
* Classes
* Template literals
* Modules
* Promises

---

# 47. Compile Time Error vs Runtime Error

Compile time:

```js
console.log(a;
```

Runtime:

```js
console.log(x.y);
```

---

# 48. Difference between setTimeout and setInterval

`setTimeout` runs once.

`setInterval` runs repeatedly.

---

# 49. What is Execution Context?

JavaScript creates:

* Global Execution Context
* Function Execution Context

Each contains:

* Variable Environment
* Scope Chain
* `this`

---

# 50. Strongly Typed vs Loosely Typed

JavaScript is loosely typed.

```js
let a = 10;
a = 'hello';
```

---

# 51. Difference between Object and Array

| Object         | Array              |
| -------------- | ------------------ |
| Key-value pair | Indexed collection |

---

# 52. sort() with and without compare function

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

# 53. What is localeCompare()?

```js
'a'.localeCompare('b');
```

Used for string comparison.

---

# 54. What are Interceptors?

Interceptors modify request or response before handling.

Mostly used in Axios.

```js
axios.interceptors.request.use(config => config);
```

---

# 55. Difference between undefined and null

| undefined             | null                    |
| --------------------- | ----------------------- |
| Variable not assigned | Intentional empty value |

```js
let a;
let b = null;
```

---

# 56. What are Polyfills?

Polyfills provide support for modern features in old browsers.

Example:

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function () {};
}
```

---

# 57. What is Axios?

Axios is a promise-based HTTP client.

```js
axios.get('/users')
  .then(res => console.log(res.data));
```

---

# 58. What are Implicit Global Variables?

```js
function test() {
  name = 'John';
}
```

Without `var/let/const`, variable becomes global.

---

# 59. Why does `typeof null` return `object`?

```js
typeof null // 'object'
```

This is a historical bug in JavaScript.

---

# 60. What is Nullish Coalescing Operator?

```js
const value = input ?? 'default';
```

Returns right side only if left side is `null` or `undefined`.

---

# 61. What are preventDefault() and stopPropagation()?

```js
e.preventDefault();
e.stopPropagation();
```

* `preventDefault()` stops default browser action
* `stopPropagation()` stops bubbling

---

# 62. Difference between for...of and for...in

| for...of        | for...in      |
| --------------- | ------------- |
| Iterates values | Iterates keys |

```js
for (const value of arr) {}
for (const key in obj) {}
```

---

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
