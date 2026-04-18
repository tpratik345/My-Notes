# React Interview Question Bank – Questions & Answers

## 1. What is the difference between Real DOM and Virtual DOM?

| Real DOM                                 | Virtual DOM                          |
| ---------------------------------------- | ------------------------------------ |
| Actual browser DOM                       | Lightweight JS representation of DOM |
| Updating is slow                         | Updating is fast                     |
| Entire tree may re-render                | Only changed parts are updated       |
| Causes performance issues for large apps | Improves performance using diffing   |

React creates a Virtual DOM, compares it with the previous one, and updates only the changed elements in the Real DOM.

---

## 2. What is Flux Architecture?

Flux is a unidirectional data flow architecture.

Flow:

`Action -> Dispatcher -> Store -> View`

* Action: describes what happened
* Dispatcher: sends action to store
* Store: holds application state
* View: UI updates based on state

Redux is inspired by Flux.

---

## 3. Explain Redux concepts: store, action, reducer, dispatch

* Store: central place where state is stored
* Action: object describing what happened
* Reducer: function that returns updated state
* Dispatch: sends an action to reducer

Example:

```js
const action = { type: 'INCREMENT' };

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}
```

---

## 4. What are Higher Order Components (HOC)?

A Higher Order Component is a function that takes a component and returns a new component.

```js
const EnhancedComponent = withAuth(MyComponent);
```

Use cases:

* Reuse logic
* Authentication
* Logging
* Permission handling

---

## 5. What is `super` in React?

In class components, `super(props)` is used inside the constructor to access `this.props`.

```js
constructor(props) {
  super(props);
}
```

Without `super(props)`, `this.props` will be undefined.

---

## 6. Difference between Stateful and Stateless Components

| Stateful Component        | Stateless Component   |
| ------------------------- | --------------------- |
| Has state                 | No state              |
| Uses hooks or class state | Only receives props   |
| Handles logic             | Mostly presentational |

```js
function Greeting({ name }) {
  return <h1>{name}</h1>;
}
```

---

## 7. What is React Router?

React Router is used for navigation in React apps without refreshing the page.

```js
<Route path="/about" element={<About />} />
```

Important components:

* BrowserRouter
* Routes
* Route
* Link
* useNavigate

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

### Mounting

* constructor
* render
* componentDidMount

### Updating

* shouldComponentUpdate
* componentDidUpdate

### Unmounting

* componentWillUnmount

---

## 10. What are Hooks?

Hooks allow function components to use state and lifecycle features.

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

```js
ReactDOM.createPortal(child, document.getElementById('root'));
```

---

## 12. What is Context API? What is Prop Drilling?

### Prop Drilling

Passing data through multiple intermediate components.

### Context API

Allows sharing data globally without passing props manually.

```js
const UserContext = createContext();
```

---

## 13. What are Webpack and Polyfills?

### Webpack

A module bundler that bundles JS, CSS, images, etc.

### Polyfill

Adds support for features not available in older browsers.

Example:

```js
import 'core-js/stable';
```

---

## 14. What are Pure Components?

PureComponent only re-renders when props or state change.

It performs shallow comparison.

```js
class MyComponent extends React.PureComponent {}
```

---

## 15. What are Error Boundaries?

Error Boundaries catch JavaScript errors in child components.

```js
componentDidCatch(error, info) {}
```

They do not catch:

* Event handler errors
* Async errors
* Server-side rendering errors

---

## 16. What is React Fiber?

React Fiber is React's reconciliation engine introduced in React 16.

Benefits:

* Better rendering performance
* Pause and resume rendering
* Prioritize updates

---

## 17. What is Memoization in React?

Memoization avoids unnecessary calculations or renders.

* `useMemo` memoizes values
* `useCallback` memoizes functions
* `React.memo` memoizes components

```js
const value = useMemo(() => expensiveFunction(a), [a]);
```

---

## 18. What are PropTypes?

PropTypes validate props passed to a component.

```js
MyComponent.propTypes = {
  name: PropTypes.string
}
```

---

## 19. Controlled vs Uncontrolled Components

| Controlled                     | Uncontrolled             |
| ------------------------------ | ------------------------ |
| Uses React state               | Uses DOM directly        |
| Value controlled by `useState` | Value accessed using ref |

```js
<input value={name} onChange={e => setName(e.target.value)} />
```

---

## 20. What are Refs?

Refs allow direct access to DOM elements.

```js
const inputRef = useRef();
inputRef.current.focus();
```

---

## 21. What is Lazy Loading?

Lazy loading loads components only when needed.

```js
const Home = React.lazy(() => import('./Home'));
```

Used with `Suspense`.

---

## 22. What is Concurrent Rendering?

Concurrent Rendering allows React to interrupt rendering and prioritize important updates.

It improves responsiveness.

---

## 23. What are React Server Components?

Server Components render on the server and send HTML to the client.

Benefits:

* Smaller bundle size
* Faster initial load

---

## 24. What is Render Hijacking?

Render hijacking means controlling or modifying a component's render output using HOC.

Example: Prevent rendering based on permissions.

---

## 25. Advantages and Limitations of React

### Advantages

* Reusable components
* Fast rendering
* Large ecosystem
* Easy testing

### Limitations

* Only view layer
* Frequent updates
* JSX learning curve

---

## 26. What is JSX?

JSX is syntax that looks like HTML inside JavaScript.

```js
const element = <h1>Hello</h1>;
```

JSX is converted to `React.createElement()`.

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

```js
navigate('/profile', { state: { userId: 1 } });
```

Access:

```js
const location = useLocation();
```

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

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

It runs some lifecycle methods twice in development.

---

## 31. Explain the Building Blocks of React

* Components
* Props
* State
* JSX
* Events
* Hooks

---

## 32. What are React Fragments?

Fragments allow grouping multiple elements without adding extra DOM node.

```js
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 33. How to Optimize a React Application?

* Use React.memo
* Use useMemo and useCallback
* Lazy load components
* Avoid unnecessary re-renders
* Use code splitting
* Virtualize long lists

---

## 34. What is WebKit?

WebKit is a browser rendering engine used in Safari.

It converts HTML/CSS into visible UI.

---

## 35. What is Web Optimization?

Web optimization improves performance.

Techniques:

* Minify files
* Lazy load images
* Compress assets
* Caching
* CDN

---

## 36. Difference between `createRef` and `useRef`

| createRef                    | useRef                        |
| ---------------------------- | ----------------------------- |
| Used in class components     | Used in function components   |
| Creates new ref every render | Keeps same ref across renders |

---

## 37. What is React Reconciliation?

Reconciliation is React's process of comparing old Virtual DOM and new Virtual DOM.

React updates only changed nodes.

---

## 38. What is Diffing?

Diffing is the algorithm React uses during reconciliation.

Rules:

* Different element type -> re-create subtree
* Same type -> update only changed attributes
* Keys help identify list items

---

## 39. What is Redux Saga?

Redux Saga handles asynchronous actions using generator functions.

```js
function* fetchData() {
  const data = yield call(api);
}
```

---

## 40. What is `forwardRef`?

`forwardRef` passes a ref from parent to child.

```js
const Input = React.forwardRef((props, ref) => (
  <input ref={ref} />
));
```

---

## 41. What are Render Props?

Render Props means sharing code using a prop whose value is a function.

```js
<MyComponent render={(data) => <h1>{data}</h1>} />
```

---

## 42. Difference between `useLayoutEffect` and `useEffect`

| useEffect          | useLayoutEffect           |
| ------------------ | ------------------------- |
| Runs after paint   | Runs before paint         |
| Non-blocking       | Blocks painting           |
| Used for API calls | Used for DOM measurements |

---

## 43. How to Call Child Function from Parent?

Use `forwardRef` and `useImperativeHandle`.

```js
useImperativeHandle(ref, () => ({
  showAlert
}));
```

---

## 44. Difference between Library and Framework

| Library          | Framework               |
| ---------------- | ----------------------- |
| You control flow | Framework controls flow |
| Example: React   | Example: Angular        |

React is a library.

---

## 45. One-way vs Two-way Data Binding

| One-way                    | Two-way              |
| -------------------------- | -------------------- |
| Data flows parent -> child | Data flows both ways |
| Easier to debug            | More automatic       |
| React uses one-way         | Angular uses two-way |

---

## 46. Shadow DOM vs Virtual DOM

| Shadow DOM             | Virtual DOM        |
| ---------------------- | ------------------ |
| Browser feature        | React feature      |
| Encapsulates styles    | Improves rendering |
| Used in Web Components | Used in React      |

---

## 47. Why are Keys Important in React Lists?

Keys help React identify which item changed.

```js
items.map(item => <li key={item.id}>{item.name}</li>)
```

Never use array index if list changes dynamically.

---

## 48. What is the difference between `useMemo` and `useCallback`?

| useMemo                | useCallback               |
| ---------------------- | ------------------------- |
| Returns memoized value | Returns memoized function |

```js
const total = useMemo(() => a + b, [a, b]);
const handleClick = useCallback(() => {}, []);
```

---

## 49. What is Code Splitting?

Code splitting breaks application bundle into smaller chunks.

```js
const Dashboard = lazy(() => import('./Dashboard'));
```

Improves loading speed.

---

## 50. Why should we not mutate state directly?

Bad:

```js
state.count = 10;
```

Good:

```js
setState({ count: 10 });
```

Direct mutation does not trigger re-render.

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

## 60. What is Synthetic Event?

React wraps browser events into a cross-browser event object called SyntheticEvent.

---

## 61. What is Batching in React?

React groups multiple state updates into one re-render for better performance.

---

## 62. What is the use of `key` prop?

`key` uniquely identifies list items.

```js
<li key={item.id}>{item.name}</li>
```

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

# Frequently Asked Interview Follow-up Questions

1. Why is React faster?

   * Because of Virtual DOM and diffing.

2. Why use hooks instead of class components?

   * Less code, reusable logic, easier to maintain.

3. When should you use Context API instead of Redux?

   * When the state is small and simple.

4. Why is `useEffect` dependency array important?

   * It controls when the effect should run.

```js
useEffect(() => {
  fetchData();
}, []);
```

5. Why should we avoid using array index as key?

   * It can cause incorrect UI updates if list order changes.
