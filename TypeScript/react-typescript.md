# React + TypeScript Advanced Interview Question Bank

## Main Index

| #  | Question                                                                                                                    |
| -- | --------------------------------------------------------------------------------------------------------------------------- |
| 1  | [Why should we use TypeScript with React?](#1-why-should-we-use-typescript-with-react)                                      |
| 2  | [How do you create a React component with TypeScript?](#2-how-do-you-create-a-react-component-with-typescript)              |
| 3  | [How do you type Props in React TypeScript?](#3-how-do-you-type-props-in-react-typescript)                                  |
| 4  | [Interface vs Type for Props](#4-interface-vs-type-for-props)                                                               |
| 5  | [How do you type State in React TypeScript?](#5-how-do-you-type-state-in-react-typescript)                                  |
| 6  | [How do you type `useState`?](#6-how-do-you-type-usestate)                                                                  |
| 7  | [How do you type `useEffect`?](#7-how-do-you-type-useeffect)                                                                |
| 8  | [How do you type `useRef`?](#8-how-do-you-type-useref)                                                                      |
| 9  | [How do you type `useContext`?](#9-how-do-you-type-usecontext)                                                              |
| 10 | [How do you type `useReducer`?](#10-how-do-you-type-usereducer)                                                             |
| 11 | [How do you type Event Handlers in React?](#11-how-do-you-type-event-handlers-in-react)                                     |
| 12 | [How do you type Form Events in React TypeScript?](#12-how-do-you-type-form-events-in-react-typescript)                     |
| 13 | [How do you type Children Props?](#13-how-do-you-type-children-props)                                                       |
| 14 | [What is `React.FC` and should you use it?](#14-what-is-reactfc-and-should-you-use-it)                                      |
| 15 | [How do you type Optional Props?](#15-how-do-you-type-optional-props)                                                       |
| 16 | [How do you type Default Props in React TypeScript?](#16-how-do-you-type-default-props-in-react-typescript)                 |
| 17 | [How do you type API Responses?](#17-how-do-you-type-api-responses)                                                         |
| 18 | [How do you type Axios Requests in React TypeScript?](#18-how-do-you-type-axios-requests-in-react-typescript)               |
| 19 | [How do you type Generic Components?](#19-how-do-you-type-generic-components)                                               |
| 20 | [How do you create a Generic Table Component?](#20-how-do-you-create-a-generic-table-component)                             |
| 21 | [How do you type `forwardRef`?](#21-how-do-you-type-forwardref)                                                             |
| 22 | [How do you type `useImperativeHandle`?](#22-how-do-you-type-useimperativehandle)                                           |
| 23 | [How do you type Custom Hooks?](#23-how-do-you-type-custom-hooks)                                                           |
| 24 | [How do you type Redux with React TypeScript?](#24-how-do-you-type-redux-with-react-typescript)                             |
| 25 | [How do you type Redux Toolkit?](#25-how-do-you-type-redux-toolkit)                                                         |
| 26 | [How do you type React Router?](#26-how-do-you-type-react-router)                                                           |
| 27 | [How do you type Dynamic Object Keys?](#27-how-do-you-type-dynamic-object-keys)                                             |
| 28 | [What are Discriminated Unions in React State?](#28-what-are-discriminated-unions-in-react-state)                           |
| 29 | [How do you type Loading, Success, and Error States?](#29-how-do-you-type-loading-success-and-error-states)                 |
| 30 | [How do you type Conditional Rendering Props?](#30-how-do-you-type-conditional-rendering-props)                             |
| 31 | [How do you type Component Maps?](#31-how-do-you-type-component-maps)                                                       |
| 32 | [How do you type CSS Modules?](#32-how-do-you-type-css-modules)                                                             |
| 33 | [How do you type Styled Components?](#33-how-do-you-type-styled-components)                                                 |
| 34 | [How do you type Refs for DOM Elements?](#34-how-do-you-type-refs-for-dom-elements)                                         |
| 35 | [How do you type Portals?](#35-how-do-you-type-portals)                                                                     |
| 36 | [How do you type Lazy Loaded Components?](#36-how-do-you-type-lazy-loaded-components)                                       |
| 37 | [How do you type Error Boundaries?](#37-how-do-you-type-error-boundaries)                                                   |
| 38 | [How do you type HOCs in React TypeScript?](#38-how-do-you-type-hocs-in-react-typescript)                                   |
| 39 | [How do you type Render Props?](#39-how-do-you-type-render-props)                                                           |
| 40 | [How do you type Memoized Components?](#40-how-do-you-type-memoized-components)                                             |
| 41 | [How do you type `useMemo` and `useCallback`?](#41-how-do-you-type-usememo-and-usecallback)                                 |
| 42 | [How do you type Union Props?](#42-how-do-you-type-union-props)                                                             |
| 43 | [How do you type an Async Function Component?](#43-how-do-you-type-an-async-function-component)                             |
| 44 | [How do you type Environment Variables in React?](#44-how-do-you-type-environment-variables-in-react)                       |
| 45 | [How do you type Third-Party Libraries without Types?](#45-how-do-you-type-third-party-libraries-without-types)             |
| 46 | [What are Common React TypeScript Mistakes?](#46-what-are-common-react-typescript-mistakes)                                 |
| 47 | [How do you improve performance with React TypeScript?](#47-how-do-you-improve-performance-with-react-typescript)           |
| 48 | [How do you strongly type Context + Reducer architecture?](#48-how-do-you-strongly-type-context--reducer-architecture)      |
| 49 | [How do you type reusable UI libraries?](#49-how-do-you-type-reusable-ui-libraries)                                         |
| 50 | [What are the best practices for React TypeScript projects?](#50-what-are-the-best-practices-for-react-typescript-projects) |

## Complex Interview Questions Index

| #   | Complex Question                                                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| C1  | [How do you build a polymorphic Button component with an `as` prop?](#c1-how-do-you-build-a-polymorphic-button-component-with-an-as-prop)   |
| C2  | [How do you create a reusable generic Form component?](#c2-how-do-you-create-a-reusable-generic-form-component)                             |
| C3  | [How do you type a deeply nested form state object?](#c3-how-do-you-type-a-deeply-nested-form-state-object)                                 |
| C4  | [How do you create a strongly typed API hook?](#c4-how-do-you-create-a-strongly-typed-api-hook)                                             |
| C5  | [How do you create a reusable `useFetch<T>` hook?](#c5-how-do-you-create-a-reusable-usefetcht-hook)                                         |
| C6  | [How do you type a React Context provider with reducer and actions?](#c6-how-do-you-type-a-react-context-provider-with-reducer-and-actions) |
| C7  | [How do you create a type-safe modal system?](#c7-how-do-you-create-a-type-safe-modal-system)                                               |
| C8  | [How do you create a generic Table component with sortable columns?](#c8-how-do-you-create-a-generic-table-component-with-sortable-columns) |
| C9  | [How do you type React Query hooks?](#c9-how-do-you-type-react-query-hooks)                                                                 |
| C10 | [How do you type React Hook Form with nested fields?](#c10-how-do-you-type-react-hook-form-with-nested-fields)                              |
| C11 | [How do you create a strongly typed Redux store?](#c11-how-do-you-create-a-strongly-typed-redux-store)                                      |
| C12 | [How do you type Zustand store in React TypeScript?](#c12-how-do-you-type-zustand-store-in-react-typescript)                                |
| C13 | [How do you type refs in a reusable input component?](#c13-how-do-you-type-refs-in-a-reusable-input-component)                              |
| C14 | [How do you type a dynamic component renderer?](#c14-how-do-you-type-a-dynamic-component-renderer)                                          |
| C15 | [How do you type a component that accepts only specific children?](#c15-how-do-you-type-a-component-that-accepts-only-specific-children)    |
| C16 | [How do you type compound components?](#c16-how-do-you-type-compound-components)                                                            |
| C17 | [How do you create a strongly typed theme system?](#c17-how-do-you-create-a-strongly-typed-theme-system)                                    |
| C18 | [How do you type a reusable debounce hook?](#c18-how-do-you-type-a-reusable-debounce-hook)                                                  |
| C19 | [How do you type an event emitter pattern in React?](#c19-how-do-you-type-an-event-emitter-pattern-in-react)                                |
| C20 | [How do you type drag and drop events?](#c20-how-do-you-type-drag-and-drop-events)                                                          |
| C21 | [How do you type React Suspense with lazy imports?](#c21-how-do-you-type-react-suspense-with-lazy-imports)                                  |
| C22 | [How do you type feature flags in React TypeScript?](#c22-how-do-you-type-feature-flags-in-react-typescript)                                |
| C23 | [How do you create a type-safe translation hook?](#c23-how-do-you-create-a-type-safe-translation-hook)                                      |
| C24 | [How do you type a reusable Pagination component?](#c24-how-do-you-type-a-reusable-pagination-component)                                    |
| C25 | [How do you type custom error classes in React TypeScript?](#c25-how-do-you-type-custom-error-classes-in-react-typescript)                  |
| C26 | [How do you type WebSocket messages in React?](#c26-how-do-you-type-websocket-messages-in-react)                                            |
| C27 | [How do you create a strongly typed localStorage hook?](#c27-how-do-you-create-a-strongly-typed-localstorage-hook)                          |
| C28 | [How do you type server responses for paginated APIs?](#c28-how-do-you-type-server-responses-for-paginated-apis)                            |
| C29 | [How do you type a reusable file upload component?](#c29-how-do-you-type-a-reusable-file-upload-component)                                  |
| C30 | [How do you type a finite state machine in React TypeScript?](#c30-how-do-you-type-a-finite-state-machine-in-react-typescript)              |

---

## 1. Why should we use TypeScript with React?

TypeScript improves React development by providing:

* Type safety
* Better auto-completion
* Easier refactoring
* Fewer runtime errors

```tsx
interface Props {
  title: string;
}

function Header({ title }: Props) {
  return <h1>{title}</h1>;
}
```

---

## 2. How do you create a React component with TypeScript?

```tsx
function Button(): JSX.Element {
  return <button>Click</button>;
}
```

---

## 3. How do you type Props in React TypeScript?

```tsx
interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return <div>{name} - {age}</div>;
}
```

---

## 4. Interface vs Type for Props

| Interface              | Type              |
| ---------------------- | ----------------- |
| Easier to extend       | Better for unions |
| Can merge declarations | Cannot merge      |

---

## 5. How do you type State in React TypeScript?

```tsx
const [count, setCount] = useState<number>(0);
```

---

## 6. How do you type `useState`?

```tsx
const [user, setUser] = useState<User | null>(null);
```

---

## 7. How do you type `useEffect`?

`useEffect` itself usually does not need explicit typing.

```tsx
useEffect(() => {
  fetchData();
}, []);
```

---

## 8. How do you type `useRef`?

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

---

## 9. How do you type `useContext`?

```tsx
const ThemeContext = createContext<string>('light');
```

---

## 10. How do you type `useReducer`?

```tsx
type Action = { type: 'increment' } | { type: 'decrement' };
```

Reducer state and action should both be typed.

---

## 11. How do you type Event Handlers in React?

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
```

---

## 12. How do you type Form Events in React TypeScript?

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

---

## 13. How do you type Children Props?

```tsx
interface Props {
  children: React.ReactNode;
}
```

---

## 14. What is `React.FC` and should you use it?

`React.FC` automatically includes `children`, but many teams avoid it because it can hide prop details.

```tsx
const Card: React.FC<Props> = ({ children }) => <div>{children}</div>;
```

---

## 15. How do you type Optional Props?

```tsx
interface Props {
  title?: string;
}
```

---

## 16. How do you type Default Props in React TypeScript?

```tsx
function Button({ label = 'Submit' }: { label?: string }) {}
```

---

## 17. How do you type API Responses?

```tsx
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

---

## 18. How do you type Axios Requests in React TypeScript?

```tsx
axios.get<User[]>('/users');
```

---

## 19. How do you type Generic Components?

```tsx
interface ListProps<T> {
  items: T[];
}
```

---

## 20. How do you create a Generic Table Component?

```tsx
interface Column<T> {
  key: keyof T;
  title: string;
}
```

---

## 21. How do you type `forwardRef`?

```tsx
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} />;
});
```

---

## 22. How do you type `useImperativeHandle`?



```tsx
type MyHandle = {
  focus: () => void;
  reset: () => void;
};

// Child Component Implementation:
import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef<MyHandle, { label: string }>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    reset: () => { if (inputRef.current) inputRef.current.value = ""; }1
  }), []);

  return <input ref={inputRef} />;
});

// Parent Component Usage
function Parent() {
  // Pass the handle type to the generic useRef hook
  const inputRef = useRef<MyHandle>(null);

  const handleClick = () => {
    inputRef.current?.focus(); // TypeScript now knows 'focus' exists
  };

  return <MyInput ref={inputRef} label="Name" />;
}
```

---

## 23. How do you type Custom Hooks?

```tsx
function useToggle(initial = false): [boolean, () => void] {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(!value)];
}
```

---

## 24. How do you type Redux with React TypeScript?

### 1. Define Store Types
In your store configuration file (e.g., `store.ts`), infer the RootState and AppDispatch types directly from the store instance. 

* RootState: Represents the entire state tree.
* AppDispatch: Captures the type of the `dispatch` function, including middleware like Thunk. 

store.ts:
```tsx
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { /* your reducers */ },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 2. Type Slices and Actions
When creating a slice with createSlice, define an interface for the initial state.

Use the `PayloadAction<T>` generic to type the data expected by each reducer. 

* PayloadAction: Ensures action.payload has the correct structure (e.g., number, string[], or a custom interface). 

Slice action:
```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { value: number; }
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
```

### 3. Create Typed Hooks:
To avoid repeating types in every component, create typed versions of `useDispatch` and `useSelector`

Use the withTypes method (available in newer versions) to bind the types
* useAppDispatch: Ensures dispatched actions are valid.
* useAppSelector: Provides automatic state autocompletion. 
```tsx
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

### 4. Use in Components:
Type Safety: TypeScript will now flag errors if you attempt to access non-existent state properties or dispatch actions with incorrect payload types. 
```ts
const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();

dispatch(incrementByAmount(5)); // Valid
dispatch(incrementByAmount("5")); // Error: Argument of type 'string' is not assignable to 'number'
```

---

## 25. How do you type Redux Toolkit?

```tsx
const useAppDispatch: () => AppDispatch = useDispatch;
```

---

## 26. How do you type React Router?

```tsx
const params = useParams<{ id: string }>();
```

---

## 27. How do you type Dynamic Object Keys?

```tsx
type UserMap = Record<string, User>;
```

---

## 28. What are Discriminated Unions in React State?

```tsx
type State =
  | { status: 'loading' }
  | { status: 'success'; data: User[] };
```

---

## 29. How do you type Loading, Success, and Error States?

```tsx
type FetchState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };
```

---

## 30. How do you type Conditional Rendering Props?

```tsx
type Props =
  | { loading: true }
  | { loading: false; data: string[] };
```

---

## 31. How do you type Component Maps?

```tsx
const components: Record<string, React.ComponentType<any>> = {};
```

---

## 32. How do you type CSS Modules?

```tsx
import styles from './Button.module.css';
```

Create `Button.module.css.d.ts`.

---

## 33. How do you type Styled Components?

```tsx
const Button = styled.button<{ primary: boolean }>`
  color: ${({ primary }) => (primary ? 'blue' : 'gray')};
`;
```

---

## 34. How do you type Refs for DOM Elements?

```tsx
const divRef = useRef<HTMLDivElement>(null);
```

---

## 35. How do you type Portals?

```tsx
ReactDOM.createPortal(children, document.body);
```

`children` should be `React.ReactNode`.

---

## 36. How do you type Lazy Loaded Components?

```tsx
const Dashboard = lazy(() => import('./Dashboard'));
```

---

## 37. How do you type Error Boundaries?

```tsx
class ErrorBoundary extends React.Component<Props, State> {}
```

---

## 38. How do you type HOCs in React TypeScript?

```tsx
function withLoading<P>(Component: React.ComponentType<P>) {}
```

---

## 39. How do you type Render Props?

```tsx
interface Props {
  render: (value: number) => React.ReactNode;
}
```

---

## 40. How do you type Memoized Components?

```tsx
const Memoized = React.memo(Component);
```

---

## 41. How do you type `useMemo` and `useCallback`?

```tsx
const total = useMemo<number>(() => 10, []);
```

```tsx
const handle = useCallback(() => {}, []);
```

---

## 42. How do you type Union Props?

```tsx
type Props =
  | { type: 'text'; value: string }
  | { type: 'number'; value: number };
```

---

## 43. How do you type an Async Function Component?

In client React, components should not return Promise.

Instead call async inside `useEffect`.

---

## 44. How do you type Environment Variables in React?

```tsx
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
```

---

## 45. How do you type Third-Party Libraries without Types?

Create a declaration file:

```ts
declare module 'my-library';
```

---

## 46. What are Common React TypeScript Mistakes?

* Using `any`
* Forgetting `null` in refs
* Incorrectly typing children
* Using `React.FC` everywhere

---

## 47. How do you improve performance with React TypeScript?

* Use memoization
* Avoid unnecessary re-renders
* Use discriminated unions for safer state

---

## 48. How do you strongly type Context + Reducer architecture?

Use:

* Typed state
* Typed actions
* Typed reducer

---

## 49. How do you type reusable UI libraries?

Use generic props and polymorphic components.

---

## 50. What are the best practices for React TypeScript projects?

* Avoid `any`
* Prefer interfaces for props
* Use strict mode
* Use reusable generic hooks

# Complex Interview Questions

## C1. How do you build a polymorphic Button component with an `as` prop?

```tsx
type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;
```

This allows:

```tsx
<Button as="a" href="/home" />
```

---

## C2. How do you create a reusable generic Form component?

```tsx
interface FormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
}
```

---

## C3. How do you type a deeply nested form state object?

```tsx
interface FormState {
  user: {
    address: {
      city: string;
    };
  };
}
```

---

## C4. How do you create a strongly typed API hook?

```tsx
function useApi<T>(url: string): FetchState<T> {}
```

---

## C5. How do you create a reusable `useFetch<T>` hook?

```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
}
```

---

## C6. How do you type a React Context provider with reducer and actions?

```tsx
const Context = createContext<ContextType | undefined>(undefined);
```

---

## C7. How do you create a type-safe modal system?

```tsx
type ModalType = 'login' | 'signup';
```

---

## C8. How do you create a generic Table component with sortable columns?

```tsx
interface SortableColumn<T> {
  key: keyof T;
  sortable?: boolean;
}
```

---

## C9. How do you type React Query hooks?

```tsx
useQuery<User[]>({ queryKey: ['users'] });
```

---

## C10. How do you type React Hook Form with nested fields?

```tsx
useForm<FormValues>();
```

---

## C11. How do you create a strongly typed Redux store?

```tsx
type AppDispatch = typeof store.dispatch;
```

---

## C12. How do you type Zustand store in React TypeScript?

```tsx
interface Store {
  count: number;
}
```

---

## C13. How do you type refs in a reusable input component?

```tsx
forwardRef<HTMLInputElement, Props>()
```

---

## C14. How do you type a dynamic component renderer?

```tsx
const componentMap: Record<string, React.ComponentType<any>> = {};
```

---

## C15. How do you type a component that accepts only specific children?

```tsx
children: React.ReactElement<TabProps>[]
```

---

## C16. How do you type compound components?

```tsx
Tabs.Panel = Panel;
```

---

## C17. How do you create a strongly typed theme system?

```tsx
interface Theme {
  colors: {
    primary: string;
  };
}
```

---

## C18. How do you type a reusable debounce hook?

```tsx
function useDebounce<T>(value: T, delay: number): T {}
```

---

## C19. How do you type an event emitter pattern in React?

```tsx
interface Events {
  login: { userId: string };
}
```

---

## C20. How do you type drag and drop events?

```tsx
const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {};
```

---

## C21. How do you type React Suspense with lazy imports?

```tsx
<Suspense fallback={<Spinner />}>
```

---

## C22. How do you type feature flags in React TypeScript?

```tsx
type FeatureFlags = {
  darkMode: boolean;
};
```

---

## C23. How do you create a type-safe translation hook?

```tsx
type TranslationKey = 'home.title' | 'home.subtitle';
```

---

## C24. How do you type a reusable Pagination component?

```tsx
interface PaginationProps {
  page: number;
}
```

---

## C25. How do you type custom error classes in React TypeScript?

```tsx
class ApiError extends Error {
  status: number;
}
```

---

## C26. How do you type WebSocket messages in React?

```tsx
type Message = { type: 'chat'; text: string };
```

---

## C27. How do you create a strongly typed localStorage hook?

```tsx
function useLocalStorage<T>(key: string, initial: T) {}
```

---

## C28. How do you type server responses for paginated APIs?

```tsx
interface PaginatedResponse<T> {
  data: T[];
  total: number;
}
```

---

## C29. How do you type a reusable file upload component?

```tsx
interface FileUploadProps {
  onUpload: (files: File[]) => void;
}
```

---

## C30. How do you type a finite state machine in React TypeScript?

```tsx
type MachineState =
  | { state: 'idle' }
  | { state: 'loading' }
  | { state: 'success' };
```

Discriminated unions make state transitions safe.
