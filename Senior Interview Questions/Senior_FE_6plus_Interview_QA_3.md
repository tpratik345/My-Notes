# Senior Frontend Web Developer — Advanced Interview Q&A Volume 3

## Index

| No. | Topic | Question |
|---:|---|---|
| 1 | [React Architecture](#1-react-architecture) | How would you structure a large React application so multiple teams can work independently? |
| 2 | [React Performance](#2-react-performance) | How would you identify and fix unnecessary React re-renders in a production application? |
| 3 | [React Hooks](#3-react-hooks) | What are the most common stale-closure problems in React and how do you solve them? |
| 4 | [React Effects](#4-react-effects) | When should you use `useEffect`, and when is an effect actually a code smell? |
| 5 | [React State](#5-react-state) | How would you decide whether state should be local, lifted, global, or server state? |
| 6 | [React Error Handling](#6-react-error-handling) | How do Error Boundaries work and what problems can they not solve? |
| 7 | [React Forms](#7-react-forms) | How would you architect a complex enterprise form with hundreds of fields? |
| 8 | [React Lists](#8-react-lists) | How would you optimize a table containing 50,000 records? |
| 9 | [React Suspense](#9-react-suspense) | What problem does Suspense solve and how is it different from a normal loading state? |
| 10 | [React Server Components](#10-react-server-components) | What are React Server Components and what trade-offs do they introduce? |
| 11 | [JavaScript Runtime](#11-javascript-runtime) | Explain how garbage collection works at a high level and how frontend code can interfere with it. |
| 12 | [JavaScript Async](#12-javascript-async) | What is the difference between concurrency and parallelism in JavaScript? |
| 13 | [JavaScript Promises](#13-javascript-promises) | How would you implement a concurrency-limited promise pool? |
| 14 | [JavaScript Modules](#14-javascript-modules) | How do ES modules affect tree shaking and bundle optimization? |
| 15 | [JavaScript Immutability](#15-javascript-immutability) | Why does immutability matter in React and what are its performance trade-offs? |
| 16 | [TypeScript Generics](#16-typescript-generics) | How would you design reusable generic components without losing type safety? |
| 17 | [TypeScript Type Guards](#17-typescript-type-guards) | How would you safely narrow unknown API data in TypeScript? |
| 18 | [TypeScript Utility Types](#18-typescript-utility-types) | Explain how `Pick`, `Omit`, `Partial`, `Record` and conditional types can be used in frontend architecture. |
| 19 | [Authentication](#19-authentication) | How would you design secure authentication for an SPA using OAuth 2.0/OIDC? |
| 20 | [Authentication](#20-authentication) | How would you handle session expiration while the user is actively using the application? |
| 21 | [Authorization](#21-authorization) | How would you implement resource-level authorization rather than only role-based authorization? |
| 22 | [Web Security](#22-web-security) | Explain CORS, preflight requests and common CORS mistakes. |
| 23 | [Web Security](#23-web-security) | How would you protect an application from supply-chain attacks? |
| 24 | [Accessibility](#24-accessibility) | How would you audit a React application for WCAG accessibility issues? |
| 25 | [Accessibility](#25-accessibility) | What accessibility problems commonly occur in custom dropdowns, modals and tabs? |
| 26 | [Performance](#26-performance) | How would you improve the startup performance of a JavaScript-heavy application? |
| 27 | [Performance](#27-performance) | What is the difference between preloading, prefetching and lazy loading? |
| 28 | [Performance](#28-performance) | How would you optimize image delivery for a high-traffic web application? |
| 29 | [Performance](#29-performance) | How would you investigate a page with good Lighthouse scores but poor real-user performance? |
| 30 | [Caching](#30-caching) | How would you design cache invalidation for frequently changing application data? |
| 31 | [Networking](#31-networking) | How would you design request cancellation, retries and timeout handling for a frontend API client? |
| 32 | [Frontend System Design](#32-frontend-system-design) | Design a scalable frontend for a collaborative real-time document editor. |
| 33 | [Production](#33-production) | A production release causes a sudden increase in JavaScript errors. How would you investigate? |
| 34 | [Production](#34-production) | How would you safely roll out a high-risk frontend feature to millions of users? |
| 35 | [Engineering](#35-engineering) | How do you decide when to refactor legacy frontend code versus continuing to build features? |

---

## 1. React Architecture

### Question
How would you structure a large React application so multiple teams can work independently?

### Answer

For a large application, I prefer organizing around **business domains rather than only technical file types**.

For example:

```text
src/
  app/
  features/
    authentication/
    users/
    billing/
    reports/
    notifications/
  shared/
    components/
    hooks/
    utils/
    types/
  services/
    api/
  store/
```

Each feature should own most of its:

- Components.
- Hooks.
- API integration.
- Types.
- Tests.
- Business logic.

I would define clear dependency rules.

For example:

```text
features
   ↓
shared

shared
   ↓
should NOT depend on features
```

This prevents circular dependencies and hidden coupling.

For multiple teams, I would additionally establish:

- Code ownership.
- Module boundaries.
- Shared component standards.
- API contracts.
- TypeScript strictness.
- Linting rules.
- CI checks.
- Architecture documentation.

### Senior-Level Point

I would not introduce micro frontends merely because the application is large.

A well-structured modular React application is often easier to maintain than a distributed micro-frontend architecture.

---

## 2. React Performance

### Question
How would you identify and fix unnecessary React re-renders in a production application?

### Answer

I would start with measurement.

My process would be:

```text
User reports slow UI
        ↓
Reproduce
        ↓
React Profiler
        ↓
Browser Performance
        ↓
Identify expensive component
        ↓
Find render trigger
        ↓
Apply targeted fix
        ↓
Measure again
```

I would investigate:

- Changing props.
- Parent renders.
- Context updates.
- Global state subscriptions.
- New object/function references.
- Expensive calculations.
- Large lists.
- Effects that trigger state updates.

For example:

```tsx
const value = {
  user,
  permissions
};
```

creates a new object every render.

If this is passed to many consumers, it can cause unnecessary updates.

Potential solutions include:

- Better component boundaries.
- Selector-based state subscriptions.
- Memoization when justified.
- Splitting contexts.
- Moving state closer to where it is used.

### Important

I would not automatically add:

```tsx
React.memo
useMemo
useCallback
```

Every optimization has a cost.

---

## 3. React Hooks

### Question
What are the most common stale-closure problems in React and how do you solve them?

### Answer

A stale closure happens when a callback captures an older value from a previous render.

For example:

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

The callback may keep the initial `count` value because the effect does not depend on it.

Possible solutions depend on the requirement.

For state updates, functional updates are often appropriate:

```tsx
setCount(previous => previous + 1);
```

For values that need to remain current without causing re-renders, a ref may be appropriate.

For effects that genuinely depend on changing values, dependencies should be declared correctly.

### Senior-Level Point

I would not simply add every variable to the dependency array without understanding the effect's lifecycle.

The correct solution is to model the dependency relationship properly.

---

## 4. React Effects

### Question
When should you use `useEffect`, and when is an effect actually a code smell?

### Answer

`useEffect` is primarily for synchronizing React with an **external system**.

Examples:

- Browser APIs.
- WebSocket connections.
- Timers.
- Subscriptions.
- Third-party libraries.
- Network synchronization where appropriate.

A common anti-pattern is using effects to derive state.

For example:

```tsx
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

This is usually unnecessary.

Instead:

```tsx
const fullName = `${firstName} ${lastName}`;
```

The first version creates an additional render cycle and introduces synchronization complexity.

### Senior-Level Rule

Ask:

> "What external system am I synchronizing with?"

If the answer is "nothing," I would question whether an effect is necessary.

---

## 5. React State

### Question
How would you decide whether state should be local, lifted, global, or server state?

### Answer

I classify state based on ownership and usage.

```text
Temporary UI state
        ↓
Local state

Shared component state
        ↓
Lift state

Cross-application client state
        ↓
Global state

Backend-owned data
        ↓
Server-state/cache layer
```

Examples:

```text
Modal open/close -> local
Selected filter shared by siblings -> lifted
Theme -> Context
Complex client workflow -> Redux
User/API data -> server-state cache
```

I avoid putting everything into Redux.

If backend data is stored manually in Redux, I can easily create:

- Duplicate server state.
- Stale data.
- Manual loading logic.
- Manual cache invalidation.
- Excessive reducers.

### Senior-Level Principle

State should live at the **lowest level that can correctly own it**, unless broader sharing is required.

---

## 6. React Error Handling

### Question
How do Error Boundaries work and what problems can they not solve?

### Answer

Error Boundaries allow React applications to display fallback UI when errors occur during rendering/lifecycle behavior of descendant components.

Conceptually:

```text
Error Boundary
      |
      +---- Header
      |
      +---- Dashboard
      |       |
      |       +---- Error
      |
      +---- Footer
```

The boundary can show fallback UI instead of allowing the entire UI section to fail.

However, Error Boundaries do not automatically catch every possible error.

For example, depending on the error source, they do not replace handling for:

- Event-handler errors.
- Server/API failures.
- Errors outside the React rendering lifecycle.
- Certain asynchronous failures.

I would combine Error Boundaries with:

- API error handling.
- Global error monitoring.
- Logging.
- User-friendly fallback UI.
- Route-level boundaries.

### Senior-Level Strategy

Use boundaries around meaningful failure domains rather than placing one giant boundary around the entire application.

---

## 7. React Forms

### Question
How would you architect a complex enterprise form with hundreds of fields?

### Answer

I would avoid keeping every field as independent application-wide state.

I would divide the form into logical sections:

```text
Employee Form
  |
  +-- Personal Details
  +-- Address
  +-- Compensation
  +-- Benefits
  +-- Documents
```

I would use:

- Schema-based validation.
- Field-level validation.
- Section-level validation.
- Conditional fields.
- Async validation where necessary.
- Dirty-state tracking.
- Draft/autosave where required.
- Accessibility.
- Server-side validation handling.

For performance, I would avoid causing the entire form to re-render whenever one field changes.

Depending on the stack, I might use a form library that provides subscription-based field updates.

### Senior-Level Point

The form should have a clear distinction between:

```text
UI validation
and
server/business validation
```

The backend remains the final authority.

---

## 8. React Lists

### Question
How would you optimize a table containing 50,000 records?

### Answer

First I would ask whether all 50,000 records need to exist in the browser.

Often the best answer is:

```text
Server-side pagination
+
Server-side filtering
+
Server-side sorting
```

If a large client-side dataset is genuinely required, I would consider:

- Virtualization.
- Memoized rows.
- Stable keys.
- Efficient selectors.
- Avoiding unnecessary object creation.
- Web Workers for expensive transformations.
- Incremental rendering.

Instead of:

```text
50,000 DOM rows
```

virtualization may maintain only the visible subset:

```text
Visible rows
+
small overscan buffer
```

### Senior-Level Point

Virtualization solves rendering cost.

It does not automatically solve:

- Huge network payloads.
- Expensive filtering.
- Large memory usage.
- Slow backend queries.

---

## 9. React Suspense

### Question
What problem does Suspense solve and how is it different from a normal loading state?

### Answer

Suspense provides a declarative mechanism for handling UI that is not yet ready.

Conceptually:

```tsx
<Suspense fallback={<Loader />}>
  <Reports />
</Suspense>
```

If the relevant rendering process suspends, React can display the fallback.

It allows loading boundaries to be associated with UI boundaries.

A normal loading state is explicit application state:

```tsx
if (loading) {
  return <Loader />;
}
```

Suspense is more deeply integrated with React's rendering model and can work with supported asynchronous rendering mechanisms.

### Senior-Level Point

Suspense is not simply a replacement for every `loading` boolean.

I choose the model based on how the data/rendering architecture integrates with React.

---

## 10. React Server Components

### Question
What are React Server Components and what trade-offs do they introduce?

### Answer

React Server Components allow certain components to execute on the server rather than shipping their component JavaScript to the browser.

The potential benefit is reducing client-side JavaScript.

Conceptually:

```text
Server
  |
  +-- Server Component
  |
  +-- Data access
  |
  v
Rendered component output
  |
  v
Browser
  |
  +-- Client Components for interaction
```

Interactive components still need client-side behavior.

Trade-offs include:

- More complex rendering architecture.
- Clear server/client boundaries.
- Different data-fetching patterns.
- Restrictions on browser-only APIs in server components.
- Deployment complexity.

### Senior-Level Point

The major performance benefit can be reducing JavaScript sent to the browser, not merely moving computation somewhere else.

---

## 11. JavaScript Runtime

### Question
Explain how garbage collection works at a high level and how frontend code can interfere with it.

### Answer

JavaScript engines automatically reclaim memory that is no longer reachable.

A simplified model is:

```text
Roots
 |
 v
Reachable Objects
 |
 v
Unreachable Objects
 |
 v
Garbage Collector
 |
 v
Reclaimed Memory
```

Objects referenced by long-lived structures remain reachable.

Common causes of accidental retention include:

- Global variables.
- Event listeners.
- Timers.
- WebSockets.
- Closures.
- Caches.
- DOM references.
- Subscriptions.

Example:

```tsx
useEffect(() => {
  window.addEventListener("resize", handler);

  return () => {
    window.removeEventListener("resize", handler);
  };
}, []);
```

If the listener is not removed, the callback and anything it retains can remain reachable.

### Senior-Level Point

A memory leak is not simply "memory increased."

I want to prove that objects remain retained after garbage collection and repeated lifecycle operations.

---

## 12. JavaScript Async

### Question
What is the difference between concurrency and parallelism in JavaScript?

### Answer

Concurrency means multiple tasks can make progress during overlapping periods.

Parallelism means tasks actually execute simultaneously on multiple execution resources.

Traditional JavaScript on the browser main thread primarily provides concurrency through the event loop.

For example:

```text
Task A starts
 |
I/O begins
 |
Task B executes
 |
I/O completes
 |
Task A continues
```

This does not mean A and B are executing JavaScript instructions simultaneously on the same thread.

True parallel computation can be achieved using mechanisms such as Web Workers.

### Interview Point

Async programming is not automatically parallel programming.

---

## 13. JavaScript Promises

### Question
How would you implement a concurrency-limited promise pool?

### Answer

Suppose we have 1,000 API operations but only want 10 to run simultaneously.

A simple conceptual implementation is:

```ts
async function runWithLimit<T>(
  tasks: (() => Promise<T>)[],
  limit: number
): Promise<T[]> {
  const results: T[] = [];
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < tasks.length) {
      const currentIndex = nextIndex++;

      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  const workers = Array.from(
    { length: Math.min(limit, tasks.length) },
    () => worker()
  );

  await Promise.all(workers);

  return results;
}
```

The important idea is:

```text
1000 tasks
    |
    v
10 workers
    |
    +--> task
    +--> task
    +--> task
```

This protects the browser and backend from uncontrolled concurrency.

### Senior-Level Point

Concurrency limits are especially useful for:

- Large uploads.
- Batch processing.
- API synchronization.
- Image processing.

---

## 14. JavaScript Modules

### Question
How do ES modules affect tree shaking and bundle optimization?

### Answer

ES modules use static import/export syntax:

```ts
import { formatDate } from "./date";
```

Because the module structure can be analyzed statically, bundlers can determine which exports are actually used.

This enables tree shaking.

For example:

```ts
export function a() {}
export function b() {}
export function c() {}
```

If only `a` is imported and the code is safely side-effect free, the bundler may remove unused exports.

Common issues that reduce optimization include:

- CommonJS dependencies.
- Side effects.
- Large barrel files in certain dependency structures.
- Importing entire libraries unnecessarily.

### Senior-Level Point

Tree shaking is not just a TypeScript feature.

It depends on the module format and the bundler's ability to safely determine unused code.

---

## 15. JavaScript Immutability

### Question
Why does immutability matter in React and what are its performance trade-offs?

### Answer

React applications frequently rely on reference identity to determine whether values changed.

For example:

```ts
const updatedUser = {
  ...user,
  name: "New Name"
};
```

creates a new object.

This allows consumers to detect that the object reference changed.

Mutating the existing object:

```ts
user.name = "New Name";
```

can make change detection harder and can break assumptions in state-management systems.

However, immutability has a cost.

Creating many new objects can increase allocations.

Therefore, I prefer practical immutability rather than blindly copying huge structures.

For very large data structures, I would consider:

- Normalized state.
- Structural sharing.
- Selector-based subscriptions.
- Pagination.
- Server-side state.

---

## 16. TypeScript Generics

### Question
How would you design reusable generic components without losing type safety?

### Answer

Suppose we want a reusable table.

We can model:

```ts
type Column<T> = {
  key: keyof T;
  label: string;
};
```

Then:

```ts
type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};
```

Now a table of users can infer the row type.

```ts
type User = {
  id: string;
  name: string;
  email: string;
};
```

The compiler can prevent invalid column keys.

The goal of generics is to preserve relationships between inputs and outputs.

### Senior-Level Point

I avoid making a component generic just because TypeScript allows it.

The generic should model a real reusable relationship.

---

## 17. TypeScript Type Guards

### Question
How would you safely narrow unknown API data in TypeScript?

### Answer

I never assume external data is safe merely because I declared an interface.

For example:

```ts
type User = {
  id: string;
  name: string;
};
```

does not validate runtime data.

I can use a type guard:

```ts
function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const user = value as Record<string, unknown>;

  return (
    typeof user.id === "string" &&
    typeof user.name === "string"
  );
}
```

Then:

```ts
const data: unknown = await response.json();

if (!isUser(data)) {
  throw new Error("Invalid user response");
}
```

For larger applications, a schema validation library can provide more scalable runtime validation.

### Senior-Level Principle

TypeScript gives compile-time guarantees.

Runtime validation protects trust boundaries.

---

## 18. TypeScript Utility Types

### Question
Explain how `Pick`, `Omit`, `Partial`, `Record` and conditional types can be used in frontend architecture.

### Answer

`Pick` selects properties:

```ts
type UserPreview = Pick<User, "id" | "name">;
```

`Omit` removes properties:

```ts
type UserWithoutPassword = Omit<User, "password">;
```

`Partial` makes properties optional:

```ts
type UserUpdate = Partial<User>;
```

`Record` maps keys to a value type:

```ts
type PermissionMap = Record<string, boolean>;
```

Conditional types allow type logic:

```ts
type ApiResponse<T> =
  T extends string
    ? { value: T }
    : { data: T };
```

I use these to prevent duplicated types while preserving relationships.

### Senior-Level Point

Utility types are most useful when they model domain transformations.

I avoid building extremely complex type-level systems that make the code harder for the team to understand.

---

## 19. Authentication

### Question
How would you design secure authentication for an SPA using OAuth 2.0/OIDC?

### Answer

I would use an established identity provider rather than implementing authentication protocols manually.

A modern architecture typically involves:

```text
Browser
   |
Authorization flow
   |
Identity Provider
   |
Authentication
   |
Tokens / Session
   |
Application
```

OIDC adds an identity layer on top of OAuth 2.0.

Important considerations include:

- Authorization Code flow with PKCE for appropriate public clients.
- HTTPS.
- Short-lived access tokens.
- Secure session management.
- Refresh-token strategy.
- Redirect URI validation.
- Logout/session expiry.
- CSRF considerations based on the chosen architecture.
- Avoiding sensitive information in URLs/logs.

### Senior-Level Point

I would choose the exact token/session architecture based on the application's deployment model and security requirements rather than treating one storage strategy as universally correct.

---

## 20. Authentication

### Question
How would you handle session expiration while the user is actively using the application?

### Answer

I would design the API client to recognize authentication failures consistently.

For example:

```text
API request
   |
   v
401
   |
   v
Try session refresh if allowed
   |
   +---- Success -> retry original request
   |
   +---- Failure -> clear session
                         |
                         v
                   Login flow
```

I would also prevent multiple refresh requests from running simultaneously.

The UI should preserve useful user work where possible.

For example, if a user is filling a large form and the session expires, I would avoid immediately destroying all local form state.

Security and user experience need to be balanced.

---

## 21. Authorization

### Question
How would you implement resource-level authorization rather than only role-based authorization?

### Answer

Role-based access:

```text
Admin -> Can edit users
```

Resource-level authorization considers the actual resource.

For example:

```text
User can edit document 123
but cannot edit document 456
```

The backend might enforce:

```text
user.id
+
resource.ownerId
+
permission
```

The frontend can use the authorization result to control the UI, but it should never be the final enforcement layer.

For example:

```tsx
{document.canEdit && (
  <EditButton />
)}
```

This is useful for UX.

But the API must still validate:

```text
Does this authenticated user have permission
to modify this specific resource?
```

### Senior-Level Point

Authorization should be modeled around **actions and resources**, not only static roles.

---

## 22. Web Security

### Question
Explain CORS, preflight requests and common CORS mistakes.

### Answer

CORS controls whether browser JavaScript from one origin can access resources from another origin.

For example:

```text
Frontend:
https://app.example.com

API:
https://api.example.com
```

These are different origins.

For certain cross-origin requests, the browser sends a preflight `OPTIONS` request.

Conceptually:

```text
Browser
   |
   | OPTIONS
   v
API
   |
   | allowed?
   v
Browser
   |
   | actual request
   v
API
```

Common mistakes include:

- Using `*` with credentialed requests.
- Allowing arbitrary origins.
- Assuming CORS is authentication.
- Assuming CORS protects APIs from non-browser clients.
- Misconfiguring allowed headers/methods.

### Senior-Level Point

CORS is primarily a browser-enforced access control mechanism.

It is not a replacement for authentication or authorization.

---

## 23. Web Security

### Question
How would you protect an application from supply-chain attacks?

### Answer

Frontend applications depend heavily on third-party packages.

I would use:

- Dependency scanning.
- Lockfiles.
- Controlled dependency upgrades.
- Package provenance where available.
- Minimal dependency usage.
- Review of new dependencies.
- CI security checks.
- Vulnerability monitoring.
- Automated alerts.
- Restricted publishing permissions.

I would ask before adding a dependency:

```text
Do we actually need it?
Is it maintained?
How large is it?
Does it introduce transitive risk?
Could we implement the small requirement ourselves?
```

I would also avoid blindly running arbitrary package scripts in untrusted environments.

### Senior-Level Point

Security is not just about finding known CVEs.

A package can be compromised after adoption.

Therefore dependency governance matters.

---

## 24. Accessibility

### Question
How would you audit a React application for WCAG accessibility issues?

### Answer

I would use multiple layers.

### Automated checks

Tools can detect things such as:

- Missing labels.
- Invalid ARIA.
- Color contrast issues.
- Missing landmarks.
- Certain keyboard issues.

### Manual testing

I would test:

```text
Keyboard only
Screen reader
Zoom
Reduced motion
Focus visibility
```

I would verify:

- Logical heading hierarchy.
- Form labels.
- Error messages.
- Focus management.
- Keyboard navigation.
- Accessible names.
- Dialog behavior.
- Dynamic announcements.

### Senior-Level Point

Automated accessibility tools catch only a subset of accessibility problems.

A page can pass automated checks and still be difficult or impossible to use with a keyboard or screen reader.

---

## 25. Accessibility

### Question
What accessibility problems commonly occur in custom dropdowns, modals and tabs?

### Answer

### Dropdowns

Common issues:

- No keyboard navigation.
- Missing accessible name.
- Incorrect option semantics.
- Focus loss.
- Screen reader cannot determine active option.

### Modals

Common issues:

- Focus remains behind the modal.
- Escape does not work.
- No accessible dialog name.
- Background content remains incorrectly interactive.
- Focus is not restored.

### Tabs

Common issues:

- Incorrect tab/tabpanel relationship.
- No arrow-key navigation where the chosen pattern requires it.
- Incorrect selected state.
- Panels are not properly associated.

I prefer native HTML controls where possible.

When building custom widgets, I follow established accessibility patterns rather than inventing behavior.

---

## 26. Performance

### Question
How would you improve the startup performance of a JavaScript-heavy application?

### Answer

I would split startup into:

```text
Network cost
+
JavaScript parse cost
+
JavaScript execution cost
+
Rendering cost
```

I would inspect:

- Initial bundle size.
- JavaScript execution.
- Third-party scripts.
- Fonts.
- Images.
- CSS.
- Server response.
- Hydration/client boot cost where applicable.

Potential solutions:

- Route-level code splitting.
- Dynamic imports.
- Remove unused dependencies.
- Defer non-critical scripts.
- Optimize images.
- Reduce third-party JavaScript.
- Server-render critical content where appropriate.
- Cache static assets.
- Reduce hydration/client JavaScript where architecture supports it.

### Senior-Level Point

A 2 MB JavaScript bundle is not merely a download problem.

The browser must also parse, compile and execute it.

---

## 27. Performance

### Question
What is the difference between preloading, prefetching and lazy loading?

### Answer

### Preload

Tells the browser that a resource is important for the current page.

Example use:

```text
Critical font
Critical image
```

### Prefetch

Indicates a resource may be needed later.

Example:

```text
User is likely to navigate to checkout.
```

We can potentially prefetch the checkout code/data.

### Lazy Loading

Delays loading until the resource is actually needed.

Example:

```text
Load reports page code only when user visits reports.
```

Conceptually:

```text
Current critical resources
        |
     preload

Likely future resources
        |
     prefetch

Not-yet-needed resources
        |
    lazy loading
```

### Senior-Level Point

Preloading too many resources can hurt performance because the browser has limited bandwidth and connection priorities.

---

## 28. Performance

### Question
How would you optimize image delivery for a high-traffic web application?

### Answer

I would consider:

- Correct dimensions.
- Modern formats.
- Responsive images.
- Lazy loading below-the-fold images.
- CDN delivery.
- Compression.
- Proper caching.
- Image resizing at the edge/origin.
- Priority loading for the LCP image.

For responsive images:

```html
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Product"
/>
```

The browser can select an appropriate image based on viewport and device characteristics.

### Important

I would not blindly lazy-load the main hero/LCP image.

The most important above-the-fold image may need higher loading priority.

---

## 29. Performance

### Question
How would you investigate a page with good Lighthouse scores but poor real-user performance?

### Answer

Lighthouse is lab data.

Real users have:

- Different devices.
- Different CPU speeds.
- Different networks.
- Different browser conditions.
- Different geographic locations.

I would inspect Real User Monitoring.

I would segment by:

```text
Device
Browser
Country/region
Network
Release
Route
```

Suppose:

```text
Lighthouse:
LCP = 1.5s

Real users:
P75 LCP = 4.2s
```

I would investigate what characteristics are associated with the poor users.

It may reveal that low-end mobile devices are spending significantly longer executing JavaScript.

### Senior-Level Point

Lab performance tells me what happened in a controlled environment.

Real-user monitoring tells me what customers actually experience.

---

## 30. Caching

### Question
How would you design cache invalidation for frequently changing application data?

### Answer

Caching becomes difficult when data changes frequently.

I would define:

```text
What is cached?
How long is it fresh?
How is it invalidated?
Who triggers invalidation?
What happens when data is stale?
```

Possible approaches include:

- Time-based expiration.
- Versioned keys.
- Tag-based invalidation.
- Explicit invalidation after mutations.
- Background revalidation.
- Event-driven invalidation.

For example:

```text
Update user
   |
   v
Mutation succeeds
   |
   +--> Invalidate user cache
   |
   +--> Invalidate dependent queries
```

For highly dynamic data, a short TTL plus background revalidation may be better than a long cache.

### Senior-Level Principle

Caching is fundamentally a **consistency decision**, not just a performance decision.

---

## 31. Networking

### Question
How would you design request cancellation, retries and timeout handling for a frontend API client?

### Answer

I would define policies rather than treating every request identically.

For example:

```text
GET search
  -> timeout
  -> cancellation
  -> limited retry

POST payment
  -> generally no blind retry
```

A request abstraction might support:

```ts
type RequestOptions = {
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number;
};
```

Timeout handling can be implemented with an abort signal.

Retries should generally use exponential backoff with jitter when appropriate:

```text
Attempt 1 -> immediate
Attempt 2 -> wait
Attempt 3 -> longer wait
```

Jitter prevents many clients from retrying at exactly the same time.

### Senior-Level Point

Retry behavior must consider **idempotency**.

Automatically retrying a non-idempotent operation can create duplicate side effects.

---

## 32. Frontend System Design

### Question
Design a scalable frontend for a collaborative real-time document editor.

### Answer

I would separate the architecture into:

```text
Editor UI
   |
Local document state
   |
Synchronization layer
   |
Real-time transport
   |
Backend collaboration service
```

A real-time transport could use WebSockets.

The difficult part is not opening a WebSocket.

The difficult part is conflict resolution.

For simultaneous edits, the system may need a collaboration algorithm such as:

- Operational Transformation.
- CRDT-based synchronization.
- Another server-defined conflict-resolution strategy.

The frontend should also handle:

- Offline changes.
- Reconnection.
- Missed updates.
- Version conflicts.
- Presence.
- Cursor state.
- Autosave.
- Undo/redo.

### Senior-Level Point

Real-time collaborative applications are distributed systems.

I would not solve consistency solely inside React state.

---

## 33. Production

### Question
A production release causes a sudden increase in JavaScript errors. How would you investigate?

### Answer

First I would determine:

```text
Which error?
How many users?
Which routes?
Which browsers?
Which release?
When did it start?
```

I would use error monitoring with release/version information.

Then:

```text
Error spike
   |
   v
Compare release versions
   |
   v
Identify affected feature
   |
   v
Inspect source maps / stack traces
   |
   v
Reproduce
```

I would check whether:

- One browser is affected.
- One feature flag is involved.
- One API response changed.
- A dependency changed.
- A deployment artifact differs.
- Environment configuration changed.

If customer impact is severe and rollback is safe, I would rollback or disable the feature first.

Then investigate the root cause.

---

## 34. Production

### Question
How would you safely roll out a high-risk frontend feature to millions of users?

### Answer

I would avoid releasing to 100% of users immediately.

A possible rollout:

```text
Internal users
    ↓
1%
    ↓
5%
    ↓
25%
    ↓
50%
    ↓
100%
```

I would use feature flags and monitor:

- Error rates.
- Performance.
- Conversion.
- API load.
- Business metrics.
- Accessibility issues.
- Browser-specific failures.

I would define rollback criteria before rollout.

For example:

```text
If checkout error rate increases > X%
-> disable feature
```

### Senior-Level Point

Feature flags are useful only if we also have a safe way to disable the feature and observe its impact.

---

## 35. Engineering

### Question
How do you decide when to refactor legacy frontend code versus continuing to build features?

### Answer

I would not refactor simply because code is old.

I would evaluate:

```text
Business importance
+
Change frequency
+
Defect rate
+
Developer productivity
+
Performance/security risk
```

If a component is rarely changed and stable, a rewrite may not be valuable.

If a legacy module is:

- Frequently changed.
- Difficult to test.
- Causing repeated production bugs.
- Blocking new requirements.
- Introducing security/performance problems.

then refactoring becomes a business investment.

I prefer incremental refactoring:

```text
Legacy module
    ↓
Characterization tests
    ↓
Define boundary
    ↓
Refactor one area
    ↓
Ship
    ↓
Repeat
```

I avoid large "big bang" rewrites unless there is a compelling architectural or business reason.

### Senior-Level Principle

Technical debt should be discussed in terms of **risk and engineering/business impact**, not simply code quality.

---

# Senior-Level Rapid-Fire Follow-Up Questions

| No. | Question | Expected Discussion |
|---:|---|---|
| 1 | Why can `useCallback` fail to improve performance? | Function identity, memoization overhead, child behavior |
| 2 | Why can an incorrect dependency array create production bugs? | Stale closures and synchronization |
| 3 | When would you use `useRef` instead of state? | Mutable value without render |
| 4 | Why should array indexes generally not be used as React keys? | Identity and reconciliation |
| 5 | What is the difference between debounce and throttle? | Event frequency control |
| 6 | Why can Promise chains block UI despite being asynchronous? | Microtasks and main-thread execution |
| 7 | When would you choose a Web Worker over `startTransition`? | CPU work vs scheduling |
| 8 | Why is `unknown` safer than `any`? | Forced narrowing |
| 9 | Why doesn't TypeScript validate API responses? | Compile-time vs runtime |
| 10 | What is the difference between RBAC and ABAC? | Role-based vs attribute-based authorization |
| 11 | Why is hiding a UI button not authorization? | Client cannot be trusted |
| 12 | How does PKCE protect an authorization flow? | Authorization-code interception mitigation |
| 13 | Why should tokens not be logged? | Credential exposure |
| 14 | Is CORS a backend security mechanism? | Browser enforcement distinction |
| 15 | Why can CSP still allow XSS in a poorly configured application? | Unsafe directives / trusted sources |
| 16 | What is the difference between `aria-hidden` and `hidden`? | Accessibility tree vs rendering |
| 17 | Why is keyboard accessibility important even if screen readers work? | Multiple access needs |
| 18 | Why can lazy loading the LCP image hurt performance? | Critical resource delay |
| 19 | What is the difference between P75 and average performance? | User-experience distribution |
| 20 | Why can CDN caching create stale application behavior? | Cache invalidation |
| 21 | What is a cache stampede? | Simultaneous cache misses |
| 22 | Why should retries use jitter? | Avoid synchronized retry spikes |
| 23 | What is idempotency and why does it matter for retries? | Duplicate side effects |
| 24 | How would you detect a memory leak using Chrome DevTools? | Heap snapshots and retained objects |
| 25 | What makes a frontend architecture scalable? | Boundaries, ownership, consistency, observability |
| 26 | When would micro frontends be the wrong choice? | Complexity without organizational benefit |
| 27 | What should an Error Boundary fallback contain? | Recovery, context, monitoring |
| 28 | Why should frontend performance budgets exist in CI? | Prevent regressions |
| 29 | How would you handle a third-party analytics script slowing the application? | Defer, isolate, measure, remove/replace |
| 30 | What makes an answer "senior-level" in a frontend interview? | Diagnosis, trade-offs, measurement, production thinking |

---

# Senior Interview Answer Pattern

For scenario-based questions, use this structure:

```text
1. Clarify the problem
        ↓
2. Identify constraints
        ↓
3. Measure the current behavior
        ↓
4. Identify the actual bottleneck
        ↓
5. Explain multiple possible approaches
        ↓
6. Discuss trade-offs
        ↓
7. Choose the approach
        ↓
8. Explain implementation
        ↓
9. Explain testing
        ↓
10. Explain production monitoring
```

A weak senior answer:

> "I will use React.memo and useMemo to improve performance."

A stronger senior answer:

> "First I would profile the application and identify whether the problem is caused by unnecessary rendering, expensive computation, network latency, large DOM size or main-thread blocking. If profiling shows that an expensive child is re-rendering because its props are unchanged, I may use React.memo. If an expensive calculation is repeatedly recomputed, I may use useMemo. I would then measure the result rather than assuming the optimization helped."

The key difference is:

```text
Junior-style answer:
Tool → Solution

Senior-style answer:
Problem → Evidence → Options → Trade-off → Solution → Measurement
```
