

## 66. What are the different types of REST API operations?

### 1. GET — Read data

Used to retrieve data from the server.

```http
GET /users
```

Get all users.

```http
GET /users/123
```

Get a specific user.

**Example response:**

```json
{
  "id": 123,
  "name": "Pratik",
  "email": "pratik@example.com"
}
```

---

### 2. POST — Create data

Used to create a new resource.

```http
POST /users
```

Request body:

```json
{
  "name": "Pratik",
  "email": "pratik@example.com"
}
```

Response might be:

```json
{
  "id": 124,
  "name": "Pratik",
  "email": "pratik@example.com"
}
```

Think:

> **POST = Create**

---

### 3. PUT — Replace/Update entire resource

Used when you want to **replace the complete resource**.

```http
PUT /users/123
```

```json
{
  "name": "Pratik",
  "email": "new@example.com",
  "age": 30
}
```

If the original user had:

```json
{
  "id": 123,
  "name": "Pratik",
  "email": "old@example.com",
  "age": 29
}
```

PUT essentially says:

> "Here is the new complete representation of user 123."

---

### 4. PATCH — Partially update data

Used when you only want to change **specific fields**.

```http
PATCH /users/123
```

```json
{
  "age": 30
}
```

Only `age` is changed.

Think:

> **PATCH = Partial update**

---

### 5. DELETE — Delete data

```http
DELETE /users/123
```

Deletes user `123`.

Think:

> **DELETE = Remove**

---

## This distinction is commonly asked in interviews:

| Method | Purpose                        | Example           |
| ------ | ------------------------------ | ----------------- |
| GET    | Read                           | Get user          |
| POST   | Create                         | Create user       |
| PUT    | Replace/update entire resource | Replace user      |
| PATCH  | Partial update                 | Change user's age |
| DELETE | Delete                         | Delete user       |

---

## Other HTTP methods

There are also less commonly used REST methods:

### HEAD

Same as GET, but returns **headers without the response body**.

```http
HEAD /users/123
```

Useful when you want to check whether a resource exists or inspect metadata without downloading the content.

### OPTIONS

Tells you which HTTP methods are supported by a resource.

```http
OPTIONS /users
```

This is also important in browsers because it's involved in **CORS preflight requests**.

---

## One important interview point

Don't confuse **REST API** with **HTTP methods**.

REST is an **architectural style** for designing APIs. HTTP methods are the mechanism commonly used to implement RESTful operations.

For a senior frontend interview, I'd remember this simple mapping:

```text
GET     → Read
POST    → Create
PUT     → Replace
PATCH   → Partial Update
DELETE  → Delete
```

And then understand **idempotency** (`GET`, `PUT`, `DELETE` vs `POST`, and the nuances of `PATCH`) because that's a very common follow-up interview question.

**Idempotency** means:

> If you perform the **same API request multiple times**, the final state of the server is the same as if you performed it once.

### Simple example

Suppose we have:

```http
PUT /users/123
```

```json
{
  "name": "Pratik"
}
```

If you send this request **once**:

```text
User 123 → name = Pratik
```

If you send it **10 times**:

```text
User 123 → name = Pratik
```

The final result is still the same.

So **PUT is idempotent**.

---

### Compare with POST

Suppose:

```http
POST /users
```

```json
{
  "name": "Pratik"
}
```

Send it once:

```text
User created → ID 101
```

Send it again:

```text
User created → ID 102
```

Send it again:

```text
User created → ID 103
```

Each request creates a new resource.

So **POST is generally NOT idempotent**.

---

### Common HTTP methods

| Method     | Idempotent?    | Why?                                                                            |
| ---------- | -------------- | ------------------------------------------------------------------------------- |
| **GET**    | ✅ Yes          | Reading doesn't change the resource                                             |
| **PUT**    | ✅ Yes          | Replacing with the same data gives the same state                               |
| **DELETE** | ✅ Yes          | After the resource is deleted, deleting it again doesn't change the final state |
| **PATCH**  | ⚠️ Depends     | Depends on what the patch operation does                                        |
| **POST**   | ❌ Generally no | Repeated requests can create multiple resources                                 |

### Why does this matter in frontend?

Imagine your React application sends:

```js
fetch("/api/orders", {
  method: "POST",
  body: JSON.stringify(order)
});
```

The network fails or times out. You don't know whether the server actually created the order.

If you blindly retry:

```text
POST → Order created
      ↓
Network timeout
      ↓
POST again → Another order created 😱
```

This is one reason **idempotency is important when designing APIs and retry mechanisms**.

### Interview answer

If an interviewer asks **"What is idempotency?"**, you can say:

> "Idempotency means making the same API request multiple times produces the same final state on the server as making it once. GET, PUT and DELETE are generally idempotent, while POST is generally not. It's important when implementing retries because a non-idempotent request can accidentally perform an operation multiple times."

A very common follow-up is:

## 2. Why is DELETE idempotent even though the second DELETE may return 404?

The answer is that **idempotency is about the final state, not necessarily about getting the exact same response every time.**

For example:

```http
DELETE /users/123
```

### First request

User exists:

```text
DELETE /users/123
→ 204 No Content
```

User is now deleted.

### Second request

```text
DELETE /users/123
→ 404 Not Found
```

The response is different, **but the final state is still the same**:

```text
User 123 does not exist
```

Therefore, `DELETE` is considered **idempotent**.

### The key distinction

> **Idempotent does NOT mean "same response every time."**
> It means **repeating the operation doesn't produce additional changes to the resource's state.**

This is a very useful interview point.

For example:

```text
DELETE → delete user
DELETE → user already deleted
DELETE → user already deleted
DELETE → user already deleted
```

The first request changes the state. Subsequent requests don't create any additional change.

That's why **DELETE is idempotent**.










## 3. Why OPTIONS is used?

`OPTIONS` is an HTTP method used to ask the server:

> **"What operations/options are available for this resource?"**

It's especially important in frontend development because of **CORS**.

### 1. Basic example

Suppose your frontend wants to access:

```http
https://api.example.com/users
```

The browser can send:

```http
OPTIONS /users
```

The server might respond:

```http
Allow: GET, POST, PUT, DELETE, OPTIONS
```

Meaning:

> "This `/users` endpoint supports these HTTP methods."

---

### 2. The important use: CORS preflight

This is the part you should know for a **React/frontend interview**.

Suppose your React app is running at:

```text
https://myapp.com
```

and your API is:

```text
https://api.example.com
```

These are different **origins**.

Your frontend makes:

```js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer xyz"
  },
  body: JSON.stringify({
    name: "Pratik"
  })
});
```

Before sending the actual `POST`, the browser may send an `OPTIONS` request:

```http
OPTIONS /users
Origin: https://myapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization, Content-Type
```

The server responds something like:

```http
HTTP/1.1 204 No Content

Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
```

The browser checks this response.

If the server says:

```text
✅ https://myapp.com is allowed
✅ POST is allowed
✅ Authorization is allowed
```

then the browser sends the actual:

```http
POST /users
```

---

### Why does the browser do this?

Think of `OPTIONS` as the browser asking the server:

> **"Hey server, I'm from `myapp.com`. I want to send a POST request with these headers. Are you okay with that?"**

Server:

> **"Yes, you're allowed."**

Browser:

> **"Okay, I'll send the POST."**

---

### 3. Why is it called "preflight"?

Because the `OPTIONS` request happens **before** the actual request.

```text
React
  │
  │  POST request planned
  ▼
Browser
  │
  │  OPTIONS (preflight)
  ▼
Server
  │
  │  "Yes, that's allowed"
  ▼
Browser
  │
  │  POST
  ▼
Server
```

It's basically a **permission check** performed by the browser.

---

### Interview answer 🎯

If an interviewer asks:

**"Why is OPTIONS used?"**

You can answer:

> "`OPTIONS` is used to determine what operations are supported by a resource. In frontend applications, its most common use is CORS preflight. When a cross-origin request is considered non-simple, the browser first sends an OPTIONS request to check whether the server allows the requested origin, HTTP method, and headers. If the server permits it through the appropriate CORS headers, the browser sends the actual request."

### One important clarification

The **browser** decides whether a preflight is needed. You generally don't manually write an `OPTIONS` request in your React code.

Also, **not every cross-origin request triggers preflight**. Simple CORS requests can go directly to the actual request.


## 4. what are different status codes? 

Absolutely. HTTP status codes tell the client **what happened to an HTTP request**.

The easiest way to remember them is by the **first digit**:

```text
1xx → Information
2xx → Success
3xx → Redirection
4xx → Client error
5xx → Server error
```

## 1xx — Informational

These indicate that the request has been received and processing is continuing.

| Code    | Meaning             | Example                                         |
| ------- | ------------------- | ----------------------------------------------- |
| **100** | Continue            | Server says client can continue sending request |
| **101** | Switching Protocols | Switching HTTP → WebSocket, for example         |

You won't deal with these very often in normal frontend API development.

---

# 2xx — Success ✅

These are the most important success responses.

### `200 OK`

Request succeeded.

```http
GET /users/123
```

```http
200 OK
```

```json
{
  "id": 123,
  "name": "Pratik"
}
```

Commonly used for:

* GET
* successful PUT/PATCH
* successful POST when returning a response

---

### `201 Created`

A new resource was successfully created.

```http
POST /users
```

Response:

```http
201 Created
```

```json
{
  "id": 123,
  "name": "Pratik"
}
```

Think:

> **201 = Something new was created**

---

### `202 Accepted`

The server accepted the request but **hasn't finished processing it yet**.

For example:

```http
POST /generate-report
```

Server:

```http
202 Accepted
```

The report might be generated asynchronously.

Think:

> **202 = I accepted your request, but I'm still working on it.**

---

### `204 No Content`

Request succeeded, but there's **no response body**.

Very common with DELETE:

```http
DELETE /users/123
```

Response:

```http
204 No Content
```

---

# 3xx — Redirection 🔄

These tell the client that something about the requested resource/location has changed.

### `301 Moved Permanently`

Resource has permanently moved.

```text
/api/users
      ↓
/api/v2/users
```

---

### `302 Found`

Temporary redirection.

---

### `304 Not Modified`

Very important for caching.

It basically tells the browser:

> "The resource hasn't changed. You can use your cached version."

This can reduce unnecessary data transfer.

---

# 4xx — Client Errors ❌

These generally mean **something is wrong with the request from the client side**.

This doesn't necessarily mean the literal end user made a mistake; it means the request cannot be fulfilled as sent.

### `400 Bad Request`

The request is invalid/malformed.

Example:

```http
POST /users
```

```json
{
  "email": "not-an-email"
}
```

Server might return:

```http
400 Bad Request
```

Think:

> **400 = Your request isn't valid.**

---

### `401 Unauthorized`

The client hasn't provided valid authentication credentials.

Example:

```http
GET /profile
Authorization: Bearer invalid-token
```

Response:

```http
401 Unauthorized
```

Think:

> **401 = Who are you? / Please authenticate.**

---

### `403 Forbidden`

The server knows who you are, but **you don't have permission**.

Example:

```text
User → authenticated
       ↓
Tries to access admin API
       ↓
403 Forbidden
```

Think:

> **403 = I know who you are, but you're not allowed to do this.**

### Important interview distinction

```text
401 → Authentication problem
403 → Authorization/permission problem
```

---

### `404 Not Found`

The requested resource doesn't exist.

```http
GET /users/999999
```

```http
404 Not Found
```

Think:

> **404 = I can't find that resource.**

---

### `405 Method Not Allowed`

The resource exists, but the HTTP method isn't supported.

For example:

```http
DELETE /users
```

when that endpoint only supports:

```text
GET
POST
```

Could return:

```http
405 Method Not Allowed
```

---

### `409 Conflict`

The request conflicts with the current state of the resource.

A common example:

```http
POST /users
```

```json
{
  "email": "pratik@example.com"
}
```

If that email must be unique and already exists:

```http
409 Conflict
```

Think:

> **409 = Your request conflicts with existing state.**

---

### `422 Unprocessable Content`

The server understands the request, but the supplied data fails validation/business rules.

For example:

```json
{
  "age": -5
}
```

The JSON itself is valid, but the value isn't acceptable.

```http
422 Unprocessable Content
```

You'll see `422` frequently in APIs that perform detailed validation.

---

# 5xx — Server Errors 💥

These generally indicate that something went wrong **on the server side**.

### `500 Internal Server Error`

Generic server-side error.

```text
Frontend
   ↓
GET /users
   ↓
Backend
   ↓
💥 Unexpected error
   ↓
500
```

Think:

> **500 = Something went wrong on the server.**

---

### `501 Not Implemented`

The server doesn't support the functionality required to fulfill the request.

Less common in everyday REST APIs.

---

### `502 Bad Gateway`

A server acting as a gateway/proxy received an invalid response from an upstream server.

Example:

```text
Frontend
   ↓
API Gateway
   ↓
Backend Service
   ↓
💥
```

Gateway may return:

```http
502 Bad Gateway
```

---

### `503 Service Unavailable`

The server is temporarily unable to handle the request.

Common reasons:

* Server overload
* Maintenance
* Service temporarily down

```http
503 Service Unavailable
```

---

### `504 Gateway Timeout`

A gateway/proxy didn't receive a response from the upstream server in time.

```text
Client
  ↓
API Gateway
  ↓
Backend
  ↓
... waiting ...
  ↓
⏰ Timeout
  ↓
504
```

---

# The ones I'd memorize for interviews

You don't need to memorize every HTTP status code.

Know these really well:

| Status  | Meaning               | Remember as                      |
| ------- | --------------------- | -------------------------------- |
| **200** | OK                    | Successful request               |
| **201** | Created               | Resource created                 |
| **202** | Accepted              | Processing asynchronously        |
| **204** | No Content            | Success, no body                 |
| **301** | Moved Permanently     | Permanent redirect               |
| **304** | Not Modified          | Use cached version               |
| **400** | Bad Request           | Invalid request                  |
| **401** | Unauthorized          | Authentication required/failed   |
| **403** | Forbidden             | Not permitted                    |
| **404** | Not Found             | Resource doesn't exist           |
| **405** | Method Not Allowed    | HTTP method isn't supported      |
| **409** | Conflict              | Conflicts with current state     |
| **422** | Unprocessable Content | Validation/business-rule failure |
| **500** | Internal Server Error | Server crashed/error             |
| **502** | Bad Gateway           | Upstream server problem          |
| **503** | Service Unavailable   | Server temporarily unavailable   |
| **504** | Gateway Timeout       | Upstream took too long           |

### ⭐ The most important interview distinction

If your React application calls an API and gets an error, think:

```text
4xx
 ↓
Problem with the request/client side
```

versus

```text
5xx
 ↓
Problem processing the request on the server/infrastructure side
```

But don't interpret that as an absolute rule: for example, a `404` can result from a server-side routing/configuration mistake, even though it's a 4xx response.
