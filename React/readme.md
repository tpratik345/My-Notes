# React Interview Question Bank – Questions & Answers

## Index

| #   | Question                                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is the difference between Real DOM and Virtual DOM?](#1-what-is-the-difference-between-real-dom-and-virtual-dom)                                      |
| 2   | [What is Flux Architecture?](#2-what-is-flux-architecture)                                                                                                  |
| 3   | [Explain Redux concepts: store, action, reducer, dispatch](#3-explain-redux-concepts-store-action-reducer-dispatch)                                         |
| 4   | [What are Higher Order Components (HOC)?](#4-what-are-higher-order-components-hoc)                                                                          |
| 5   | [What is `super` in React?](#5-what-is-super-in-react-and-javascript)                                                                                       |
| 6   | [Difference between Stateful and Stateless Components](#6-difference-between-stateful-and-stateless-components)                                             |
| 7   | [What is React Router?](#7-what-is-react-router)                                                                                                            |
| 8   | [What is Jest?](#8-what-is-jest)                                                                                                                            |
| 9   | [Explain React Lifecycle Methods](#9-explain-react-lifecycle-methods)                                                                                       |
| 10  | [What are Hooks?](#10-what-are-hooks)                                                                                                                       |
| 11  | [What are React Portals?](#11-what-are-react-portals)                                                                                                       |
| 12  | [What is Context API? What is Prop Drilling?](#12-what-is-context-api-what-is-prop-drilling)                                                                |
| 13  | [What are Webpack and Polyfills?](#13-what-are-webpack-and-polyfills)                                                                                       |
| 14  | [What are Pure Components?](#14-what-are-pure-components)                                                                                                   |
| 15  | [What are Error Boundaries?](#15-what-are-error-boundaries)                                                                                                 |
| 16  | [What is React Fiber?](#16-what-is-react-fiber)                                                                                                             |
| 17  | [What is Memoization in React?](#17-what-is-memoization-in-react)                                                                                           |
| 18  | [What are PropTypes?](#18-what-are-proptypes)                                                                                                               |
| 19  | [Controlled vs Uncontrolled Components](#19-controlled-vs-uncontrolled-components)                                                                          |
| 20  | [What are Refs?](#20-what-are-refs)                                                                                                                         |
| 21  | [What is Lazy Loading?](#21-what-is-lazy-loading)                                                                                                           |
| 22  | [What is Concurrent Rendering?](#22-what-is-concurrent-rendering)                                                                                           |
| 23  | [What are React Server Components?](#23-what-are-react-server-components)                                                                                   |
| 24  | [What is Render Hijacking?](#24-what-is-render-hijacking)                                                                                                   |
| 25  | [Advantages and Limitations of React](#25-advantages-and-limitations-of-react)                                                                              |
| 26  | [What is JSX?](#26-what-is-jsx)                                                                                                                             |
| 27  | [What are Side Effects in React?](#27-what-are-side-effects-in-react)                                                                                       |
| 28  | [How to Pass Data Using React Router?](#28-how-to-pass-data-using-react-router)                                                                             |
| 29  | [Redux vs Context API vs Hooks](#29-redux-vs-context-api-vs-hooks)                                                                                          |
| 30  | [What is Strict Mode?](#30-what-is-strict-mode)                                                                                                             |
| 31  | [Explain the Building Blocks of React](#31-explain-the-building-blocks-of-react)                                                                            |
| 32  | [What are React Fragments?](#32-what-are-react-fragments)                                                                                                   |
| 33  | [How to Optimize a React Application?](#33-how-to-optimize-a-react-application)                                                                             |
| 34  | [What is WebKit?](#34-what-is-webkit)                                                                                                                       |
| 35  | [What is Web Optimization?](#35-what-is-web-optimization)                                                                                                   |
| 36  | [Difference between `createRef` and `useRef`](#36-difference-between-createref-and-useref)                                                                  |
| 37  | [What is React Reconciliation?](#37-what-is-react-reconciliation)                                                                                           |
| 38  | [What is Diffing?](#38-what-is-diffing)                                                                                                                     |
| 39  | [What is Redux Saga?](#39-what-is-redux-saga)                                                                                                               |
| 40  | [What is `forwardRef`?](#40-what-is-forwardref)                                                                                                             |
| 41  | [What are Render Props?](#41-what-are-render-props)                                                                                                         |
| 42  | [Difference between `useLayoutEffect` and `useEffect`](#42-difference-between-uselayouteffect-and-useeffect)                                                |
| 43  | [How to Call Child Function from Parent?](#43-how-to-call-child-function-from-parent)                                                                       |
| 44  | [Difference between Library and Framework](#44-difference-between-library-and-framework)                                                                    |
| 45  | [One-way vs Two-way Data Binding](#45-one-way-vs-two-way-data-binding)                                                                                      |
| 46  | [Shadow DOM vs Virtual DOM](#46-shadow-dom-vs-virtual-dom)                                                                                                  |
| 47  | [Why are Keys Important in React Lists?](#47-why-are-keys-important-in-react-lists)                                                                         |
| 48  | [What is the difference between `useMemo` and `useCallback`?](#48-what-is-the-difference-between-usememo-and-usecallback)                                   |
| 49  | [What is Code Splitting?](#49-what-is-code-splitting)                                                                                                       |
| 50  | [Why should we not mutate state directly?](#50-why-should-we-not-mutate-state-directly)                                                                     |
| 51  | [What is the difference between `==` and `===` in React/JS?](#51-what-is-the-difference-between--and--in-reactjs)                                           |
| 52  | [What is Hydration in React?](#52-what-is-hydration-in-react)                                                                                               |
| 53  | [What is Server Side Rendering (SSR)?](#53-what-is-server-side-rendering-ssr)                                                                               |
| 54  | [What is Client Side Rendering (CSR)?](#54-what-is-client-side-rendering-csr)                                                                               |
| 55  | [What is the difference between SSR and CSR?](#55-what-is-the-difference-between-ssr-and-csr)                                                               |
| 56  | [What is Redux Thunk?](#56-what-is-redux-thunk)                                                                                                             |
| 57  | [What is `useImperativeHandle`?](#57-what-is-useimperativehandle)                                                                                           |
| 58  | [What is the difference between Class Components and Functional Components?](#58-what-is-the-difference-between-class-components-and-functional-components) |
| 59  | [Explain Event Handling in React](#59-explain-event-handling-in-react)                                                                                      |
| 60  | [Synthetic Event vs Native DOM Event](#60-synthetic-event-vs-native-dom-event)                                                                              |
| 61  | [What is Batching in React?](#61-what-is-batching-in-react)                                                                                                 |
| 62  | [What is the use of `key` prop?](#62-what-is-the-use-of-key-prop)                                                                                           |
| 63  | [What is the use of `dangerouslySetInnerHTML`?](#63-what-is-the-use-of-dangerouslysetinnerhtml)                                                             |
| 64  | [What is the difference between `npm` and `npx`?](#64-what-is-the-difference-between-npm-and-npx)                                                           |
| 65  | [How useRef can be used to handle previous value](#65-how-useRef-can-be-used-to-handle-previous-value)                                                      |
| 66  | [When to use below hooks and when to not: `useMemo`, `useCallback`, `useContext`](#66-when-to-use-below-hooks-and-when-to-not-usememo-usecallback-usecontext)  |
| 67  | [What are web vitals?](#67-what-are-web-vitals)                                                                                                             |
| 68  | [What are Micro-frontend architectures and Module Federation?](#68-what-are-micro-frontend-architectures-and-module-federation)                             |

---

## 1. What is the difference between Real DOM and Virtual DOM?

| Real DOM                                 | Virtual DOM                          |
| ---------------------------------------- | ------------------------------------ |
| Actual browser DOM                       | Lightweight JS representation of DOM |
| Updating is slow                         | Updating is fast                     |
| Entire tree may re-render                | Only changed parts are updated       |
| Causes performance issues for large apps | Improves performance using diffing   |

React creates a Virtual DOM, compares it with the previous (virtual dom), and updates only the changed elements in the Real DOM.
So it means that React creates 2 Virtual Dom.

---

## 2. What is Flux Architecture?

Flux is an architecture pattern introduced by Meta (Facebook) for predictable state management.
Flux is a unidirectional data flow architecture.
Flux can have multiple stores to manage different area of data.

Flow:

`Action -> Dispatcher -> Store -> View`

* Action: describes what happened (is has type & payload)
* Dispatcher: sends action to store
* Store: holds application state
* View: UI updates based on state

Redux is inspired by Flux.

---

## 3. Explain Redux concepts: store, action, reducer, dispatch

It has a single store containing the entire app state.
When an action ({type, payload}) is dispatched, it’s handled by a reducer — a pure function that takes the current state and the action, and returns a new state.

Flow:

`UI → dispatch(action) → reducer → new state → re-render`

* UI (Component): User interaction (e.g., button click) triggers an event.
* Dispatch: sends an action to reducer
* Action: object describing what happened with its type and payload
* Reducer: function that returns updated state (pure functions)
* Store: central place where state is stored

Example:

```jsx
const action = { type: 'INCREMENT', payload: 10 };

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
}
```

---

## 4. What are Higher Order Components (HOC)?

A Higher Order Component is a function that takes a component and returns a new component.

```jsx
function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
      return <h3>Please login to continue</h3>;
    }

    return <WrappedComponent {...props} />;
  };
}

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;
```

Use cases:

* Reuse logic
* Authentication
* Logging
* Permission handling
* Error handling

Important Rules of HOCs:
* Do not modify the original component
* Always pass props using {...props}
* Name HOCs with withSomething
* HOCs are pure functions
* Hooks CANNOT be used conditionally inside HOCs

---

## 5. What is `super` in React and JavaScript?

### 1. `super` in JavaScript

`super` is used inside a **class** to access the parent class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // calls Animal's speak()
    console.log("Dog barks");
  }
}

const dog = new Dog("Tommy", "Labrador");
dog.speak();
```

Here:

* `extends Animal` → `Dog` inherits from `Animal`
* `super(name)` → calls the **parent constructor**
* `super.speak()` → calls the **parent method**

**Important:** In a derived class constructor, you generally need to call `super()` before using `this`.

---

### 2. `super` in React

You mainly see `super(props)` in **older/class-based React components**:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

Why?

`React.Component` is the parent class:

```text
React.Component
      ↑
MyComponent
```

So:

```js
super(props);
```

calls the constructor of `React.Component` and passes the props to it.

This allows you to safely use:

```js
this.props
```

inside the constructor.

### 3. Do we use `super` in modern React?

With **functional components and Hooks**, you don't use `super`:

```jsx
function MyComponent({ name }) {
  return <h1>Hello {name}</h1>;
}
```

So if you're learning modern React, you'll mostly encounter `super` when studying **JavaScript classes or older React class components**.

**In one line:** `super` means **"access/call something from my parent class."**


---

## 6. Difference between Stateful and Stateless Components

| Stateful Component        | Stateless Component   |
| ------------------------- | --------------------- |
| Has state                 | No state              |
| Uses hooks or class state | Only receives props   |
| Handles logic             | Mostly presentational |

```js
// Stateless Component is only for display purpose
function Greeting({ name }) {
  return <h1>{name}</h1>;
}
```

---

## 7. What is React Router?

React Router is used for navigation in React apps without refreshing the page.

```jsx
// Browser Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoute role='admin' />}>
          <Route path='/admin' element={<Admin />} />
        </Route>

        <Route path='/unathorized' element={<Unathorized />} />
        <Route path="*" element={<p>Page Not Found!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
```

```jsx
// Memory Router
import { MemoryRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}
```

Important components:

* BrowserRouter
* Routes
* Route
* Link
* useNavigate

Types:
* BrowserRouter:
  - The standard for modern web apps.
  - Updates the URL in address bar.
  - It uses the HTML5 History API `(pushState, replaceState)` to create clean, SEO-friendly URLs without hash fragments (e.g., /about).
* MemoryRouter:
  - Does NOT updates the URL.
  - Keeps the history of your "URL" in memory stack instead of the browser's address bar.
  - Mostly used for unit testing or non-browser environments like React Native.
* HashRouter:
  - Used for legacy browser support or environments where you cannot configure the server to handle all paths.
  - It uses the hash portion of the URL (e.g., /#/about) to keep the UI in sync with the location.
* StaticRouter:
  - Used for Server-Side Rendering (SSR) in Node.js, where you provide the current location via a prop because there is no browser history.
* NativeRouter:
  - The specialized router for React Native mobile applications.

---

## 8. What is Jest?

Jest is a JavaScript testing framework used for unit testing.

```js
test('adds 1 + 2', () => {
  expect(1 + 2).toBe(3);
});
```

Features:

* Snapshot testing
* Mocking
* Coverage reports

---

## 9. Explain React Lifecycle Methods

Class components have lifecycle methods for different phases:
* Mounting: `constructor`,  `render`, `componentDidMount`
* Updating: `shouldComponentUpdate`, `componentDidUpdate`
* Unmounting: `componentWillUnmount`

---

## 10. What are Hooks?

Hooks allow function components to use state and lifecycle features.
They were introduced in React 16.8 to eliminate the need for class components.

Common hooks:

* useState
* useEffect
* useRef
* useMemo
* useCallback
* useContext

```js
const [count, setCount] = useState(0);
```

---

## 11. What are React Portals?

Portals render a component outside the parent DOM hierarchy.

Useful for:

* Modal
* Tooltip
* Popup

```jsx
ReactDOM.createPortal(<Modal/>, document.getElementById('modal-root'))
```

It improves accessibility and avoids z-index or overflow issues when building complex UIs.

---

## 12. What is Context API? What is Prop Drilling?

### Prop Drilling

Prop drilling happens when you pass props through multiple layers of components just to reach a deeply nested child.

### Context API

Allows sharing data globally without passing props manually.

```jsx
// ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);
```

```jsx
// App.jsx
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
```

```jsx
// Home.jsx
import React from "react";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

How it works:
1. createContext() creates a shared context.
2. ThemeProvider stores the state and provides it to child components.
3. useTheme() is a custom hook to access the context easily.
4. Any component inside ThemeProvider can access theme and toggleTheme.

---

## 13. What are Webpack and Polyfills?

### Webpack

Webpack is a module bundler — it bundles JS, CSS, and assets into optimized files for browsers.
It supports loaders (e.g., Babel loader) and plugins for optimizations like tree shaking and minification.

### Polyfill

Adds support for features not available in older browsers.
It fill the gap for missing browser features — e.g., adding Promise support in IE11.
You can use Babel + core-js or specific polyfills to ensure backward compatibility.

Example:

```js
import 'core-js/stable';
```

---

## 14. What are Pure Components?

PureComponent only re-renders when props or state change.
It performs shallow comparison.
However, shallow comparison doesn’t detect deep object changes, so always maintain immutability.

`React.PureComponent` and `React.memo` are performance optimization tools that skip re-renders if props and state haven’t changed.

```jsx
class MyComponent extends React.PureComponent {}
```

Shallow Comparison:
* Shallow comparison in PureComponent is an optimization technique that checks if props or state have changed by comparing only the top-level keys and values, rather than nested structures.
* It uses Object.is for primitives (numbers, strings) and reference equality for objects/arrays (comparing memory addresses, not content), ensuring faster performance by avoiding deep tree traversal

How Shallow Comparison Works in Pure Components:
* Primitive Types (Strings, Numbers, Booleans):
  - The comparison checks if the values are identical (e.g., 5 === 5 is true).
* Complex Types (Objects, Arrays):
  - The comparison checks if the objects reference the exact same spot in memory.
  - If a new object is created with the same content, shallow comparison treats them as different.
* The Process:
  - PureComponent iterates over the keys of props/state. If all top-level keys return true for Object.is, the component does not re-render.

`If you pass a new object reference, even if inner values are identical, PureComponent will wrongly assume it is a change and re-render.`

Example:
```js
// Prev props: { a: 1, b: { c: 2 } }
// Next props: { a: 1, b: { c: 2 } }
// Shallow comparison sees:
// 1 === 1 (true)
// b !== b (false, if a new object was created)
```


---

## 15. What are Error Boundaries?

Error boundaries are special components that catch JavaScript errors in their child component tree.
They use lifecycle methods like `getDerivedStateFromError` and `componentDidCatch`.
If an error occurs, they display a fallback UI instead of breaking the entire app.
They don’t catch errors in event handlers or async code, only during rendering or lifecycle.
You can use them for graceful degradation — e.g., show an error message instead of a blank screen.

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Usage:
```jsx
<ErrorBoundary>
  <UserProfile />
</ErrorBoundary>
```
If `UserProfile` crashes, the fallback UI will render instead.

### What Errors Do Error Boundaries Catch?

  - They catch errors in:
    - Rendering
    - Lifecycle methods
    - Constructors of child components
  
  - What They DO NOT Catch
    - Errors inside:
      - Event handlers
      - setTimeout
      - Async code
      - Server-side rendering
      - Errors inside the error boundary itself

---

## 16. What is React Fiber?

React Fiber is React's reconciliation engine introduced in React 16.

Benefits:
* Better rendering performance
* Pause and resume rendering
* Prioritize updates

How it Works: Fiber represents a unit of work for a specific component. It uses a two-phase process:
  - Render Phase: Asynchronous and interruptible. React builds a "work-in-progress" tree and identifies changes without affecting the UI.
  - Commit Phase: Synchronous and uninterruptible. React applies the calculated changes to the DOM and swaps the internal tree pointers (Double Buffering).

Key Benefits:
  - Prioritization: Urgent updates (like typing or clicking) can "jump" ahead of low-priority tasks (like background data fetching).
  - Concurrency: Enables Concurrent Mode features like Suspense and transitions by allowing React to pause and resume work.
  - Smoothness: Prevents long rendering tasks from "locking" the main thread, which keeps animations and input responsive.


### What Problem Does Fiber Solve?
Rendering the page, responding to user actions, running Javascript and much more are all handled by the browser’s main thread.
If at any time our main thread gets blocked, the user’s experience can become laggy and slow.

We can safely move some of these things to another thread safely using Web Workers, however, they can’t access the DOM and manipulate it.
That means you can only move heavy computations or lengthy network request calls, however, you can’t change what’s on the screen without ease with a Web Worker. There are workarounds, however, they tend not to be the best practice.

Since our React code runs on Javascript, the browser’s main thread handles executing the rendering loop. Let’s see what it looked like before Fiber.


### React Before Fiber
The following is the process that React took before Fiber in order to render items on the screen:
1. React will create a tree of nodes when the user interface renders for the very first time. Each node in the tree represents some React element.
2. A virtual tree (called virtualDOM) is created which is a clone of the rendered tree.
3. Traversing the virtual DOM tree, React will update the DOM on whichever classes or elements need to be updated whenever a change occurs.
4. After any state change, React will compare every node from the two trees and pass on the changes to the renderer which ultimately draws it out on the screen.
This whole process would happen synchronously, meaning that once it was started, it could not be interrupted by another process until it was done.

### React After Fiber
No longer is reconciliation and rendering done in the same process. By doing so, Fiber can help you prioritize different updates that can happen.
React calls this incremental rendering, which splits rendering work into chunks that can then be spread out over multiple frames.

It can do this by breaking up the computation of the virtual DOM tree into nodes, or “units” of work, that it can commit at any time.
This allows you to pause, resume or restart computation for various components.

### Process
The reconciliation and rendering no longer happen at the same time and so the new process is broken down into two phases.

* Phase 1 — Reconciliation
  - React makes a list of all the changes that need to be processed and then rendered to the UI.
  - During this time, React can jump to processing another change as  well.
  - Once this list is computed, React will then schedule the changes to be executed in the next phase.
* Phase 2 — Commit
  - Out of the scheduled changes that come out of the reconciliation process, React can choose to render a specific set of changes.
  - Once committed, React notifies the DOM to render the changes that were found while in the reconciliation process.
While the reconciliation phase can be interrupted, the commit phase cannot.

By splitting things up into two phases, React is then able to prioritize which changes to make first.

### The Benefits of Fiber
1. First of all, you get improved performance. By being able to break the limits of the call stack and not having to wait on it to be clear, React is able to pause or start rendering work whenever required.
2. You can handle errors in a much cleaner fashion. Instead of showing the white screen of death whenever a Javascript runtime error occurs, you are able to set up error boundaries, which allows you to show a backup screen in case something wrong happens.
3. You get support for returning new render types such as fragments and strings. You can also return multiple elements from a render function as well.
4. It increases the performance of your user interface, allowing you to create advanced elements with animations, layouts, gestures and more.

---

## 17. What is Memoization in React?

Memoization avoids unnecessary calculations or renders.

* `useMemo` caches a computed value (e.g., expensive calculations).
* `useCallback` caches a function reference to prevent child re-renders.
* `React.memo` memoizes components

```jsx
const value = useMemo(() => expensiveFunction(a), [a]);
```

---

## 18. What are PropTypes?

PropTypes validate props passed to a component.
It helps catch bugs early during development.
In modern React, TypeScript provides compile-time safety and is preferred, but PropTypes are still useful for JS-only projects.

```js
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}
```

---

## 19. Controlled vs Uncontrolled Components

| Controlled                     | Uncontrolled             |
| ------------------------------ | ------------------------ |
| Uses React state               | Uses DOM directly        |
| Value controlled by `useState` | Value accessed using ref |


In React, the simplest rule is:

> **Use controlled components by default. Use uncontrolled components when you don't need React to manage the input value continuously.**

### 1. Controlled component

React owns the input's value.

```jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

Flow:

```text
User types
   ↓
onChange
   ↓
React state updates
   ↓
Component re-renders
   ↓
input gets new value
```

**Use controlled when:**

* You need the value elsewhere in the UI.
* You need validation while the user types.
* You need to conditionally enable/disable buttons.
* You need to transform or restrict input.
* Multiple fields depend on each other.
* You want React to be the **single source of truth**.
* You're building complex forms.

Example:

```jsx
<button disabled={!email.includes("@")}>
  Submit
</button>
```

Here, controlled is convenient because React already has the current value.

---

### 2. Uncontrolled component

The DOM owns the input's value.

```jsx
function Form() {
  const inputRef = useRef(null);

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

Here React doesn't update state on every keystroke. The browser manages the value.

**Use uncontrolled when:**

* You only need the value when submitting.
* You don't need to react to every keystroke.
* You have a simple form.
* You're integrating with non-React/DOM-based code.
* You want less state/event-handler boilerplate.
* You're working with `<input type="file">`, which is naturally uncontrolled.

---

### Practical decision rule

Think about **who needs to know the current value**.

| Situation                             | Prefer           |
| ------------------------------------- | ---------------- |
| Just collect value on submit          | **Uncontrolled** |
| Show value somewhere else immediately | **Controlled**   |
| Live validation                       | **Controlled**   |
| Enable/disable UI based on input      | **Controlled**   |
| Input formatting/transformation       | **Controlled**   |
| Complex multi-field form              | **Controlled**   |
| File input                            | **Uncontrolled** |
| Integrating with DOM/library          | **Uncontrolled** |
| Very simple form                      | **Either**       |

### The key mental model

**Controlled:**

```text
React state → DOM
      ↑
   onChange
```

React is in charge.

**Uncontrolled:**

```text
User → DOM
        ↓
      ref.value
```

The DOM is in charge.

### One important misconception

Uncontrolled doesn't mean **"bad"** or **"less React-like."**

Both are valid React patterns.

For example, if you have a login form and only care about the values when the user clicks **Submit**, an uncontrolled form can be perfectly reasonable:

```jsx
function Login() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    console.log(formData.get("email"));
    console.log(formData.get("password"));
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="email" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
  );
}
```

You don't necessarily need:

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

for every form.

**My general recommendation:** start with **controlled** when the UI needs to respond to input changes; choose **uncontrolled** when the input is basically just collecting data for a later read.


---

## 20. What are Refs?

Refs allow direct access to DOM elements.

```jsx
const inputRef = useRef();
inputRef.current.focus();
```

---

## 21. What is Lazy Loading?

Lazy loading loads components only when needed.
React’s `React.lazy()` and `<Suspense>` enable code-splitting — loading components only when needed.
This reduces bundle size and improves initial load time.

```jsx
const Home = React.lazy(() => import('./Home'));

<Suspense fallback={<div>Loading.....</div>}>
  <Routes>
    <Route path='/home' element={<Home />} />
  </Routes>
</Suspense>
```

---

## 22. What is Concurrent Rendering?

It is introduced with React Fiber
Concurrent Rendering allows React to interrupt rendering and prioritize important updates.
It improves responsiveness.

Refer [Concurrent Rendering vs Incremental Rendering in React](#6-concurrent-rendering-vs-incremental-rendering-in-react) 
---

## 23. What are React Server Components (RSCs)?

Server Components render on the server and send HTML to the client.
<!-- React Server Components are a new feature that allow parts of your app to run entirely on the server, not in the browser. -->
They can fetch data directly on the server, render HTML, and send it to the client — without shipping JavaScript for those components.

Benefits:
* Smaller bundle size
* Faster initial load

For example, a product list could be rendered as HTML on the server, while interactive parts like filters remain client components.
RSCs work seamlessly with `Next.js` 13+ (App Router) and use the `.server.jsx` and `.client.jsx` conventions.

---

## 24. What is Render Hijacking?

Render hijacking means controlling or modifying a component's render output using HOC.
Example: Prevent rendering based on permissions.

---

## 25. Advantages and Limitations of React

### Advantages

* Reusable components
* Fast rendering
* Declarative UI - you describe what you want, React figures out how to update the DOM.
* Component - based architecture — reusable, maintainable pieces of UI.
* Virtual DOM - faster updates and better performance.
* Strong ecosystem - tools like React Router, Redux, Next.js, and a huge community.

### Limitations

* It’s only the View layer — you must add your own state and routing libraries.
* Frequent updates
* SEO challenges without SSR.

---

## 26. What is JSX?

JSX is syntax that looks like HTML inside JavaScript.

```jsx
const element = <h1>Hello, {user.name}</h1>;
```

JSX is not required but highly recommended.
It compiles to `React.createElement()` calls, which build the virtual DOM tree.
It supports embedding expressions, conditional rendering, and attributes.
Behind the scenes, it’s pure JavaScript, so everything stays dynamic.
The only rule is that JSX must have one parent element and all tags must be closed properly.

---

## 27. What are Side Effects in React?

Side effects are operations that affect something outside the component.

Examples:

* API calls
* Timers
* DOM updates

Handled using `useEffect`.

---

## 28. How to Pass Data Using React Router?

In React Router, there are several common ways to pass data from one route/component to another:

1. **URL Parameters**
2. **Query Parameters**
3. **Location State**
4. **Global State / Context**

#### 1. URL Parameters

Useful when the data is part of the URL, such as an ID.

```jsx
// Route
<Route path="/user/:id" element={<User />} />

// Navigate
<Link to="/user/123">User</Link>
```

Read the parameter with `useParams()`:

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}
```

---

#### 2. Query Parameters

Useful for filters, search terms, sorting, pagination, etc.

```jsx
<Link to="/products?category=books">Books</Link>
```

Read them using `useSearchParams()`:

```jsx
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return <h1>Category: {category}</h1>;
}
```

---

#### 3. Location State

You can pass arbitrary state while navigating without putting it in the URL.

```jsx
<Link
  to="/profile"
  state={{ name: "Pratik", age: 25 }}
>
  Profile
</Link>
```

Retrieve it with `useLocation()`:

```jsx
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  console.log(location.state);

  return <h1>{location.state?.name}</h1>;
}
```

You can also pass state with `navigate()`:

```jsx
const navigate = useNavigate();

navigate("/profile", {
  state: { name: "Pratik" }
});
```

---

### Which approach should you use?

| Method                    | Best for                        |
| ------------------------- | ------------------------------- |
| `useParams()`             | Resource IDs, e.g. `/users/123` |
| `useSearchParams()`       | Search, filters, pagination     |
| `location.state`          | Temporary navigation state      |
| Context / Redux / Zustand | Shared application-wide state   |

**Important:** Don't put sensitive information in URL parameters or query strings, since URLs can be visible in browser history, logs, and analytics.

---

## 29. Redux vs Context API vs Hooks

| Redux                  | Context            | Hooks                 |
| ---------------------- | ------------------ | --------------------- |
| Large state management | Small global state | Local component logic |
| Middleware support     | No middleware      | Not global by default |
| Complex apps           | Small-medium apps  | Reusable logic        |

---

## 30. What is Strict Mode?

StrictMode highlights potential problems.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

It intentionally runs certain functions twice (like component render and effects) to highlight unsafe side effects.
It doesn’t affect production builds but ensures your code follows the latest React best practices.

---

## 31. Explain the Building Blocks of React

The main building blocks of React are:
* Components
* Props
* State
* JSX
* Events
* Hooks
* Virtual DOM & Reconciliation

---

## 32. What are React Fragments?

Fragments allow grouping multiple elements without adding extra DOM node.

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 33. How to Optimize a React Application?

To optimize React apps, you can:
* Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
* Implement code-splitting with `React.lazy()` and `Suspense`.
* Avoid creating new functions or objects inside render.
* Use key props correctly.
* Memoize expensive computations.
* Use profiling tools like `React Profiler` & `LightHouse`.
Remember: optimize based on profiling, not guessing — premature optimization can complicate code.

---

## 34. What is WebKit?

WebKit is a browser rendering engine used in Safari.
It converts HTML/CSS into visible UI.

---

## 35. What is Web Optimization?

Web optimization improves performance.
Techniques:
* Minify and bundle JS/CSS
* Use tree-shaking to remove dead code
* Implement lazy loading
* Compress images and use next-gen formats (WebP/AVIF)
* Cache assets with service workers
* Use SSR or static site generation for faster first paint
* Use CDNs

---

## 36. Difference between `createRef` and `useRef`

| createRef                    | useRef                        |
| ---------------------------- | ----------------------------- |
| Used in class components     | Used in function components   |
| Creates new ref every render | Keeps same ref across renders |

---

## 37. What is React Reconciliation?

Reconciliation is React’s internal process of comparing the Virtual DOM tree with its previous version to determine what changes are needed.
It’s powered by the Fiber architecture, which makes this process efficient and asynchronous.
React uses keys and types to decide whether to reuse or replace elements.
This process ensures minimal DOM updates and smooth UI transitions.

---

## 38. What is Diffing?

Diffing is the algorithm React uses during reconciliation.
Rules:
* Different element type -> re-create subtree
* Same type -> update only changed attributes
* Keys help identify list items

React’s diffing algorithm compares old and new virtual DOM trees.
Instead of comparing every node (which is slow), it assumes elements of different types generate different trees.
It reuses nodes with the same keys and types, making list rendering efficient.
That’s why using stable, unique keys in lists is critical — it helps React match elements accurately and avoid UI bugs.

---

## 39. What is Redux Saga?

Redux-Saga is a middleware for handling side effects in Redux using generator functions.
It helps organize complex async logic — like fetching data, cancelling requests, or chaining actions.
Sagas run in the background and can listen for dispatched actions (takeEvery, takeLatest).
They improve readability and make async flow easier to test and debug compared to nested thunks or callbacks.

```js
function* fetchData() {
  const data = yield call(api);
}
```

---

## 40. What is `forwardRef`?

`forwardRef` passes a ref from parent to child.

```jsx
const Input = React.forwardRef((props, ref) => (
  <input ref={ref} />
));
```

---

## 41. What are Render Props?

Render Props means sharing code using a prop whose value is a `function`.

```js
<MyComponent render={(data) => <h1>{data}</h1>} />
```

It allows sharing logic between components without HOCs.
While it was popular before hooks, now we achieve similar reusability using custom hooks, which are cleaner and easier to reason about.

---

## 42. Difference between `useLayoutEffect` and `useEffect`

| useEffect          | useLayoutEffect           |
| ------------------ | ------------------------- |
| Runs after paint   | Runs before paint         |
| Non-blocking       | Blocks painting           |
| Used for API calls | Used for DOM measurements |

---

## 43. How to call `child` function from `parent`?

Use `forwardRef` and `useImperativeHandle`.

```jsx
// Child.jsx
import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const sayHello = () => {
    console.log("Hello from child");
  };

  useImperativeHandle(ref, () => ({
    sayHello,
  }));

  return <div>Child</div>;
});

export default Child;
```

```jsx
// Parent.jsx
import { useRef } from "react";
import Child from "./Child";

function Parent() {
  const childRef = useRef();

  return (
    <>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.sayHello()}>
        Call Child
      </button>
    </>
  );
}
```

Note: forwardRef is is deprecated but not yet fully removed in React 19

---

## 44. Difference between Library and Framework

| Library                | Framework               |
| ---------------------- | ----------------------- |
| You control flow       | Framework controls flow |
| Routing is not present | Routing is Present      |
| Example: React         | Example: Angular        |


| Feature        | React       | Angular                     |
| -------------- | ----------- | --------------------------- |
| Language       | JavaScript  | TypeScript (mandatory)      |
| DOM            | Virtual DOM | Real DOM + change detection |
| Data binding   | One-way     | Two-way                     |
| Learning curve | Medium      | High                        |
| Size           | Smaller     | Larger                      |

React is a UI library that focuses only on the view layer, while Angular is a full-fledged framework that provides complete structure and built-in solutions like routing, HTTP, and dependency injection.

---

## 45. One-way vs Two-way Data Binding

| Feature        | One-Way       | Two-Way         |
| -------------- | ------------- | --------------- |
| Direction      | One direction | Both directions |
| Debugging      | Easier        | Harder          |
| Predictability | High          | Medium          |
| Used in        | React         | Angular         |

---

## 46. Shadow DOM vs Virtual DOM

| Shadow DOM             | Virtual DOM        |
| ---------------------- | ------------------ |
| Browser feature        | React feature      |
| Encapsulates styles    | Improves rendering |
| Used in Web Components | Used in React      |

---

## 47. Why are Keys Important in React Lists?

In React, **keys help React identify which items in a list have changed, been added, removed, or reordered.**

For example:

```jsx
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

function Users() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Here:

```jsx
key={user.id}
```

gives each list item a **stable identity**.

### Why does React need this?

Imagine the initial list:

```text
A
B
C
```

Then `A` is removed:

```text
B
C
```

React needs to figure out:

> "Is this the old B and C, or are these completely new elements?"

Keys tell React:

```text
Before:        After:

A (key=1)      B (key=2)
B (key=2)  →   C (key=3)
C (key=3)
```

React can recognize:

```text
key=1 → removed
key=2 → same element
key=3 → same element
```

So React can update the DOM efficiently rather than unnecessarily recreating everything.

---

### What happens without keys?

If you write:

```jsx
users.map(user => (
  <li>{user.name}</li>
))
```

React will show:

> Each child in a list should have a unique "key" prop.

More importantly, React loses the stable identity of those elements, which can cause incorrect component state to be associated with items when lists are reordered, inserted into, or deleted from.

---

### Why shouldn't we use array index as key?

You might see:

```jsx
users.map((user, index) => (
  <li key={index}>{user.name}</li>
))
```

This is okay **only when the list is static and never reordered, inserted into, or deleted from**.

For example:

```text
Initial:

0 → A
1 → B
2 → C
```

Remove A:

```text
0 → B
1 → C
```

Now React thinks:

```text
key=0 → A became B
key=1 → B became C
```

rather than recognizing that A was removed and B/C remained the same items.

This becomes especially problematic when list items contain **local component state, inputs, animations, or DOM state**.

### Best practice

Use a **stable, unique identifier from the data**:

```jsx
key={user.id}
```

instead of:

```jsx
key={index}
```

And don't use something random like:

```jsx
key={Math.random()}
```

because that creates a new key on every render and can cause React to treat elements as entirely new components.

### Interview answer

> **Keys are important in React lists because they provide a stable identity for each element. React uses keys during reconciliation to determine which items have been added, removed, changed, or moved. This allows React to update the DOM correctly and efficiently. Keys should ideally be stable and unique IDs from the data, rather than array indexes, especially when the list can change.**

---

## 48. What is the difference between `useMemo` and `useCallback`?

| useMemo                | useCallback               |
| ---------------------- | ------------------------- |
| Returns memoized value | Returns memoized function |

```js
const total = useMemo(() => a + b, [a, b]);
const handleClick = useCallback(() => {}, []);
```

useCallback: memoizes a function so that React does not recreate it on every render.
When you pass an empty dependency array ([]), it means:
* The function is created only once (on initial render)
* It will never change across re-renders
* Risk of stale data (will not get the updated data)

With [dependency]
* Function updates when dependency updates
* Always uses latest dependency
* No stale closure for dependency
---

## 49. What is Code Splitting?

Code splitting breaks application bundle into smaller chunks.

```jsx
const Dashboard = lazy(() => import('./Dashboard'));
```

Improves loading speed.

---

## 50. Why should we not mutate state directly?

Because direct mutation does not trigger re-render.
Bad:

```js
state.count = 10;
```

Good:

```js
setState({ count: 10 });
```

---

## 51. What is the difference between `==` and `===` in React/JS?

* `==` checks value only
* `===` checks value and type

```js
1 == '1'   // true
1 === '1'  // false
```

Always prefer `===`.

---

## 52. What is Hydration in React?

Hydration attaches React event listeners to server-rendered HTML.
Used in SSR frameworks like Next.js.

---

## 53. What is Server Side Rendering (SSR)?

SSR renders HTML on server before sending it to browser.

Benefits:

* Better SEO
* Faster initial page load

---

## 54. What is Client Side Rendering (CSR)?

CSR renders content in browser using JavaScript.
React applications usually use CSR.

---

## 55. What is the difference between SSR and CSR?

| SSR                | CSR                 |
| ------------------ | ------------------- |
| Rendered on server | Rendered in browser |
| Better SEO         | Slower first load   |
| More server load   | Less server load    |

---

## 56. What is Redux Thunk?

Redux Thunk allows dispatching functions instead of plain objects.

```js
dispatch((dispatch) => {
  fetchData().then(data => dispatch(success(data)));
});
```

---

## 57. What is `useImperativeHandle`?

It customizes the value exposed when using `ref`.
Used with `forwardRef`.
Refer [How to Call Child Function from Parent?](#43-how-to-call-child-function-from-parent)

---

## 58. What is the difference between Class Components and Functional Components?

| Class Component        | Functional Component |
| ---------------------- | -------------------- |
| Uses lifecycle methods | Uses hooks           |
| More boilerplate       | Cleaner syntax       |
| Uses `this`            | No `this`            |

---

## 59. Explain Event Handling in React

```js
<button onClick={handleClick}>Click</button>
```

React uses camelCase for events.

---

## 60. Synthetic Event vs Native DOM Event?

### SyntheticEvent
React wraps browser events into a cross-browser event object called SyntheticEvent.

```jsx
function App() {
  const handleClick = (e) => {
    console.log(e); // SyntheticEvent
  };

  return <button onClick={handleClick}>Click</button>;
}
```

### Native DOM Event
The actual browser event.

```js
document.querySelector("button").addEventListener("click", (e) => {
  console.log(e); // Native MouseEvent
});
```

| Feature             | SyntheticEvent         | Native Event     |
| ------------------- | ---------------------- | ---------------- |
| Source              | React                  | Browser          |
| Cross-browser       | Yes                    | Depends          |
| Performance         | Optimized (delegation) | Less optimized   |
| Access native event | `e.nativeEvent`        | Already native   |
| Usage               | JSX handlers           | addEventListener |


---

## 61. What is Batching in React?

**Batching** in React is the process of **grouping multiple state updates into a single re-render** instead of re-rendering the component after every individual update.

For example:

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(1);
    setName("John");
  };

  return (
    <>
      <p>{count}</p>
      <p>{name}</p>
    </>
  );
}
```

Here, React **batches both `setCount()` and `setName()` together**, causing only **one re-render**.

### Why is batching useful?

Without batching:

```text
setCount() → re-render
setName()  → re-render
```

With batching:

```text
setCount()
setName()
    ↓
One re-render
```

This improves **performance** by reducing unnecessary renders.

### React 18+

In **React 18**, automatic batching was expanded so that updates are generally batched not only inside React event handlers but also inside things such as promises, timeouts, and native event handlers.

```jsx
setTimeout(() => {
  setCount(c => c + 1);
  setName("John");
}, 1000);
```

In React 18+, these updates are normally **batched into a single render**.

**In short:**

> **Batching = combining multiple state updates into one render to improve performance.**

---

## 62. What is the use of `key` prop?

`key` uniquely identifies list items.

```js
<li key={item.id}>{item.name}</li>
```

Refer [Why are Keys Important in React Lists?](#47-why-are-keys-important-in-react-lists)

---

## 63. What is the use of `dangerouslySetInnerHTML`?

It injects raw HTML into component.

```js
<div dangerouslySetInnerHTML={{ __html: html }} />
```

Use carefully because of XSS risk.

---

## 64. What is the difference between `npm` and `npx`?

* npm installs packages
* npx executes package without installing globally

```bash
npx create-react-app my-app
```

---

## 65. How useRef can be used to handle previous value

### How It Works (Step-by-Step)
* Initialize the Ref: Declare a ref using the useRef Hook to store the value you want to track.
* Render the Component: During the render, the component displays the current state and the value currently stored in ref.current. Because the ref hasn't been updated yet for this cycle, ref.current still holds the value from the previous render.
* Update in useEffect: Use the useEffect Hook to update ref.current with the new state value. Since useEffect runs after the render is committed to the screen, the update happens late enough that it doesn't affect what is currently displayed, but saves the value for the next render. 

```jsx
function usePrevious(value) {
  const ref = useRef();
  
  // Update ref.current after every render
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  // Return previous value (happens before the useEffect above runs)
  return ref.current;
}
```

```jsx
import { useEffect, useRef, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <h1>
      Now: {count}, Before: {prevCount}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </h1>
  );
}
```
### Use Cases
1. Detect Value Change
```jsx
const prevPrice = usePrevious(price);

useEffect(() => {
 if(prevPrice && price > prevPrice){
   console.log("Price increased");
 }
}, [price]);
```

2. Prevent Unnecessary API Calls
  - Compare previous filters before fetching.
```jsx
const prevFilters = usePrevious(filters);

useEffect(() => {
 if(prevFilters !== filters){
   fetchData();
 }
}, [filters]);
```

3. ComponentDidUpdate Equivalent
  - Like old class lifecycle access:
```jsx
const prevUserId = usePrevious(userId);

useEffect(() => {
 if(prevUserId !== userId){
   console.log("User changed");
 }
}, [userId]);
```

### Difference between useRef vs useState for previous values?

| useRef                       | useState            |
| ---------------------------- | ------------------- |
| No re-render                 | Causes re-render    |
| Mutable                      | Immutable update    |
| Good for previous values     | Usually unnecessary |
| Stores values across renders | Triggers UI updates |


---

## 66. When to use below hooks and when to not: `useMemo`, `useCallback`, `useContext`

### Quick rule

| Hook          | Main purpose                               | Use when                                                           | Don't use when                                    |
| ------------- | ------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------- |
| `useMemo`     | Memoize a **calculated value**             | Calculation is expensive or value stability matters                | Calculation is cheap                              |
| `useCallback` | Memoize a **function reference**           | Passing callbacks to memoized children or function is a dependency | You're not gaining anything from stable reference |
| `useContext`  | Share **data/state across component tree** | Avoiding prop drilling for shared data                             | Data is local or changes very frequently          |

---

### 1. `useMemo`

`useMemo` memoizes the **result of a computation**.

```tsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.name.includes(search));
}, [users, search]);
```

Without `useMemo`, filtering runs on **every render**.

With `useMemo`, React recalculates only when `users` or `search` changes.

#### When should I use it?

**1. Expensive calculations**

```tsx
const sortedData = useMemo(() => {
  return expensiveSort(data);
}, [data]);
```

For example:

* large array filtering/sorting
* complex calculations
* expensive transformations

**2. When referential equality matters**

This is an important senior-level use case.

```tsx
const options = useMemo(() => ({
  theme: "dark",
  pageSize: 20
}), []);
```

Now `options` maintains the same reference between renders.

This can matter when passing it to a `React.memo` child or using it as a dependency.

#### When NOT to use it?

Don't do this everywhere:

```tsx
const fullName = useMemo(() => `${firstName} ${lastName}`, [
  firstName,
  lastName
]);
```

That's a very cheap calculation. The overhead of `useMemo` may not be worth it.

#### Interview line

> "`useMemo` is primarily a performance optimization. I use it when a computation is expensive or when I specifically need a stable object/array reference. I don't use it for every calculation because memoization itself has a cost."

---

### 2. `useCallback`

`useCallback` memoizes the **function reference**, not the result of the function.

```tsx
const handleDelete = useCallback((id: number) => {
  deleteUser(id);
}, []);
```

The function reference remains stable between renders unless its dependencies change.

#### Why is this useful?

Consider:

```tsx
const Parent = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <Child onClick={handleClick} />;
};
```

Every time `Parent` renders, a **new function** is created.

If `Child` is:

```tsx
const Child = React.memo(({ onClick }) => {
  ...
});
```

then the new function reference can cause `Child` to re-render.

We can use:

```tsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

Now the reference is stable.

#### Another important use case

When a function is a dependency of another hook:

```tsx
const fetchUsers = useCallback(async () => {
  const response = await fetch("/api/users");
  return response.json();
}, []);

useEffect(() => {
  fetchUsers();
}, [fetchUsers]);
```

Without `useCallback`, `fetchUsers` gets recreated on every render, potentially causing the effect to run again.

#### When NOT to use it?

Don't blindly do:

```tsx
const handleClick = useCallback(() => {
  console.log("hello");
}, []);
```

If the function isn't being:

* passed to a memoized child
* used as a dependency
* otherwise benefiting from stable identity

then `useCallback` may provide no meaningful benefit.

#### Interview line

> "`useCallback` memoizes a function reference. I mainly use it when referential equality matters, such as passing callbacks to `React.memo` components or using callbacks as dependencies of other hooks."

---

### 3. `useContext`

`useContext` is different from the first two.

It's not primarily a performance optimization. Its purpose is **sharing data across a component tree without manually passing props through every level**.

For example:

```text
App
 └── Dashboard
      └── Sidebar
           └── UserProfile
```

Suppose `UserProfile` needs the logged-in user.

Without Context:

```tsx
<App user={user}>
  <Dashboard user={user}>
    <Sidebar user={user}>
      <UserProfile user={user} />
    </Sidebar>
  </Dashboard>
</App>
```

That's **prop drilling**.

With Context:

```tsx
const UserContext = createContext<User | null>(null);
```

Provider:

```tsx
<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>
```

Consumer:

```tsx
const user = useContext(UserContext);
```

Now `UserProfile` can directly access the user.

---

#### When should I use Context?

Good examples:

* authenticated user
* theme
* language/locale
* permissions
* application configuration
* feature flags
* relatively global UI state

For example:

```tsx
const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Submit</button>;
}
```

---

#### When NOT to use Context?

This is particularly important for interviews.

#### Don't use Context for everything

For local state:

```tsx
function LoginForm() {
  const [email, setEmail] = useState("");
}
```

There's no reason to create Context.

#### Be careful with frequently changing state

Suppose:

```tsx
<UserContext.Provider value={{ user, mousePosition }}>
```

If `mousePosition` changes constantly, consumers of this context can re-render frequently.

It's often better to split contexts:

```tsx
<UserContext.Provider value={user}>
  <MousePositionContext.Provider value={mousePosition}>
    ...
  </MousePositionContext.Provider>
</UserContext.Provider>
```

Or use a more appropriate state-management approach depending on the application.

---

### The important difference

A good way to remember them:

```text
useMemo
   ↓
"I want to cache a VALUE"

useCallback
   ↓
"I want to cache a FUNCTION"

useContext
   ↓
"I want to SHARE DATA across components"
```

For example:

```tsx
const expensiveValue = useMemo(() => calculate(data), [data]);

const handleSubmit = useCallback(() => {
  submit(data);
}, [data]);

const user = useContext(UserContext);
```

---

### One common interview trap

**`useMemo` does NOT prevent a component from rendering.**

It only prevents the calculation from being repeated unnecessarily.

Similarly:

**`useCallback` does NOT prevent a component from rendering.**

It only gives you a stable function reference.

If you want to prevent unnecessary child renders, you might combine:

```tsx
React.memo
+
useCallback
```

For example:

```tsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

### why you should **not** be using these hooks everytime

Because **hooks like `useMemo` and `useCallback` are not free**. They themselves add bookkeeping and complexity. You should use them when they solve an actual problem, not as a default coding pattern.

A good interview answer would be:

> **"I don't use `useMemo` and `useCallback` everywhere because memoization has its own cost. React has to store the previous value/function and compare dependencies on every render. If the calculation is cheap or the function doesn't need a stable reference, memoization can actually make the code more complex without providing a meaningful performance benefit."**

### 1. `useMemo` has overhead

Instead of:

```tsx
const fullName = `${firstName} ${lastName}`;
```

doing:

```tsx
const fullName = useMemo(
  () => `${firstName} ${lastName}`,
  [firstName, lastName]
);
```

doesn't make much sense.

React now has to:

1. Store the memoized value
2. Store the dependencies
3. Compare dependencies on subsequent renders
4. Decide whether to reuse or recalculate

For a simple string concatenation, that's unnecessary overhead.

---

### 2. `useCallback` also has overhead

Instead of:

```tsx
const handleClick = () => {
  console.log("clicked");
};
```

you might write:

```tsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

But if you're not passing this function to a memoized child or using its reference as a dependency, **there may be no benefit**.

You're just adding:

* dependency tracking
* memoization bookkeeping
* more code
* potentially more cognitive complexity

---

### 3. It can make code harder to understand

Compare:

```tsx
const handleSubmit = () => {
  submitForm();
};
```

with:

```tsx
const handleSubmit = useCallback(() => {
  submitForm();
}, []);
```

Someone reviewing the second version may reasonably ask:

> "Why does this callback need to be stable?"

If there isn't a good answer, the optimization is probably unnecessary.

---

### 4. Incorrect dependencies can create bugs

This is even more important.

```tsx
const handleSearch = useCallback(() => {
  search(query);
}, []);
```

If `query` changes, this callback can capture a stale value.

You would need:

```tsx
const handleSearch = useCallback(() => {
  search(query);
}, [query]);
```

So excessive use of `useCallback` increases the number of dependency relationships you have to reason about.

---

### 5. `useContext` is different

You **can** use Context whenever you genuinely have shared state/data.

But don't put everything into one giant Context:

```tsx
<AppContext.Provider
  value={{
    user,
    theme,
    cart,
    notifications,
    search,
    mousePosition
  }}
>
```

Now a change to frequently changing data can cause many consumers to update.

Instead, separate concerns:

```tsx
<UserContext.Provider>
  <ThemeContext.Provider>
    <CartContext.Provider>
      ...
    </CartContext.Provider>
  </ThemeContext.Provider>
</UserContext.Provider>
```

Or use another state-management approach when the application's state becomes complex.

---

### The easiest way to explain it in an interview

Think of it like this:

**Without memoization:**

```text
Render
  ↓
Calculate value/function
```

**With memoization:**

```text
Render
  ↓
Check dependencies
  ↓
Did dependencies change?
  ├── Yes → Calculate again
  └── No  → Use cached result
```

That dependency checking and caching **also costs something**.

So the principle is:

> **Don't optimize code just because you can. Optimize when the cost of the computation/re-render is greater than the cost and complexity of memoization.**

And one important modern React nuance: **with newer React versions and the React Compiler, some manual `useMemo`/`useCallback` usage can become less necessary because the compiler can automatically optimize certain cases.** So in a modern codebase, I'd first follow the project's compiler/configuration conventions rather than blindly adding these hooks.


Here `React.memo` is responsible for **skipping the child render**, while `useCallback` helps by ensuring `onClick` has the same reference.

### Senior-level answer

> "I don't treat `useMemo` and `useCallback` as hooks that I should use everywhere. They are optimization tools, and I use them when there is a measurable or architectural reason—expensive computation, referential equality, memoized children, or hook dependencies. `useContext` is primarily for dependency sharing across a component tree, especially when prop drilling becomes a problem. For frequently changing or highly granular state, I would be careful with Context because context updates can cause many consumers to re-render."

---

## 67. What are web vitals?

**Web Vitals** are a set of metrics from Google that help measure the **real-world user experience and performance of a web application**.

The most important ones are **Core Web Vitals**:

| Metric  | What it measures                                | Good target |
| ------- | ----------------------------------------------- | ----------- |
| **LCP** | How quickly the main content appears            | ≤ **2.5s**  |
| **INP** | How responsive the page is to user interactions | ≤ **200ms** |
| **CLS** | How much the page layout unexpectedly moves     | ≤ **0.1**   |

### 1. LCP — Largest Contentful Paint

Measures **loading performance**.

For example, when a user opens your website, LCP measures how long it takes for the largest important piece of content—such as a hero image, heading, or paragraph—to appear.

```text
User opens page
      ↓
████████████████  ← Main content appears
      ↑
     LCP
```

**Good:** ≤ 2.5 seconds

---

### 2. INP — Interaction to Next Paint

Measures **responsiveness**.

Suppose a user clicks a button:

```js
button.addEventListener("click", () => {
  // some expensive JavaScript
});
```

INP looks at how quickly the browser responds visually after the interaction.

**Good:** ≤ 200 ms

> INP replaced **FID (First Input Delay)** as a Core Web Vital in 2024.

---

### 3. CLS — Cumulative Layout Shift

Measures **visual stability**.

Imagine you're about to click a button:

```text
Before:
[ Buy Now ]

After an image loads:
[ Product Image ]

[ Buy Now ]  ← button moved!
```

That unexpected movement contributes to CLS.

**Good:** ≤ 0.1

---

### Other Web Vitals

There are also metrics that can help diagnose performance:

* **TTFB** — Time to First Byte → server response time
* **FCP** — First Contentful Paint → when the first content appears
* **TBT** — Total Blocking Time → how long the main thread is blocked, especially useful in lab testing

### Interview answer

If an interviewer asks **"What are Web Vitals?"**, you can say:

> **Web Vitals are a set of metrics used to measure the performance and user experience of a web application. The three Core Web Vitals are LCP for loading performance, INP for responsiveness, and CLS for visual stability. As a React developer, I can monitor these metrics and optimize things like images, JavaScript execution, rendering, and layout shifts to improve the user experience.**

**Easy memory trick:**

```text
LCP → Loading
INP → Interaction
CLS → Stability
```

---

## 68. What are Micro-frontend architectures and Module Federation?

The easiest way to understand **Micro-frontends** and **Module Federation** is to think of them as the frontend equivalent of **microservices**.

### 1. What is a Micro-frontend?

A **micro-frontend architecture** means splitting a large frontend application into **smaller, independently developed and deployed frontend applications**.

For example, imagine an e-commerce application:

```text
                    E-commerce Website
                           │
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
   Product Team       Cart Team          Checkout Team
        │                  │                  │
   Product App         Cart App          Checkout App
        │                  │                  │
     React              React              React
```

Instead of one huge frontend owned by one team, different teams own different parts.

#### Traditional frontend

```text
                 ONE BIG APPLICATION
                        │
        ┌───────────────┼───────────────┐
        │               │               │
     Products          Cart          Checkout
        │               │               │
        └───────────────┼───────────────┘
                        │
                  One deployment
```

#### Micro-frontend

```text
                  HOST / SHELL APP
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
   Products MF       Cart MF          Checkout MF
       │                 │                 │
    Team A             Team B             Team C
       │                 │                 │
   Deploy separately  Deploy separately  Deploy separately
```

The important idea is:

> **Each business domain can be developed, tested, and deployed independently.**

---

#### 2. Why do we need Micro-frontends?

Imagine a company has 100 frontend developers working on one React application.

The application might look like:

```text
src/
├── products/
├── cart/
├── checkout/
├── payments/
├── profile/
├── orders/
├── admin/
├── authentication/
└── ...
```

Over time, this can become difficult to manage.

You might have:

* large codebase
* many teams modifying the same repository
* difficult deployments
* tightly coupled modules
* long CI/CD pipelines
* difficult ownership
* one team's change potentially affecting another team

Micro-frontends try to solve some of these organizational and deployment problems.

---

#### 3. Real-world example

Suppose you're working for a large e-commerce company.

Different teams own:

```text
Product Team
    ↓
Product listing
Product details
Search

Cart Team
    ↓
Shopping cart
Coupons

Checkout Team
    ↓
Address
Payment
Order confirmation

Account Team
    ↓
Profile
Orders
Settings
```

Each team can have its own application.

```text
                  Main Website
                       │
       ┌───────────────┼────────────────┐
       ↓               ↓                ↓
    Products          Cart           Checkout
       │               │                │
    Team A           Team B           Team C
```

Now Team A can deploy product changes without necessarily redeploying the entire application.

---

#### 4. How does the browser see it?

To the user, it should still look like **one application**.

For example:

```text
example.com/products
example.com/cart
example.com/checkout
```

The user shouldn't necessarily know that:

```text
/products     → Product micro-frontend
/cart         → Cart micro-frontend
/checkout     → Checkout micro-frontend
```

The architecture is split internally, while the user experiences one application.

---

### 5. What is Module Federation?

Now we come to **Module Federation**.

Module Federation is a technology provided by **Webpack 5** and supported by modern bundling ecosystems that allows one JavaScript application to **load modules from another application at runtime**.

This is extremely useful for micro-frontends.

Think of it as:

> **"Application A can consume a component/module that is owned and deployed by Application B."**

For example:

```text
Host Application
       │
       │ loads at runtime
       ↓
Remote Application
       │
       └── ProductList component
```

The host doesn't necessarily need to contain the ProductList code at build time.

---

#### 6. Host and Remote

Module Federation commonly uses two concepts:

#### Host

The application that consumes another application's module.

```text
Host
 ↓
Consumes remote modules
```

#### Remote

The application that exposes modules.

```text
Remote
 ↓
Exposes modules
```

For example:

```text
                HOST
          E-commerce App
                │
        ┌───────┼────────┐
        ↓       ↓        ↓
     Product   Cart   Checkout
      Remote  Remote    Remote
```

---

#### 7. Simple example

Suppose the Product team owns:

```text
Product App
```

and exposes:

```text
ProductList
```

The Checkout team doesn't own that component.

But the main application can consume it:

```text
Host App
   │
   └──────→ Product Remote
                │
                └── ProductList
```

So the host can effectively do something conceptually similar to:

```js
import ProductList from "productApp/ProductList";
```

The important part is that `ProductList` can come from another independently deployed application.

---

#### 8. Why is this powerful?

Normally, when you write:

```js
import Button from "./Button";
```

the bundler knows about `Button` during the application's build.

With Module Federation, you can have something conceptually like:

```js
import Button from "designSystem/Button";
```

where `Button` is provided by another application.

The consuming application can load it **at runtime**.

This means:

```text
Application A
      │
      │ runtime dependency
      ↓
Application B
```

---

#### 9. Module Federation architecture

A common architecture looks like this:

```text
                         Browser
                            │
                            ↓
                    ┌──────────────┐
                    │  Host App    │
                    │              │
                    │ Shell/Header │
                    │ Navigation   │
                    └──────┬───────┘
                           │
             ┌─────────────┼──────────────┐
             ↓             ↓              ↓
        Product MF     Cart MF       Checkout MF
             │             │              │
             ↓             ↓              ↓
         Team A          Team B         Team C
```

The Host is sometimes called the **Shell application**.

It handles things such as:

* routing
* authentication
* global layout
* navigation
* loading micro-frontends

---

#### 10. Example with React

Suppose we have two applications.

#### Product application

```text
product-app/
```

It exposes:

```text
ProductList
```

#### Main application

```text
host-app/
```

It consumes:

```text
ProductList
```

Conceptually:

```text
product-app
     │
     │ exposes
     ↓
ProductList
     │
     │
     ↓
host-app
     │
     └── renders ProductList
```

The Product team can deploy a new version of `ProductList` independently.

---

#### 11. `remoteEntry.js`

One important Module Federation concept is the **remote entry**.

A remote application typically publishes something like:

```text
remoteEntry.js
```

Think of it as a **manifest/entry point** that tells the host how to access the modules exposed by that remote.

Conceptually:

```text
Product Application
       │
       ├── remoteEntry.js
       │
       ├── ProductList
       ├── ProductDetails
       └── ...
```

The host knows where the remote is located:

```text
https://products.example.com/remoteEntry.js
```

Then it can load exposed modules.

---

#### 12. Module Federation configuration

A simplified Webpack configuration might look like:

#### Remote

```js
new ModuleFederationPlugin({
  name: "productApp",

  filename: "remoteEntry.js",

  exposes: {
    "./ProductList": "./src/ProductList"
  }
});
```

This means:

```text
productApp
    │
    └── exposes
           │
           └── ProductList
```

The host can then configure the remote:

```js
new ModuleFederationPlugin({
  remotes: {
    productApp: "productApp@https://products.example.com/remoteEntry.js"
  }
});
```

Then conceptually:

```js
import ProductList from "productApp/ProductList";
```

---

### 13. Module Federation vs Micro-frontends

This distinction is **very important in interviews**.

They are **not the same thing**.

### Micro-frontends

Micro-frontend is an **architectural approach**.

It answers:

> How should we organize a large frontend application and teams?

### Module Federation

Module Federation is a **technical mechanism/tool**.

It answers:

> How can independently built applications share/load code at runtime?

So:

```text
Micro-frontends
      ↓
Architecture / strategy

Module Federation
      ↓
Technology that can implement that strategy
```

You can build micro-frontends **without Module Federation**.

For example:

```text
Micro-frontends
     │
     ├── Module Federation
     ├── Web Components
     ├── iframe
     ├── server-side composition
     └── routing-based composition
```

Module Federation is simply one popular approach.

---

### 14. Micro-frontends are similar to microservices

This analogy is useful.

### Monolithic backend

```text
             Backend
                │
     ┌──────────┼──────────┐
     ↓          ↓          ↓
   Users      Orders     Payments
```

One large application.

### Microservices

```text
 Users Service
 Orders Service
 Payments Service
```

Each service can be independently developed and deployed.

Micro-frontends apply a similar idea to the frontend:

```text
 Product Frontend
 Cart Frontend
 Checkout Frontend
```

So:

```text
Microservices       → Backend
Micro-frontends     → Frontend
```

But remember: they're analogous, **not identical**.

---

### 15. Benefits of Micro-frontends

### 1. Independent deployment

Team A can deploy:

```text
Product v10
```

without rebuilding the entire application.

### 2. Team ownership

Each team owns a business domain.

```text
Product Team → Product MF
Cart Team    → Cart MF
Payment Team → Payment MF
```

### 3. Smaller codebases

Instead of:

```text
1 huge frontend
```

you have:

```text
Product
Cart
Checkout
Account
```

### 4. Independent technology choices

Depending on the architecture, different teams can potentially use different frameworks.

For example:

```text
Product → React
Checkout → Vue
Legacy Admin → Angular
```

However, **I wouldn't recommend mixing frameworks without a strong reason** because it adds complexity.

### 5. Independent releases

A product team can release frequently without coordinating every release with every other team.

---

# 16. Disadvantages

Micro-frontends are **not automatically better**.

They introduce significant complexity.

### 1. Duplicate dependencies

You might accidentally load:

```text
React
React
React
```

from multiple micro-frontends.

Module Federation can help with shared dependencies.

---

### 2. Communication between micro-frontends

Suppose:

```text
Cart MF
```

needs to tell:

```text
Header MF
```

that the cart count changed.

You need a communication mechanism.

Possibilities include:

```text
Custom events
Shared state
Context
URL/state
Event bus
Shared libraries
```

You need to avoid creating excessive coupling.

---

### 3. Consistent UI

Imagine:

```text
Product → blue button
Cart    → green button
Checkout → red button
```

The application becomes inconsistent.

Therefore, organizations often create a shared:

```text
Design System
     │
     ├── Button
     ├── Input
     ├── Modal
     ├── Table
     └── Typography
```

This can also be shared through Module Federation or an npm package.

---

### 4. Performance

You potentially have:

```text
Host
 ↓
Product
 ↓
Cart
 ↓
Checkout
```

Each may introduce JavaScript, dependencies, network requests, etc.

Poorly designed micro-frontends can actually make performance **worse**.

---

### 5. Debugging becomes harder

Instead of:

```text
One application
     ↓
One deployment
```

you might have:

```text
Host
Product
Cart
Checkout
Auth
Design System
```

A production issue may involve multiple applications.

---

# 17. Shared dependencies

This is one of the important Module Federation concepts.

Suppose:

```text
Host → React 19
Product → React 19
Cart → React 19
```

You don't necessarily want three copies of React loaded.

You can configure dependencies to be shared.

Conceptually:

```text
             React
               ↑
       ┌───────┼────────┐
       │       │        │
      Host   Product   Cart
```

Module Federation supports concepts such as:

```js
shared: {
  react: {
    singleton: true
  },
  "react-dom": {
    singleton: true
  }
}
```

`singleton: true` is particularly important for libraries where multiple instances can cause problems.

---

# 18. Runtime loading

This is one of the biggest differences from a normal frontend.

Imagine:

```text
Host deployed on Monday
```

Product team deploys:

```text
Product MF v5
```

on Wednesday.

The host doesn't necessarily have to be rebuilt just because Product MF changed.

The host can load the new remote at runtime, depending on the deployment/versioning strategy.

```text
Monday
Host ────────────────→ Product v4

Wednesday
Host ────────────────→ Product v5
```

That's where Module Federation becomes very powerful.

---

# 19. How routing can work

You might have:

```text
example.com/products
example.com/cart
example.com/checkout
```

The host can route requests:

```text
/products
    ↓
Product Micro-frontend

/cart
    ↓
Cart Micro-frontend

/checkout
    ↓
Checkout Micro-frontend
```

The user still sees one website.

---

# 20. Authentication

Usually, authentication is handled centrally.

For example:

```text
                  Host
                   │
              Authentication
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
     Product      Cart     Checkout
```

The micro-frontends need access to the authenticated user's context.

But you should avoid every micro-frontend implementing authentication independently.

---

# 21. How micro-frontends communicate

Suppose a user adds a product to the cart.

```text
Product MF
    │
    │ "PRODUCT_ADDED"
    ↓
Event
    │
    ↓
Cart MF
```

One approach is browser custom events:

```js
window.dispatchEvent(
  new CustomEvent("product-added", {
    detail: {
      productId: 123
    }
  })
);
```

Another micro-frontend can listen:

```js
window.addEventListener("product-added", (event) => {
  console.log(event.detail.productId);
});
```

The exact approach depends on your architecture.

---

# 22. When should you use Micro-frontends?

Micro-frontends make sense when you have:

```text
Large organization
       +
Multiple teams
       +
Large application
       +
Independent releases
       +
Clear business domains
```

For example:

```text
100+ frontend developers
        ↓
Multiple teams
        ↓
Different business domains
        ↓
Frequent independent releases
        ↓
Micro-frontends may make sense
```

But for:

```text
5 developers
1 application
1 business domain
```

Micro-frontends may be unnecessary complexity.

A well-structured monolithic React application could be much better.

---

# 23. Micro-frontends vs normal React components

This is another common interview question.

A normal React component:

```text
Button
Navbar
Modal
ProductCard
```

is usually part of the **same application/build**.

A micro-frontend is generally:

```text
Independently owned
Independently built
Potentially independently deployed
```

For example:

```text
Normal component:

Host
 └── ProductCard
      └── same build


Micro-frontend:

Host
 └── Product MF
      └── independently built/deployed
```

---

# 24. Simple mental model

Remember these three levels:

```text
                 MICRO-FRONTEND
                       │
              Architecture pattern
                       │
          "Split frontend by domain"
                       │
                       ↓
              MODULE FEDERATION
                       │
                 Technology
                       │
          "Load modules at runtime"
                       │
                       ↓
                 REACT / ANGULAR
                       │
                    Framework
```

So if an interviewer asks:

### "What is Micro-frontend?"

Say:

> **Micro-frontend is an architectural approach where a large frontend is divided into smaller, independently developed and deployed applications, usually aligned with business domains or teams.**

### "What is Module Federation?"

Say:

> **Module Federation is a technology that allows independently built frontend applications to expose and consume modules at runtime. It is commonly used to implement micro-frontends and supports concepts such as remote modules and shared dependencies.**

### "Are they the same?"

Say:

> **No. Micro-frontends are an architectural pattern, while Module Federation is a technology that can be used to implement that architecture.**

That distinction is probably the **most important thing to remember for an interview**.
