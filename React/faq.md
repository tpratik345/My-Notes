
# Frequently Asked Interview Follow-up Questions or Advanced React Questions

## 1. Why is React faster?

   * Because of Virtual DOM and diffing.

## 2. Why use hooks instead of class components?

   * Less code, reusable logic, easier to maintain.

## 3. When should you use Context API instead of Redux?

   * When the state is small and simple.

## 4. Why is `useEffect` dependency array important?

   * It controls when the effect should run.

```js
useEffect(() => {
  fetchData();
}, []);
```

## 5. Why should we avoid using array index as key?

   * It can cause incorrect UI updates if list order changes.

## 6. Concurrent Rendering vs Incremental Rendering in React

### Incremental Rendering

Incremental Rendering means rendering the UI in smaller chunks or steps instead of rendering everything at once.
The idea is to split a large rendering task into smaller pieces so that the browser can stay responsive.
React may render part of the tree first and then continue with the remaining parts.

#### Example

Imagine a page with:

* Header
* Sidebar
* Large dashboard with 10,000 rows

Instead of waiting for all 10,000 rows to render before showing anything, incremental rendering may:

1. Render the header first
2. Then render the sidebar
3. Then gradually render the large table

This gives the user faster visual feedback.

Incremental Rendering is often seen with:

* Lazy loaded components
* `Suspense`
* Streaming server rendering
* Rendering large lists in chunks

```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

In this case:

* The main page appears immediately
* The dashboard loads later
* UI is shown incrementally

---

### Concurrent Rendering

Concurrent Rendering is a feature introduced in React 18 that allows React to prepare multiple versions of the UI in the background and decide which update is most important.

Instead of blocking the browser until the entire render is finished, React can:

* Pause rendering work
* Resume it later
* Abandon outdated work
* Prioritize more important updates

This makes the application feel faster and more responsive.

#### Example

Suppose a user is typing into a search box while a large list is being filtered.

Without Concurrent Rendering:

* React blocks the UI while filtering the large list
* Typing may feel slow or laggy

With Concurrent Rendering:

* React gives higher priority to the typing update
* The expensive list rendering can happen later in the background
* The input remains smooth

```jsx
import { useState, useTransition } from 'react';

function SearchPage() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value); // urgent update

    startTransition(() => {
      setQuery(value); // low priority update
    });
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <LargeList filter={query} />
    </>
  );
}
```

Here:

* Updating the input value is urgent
* Rendering the filtered list is less urgent
* React can interrupt the list rendering if the user types again

#### Key Characteristics of Concurrent Rendering

* Introduced in React 18
* Not enabled globally by default; specific features use it
* Allows interruption of rendering
* Helps keep the UI responsive
* Works with features like:

  * `useTransition`
  * `startTransition`
  * `Suspense`
  * `useDeferredValue`

---

### Main Difference

| Feature                   | Incremental Rendering                       | Concurrent Rendering                    |
| ------------------------- | ------------------------------------------- | --------------------------------------- |
| Purpose                   | Render UI in smaller chunks                 | Prioritize and interrupt rendering work |
| Focus                     | Breaking work into stages                   | Scheduling and priority                 |
| Can pause/resume?         | Usually no explicit priority handling       | Yes                                     |
| Can cancel outdated work? | No                                          | Yes                                     |
| Improves                  | Faster initial display of UI                | Responsiveness during user interaction  |
| Common APIs               | `Suspense`, lazy loading, chunked rendering | `useTransition`, `useDeferredValue`     |

---

### Simple Analogy

Imagine a chef preparing food.

#### Incremental Rendering

The chef serves the meal in parts.

Example:

* First serves drinks
* Then starters
* Then the main course

This is like React showing part of the UI first and the rest later.

#### Concurrent Rendering

The chef is cooking several dishes and can stop making one dish if an urgent order comes in.

Example:

* Chef starts cooking pasta
* Suddenly an urgent coffee order comes
* Chef pauses pasta and makes coffee first

This is like React prioritizing urgent UI updates.

---

### Interview-Friendly Answer

Concurrent Rendering is React's ability to pause, resume, and prioritize rendering work so the UI remains responsive, especially during expensive updates.

Incremental Rendering, on the other hand, is the process of rendering the UI in smaller pieces or stages so that users can see content earlier instead of waiting for the entire page to render.

In short:
* Concurrent Rendering = smarter scheduling
* Incremental Rendering = gradual rendering

---

## 7. Why using strict mode in react calls `useEffect` 2 times?

In React 18+, when your app is wrapped in `StrictMode`, React intentionally mounts, unmounts, and mounts your component again in development. That means a useEffect with [] dependencies runs like this:

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

Component mounts → effect runs
Component unmounts → cleanup runs
Component mounts again → effect runs again

This is done only in development, not in production. React does it to help you catch bugs such as:
* Missing cleanup functions
* Memory leaks
* Effects that assume they only ever run once

For example:
```jsx
useEffect(() => {
  const socket = connect();

  return () => socket.disconnect();
}, []);
```
If you forget the cleanup, the extra mount in `StrictMode` exposes the bug immediately because you end up with two connections.

---

## 8. can we declare like this `let [data1, setData1] = useState(true)`
### 1. useState Hook:
  - The useState hook is used to create a state variable in a functional component.
  - It returns an array with two elements:
    - The current state value (here, data1).
    - A function to update the state (here, setData1).

Destructuring: The [data1, setData1] syntax uses array destructuring to assign the elements of the array returned by useState to variables.

Although using `let` works, it's more common to declare state variables using `const`:

```jsx
const [data1, setData1] = useState(true);
```

Why Use const?

The reference to the `data1` variable and the `setData1` function never changes; only the value of data1 changes when the state is updated.


Using const reflects the intention that the state variable and its setter are not reassigned.

### Can You Use let?
Technically, `yes`. Using `let` instead of `const` won't throw an error, but it's unnecessary and less idiomatic in React, where immutability and clear intentions are emphasized.

---

## 9. what happens to `useEffect` cleanup function based on the dependencies we are passing or no dependency or empty dependency

### 1. No Dependency Array (Effect Runs After Every Render)

* Behavior:
    - Cleanup function: The cleanup function runs before the effect runs again on every render. This ensures that any previous effect is cleaned up before running a new one.
    - It runs on every render after the first, meaning the effect is cleaned up and then re-executed after each render.

* Use Case:
    - This approach is typically used for effects that need to be reset or cleaned up after every render, such as event listeners, intervals, or other resources that could cause issues if not cleared between renders.

* Example:
```jsx

useEffect(() => {
  console.log("Effect running");
  
  return () => {
    console.log("Cleanup before next render");
  };
});
```

### 2. Empty Dependency Array `([])`
* Behavior:
  - Effect: The effect runs only once, after the component mounts (equivalent to componentDidMount in class components).
  - Cleanup function: The cleanup function will run once when the component unmounts (equivalent to componentWillUnmount in class components).
  - Since the effect runs only once (on mount), the cleanup function is triggered only when the component unmounts.

* Use Case:
  - Useful for setting up resources like subscriptions, timers, or event listeners that need to be cleaned up when the component is removed.

* Example:

```jsx
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []); // Cleanup happens only on unmount
```

### 3. With Dependencies `([dep1, dep2])`
* Behavior:
  - Effect: The effect runs after the initial render and whenever any of the specified dependencies change.
  - Cleanup function: The cleanup function will run before the effect runs again, which ensures that any previous effect is cleaned up before the new effect runs.
  - Cleanup on unmount: It will also run when the component is unmounted, in case dependencies don’t change.

* Use Case:
  - This is the most common case when you need to run an effect that depends on specific values (e.g., state or props) and clean up before the effect re-runs.

* Example:

```jsx
useEffect(() => {
  console.log("Effect running due to dependency change");

  return () => {
    console.log("Cleanup before effect rerun");
  };
}, [dep1, dep2]); // Cleanup happens when dep1 or dep2 changes or component unmounts
```

### Behavior Summary of Cleanup Based on Dependencies

| Dependency Array     | When Cleanup Runs                                                                       | When Effect Runs                                                           |
| -------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| None                 | Before the effect runs on every render (after each render).                             | After every render.                                                        |
| Empty (`[]`)         | Only when the component unmounts.                                                       | Only once, after the component mounts (equivalent to `componentDidMount`). |
| Specified (`[dep1]`) | Before the effect runs again, whenever any listed dependency changes. Also, on unmount. | After the initial render and whenever any dependency changes.              |

---

## 10. What is use of passing a callback function to the useState.

Passing a `callback` function to useState in React serves two distinct purposes depending on whether you pass it to the `initial state `(inside useState()) or to the `state updater function` (the setter).

### 1. Passing a Callback as the Initial State (Lazy Initialization)
- When you pass a function directly inside the useState() call, it is known as `lazy initialization`.
- The Main Purpose:
  - Performance Optimization: It prevents expensive, heavy computational logic from running on every single component re-render.

### The Code Problem
  - This expensive calculation runs on the first mount and every single time the component re-renders for any reason, wasting CPU cycles:
```jsx
  // BAD: Runs every re-render
  const [data, setData] = useState(getExpensiveData()); 
```

### The Callback Solution
  - By wrapping the logic in an arrow function wrapper, React recognizes it as an initializer function.
  - It will only run once when the component initially mounts:
```jsx
// GOOD: Runs ONLY on initial mount
const [data, setData] = useState(() => getExpensiveData()); 
```

### 2. Passing a Callback to the State Updater (Functional Updates)
- When you pass a callback function to the state setter, it is known as a functional update.
- The Main Purpose:
  - Prevents Stale State Bugs: It ensures your update always uses the most recent, up-to-date state.
  - Handles Batching: React batches state updates together for performance. If you perform multiple rapid updates, reading the state variable directly can result in using a "stale" snapshot.

### The Code Problem
If you click this button, the count only increments by 1, not 3:
```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1); // Reads count as 0 -> schedules 1
  setCount(count + 1); // Reads count as 0 -> schedules 1
  setCount(count + 1); // Reads count as 0 -> schedules 1
}
```

### The Callback Solution
- By passing a callback, React hands you the absolute latest pending state dynamically. This button correctly increments by 3:

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(prev => prev + 1); // prev is 0 -> returns 1
  setCount(prev => prev + 1); // prev is 1 -> returns 2
  setCount(prev => prev + 1); // prev is 2 -> returns 3
}
```

### Summary Checklist
  - Use a callback in useState(() => ...) when parsing large local storage items, processing heavy arrays, or running complex initial data setups.
  - Use a callback in setCount(prev => ...) whenever your new state calculation explicitly relies on what the previous state value currently is.

## 11. Where is the redux & context api data is actually getting stored in an application.

The key idea is: **both Context API and Redux store data in JavaScript memory inside your running React application**. They don't automatically save data to a database or browser storage.

### Context API

When you create a Context and put a value in its Provider:

```jsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Pratik" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```

The data is essentially held by the **React component/state system in memory**.

```text
Browser
  ↓
JavaScript memory
  ↓
React App
  ↓
Context Provider
  ↓
{ user: { name: "Pratik" } }
```

Any component under the Provider can access that value using `useContext()`.

If you **refresh the page**, that in-memory state normally disappears and React starts again from its initial state.

---

### Redux

Redux works similarly, but Redux maintains a dedicated **store object in JavaScript memory**.

```jsx
const store = configureStore({
  reducer: {
    user: userReducer
  }
});
```

Conceptually:

```text
Browser
  ↓
JavaScript memory
  ↓
Redux Store
  ↓
{
  user: {
    name: "Pratik",
    age: 25
  },
  cart: {
    items: [...]
  }
}
```

When you do:

```jsx
dispatch(setUser({ name: "Pratik" }));
```

Redux updates its in-memory store.

Components using:

```jsx
const user = useSelector(state => state.user);
```

receive the updated data.

---

### So where is it *physically* stored?

In normal usage:

**RAM (memory allocated to the browser's JavaScript runtime).**

Not automatically:

* ❌ MySQL
* ❌ MongoDB
* ❌ Server
* ❌ `localStorage`
* ❌ Cookies
* ❌ A physical Redux/Context file

Think of it like this:

```text
                 Browser
                    │
              JavaScript RAM
                    │
          ┌─────────┴─────────┐
          │                   │
      Context              Redux
          │                   │
      React state          Store
          │                   │
          └─────────┬─────────┘
                    │
              React Components
```

### What happens on refresh?

Suppose Redux contains:

```js
{
  user: {
    name: "Pratik"
  }
}
```

You press **F5**:

```text
Before refresh:
Redux Store → { user: { name: "Pratik" } }

             ↓ F5

Browser reloads JavaScript

             ↓

Redux Store → initialState
```

The data is gone **unless you explicitly *persist* it**.

For example, you can use `localStorage` yourself or a persistence library such as Redux Persist:

```text
Redux Store
     ↕
localStorage
```

Then after a refresh, the application can restore the Redux state from `localStorage`.

**One important distinction:** Context API doesn't actually have its own independent "database/store." It distributes whatever value you give to the Provider. Redux, on the other hand, has an explicit centralized store containing the application state.
