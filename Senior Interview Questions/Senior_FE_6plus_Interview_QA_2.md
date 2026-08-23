# Senior Frontend Web Developer — Advanced Interview Q&A Volume 2

## Index

| No. | Topic | Question |
|---:|---|---|
| 1 | React Internals | [How does React's reconciliation algorithm work and why are keys important?](#1-react-internals) |
| 2 | React Concurrency | [What are `startTransition` and `useTransition`, and when should you use them?](#2-react-concurrency) |
| 3 | React Architecture | [How would you prevent Context from becoming a performance bottleneck?](#3-react-architecture) |
| 4 | React Design | [How would you design reusable components without creating an over-engineered component library?](#4-react-design) |
| 5 | JavaScript | [Explain closures, lexical scope, and a production use case for closures.](#5-javascript) |
| 6 | JavaScript | [Explain event delegation and when it is useful in a large application.](#6-javascript) |
| 7 | JavaScript Performance | [What are Web Workers and when would you use them?](#7-javascript-performance) |
| 8 | TypeScript | [Explain discriminated unions and exhaustive checking.](#8-typescript) |
| 9 | TypeScript Architecture | [How would you design a type-safe API layer?](#9-typescript-architecture) |
| 10 | Authentication | [How would you implement token refresh without sending multiple refresh requests simultaneously?](#10-authentication) |
| 11 | Authorization | [How would you design frontend authorization for hundreds of permissions?](#11-authorization) |
| 12 | Security | [What is Content Security Policy and how does it protect a frontend application?](#12-security) |
| 13 | Security | [What security checks would you perform before a frontend production release?](#13-security) |
| 14 | Accessibility | [How would you build an accessible autocomplete/combobox?](#14-accessibility) |
| 15 | Accessibility | [How would you handle focus management in a React SPA?](#15-accessibility) |
| 16 | Performance | [How would you improve INP on a page containing a large interactive data grid?](#16-performance) |
| 17 | Performance | [What is layout thrashing and how would you identify and prevent it?](#17-performance) |
| 18 | Network | [How would you prevent API race conditions in a search experience?](#18-network) |
| 19 | Network | [Explain HTTP caching using `Cache-Control`, ETag and `stale-while-revalidate`.](#19-network) |
| 20 | Browser Architecture | [Explain the critical rendering path from URL navigation to pixels on screen.](#20-browser-architecture) |
| 21 | Production | [How would you investigate increasing memory usage in a production SPA?](#21-production) |
| 22 | Reliability | [How would you design graceful degradation when a non-critical backend service fails?](#22-reliability) |
| 23 | Frontend System Design | [Design a real-time notification system for a large React application.](#23-frontend-system-design) |
| 24 | Frontend System Design | [Design a frontend architecture for a large role-based admin portal.](#24-frontend-system-design) |
| 25 | Engineering Leadership | [How would you review a pull request as a senior frontend engineer?](#25-engineering-leadership) |
| 26 | Production Incident | [A new release causes CPU usage and INP to spike. What would you do?](#26-production-incident) |

---

## 1. React Internals

### Question
How does React's reconciliation algorithm work and why are keys important?

### Answer
Reconciliation is the process React uses to determine what changed between the previous render and the next render.

Conceptually:

```text
Previous React Tree
        |
        v
     Compare
        |
        v
New React Tree
        |
        v
Minimal required updates
        |
        v
DOM Commit
```

React does not normally rebuild the entire DOM whenever state changes. It creates a new representation of the UI and compares it with the previous one.

React makes some important assumptions to make this comparison efficient.

If element types are different, React generally treats them as different subtrees.

For example:

```tsx
<div>
  <User />
</div>
```

changing to:

```tsx
<section>
  <User />
</section>
```

can cause React to replace the corresponding subtree because the host element type changed.

For lists, React uses `key` to identify which logical item corresponds to which previous item.

Example:

```tsx
users.map((user) => (
  <UserRow key={user.id} user={user} />
))
```

A stable unique ID is preferred.

A common mistake is:

```tsx
users.map((user, index) => (
  <UserRow key={index} user={user} />
))
```

Using the array index can create problems when items are inserted, deleted or reordered because the index represents the position rather than the identity of the item.

Possible consequences include:

- Incorrect local component state.
- Unexpected input values.
- Unnecessary component work.
- UI bugs during reordering.

### Senior-Level Point

I would explain that keys are not primarily a performance trick. Their most important purpose is to give React **stable identity among siblings**.

---

## 2. React Concurrency

### Question
What are `startTransition` and `useTransition`, and when should you use them?

### Answer
React allows us to distinguish between urgent and non-urgent updates.

Consider a search interface.

The user's typing is urgent because the input must respond immediately.

Rendering a large filtered result set may be less urgent.

Conceptually:

```text
User types
   |
   +---- Input update --------> Urgent
   |
   +---- Results rendering ---> Transition
```

We can mark the expensive state update as a transition.

```tsx
const [isPending, startTransition] = useTransition();

const handleChange = (value: string) => {
  setInput(value);

  startTransition(() => {
    setSearchQuery(value);
  });
};
```

React can prioritize the urgent update and schedule the transition work with lower priority.

`isPending` can be used to indicate that transition work is still pending.

### When I Would Use It

Examples include:

- Large search results.
- Complex filtering.
- Expensive tab switches.
- Rendering large interactive sections after an urgent input.

### When I Would Not Use It

I would not use transitions to hide an inefficient algorithm.

If filtering 500,000 records on the main thread is inherently expensive, I should first evaluate:

- Server-side filtering.
- Indexing.
- Pagination.
- Virtualization.
- Web Workers.

Concurrency features improve scheduling; they do not magically make expensive computation cheap.

---

## 3. React Architecture

### Question
How would you prevent Context from becoming a performance bottleneck?

### Answer
Context is useful, but one large frequently changing context can cause many consumers to re-render.

A problematic design could be:

```tsx
<AppContext.Provider
  value={{
    user,
    theme,
    cart,
    notifications,
    permissions,
    search,
    settings
  }}
>
```

Every time the provider value changes, consumers depending on that context may be affected.

I would first split contexts according to responsibility and update frequency.

```text
AuthContext
ThemeContext
PermissionsContext
```

I would also avoid unnecessarily recreating provider values.

For example:

```tsx
const value = useMemo(
  () => ({ user, logout }),
  [user, logout]
);
```

However, I would not use memoization as the only architectural solution.

If state changes frequently and many components subscribe to small pieces of it, an external state store with selector-based subscriptions may be more appropriate.

### Senior-Level Principle

Use Context mainly for **dependency distribution**, not automatically as a replacement for every state-management requirement.

---

## 4. React Design

### Question
How would you design reusable components without creating an over-engineered component library?

### Answer
I start with actual repeated use cases instead of trying to predict every possible future requirement.

A reusable component should have a clear responsibility.

For example:

```tsx
<Button
  variant="primary"
  size="medium"
  disabled={false}
>
  Save
</Button>
```

I would avoid APIs such as:

```tsx
<Button
  blue
  rounded
  marginLeft={12}
  shadow={4}
  textSize={17}
  specialMode
/>
```

because they expose styling implementation details and create an uncontrolled API surface.

I prefer:

- Semantic variants.
- Composition.
- Consistent accessibility behavior.
- Strong TypeScript props.
- Controlled extension points.
- Design tokens.

For complex components, composition can be cleaner than dozens of boolean props.

### Senior-Level Principle

A reusable component should abstract **stable patterns**, not every possible difference.

Premature abstraction creates components that become harder to use than duplicated code.

---

## 5. JavaScript

### Question
Explain closures, lexical scope, and a production use case for closures.

### Answer
A closure occurs when a function retains access to variables from its lexical scope even after the outer function has finished executing.

Example:

```ts
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

`increment` retains access to `count`.

Closures are used throughout frontend development.

Examples include:

- Event handlers.
- React hooks.
- Factory functions.
- Memoization.
- Private state.
- Debounce/throttle implementations.

Example:

```ts
function createRequestTracker() {
  let activeRequests = 0;

  return {
    start() {
      activeRequests++;
    },

    finish() {
      activeRequests--;
    },

    getCount() {
      return activeRequests;
    }
  };
}
```

The internal variable cannot be directly modified from outside.

### Senior-Level Concern

Closures can also retain memory.

If a long-lived callback captures a very large object unnecessarily, that object may remain reachable and therefore cannot be garbage collected.

---

## 6. JavaScript

### Question
Explain event delegation and when it is useful in a large application.

### Answer
Events such as clicks generally propagate through the DOM.

Instead of attaching an event listener to every child element, we can attach one listener to a common ancestor.

Example:

```html
<ul id="users">
  <li data-id="101">User A</li>
  <li data-id="102">User B</li>
  <li data-id="103">User C</li>
</ul>
```

Then:

```ts
const list = document.getElementById("users");

list?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const item = target.closest("[data-id]");

  if (!item) return;

  console.log(item.getAttribute("data-id"));
});
```

Benefits include:

- Fewer event listeners.
- Dynamic child elements can automatically participate.
- Centralized event handling.

### Important Detail

I would use `closest()` rather than assuming `event.target` is exactly the element carrying the desired attribute because users may click nested elements.

---

## 7. JavaScript Performance

### Question
What are Web Workers and when would you use them?

### Answer
JavaScript UI code normally executes on the browser's main thread.

CPU-heavy work can block:

```text
Input
Animation
Rendering
Click handlers
```

A Web Worker allows JavaScript computation to execute in a separate worker thread.

Architecture:

```text
Main Thread
    |
 postMessage
    |
    v
Web Worker
    |
 computation
    |
 postMessage
    |
    v
Main Thread
```

Potential use cases include:

- Parsing very large files.
- Heavy data transformations.
- Image processing.
- Complex calculations.
- Large client-side analytics processing.

I would not use workers for ordinary API calls because network requests are already asynchronous.

### Trade-Off

Worker communication has serialization/transfer overhead.

Therefore, I would use a worker only when moving expensive CPU work off the main thread provides a meaningful benefit.

---

## 8. TypeScript

### Question
Explain discriminated unions and exhaustive checking.

### Answer
Discriminated unions allow us to model a set of valid states using a shared discriminating property.

Example:

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };
```

Then:

```ts
function renderState<T>(state: RequestState<T>) {
  switch (state.status) {
    case "idle":
      return "Idle";

    case "loading":
      return "Loading";

    case "success":
      return state.data;

    case "error":
      return state.error;

    default: {
      const exhaustiveCheck: never = state;
      return exhaustiveCheck;
    }
  }
}
```

If another state is later introduced:

```ts
{ status: "cancelled" }
```

TypeScript can tell us that the switch is no longer exhaustive.

### Why I Like This Pattern

It prevents impossible combinations such as:

```ts
{
  loading: true,
  data: {...},
  error: "failed"
}
```

A well-designed type system should make invalid states difficult or impossible to represent.

---

## 9. TypeScript Architecture

### Question
How would you design a type-safe API layer?

### Answer
I would separate:

```text
Transport
Runtime validation
Domain types
UI
```

For example:

```ts
type User = {
  id: string;
  name: string;
};
```

A typed request could look like:

```ts
async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);

  if (!response.ok) {
    throw new Error("Unable to fetch user");
  }

  const data: unknown = await response.json();

  return validateUser(data);
}
```

The important detail is:

```ts
const data: unknown
```

I do not assume the backend always returns what TypeScript expects.

TypeScript disappears at runtime.

For critical trust boundaries, I would validate the API response before converting it to a trusted domain type.

### Senior-Level Principle

Types describe what our application expects.

Runtime validation confirms what the outside world actually sent.

---

## 10. Authentication

### Question
How would you implement token refresh without sending multiple refresh requests simultaneously?

### Answer
Consider this scenario:

```text
Request A -> 401
Request B -> 401
Request C -> 401
Request D -> 401
```

A naive implementation could send four refresh requests.

That can cause token rotation problems and unnecessary backend load.

Instead, I would maintain one shared refresh operation.

Conceptually:

```text
401
 |
 | Is refresh already running?
 |
 +-- No --> Start refresh
 |             |
 |             v
 |        New token/session
 |             |
 |       Retry waiting requests
 |
 +-- Yes --> Wait for existing refresh
```

Pseudo implementation:

```ts
let refreshPromise: Promise<void> | null = null;

async function refreshOnce() {
  if (!refreshPromise) {
    refreshPromise = refreshSession()
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
}
```

All failed requests wait for the same promise.

If refresh fails, I would clear authenticated state and move the user through the application's session-expired/login flow.

### Security Point

Refresh-token handling should primarily be designed with the backend/security architecture. The frontend should not attempt to create security purely through client-side logic.

---

## 11. Authorization

### Question
How would you design frontend authorization for hundreds of permissions?

### Answer
I would avoid checks scattered throughout the application like:

```tsx
if (user.role === "admin")
```

Instead, I would use permissions:

```text
users.read
users.create
users.update
users.delete
reports.read
reports.export
```

Roles can map to permissions on the backend.

Frontend state could contain the effective permissions:

```ts
type Permission =
  | "users.read"
  | "users.create"
  | "users.update"
  | "users.delete"
  | "reports.read"
  | "reports.export";
```

Then provide reusable checks:

```ts
function can(
  permissions: Set<Permission>,
  permission: Permission
) {
  return permissions.has(permission);
}
```

UI:

```tsx
{can(permissions, "users.delete") && (
  <DeleteUserButton />
)}
```

Routes can use the same permission abstraction.

### Critical Point

Frontend authorization controls the UI.

Backend authorization protects the resource.

A user can bypass frontend code and directly call an API, so the backend must enforce every sensitive permission.

---

## 12. Security

### Question
What is Content Security Policy and how does it protect a frontend application?

### Answer
Content Security Policy, or CSP, is a browser security mechanism delivered through HTTP headers.

It allows the server to tell the browser which sources are allowed for resources such as:

- JavaScript.
- Styles.
- Images.
- Fonts.
- Frames.
- Connections.

Conceptually:

```text
Browser
  |
  v
CSP Policy
  |
  +-- Trusted script -> allowed
  |
  +-- Unexpected script -> blocked
```

CSP is particularly useful as a defense-in-depth mechanism against XSS.

A strict policy may use nonces or hashes for allowed scripts instead of broadly allowing inline JavaScript.

### Important Interview Point

CSP does not mean we can stop sanitizing untrusted content.

Security should have multiple layers:

```text
Safe rendering
+ Sanitization
+ CSP
+ Secure cookies
+ Input validation
+ Backend authorization
```

---

## 13. Security

### Question
What security checks would you perform before a frontend production release?

### Answer
My checklist would include:

- No secrets embedded in frontend bundles.
- Sensitive tokens are not logged.
- HTTPS is enforced.
- Authentication/session expiry works correctly.
- Authorization is enforced by backend APIs.
- Cookie security attributes are correct.
- XSS-sensitive rendering paths are reviewed.
- `dangerouslySetInnerHTML` usage is reviewed.
- CSRF protections are appropriate for the authentication architecture.
- CSP is configured where applicable.
- Third-party scripts are reviewed.
- Dependency vulnerabilities are checked.
- Source maps are handled according to the organization's security/observability requirements.
- Error pages do not expose sensitive internals.
- CORS configuration is intentionally designed.
- Security headers are reviewed.

### Important Point

Frontend environment variables are not automatically secret.

Anything shipped to the browser must be considered visible to the user.

Therefore, private API keys and backend credentials must never be embedded in a frontend application.

---

## 14. Accessibility

### Question
How would you build an accessible autocomplete/combobox?

### Answer
An accessible autocomplete is significantly more complex than an input with a dropdown.

I would consider:

- Input labeling.
- Combobox semantics.
- Relationship between the input and popup.
- Listbox/options semantics where appropriate.
- Keyboard navigation.
- Active option tracking.
- Escape behavior.
- Enter selection.
- Screen-reader announcements.
- Focus behavior.

Keyboard behavior might include:

```text
Arrow Down -> next option
Arrow Up   -> previous option
Enter      -> select
Escape     -> close
```

I would follow the relevant ARIA Authoring Practices pattern rather than inventing keyboard behavior.

### Testing

I would test with:

- Keyboard only.
- Screen reader.
- Browser accessibility tree.
- Automated accessibility tools.

Automated testing alone cannot prove that a complex widget is accessible.

---

## 15. Accessibility

### Question
How would you handle focus management in a React SPA?

### Answer
Traditional page navigation naturally changes document context.

In an SPA, route transitions can happen without a full page reload, so focus can remain on an element that no longer makes sense.

For route transitions, I may move focus to the new page heading or another meaningful landmark.

For modals:

```text
Open modal
   |
Store previous focused element
   |
Move focus into modal
   |
Keep keyboard interaction inside modal as appropriate
   |
Close modal
   |
Restore previous focus
```

I would also ensure:

- Logical tab order.
- No unnecessary positive `tabindex`.
- Hidden content is not accidentally keyboard accessible.
- Skip links exist for large navigation layouts where appropriate.

### Senior-Level Point

Accessibility is not simply adding ARIA attributes. Focus management and keyboard interaction are part of application behavior.

---

## 16. Performance

### Question
How would you improve INP on a page containing a large interactive data grid?

### Answer
First, I would profile the actual interaction.

Suppose clicking a filter causes:

```text
Click
 |
 v
Large JS calculation
 |
 v
5,000 rows render
 |
 v
Layout
 |
 v
Paint
```

Potential improvements include:

- Virtualize rows.
- Avoid rendering off-screen data.
- Move filtering/sorting to the backend for very large datasets.
- Memoize genuinely expensive derived calculations.
- Prevent unrelated components from rendering.
- Split long tasks.
- Use workers for CPU-heavy transformations when justified.
- Reduce expensive DOM measurement.
- Defer non-urgent rendering using appropriate React scheduling features.
- Reduce event-handler work.

I would then remeasure INP and interaction traces.

### Senior-Level Principle

Performance optimization should have:

```text
Baseline
   ->
Change
   ->
Measurement
   ->
Verified improvement
```

---

## 17. Performance

### Question
What is layout thrashing and how would you identify and prevent it?

### Answer
Browsers calculate element geometry during layout.

Layout thrashing happens when JavaScript repeatedly mixes DOM writes and layout-dependent reads, forcing the browser to recalculate layout many times.

Problematic pattern:

```ts
for (const element of elements) {
  element.style.width = "200px";
  console.log(element.offsetWidth);
}
```

The style change is a write.

`offsetWidth` may require layout information.

Repeated write/read cycles can trigger expensive synchronous layout work.

A better approach is to batch operations:

```text
Read required measurements
        |
        v
Calculate
        |
        v
Batch DOM writes
```

I would identify this using the browser Performance panel and look for excessive layout/recalculate-style activity.

---

## 18. Network

### Question
How would you prevent API race conditions in a search experience?

### Answer
Imagine:

```text
Request A: "rea"
Request B: "react"
```

Request B may finish first.

Then Request A finishes later and incorrectly replaces the UI with stale results.

I can prevent this using request cancellation.

Example:

```ts
let controller: AbortController | null = null;

async function search(query: string) {
  controller?.abort();

  controller = new AbortController();

  const response = await fetch(
    `/api/search?q=${encodeURIComponent(query)}`,
    {
      signal: controller.signal
    }
  );

  return response.json();
}
```

Other approaches include:

- Request IDs.
- Query-library cancellation/deduplication.
- Ignoring stale responses.
- Debouncing input.

### Important Difference

Debouncing reduces request frequency.

Cancellation or stale-response protection prevents ordering problems.

They solve related but different problems.

---

## 19. Network

### Question
Explain HTTP caching using `Cache-Control`, ETag and `stale-while-revalidate`.

### Answer
HTTP caching can avoid unnecessary network transfer and server work.

For example:

```text
Cache-Control: public, max-age=60
```

means the response can be considered fresh for the configured period.

An ETag represents a version of a resource.

The client can later send:

```text
If-None-Match: <etag>
```

If the resource has not changed, the server can return:

```text
304 Not Modified
```

without sending the complete response body again.

`stale-while-revalidate` allows a cached response to be used temporarily while a fresh version is fetched in the background.

Conceptually:

```text
Request
 |
 v
Cached response available?
 |
 +-- Fresh -> return cache
 |
 +-- Stale but allowed ->
       return stale response
       +
       revalidate in background
```

### Senior-Level Point

Caching strategy depends on data correctness requirements.

I would not cache sensitive or highly dynamic data using the same policy as public static assets.

---

## 20. Browser Architecture

### Question
Explain the critical rendering path from URL navigation to pixels on screen.

### Answer
At a high level:

```text
URL
 |
DNS
 |
Connection / TLS
 |
HTTP Request
 |
HTML Response
 |
Parse HTML
 |
DOM
 |
CSSOM
 |
Render Tree
 |
Layout
 |
Paint
 |
Composite
 |
Pixels
```

JavaScript can influence or block parts of this pipeline.

Large render-blocking CSS, synchronous scripts, slow server responses and heavy JavaScript can delay visible content.

For frontend performance, I think about:

- Server response time.
- Critical resource priority.
- CSS delivery.
- JavaScript size/execution.
- Font loading.
- Image loading.
- Main-thread availability.

### Senior-Level Point

A React performance problem may actually originate before React executes.

Understanding the browser pipeline prevents us from treating every performance problem as a component problem.

---

## 21. Production

### Question
How would you investigate increasing memory usage in a production SPA?

### Answer
I would first reproduce the behavior if possible.

Example:

```text
Open dashboard
-> Navigate to reports
-> Return
-> Repeat 20 times
-> Memory continually grows
```

I would inspect:

- Heap snapshots.
- Allocation timelines.
- Detached DOM nodes.
- Event listeners.
- Timers.
- WebSocket connections.
- Observers.
- Large application caches.
- Closures retaining objects.

I would compare snapshots:

```text
Snapshot A
    |
Perform repeated workflow
    |
Snapshot B
    |
Compare retained objects
```

A memory increase is not automatically a leak because garbage collection is not immediate.

The stronger signal is memory that remains retained after garbage collection and repeated lifecycle operations.

---

## 22. Reliability

### Question
How would you design graceful degradation when a non-critical backend service fails?

### Answer
Suppose an e-commerce product page depends on:

```text
Product API
Inventory API
Recommendations API
Reviews API
```

If the recommendation service fails, I should not necessarily fail the entire product page.

Instead:

```text
Product data --------> Required
Inventory -----------> Required
Recommendations -----> Optional
Reviews -------------> Optional
```

The UI can render:

```text
Product
Price
Inventory
[Recommendations unavailable]
[Reviews temporarily unavailable]
```

I would isolate failures through:

- Independent query boundaries.
- Error boundaries where appropriate.
- Timeouts.
- Fallback UI.
- Retry policies.
- Monitoring.

### Senior-Level Principle

Not every dependency deserves the same failure behavior.

Architecture should reflect business criticality.

---

## 23. Frontend System Design

### Question
Design a real-time notification system for a large React application.

### Answer
Requirements might include:

- Unread notification count.
- Real-time notifications.
- Notification history.
- Read/unread status.
- Multiple browser tabs.
- Reconnection.

Possible architecture:

```text
React App
   |
   +------ REST API ------> Notification History
   |
   +------ WebSocket -----> Real-time Events
```

The client can initially fetch notification history using HTTP and then subscribe to new events.

State might look like:

```ts
type Notification = {
  id: string;
  type: string;
  message: string;
  read: boolean;
  createdAt: string;
};
```

I would consider:

- Event deduplication.
- Reconnection with backoff.
- Ordering.
- Missed events during disconnection.
- Pagination.
- Optimistic read state.
- Cross-tab synchronization.
- Permission/security checks.

If ordering matters, the backend should provide a sequence number or reliable timestamp/versioning mechanism.

### Senior-Level Point

WebSocket connectivity does not automatically guarantee that the client never misses or duplicates an event. Recovery and reconciliation need to be designed.

---

## 24. Frontend System Design

### Question
Design a frontend architecture for a large role-based admin portal.

### Answer
I would organize the application around business domains.

Example:

```text
src/
  app/
  features/
    users/
    organizations/
    billing/
    audit/
    reports/
  shared/
  auth/
  permissions/
  api/
```

Authentication establishes the current user.

Authorization provides effective permissions.

```text
Login
 |
 v
Session
 |
 v
Fetch user + permissions
 |
 v
Route authorization
 |
 v
Feature authorization
 |
 v
API request
 |
 v
Backend authorization
```

I would centralize permission evaluation instead of embedding role names throughout components.

The application should also include:

- Route-level code splitting.
- Audit-friendly user actions.
- Accessible tables/forms/dialogs.
- Server-state caching.
- Consistent error handling.
- Feature flags.
- Production monitoring.
- Security-conscious logging.

For very large tables, I would use server-side filtering/pagination where the dataset justifies it.

---

## 25. Engineering Leadership

### Question
How would you review a pull request as a senior frontend engineer?

### Answer
I would review beyond syntax.

My mental checklist is:

```text
Correctness
Architecture
Readability
Security
Accessibility
Performance
Testing
Maintainability
Observability
```

I would ask:

- Does this solve the intended requirement?
- Is there a simpler design?
- Is state located at the correct level?
- Are API failures handled?
- Is accessibility preserved?
- Are authorization assumptions safe?
- Could this introduce unnecessary renders?
- Are edge cases tested?
- Does it introduce unnecessary dependencies?
- Will another developer understand this six months later?

I distinguish blocking feedback from suggestions.

Example:

```text
Blocking:
This permission is enforced only in the UI and the API currently accepts the operation.

Suggestion:
This helper could potentially be extracted if we reuse it elsewhere.
```

### Senior-Level Principle

Code review is not about demonstrating that the reviewer knows more.

It is a quality-control and knowledge-sharing mechanism.

---

## 26. Production Incident

### Question
A new release causes CPU usage and INP to spike. What would you do?

### Answer
My first goal is user impact reduction.

I would check:

```text
Did the problem start with this release?
        |
       Yes
        |
Is rollback safe?
        |
       Yes
        |
Rollback / disable feature
```

If a feature flag controls the affected feature, disabling it may be faster than a full rollback.

Then I would investigate:

- Performance traces.
- Long tasks.
- React Profiler.
- Release diff.
- Bundle changes.
- New third-party scripts.
- Expensive loops.
- Large list rendering.
- Repeated effects.
- Excessive state updates.
- Layout thrashing.
- Memory/GC pressure.

Suppose the release introduced:

```tsx
useEffect(() => {
  setFilteredItems(expensiveFilter(items));
});
```

and the effect now executes repeatedly because one dependency changes on every render.

That could create:

```text
Render
  ->
Effect
  ->
State update
  ->
Render
  ->
Effect
  ->
...
```

I would fix the root cause, add regression coverage or performance monitoring, and redeploy carefully.

### What I Would Say in an Interview

> "For a production incident, I first reduce customer impact using rollback or a feature flag if that is safe. Then I compare telemetry before and after the release, isolate whether the regression comes from JavaScript execution, rendering, network, layout or a third-party dependency, reproduce it using production-like conditions, fix the root cause, and add monitoring or a performance budget so the same regression is detected earlier in future releases."

---

# Senior Interview Follow-Up Drill

| No. | Follow-Up Question | What the Interviewer Is Testing |
|---:|---|---|
| 1 | Why can memoization increase total application cost? | Understanding of optimization trade-offs |
| 2 | What happens when a React component suspends during a transition? | Modern React knowledge |
| 3 | How would you handle 10,000 permissions without sending a huge permission object repeatedly? | Authorization architecture |
| 4 | Can CSP completely prevent XSS? | Security depth |
| 5 | What is the difference between authentication, authorization and session management? | Security fundamentals |
| 6 | Why is a hidden button not an authorization mechanism? | Client/server trust boundaries |
| 7 | What is the difference between `aria-label` and `aria-labelledby`? | Accessibility |
| 8 | When should you avoid ARIA entirely? | Semantic HTML knowledge |
| 9 | How would you measure whether virtualization actually helped? | Performance measurement |
| 10 | What happens if a Web Worker crashes? | Reliability |
| 11 | How would you synchronize authentication across browser tabs? | Browser architecture |
| 12 | How would you prevent stale optimistic updates? | Server-state consistency |
| 13 | What happens if two browser tabs refresh an auth token simultaneously? | Authentication race conditions |
| 14 | How would you design retry backoff for WebSocket reconnects? | Distributed-system thinking |
| 15 | What would you log when debugging a production issue without exposing PII? | Observability/security |
| 16 | How would you detect a bundle-size regression in CI? | Production engineering |
| 17 | How would you make a data table accessible to keyboard and screen-reader users? | Advanced accessibility |
| 18 | How would you handle 100,000 client-side records? | Architecture/performance |
| 19 | How would you decide between polling, SSE and WebSockets? | Real-time architecture |
| 20 | When should frontend code deliberately fail fast? | Reliability and correctness |

---

# Answer Framework for a 6+ Year Senior Frontend Interview

For difficult scenario questions, structure the answer like this:

```text
1. Clarify the requirement
        ↓
2. Identify constraints
        ↓
3. Measure / gather evidence
        ↓
4. Explain possible solutions
        ↓
5. Discuss trade-offs
        ↓
6. Choose an approach
        ↓
7. Explain implementation
        ↓
8. Explain testing
        ↓
9. Explain production monitoring
```

For example, if asked:

> "How would you optimize a slow React page?"

Avoid answering only:

> "I would use useMemo, useCallback and React.memo."

A stronger senior answer is:

> "I would first reproduce the issue using a production build and determine whether the bottleneck is network latency, JavaScript execution, React rendering, layout, painting or third-party code. I would use the React Profiler and browser Performance tools to identify expensive interactions. Then I would apply the smallest appropriate optimization—for example virtualization for a large list, route-level code splitting for excessive initial JavaScript, or memoization for a verified expensive calculation—and compare the relevant metric before and after the change."

That demonstrates **diagnosis, trade-offs and production thinking**, which is what interviewers expect from a senior frontend developer.
