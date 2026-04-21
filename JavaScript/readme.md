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
| 13 | [What are Microtasks?](#13-what-are-microtasks)                                                      |
| 14 | [What is Event Delegation?](#14-what-is-event-delegation)                                            |
| 15 | [What is Currying?](#15-what-is-currying)                                                            |
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
| 51 | [What is Object.prototype?](#51-what-is-Object.prototype?)                                           |
| 52 | [sort() with and without compare function](#52-sort-with-and-without-compare-function)               |
| 53 | [What is localeCompare()?](#53-what-is-localecompare)                                                |
| 54 | [What is Axios Interceptors?](#54-what-is-axios-interceptors)                                                  |
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

Callback Queue stores asynchronous callbacks like `setTimeout`, `setInterval`, DOM events, and I/O callbacks.

```js
setTimeout(() => console.log('Hi'), 1000);
```

* When the call stack is empty, the event loop picks tasks from this queue in order and executes them.
* It’s important to contrast this with the microtask queue, which holds callbacks from Promises and mutation observers.
* For instance, a Promise.then will always execute before a timer callback with a 0 ms delay because microtasks have higher priority.

---

## 13. What are Microtasks?

Microtasks have higher priority than callback queue.

Examples:

* Promise.then
* queueMicrotask
* MutationObserver

```js
Promise.resolve().then(() => console.log('microtask'));
```

---

## 14. What is Event Delegation?

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

## 15. What is Currying?

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

## 16. What is Prototype?

Every JavaScript object has a hidden property (internal link) called prototype.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hi ${this.name}`;
};
const p = new Person('Alice');
p.greet(); // 'Hi Alice'
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
const obj1 = { a: 1, b: { c: 2 } };
const shallow = { ...obj1 };
shallow.b.c = 10;
console.log(obj1.b.c); // 10 (affected)
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
class Account {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
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
function modify(x) {
  x = 20;
}
modify(a);
console.log(a); // 10
```

`a` remains 10.

Objects:

```js
const obj = { n: 1 };
function update(o) {
  o.n = 2;
}
update(obj);
console.log(obj.n); // 2
```

Object's value changes to 2.

---

## 22. Prototype Inheritance vs Classical Inheritance

JavaScript uses prototype inheritance.

```js
const parent = {
  greet() {
    console.log('Hi');
  }
};
const child = Object.create(parent);
child.greet(); // Inherited
```

Classical inheritance is used in Java/C++.

---

## 23. What is Memoization?

Memoization is an optimization technique where you cache the results of expensive function calls so that when the same inputs occur again, the cached result is returned.

```js
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    const res = fn(n);
    cache[n] = res;
    return res;
  };
}
```

---

## 24. Static Method vs Instance Method

Instance methods are functions that operate on instance data.

Static methods belong to the class itself.

```js
class Car {
  constructor(brand) {
    this.brand = brand; // Instance property
  }

  // Instance Method
  start() {
    console.log(`${this.brand} is starting...`);
  }

  // Static Method
  static describe() {
    console.log("Cars are vehicles used for transport.");
  }
}

const myCar = new Car("Tesla");

myCar.start();      // "Tesla is starting..." (Instance method)
Car.describe();     // "Cars are vehicles..." (Static method)

// Errors:
// myCar.describe(); // TypeError: myCar.describe is not a function
// Car.start();      // TypeError: Car.start is not a function
```

* Static method → called on class
* Instance method → called on object

---

## 25. What is `this` Keyword?

`this` refers to current execution context.
The this keyword refers to the context in which a function is executed, not where it’s defined.

In global scope, this refers to the global object (window in browsers, global in Node).

Inside object methods, this refers to that object.

However, in a `normal function`, this depends on how the function is called, not where it’s written.

In strict mode, standalone functions get undefined as this.

`Arrow functions` are special — they don’t have their own this; instead, they inherit from their surrounding lexical scope.

```js
const obj = {
  name: 'JS',
  say: function() {
    setTimeout(() => console.log(this.name), 0);
  }
};
obj.say(); // "JS"
```

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

* IIFEs were used to create private scopes — variables defined inside couldn’t leak into the global scope.
* They’re also useful for initializing configurations or running setup logic once.
* In modern JavaScript, modules and block scopes with `let` and `const` reduce the need for `IIFEs`, but you may still see them in legacy code or minified scripts.

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

In ES6 classes, the `constructor` method initializes class instances.

If you extend another class, you must call `super()` before using this, as super() runs the parent class’s constructor.

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

* DOM: `document.getElementById()`, `document.querySelector`
* BOM: `window.location`, `navigator`, `location`, and `history`.

While DOM deals with the content of the page, BOM deals with the browser itself.
For example, changing the URL via `window.location` is a BOM operation.

---

## 33. Rest vs Spread Operator

Rest collects multiple arguments into an array:

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

Spread expands expands arrays or objects into individual elements:

```js
const arr = [1, 2, 3];
const clone = [...arr];
```

---

## 34. What is Generator Function?

Generators are special functions that can `pause` and `resume` execution.


```js
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next());
// Expected output: { value: 10, done: false }

console.log(gen.next());
// Expected output: { value: 20, done: false }

console.log(gen.next());
// Expected output: { value: undefined, done: true }
```

Generators pause execution using `yield`.
If a generor functions encounters a `return`, it considers it a end of function and ignores all values below it.

---

## 35. Difference between Set and WeakSet

| Set              | WeakSet             |
| ---------------- | ------------------- |
| Stores any value | Stores objects only |
| Iterable         | Not iterable        |

`Set` stores unique values of any type and maintains insertion order.

`WeakSet` is similar but only holds objects, and references are weak — meaning if no other references exist, the object is garbage-collected.

```js
const s = new Set([1, 2, 2]);
s.add(3); // {1, 2, 3}
```

---

## 36. Difference between Map and WeakMap

| Map          | WeakMap          |
| ------------ | ---------------- |
| Any key type | Only object keys |
| Iterable     | Not iterable     |

In JavaScript, `Map` is a key-value data structure that allows any type of key — unlike objects which only use strings or symbols.

It preserves insertion order and offers useful methods like `set`, `get`, `has`, and `delete`.

`Map` is faster for frequent insertions and deletions, making it better for caches or lookups.

`WeakMap` allows keys to be garbage-collected — great for private data storage meaning they do not prevent garbage collection of the objects used as keys

### Core Mechanism:
  * Weak References: In a standard `Map`, holding an object as a key prevents it from being garbage collected even if it is no longer used elsewhere in your code. In a `WeakMap`, if no other strong references to the key object exist, the JavaScript engine can reclaim that object's memory, and the entry will automatically disappear from the `WeakMap`.
  * Key Restrictions: Keys must be objects or non-registered symbols. Primitive values like strings or numbers cannot be used as keys because they are not garbage-collectable in the same way.
  * Non-Iterability: Because keys can be garbage collected at any time, a `WeakMap` is not enumerable. It lacks a `.size` property and methods like `.keys()`, `.values()`, or `.forEach()`. You can only access a value if you already have a reference to its specific key. 

### Available Methods:
The MDN Web Docs for `WeakMap` defines only four primary instance methods: 
  * set(key, value): Adds or updates an entry.
  * get(key): Retrieves the value associated with the key.
  * has(key): Returns a boolean indicating if the key exists.
  * delete(key): Removes the entry for the specified key.

### Practical Use Cases:
  * Private Data: Useful for storing "private" properties of a class instance that are inaccessible from the outside but are automatically cleaned up when the instance is destroyed.
  * DOM Element Metadata: Storing data related to DOM elements without preventing them from being garbage collected when they are removed from the document.
  * Caching/Memoization: Creating caches where results are only kept as long as the input object is still in use, preventing memory leaks in long-running applications. 

```js
const m = new Map();
m.set('name', 'JS');
m.get('name'); // 'JS'
```

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

| Attribute | Behavior                                                             | Usecase                              |
| --------- | -------------------------------------------------------------------- |------------------------------------- |
| Normal    | Blocks HTML parsing                                                  | JavaScript                           |   
| async     | Download scripts asynchronously, executes immediately after download | Analytics                            |
| defer     | Download scripts asynchronously, executes after HTML parsing         | Scripts that depend on DOM structure |

```html
<script src="app.js"></script>
<script src="app.js" async></script>
<script src="app.js" defer></script>
```

---

## 40. What is Window Object?

Global object in browser.
It represents the browser window or tab.
It also holds APIs like `setTimeout`, `fetch`, `localStorage`, and even the `document object`.

```js
window.alert('Hello');
```

---

## 41. What is Strict Mode?

Strict Mode ('use strict') was introduced in ES5 to make JavaScript more `secure` and `predictable`.

When enabled, it changes some silent errors into explicit ones and prevents dangerous or confusing behaviors.

```js
'use strict';
x = 5; // ReferenceError: x is not defined
```

Benefits:

* Prevents accidental globals
* Throws more errors
* Prevents duplicate parameter names,

It changes `this` behavior — in strict mode, `this` is `undefined` in functions instead of defaulting to the global object.

---

## 42. What are Typed Arrays?

Typed arrays allow handling binary data such as images, audio, or video data efficiently.

```js
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[0] = 255;
```

* They are mostly used in low-level APIs like `WebGL`, `WebAudio`, or working with `file streams`.
* Typed arrays are `faster` because they don’t dynamically resize and store uniform types.
* `ArrayBuffer` is the base, and views like DataView allow different types to read/write on the same.

---

## 43. Difference between Java and JavaScript

| Java           | JavaScript         |
| -------------- | ------------------ |
| Compiled       | Interpreted        |
| Strongly typed | Loosly typed       |
| OOP language   | Scripting language |

---

## 44. What is delete operator?

The `delete` operator removes a property from an object, not a variable.

```js
const obj = { a: 1 };
delete obj.a;
```


---

## 45. Difference between slice and splice

| slice                    | splice             |
| ------------------------ | ------------------ |
| Does not modify original | Modifies original  |
| Returns copied portion   | Adds/removes items |

`slice(start, end)` returns a shallow copy of the array section without modifying the original.

`splice(start, deleteCount, ...items)` modifies the original array by removing or inserting elements.

```js
const arr = [1, 2, 3, 4];
arr.slice(1, 3); // [2, 3]
arr.splice(1, 2); // arr becomes [1, 4]
```

---

## 46. Difference between ES5 and ES6

ES6 introduced:

* let/const
* Arrow functions
* Classes
* Template literals
* Modules
* Promises
* Destructuring
* Default parameters
* Spread/rest operators
* Map, Set
* Iterators and generators

---

## 47. Compile Time Error vs Runtime Error

Compile-time errors are caught before code execution — typically by the parser or type checker.

```js
console.log(a;
```

Examples of Runtime errors include `ReferenceError`, `TypeError`, and `SyntaxError`.

```js
console.log(x.y);
```

---

## 48. Difference between setTimeout and setInterval

`setTimeout` runs once.

`setInterval` runs repeatedly.

```js
setTimeout(() => console.log('once'), 1000);
setInterval(() => console.log('repeat'), 1000);
```

Also, both return IDs used to cancel them with `clearTimeout` and `clearInterval` respectively.

---

## 49. What is Execution Context?

JavaScript creates:

* `Global Execution Context` is created when the program starts.
* `Function Execution Context` is created on each function call.

Each contains:

* Variable Environment
* Scope Chain
* `this`

Each function call creates a function execution context, which gets pushed onto the call stack.

When a function finishes, its context is popped off.

---

## 50. Strongly Typed vs Loosely Typed

JavaScript is loosely typed.

```js
let a = 10;
a = 'hello';
```

---

## 51. What is Object.prototype?

In JavaScript, almost everything is an object or inherits from one.

`Object.prototype` is at the top of the prototype chain and contains methods like `toString()` and `hasOwnProperty()`

When you call `obj.toString()`, JS looks up the prototype chain until it finds it.

If you override it, it affects how objects are represented.

---

## 52. sort() with and without compare function

Without a Compare Function:

It performs a lexicographical (alphabetical) sort.

This leads to incorrect results for numbers because "100" comes before "25" alphabetically.

```js
const numbers = [40, 100, 1, 5, 25];
numbers.sort(); 
// Result: [1, 100, 25, 40, 5] (Incorrect for numbers)
```

With a Compare Function:

To sort numbers or custom objects correctly, you must pass a compare function (a, b) that defines the sort order. 

* Logic: The function compares two values (a and b) and returns a numeric value:
  - Negative value: a is sorted before b.
  - Positive value: b is sorted before a.
  - Zero: The relative order remains unchanged.

* Common Use Cases:
  - Numbers (Ascending): (a, b) => a - b.
  - Numbers (Descending): (a, b) => b - a.
  - Objects: Use a property, e.g., (a, b) => a.age - b.age.

```js
const numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => a - b); 
// Result: [1, 5, 25, 40, 100] (Correct numeric order)
```

---

## 53. What is localeCompare()?

`localeCompare()` compares two strings according to language-specific sorting rules.

```js
'apple'.localeCompare('banana'); // -1
```

It returns a number: negative if before, zero if equal, positive if after.

---

## 54. What is Axios Interceptors?

Interceptors modify request or response before handling.

```js
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer token';
  return config;
});
```

They’re great for attaching tokens, handling logging, or global error handling.

---

## 55. Difference between undefined and null

| undefined             | null                    |
| --------------------- | ----------------------- |
| Variable not assigned | Intentional empty value |

```js
let a;
let b = null;
console.log(a); // undefined
console.log(b); // null
```

---

## 56. What are Polyfills?

Polyfills provide support for modern features in old browsers.

Example:

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(item) {
    return this.indexOf(item) !== -1;
  };
}
```

---

## 57. What is Axios?

Axios is a promise-based HTTP client.

```js
axios.get('/api/data')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

---

## 58. What are Implicit Global Variables?

Without `var/let/const`, variable becomes global.

```js
function test() {
  name = 'John';
}
```


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

Returns right side, only if left side is `null` or `undefined`.

---

## 61. What are `preventDefault()` and `stopPropagation()`?

```js
e.preventDefault();
e.stopPropagation();
```

* `preventDefault()` stops default browser action
* `stopPropagation()` stops bubbling

---

## 62. Difference between for...of and for...in

| Feature          | for...in                                  | for...of                                  |
| ---------------- | ----------------------------------------- | ----------------------------------------- |
| Iterates Over    | Enumerable property keys (names)          |	Iterable values                          |
| Target Objects   | Any Object	                               |  Iterables (Arrays, Strings, Maps, Sets)  |
| Prototypal Chain | Includes inherited enumerable properties  |	Only iterates over the object’s own data |
| Primary Use Case | Debugging or inspecting object properties |	General iteration over collection data   |


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
  const signal = controller.signal;

  fetch("https://api.example.com/data", { signal })
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
This is common in search bars or autocomplete.\

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
