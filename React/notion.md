# React Interview Preparation Guide

## Index

1. Fundamentals

   * What is React
   * What is Single Page Application (SPA)
   * Advantages of SPA
   * Client Side Rendering (CSR)
   * Server Side Rendering (SSR)

2. Components

   * Functional Components
   * Class Components
   * Stateless Components
   * Pure Components
   * Composable Components
   * Render Props
   * Children Prop
   * Fragments
   * Keys in Lists

3. State & Props

   * State
   * Props
   * State vs Props
   * Why State Should Not Be Updated Directly
   * Lifting State Up
   * Prop Drilling

4. Events

   * preventDefault()
   * Controlled Components
   * Uncontrolled Components
   * Refs vs Controlled Inputs

5. Hooks

   * useState
   * useEffect
   * useEffect Cleanup
   * Dependency Array
   * useRef
   * useMemo
   * useCallback
   * useContext
   * Custom Hooks
   * Rules of Hooks
   * When Not to Use useMemo / useCallback

6. Lifecycle

   * Component Lifecycle Phases
   * Mounting Phase
   * Updating Phase
   * Unmounting Phase
   * Lifecycle Methods Order
   * Error Boundaries
   * Strict Mode

7. Rendering & Virtual DOM

   * Virtual DOM
   * Diffing Algorithm
   * Reconciliation
   * Why Virtual DOM is Faster
   * Performance Considerations
   * Batch Updates

8. Performance Optimization

   * React.memo
   * Memoization
   * Throttling / Debouncing
   * Virtualization
   * Lazy Rendering

9. Code Splitting & Lazy Loading

   * Code Splitting
   * React.lazy
   * Suspense
   * Route-level Lazy Loading
   * Component-level Lazy Loading
   * Image Lazy Loading

10. Routing

* Client-side Routing
* React Router
* Nested Routes
* Route-based Code Splitting

11. State Management

* Context API
* Redux Basics
* Redux Toolkit
* useSelector / useDispatch
* Middleware
* Zustand
* When Not to Use Redux

12. React 18 / Modern React

* Concurrent Rendering
* Automatic Batching
* Streaming SSR
* React Server Components

13. DOM Concepts

* Shadow DOM
* Event Delegation
* Synthetic vs Native Events

14. Common Interview Traps

* Why Keys Should Not Be Index
* Why useEffect Runs Twice in Strict Mode
* Props Mutation Anti-pattern
* State Mutation Issues
* Context Re-render Problem
* SEO Challenges in React

---

# 1. Fundamentals

## What is React

React is an open-source JavaScript library developed by entity["company","Meta","Menlo Park, California, USA"] for building user interfaces, especially single-page applications.

### Key Features

* Component-based architecture
* Declarative UI
* Virtual DOM
* Reusable components
* One-way data flow
* Efficient rendering

### Example

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Why React is Popular

* Faster UI updates using Virtual DOM
* Huge ecosystem
* Reusable components
* Strong community support
* Used by companies like Netflix, Meta, Airbnb

---

## What is Single Page Application (SPA)

A Single Page Application is a web application that loads a single HTML page and dynamically updates the UI without reloading the entire page.

### How SPA Works

1. Browser loads one HTML file.
2. JavaScript takes control.
3. API calls fetch data.
4. Only required UI parts update.

### Examples

* Gmail
* Facebook
* Twitter
* Netflix

### Advantages

* Faster navigation
* Better user experience
* Reduced server load
* Smooth transitions

### Disadvantages

* SEO challenges
* Large initial bundle size
* Slower first load in some cases

---

## Advantages of SPA (Very Important)

| Advantage                | Explanation                             |
| ------------------------ | --------------------------------------- |
| Faster Navigation        | No full-page reloads                    |
| Better UX                | Smooth transitions                      |
| Reduced Server Rendering | Most rendering happens in browser       |
| Reusable APIs            | Frontend and mobile apps can share APIs |
| Caching                  | Static resources can be cached          |
| Separation of Concerns   | Frontend and backend can be independent |

---

## Client Side Rendering (CSR)

In CSR, the browser downloads a minimal HTML page and JavaScript bundle. React renders the UI in the browser.

### Flow

1. Browser requests app.
2. Server sends HTML + JS.
3. React loads.
4. React renders UI.

### Pros

* Rich interactivity
* Smooth navigation
* Reduced server rendering cost

### Cons

* Poor SEO
* Slow initial load
* Blank page until JS loads

---

## Server Side Rendering (SSR)

In SSR, HTML is generated on the server and sent to the browser.

### Flow

1. Browser requests page.
2. Server renders React app.
3. HTML is sent to browser.
4. React hydrates the page.

### Pros

* Better SEO
* Faster first contentful paint
* Better performance on slower devices

### Cons

* More server load
* Complex architecture
* Hydration cost

### CSR vs SSR

| Feature       | CSR             | SSR                  |
| ------------- | --------------- | -------------------- |
| Rendering     | Browser         | Server               |
| SEO           | Weak            | Strong               |
| Initial Load  | Slower          | Faster               |
| Interactivity | Fast after load | Fast after hydration |
| Server Cost   | Lower           | Higher               |

---

# 2. Components

## What are Functional Components

Functional components are JavaScript functions that return JSX.

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### Advantages

* Simpler syntax
* Easier to test
* Hooks support
* Better readability

---

## What are Class Components

Class components are ES6 classes that extend React.Component.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

### Features

* Lifecycle methods
* Internal state
* More verbose

### Why Less Used Now

Hooks replaced most class component use cases.

---

## What are Stateless Components

Components without state are called stateless components.

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### Characteristics

* Only receive props
* No internal state
* Easy to reuse

---

## What are Pure Components (Important)

Pure components prevent unnecessary re-renders by performing shallow comparison.

### In Class Components

```jsx
class MyComponent extends React.PureComponent {}
```

### In Functional Components

```jsx
export default React.memo(MyComponent)
```

### Shallow Comparison Checks

* Previous props vs new props
* Previous state vs new state

### Benefits

* Performance optimization
* Avoid unnecessary renders

### Interview Trap

Mutating objects breaks shallow comparison.

Bad:

```js
user.name = 'John'
setUser(user)
```

Good:

```js
setUser({ ...user, name: 'John' })
```

---

## Composable Components

Composable components are components designed to work together.

### Example

```jsx
<Card>
  <Card.Header />
  <Card.Body />
</Card>
```

### Benefits

* Reusability
* Cleaner code
* Flexible architecture

---

## Render Props

Render props is a pattern where a component shares logic using a function prop.

```jsx
<DataProvider render={(data) => <h1>{data}</h1>} />
```

### Use Cases

* Sharing reusable logic
* Avoiding duplicated code

### Modern Replacement

Custom hooks replaced most render prop usage.

---

## Children Prop

`children` allows passing components or JSX inside another component.

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

Usage:

```jsx
<Card>
  <h1>Hello</h1>
</Card>
```

---

## Fragments

Fragments group multiple elements without adding extra DOM nodes.

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

### Why Use Fragments

* Cleaner DOM
* Avoid unnecessary wrapper divs

---

## Keys in Lists

Keys help React identify list items uniquely.

```jsx
users.map(user => (
  <li key={user.id}>{user.name}</li>
))
```

### Why Keys are Important

* Efficient updates
* Proper reconciliation
* Better performance

### Why Index Should Not Be Used

* Causes incorrect re-renders
* Breaks state preservation
* Bad for dynamic lists

---

# 3. State & Props

## What is State

State is mutable data managed inside a component.

```jsx
const [count, setCount] = useState(0)
```

### Characteristics

* Private to component
* Causes re-render on update
* Mutable through setter function

---

## What are Props

Props are read-only data passed from parent to child.

```jsx
<Greeting name="Pratik" />
```

---

## State vs Props

| Feature   | State                | Props            |
| --------- | -------------------- | ---------------- |
| Mutable   | Yes                  | No               |
| Owned By  | Component itself     | Parent component |
| Purpose   | Manage internal data | Pass data        |
| Re-render | Yes                  | Yes              |

---

## Why State Should Not Be Updated Directly (Very Important)

Bad:

```js
count = count + 1
```

Good:

```js
setCount(prev => prev + 1)
```

### Reasons

* React cannot detect direct mutations
* No re-render happens
* Breaks predictable updates
* Can cause stale UI

### React Uses Immutable Updates

React compares references to detect changes.

---

## Lifting State Up

Moving shared state to the nearest common parent.

### Why

To share data between sibling components.

### Example

```jsx
function Parent() {
  const [value, setValue] = useState('')

  return (
    <>
      <Input value={value} setValue={setValue} />
      <Preview value={value} />
    </>
  )
}
```

---

## What is Prop Drilling

Passing props through multiple layers unnecessarily.

### Problem

```jsx
App → Parent → Child → GrandChild
```

### Solution

* Context API
* Redux
* Zustand

---

# 4. Events

## What is preventDefault()

Stops browser default behavior.

```jsx
function handleSubmit(e) {
  e.preventDefault()
}
```

### Examples

* Prevent form submission reload
* Prevent anchor navigation

---

## What are Controlled Components (Important)

Inputs controlled by React state.

```jsx
const [name, setName] = useState('')

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Benefits

* Single source of truth
* Easier validation
* Better debugging

---

## What are Uncontrolled Components

Inputs managed by the DOM itself.

```jsx
const inputRef = useRef()

<input ref={inputRef} />
```

---

## Refs vs Controlled Inputs

| Feature     | Controlled      | Refs   |
| ----------- | --------------- | ------ |
| Managed By  | React State     | DOM    |
| Re-render   | Yes             | No     |
| Validation  | Easier          | Harder |
| Performance | Slightly slower | Faster |

---

# 5. Hooks

## useState

Used for state management in functional components.

```jsx
const [count, setCount] = useState(0)
```

### Important Points

* State updates are asynchronous
* Causes re-render
* Setter can accept callback

```js
setCount(prev => prev + 1)
```

---

## useEffect

Used for side effects.

### Examples of Side Effects

* API calls
* Timers
* Event listeners
* Subscriptions

```jsx
useEffect(() => {
  console.log('Mounted')
}, [])
```

---

## useEffect Cleanup

Cleanup prevents memory leaks.

```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000)

  return () => clearInterval(timer)
}, [])
```

### Use Cases

* Clear timers
* Remove event listeners
* Abort API requests

---

## Dependency Array

Controls when useEffect runs.

### Cases

```jsx
useEffect(() => {})
```

Runs after every render.

```jsx
useEffect(() => {}, [])
```

Runs once after mount.

```jsx
useEffect(() => {}, [count])
```

Runs when count changes.

---

## useRef

Stores mutable values without re-rendering.

```jsx
const inputRef = useRef()
```

### Use Cases

* Access DOM
* Store previous value
* Store timer IDs

### Important

Changing ref does not cause re-render.

---

## useMemo

Memoizes expensive computations.

```jsx
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])
```

### Use Cases

* Expensive calculations
* Prevent unnecessary recalculations

### Important

Do not overuse useMemo.

---

## useCallback

Memoizes functions.

```jsx
const handleClick = useCallback(() => {
  console.log('clicked')
}, [])
```

### Why Use It

Prevents unnecessary child re-renders.

---

## useContext

Access shared data without prop drilling.

```jsx
const value = useContext(UserContext)
```

### Use Cases

* Theme
* Authentication
* Language settings

---

## Custom Hooks

Reusable logic extracted into functions.

```jsx
function useCounter() {
  const [count, setCount] = useState(0)
  return { count, setCount }
}
```

### Benefits

* Reusable logic
* Cleaner components
* Better abstraction

---

## Rules of Hooks

### Rule 1

Only call hooks at the top level.

### Rule 2

Only call hooks inside React functions.

Bad:

```js
if (condition) {
  useEffect(() => {})
}
```

Why?

React relies on hook order consistency.

---

## When Not to Use useMemo / useCallback

Do not use them:

* For cheap calculations
* Everywhere blindly
* Without performance issue

### Why?

Memoization itself has cost.

---

# 6. Lifecycle (Very Very Important)

## Component Lifecycle Phases

1. Mounting
2. Updating
3. Unmounting

---

## Mounting Phase

Component is created and inserted into DOM.

### Class Lifecycle Methods

* constructor
* render
* componentDidMount

---

## Updating Phase

Occurs when props or state changes.

### Methods

* shouldComponentUpdate
* render
* componentDidUpdate

---

## Unmounting Phase

Component removed from DOM.

### Method

* componentWillUnmount

Used for cleanup.

---

## Lifecycle Methods Order (Mounting)

```text
constructor
↓
render
↓
componentDidMount
```

---

## Error Boundaries

Error boundaries catch JavaScript errors in child components.

```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log(error)
  }
}
```

### Important

They do NOT catch:

* Event handler errors
* Async errors
* Server-side errors

---

## Strict Mode

StrictMode is a development tool.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

### Purpose

* Detect unsafe lifecycle usage
* Detect side effects
* Highlight deprecated APIs

### Interview Trap

Why useEffect runs twice?

In development mode, StrictMode intentionally mounts/unmounts components twice to detect side effects.

---

# 7. Rendering & Virtual DOM

## Virtual DOM

Virtual DOM is a lightweight JavaScript representation of the real DOM.

### Process

1. React creates Virtual DOM.
2. State changes.
3. New Virtual DOM created.
4. Diffing compares changes.
5. Real DOM updates minimally.

---

## What is Diffing Algorithm

Algorithm React uses to compare old and new Virtual DOM trees.

### Goal

Find minimal changes.

### Assumptions

1. Different element types create different trees.
2. Keys identify stable elements.

---

## Reconciliation

Process of updating the DOM efficiently using diffing.

### Example

React updates only changed nodes instead of entire page.

---

## Why Virtual DOM is Faster

React does NOT make DOM fast.

DOM operations are expensive.

Virtual DOM minimizes real DOM manipulations.

### Reasons

* Batch updates
* Efficient diffing
* Minimal DOM changes

---

## Performance Considerations of Virtual DOM

### Virtual DOM Still Has Cost

* Memory usage
* Reconciliation cost
* Re-render cost

### Optimization Needed For

* Huge lists
* Frequent renders
* Complex trees

---

## Batch Updates (Very Important)

React batches multiple state updates into one render.

```jsx
setCount(c => c + 1)
setLoading(true)
```

React combines them into one render.

### Benefits

* Better performance
* Fewer renders

---

# 8. Performance Optimization

## React.memo

Prevents re-render if props do not change.

```jsx
export default React.memo(Component)
```

### Uses shallow comparison.

---

## Memoization

Caching expensive computations.

### Tools

* useMemo
* useCallback
* React.memo

---

## Throttling / Debouncing

### Debouncing

Delays execution until user stops typing.

### Example

Search input.

### Throttling

Limits execution frequency.

### Example

Scroll events.

---

## Virtualization

Renders only visible items.

### Libraries

* react-window
* react-virtualized

### Benefits

* Better performance for huge lists
* Reduced DOM nodes

---

## Lazy Rendering

Render content only when needed.

### Examples

* Infinite scrolling
* Lazy loaded components

---

# 9. Code Splitting & Lazy Loading

## Code Splitting

Splits large bundle into smaller chunks.

### Benefits

* Faster initial load
* Better performance

---

## React.lazy

Dynamically imports components.

```jsx
const Home = React.lazy(() => import('./Home'))
```

---

## Suspense

Shows fallback UI while lazy component loads.

```jsx
<Suspense fallback={<Loader />}>
  <Home />
</Suspense>
```

---

## Route-level Lazy Loading

Lazy load pages/routes.

```jsx
const Dashboard = lazy(() => import('./Dashboard'))
```

---

## Component-level Lazy Loading

Lazy load heavy components.

### Examples

* Charts
* Modals
* Editors

---

## Image Lazy Loading

```html
<img loading="lazy" />
```

### Benefits

* Reduced bandwidth
* Faster page load

---

# 10. Routing

## Client-side Routing

Routing handled in browser without page reload.

---

## React Router

Popular routing library for React.

### Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

---

## Nested Routes

Routes inside routes.

```jsx
<Route path="dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

## Route-based Code Splitting

Lazy load route components.

### Benefits

* Smaller bundles
* Faster startup

---

# 11. State Management

## Context API

Provides global shared state.

### Best For

* Theme
* Auth
* Language

### Not Ideal For

Frequently changing large state.

---

## Redux Basics

Redux is predictable state management.

### Core Concepts

* Store
* Action
* Reducer
* Dispatch

### Flow

```text
UI → Dispatch → Reducer → Store → UI
```

---

## Redux Toolkit

Official recommended Redux approach.

### Advantages

* Less boilerplate
* Easier setup
* Built-in Immer
* Better developer experience

---

## useSelector / useDispatch

### useSelector

Reads Redux state.

```jsx
const user = useSelector(state => state.user)
```

### useDispatch

Dispatches actions.

```jsx
dispatch(addTodo())
```

---

## Middleware

Middleware intercepts actions before reducers.

### Examples

* redux-thunk
* redux-saga
* logger

### Use Cases

* API calls
* Async operations
* Logging

---

## Zustand

Lightweight state management library.

### Advantages

* Simple API
* Minimal boilerplate
* Small bundle size

---

## When Not to Use Redux

Do not use Redux for:

* Small apps
* Simple state
* Local component state

### Why?

Redux adds complexity.

---

# 12. React 18 / Modern React

## Concurrent Rendering

Allows React to interrupt rendering for better responsiveness.

### Benefits

* Smoother UI
* Better user experience
* Prioritized updates

---

## Automatic Batching

React 18 batches updates automatically even inside:

* Promises
* Timeouts
* Native events

---

## Streaming SSR

Server streams HTML progressively.

### Benefits

* Faster page display
* Better UX

---

## React Server Components

Components rendered on server.

### Benefits

* Smaller bundle size
* Faster rendering
* Better performance

---

# 13. DOM Concepts

## Shadow DOM

Encapsulated DOM tree separated from main DOM.

### Used In

* Web Components
* Style isolation

---

## Event Delegation

Handling events at parent level instead of child.

### Benefits

* Better performance
* Fewer event listeners

---

## Synthetic vs Native Events

| Feature       | Synthetic Event | Native Event |
| ------------- | --------------- | ------------ |
| Managed By    | React           | Browser      |
| Cross-browser | Yes             | No           |
| Performance   | Optimized       | Normal       |

---

# 14. Common Interview Traps (Very Very Important)

## Why Keys Should Not Be Index

Using index as key causes:

* Wrong DOM updates
* Incorrect state mapping
* Rendering bugs

Especially when:

* List order changes
* Items inserted/deleted

---

## Why useEffect Runs Twice in Strict Mode

In development mode, React intentionally double invokes effects to detect side effects and cleanup issues.

Production build does not do this.

---

## Props Mutation Anti-pattern

Bad:

```js
props.user.name = 'John'
```

### Why Bad?

* Breaks unidirectional flow
* Causes unpredictable behavior
* Breaks memoization

---

## State Mutation Issues

Bad:

```js
state.items.push(item)
setState(state)
```

Good:

```js
setState({
  items: [...state.items, item]
})
```

### Problems with Mutation

* React may skip re-render
* Bugs become harder to debug
* Breaks PureComponent and React.memo

---

## Context Re-render Problem

When context value changes, all consumers re-render.

### Solutions

* Split contexts
* Memoize values
* Use Redux/Zustand

---

## SEO Challenges in React

CSR applications may have poor SEO because content loads after JavaScript execution.

### Solutions

* SSR
* Static Site Generation
* Next.js
* Pre-rendering

---

# Quick Revision Notes

## Most Frequently Asked React Interview Topics

### Extremely Important

* Virtual DOM
* Reconciliation
* Diffing
* useEffect
* useMemo vs useCallback
* Controlled Components
* State mutation
* Props vs State
* Lifecycle methods
* Redux flow
* React.memo
* Strict Mode
* Batch updates
* SSR vs CSR
* Keys in lists

### Must Know Coding Concepts

* Debouncing
* Throttling
* Infinite scrolling
* Lazy loading
* Memoization
* Context optimization
* API handling
* Cleanup functions

---

# Final Interview Tips

1. Always explain WHY, not only WHAT.
2. Mention performance implications.
3. Explain React internals simply.
4. Use practical examples.
5. Mention trade-offs.
6. Avoid memorized definitions only.
7. Focus heavily on hooks and rendering behavior.
8. Practice debugging re-render issues.

---

# End of Guide
