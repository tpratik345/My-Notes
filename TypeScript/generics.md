# TypeScript Generics Interview Question Bank

## Index

| #  | Question                                                                                                                                              |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [What are Generics in TypeScript?](#1-what-are-generics-in-typescript)                                                                                |
| 2  | [Why do we need Generics?](#2-why-do-we-need-generics)                                                                                                |
| 3  | [What is the syntax of a Generic Function?](#3-what-is-the-syntax-of-a-generic-function)                                                              |
| 4  | [How do Generic Functions differ from functions using `any`?](#4-how-do-generic-functions-differ-from-functions-using-any)                            |
| 5  | [What is Type Inference in Generics?](#5-what-is-type-inference-in-generics)                                                                          |
| 6  | [What are Generic Interfaces?](#6-what-are-generic-interfaces)                                                                                        |
| 7  | [What are Generic Type Aliases?](#7-what-are-generic-type-aliases)                                                                                    |
| 8  | [What are Generic Classes?](#8-what-are-generic-classes)                                                                                              |
| 9  | [What are Multiple Generic Parameters?](#9-what-are-multiple-generic-parameters)                                                                      |
| 10 | [What are Generic Constraints?](#10-what-are-generic-constraints)                                                                                     |
| 11 | [How does the `extends` keyword work in Generics?](#11-how-does-the-extends-keyword-work-in-generics)                                                 |
| 12 | [How do you restrict a generic to object types only?](#12-how-do-you-restrict-a-generic-to-object-types-only)                                         |
| 13 | [How do you create a generic function that requires a `length` property?](#13-how-do-you-create-a-generic-function-that-requires-a-length-property)   |
| 14 | [What is `keyof` with Generics?](#14-what-is-keyof-with-generics)                                                                                     |
| 15 | [How do you create a generic `getProperty` function?](#15-how-do-you-create-a-generic-getproperty-function)                                           |
| 16 | [How do Default Generic Types work?](#16-how-do-default-generic-types-work)                                                                           |
| 17 | [What are Conditional Types with Generics?](#17-what-are-conditional-types-with-generics)                                                             |
| 18 | [What is `infer` in Generic Conditional Types?](#18-what-is-infer-in-generic-conditional-types)                                                       |
| 19 | [How do Generic Utility Types work?](#19-how-do-generic-utility-types-work)                                                                           |
| 20 | [How do you create a generic API response type?](#20-how-do-you-create-a-generic-api-response-type)                                                   |
| 21 | [How do you create a generic Result type for success and error handling?](#21-how-do-you-create-a-generic-result-type-for-success-and-error-handling) |
| 22 | [How do you create a generic Repository pattern?](#22-how-do-you-create-a-generic-repository-pattern)                                                 |
| 23 | [How do Generics work with Arrays?](#23-how-do-generics-work-with-arrays)                                                                             |
| 24 | [How do Generics work with Promises?](#24-how-do-generics-work-with-promises)                                                                         |
| 25 | [How do Generics work with React Components?](#25-how-do-generics-work-with-react-components)                                                         |
| 26 | [What are Variadic Tuple Types with Generics?](#26-what-are-variadic-tuple-types-with-generics)                                                       |
| 27 | [How do you create a strongly typed EventEmitter using Generics?](#27-how-do-you-create-a-strongly-typed-eventemitter-using-generics)                 |
| 28 | [What are Recursive Generic Types?](#28-what-are-recursive-generic-types)                                                                             |
| 29 | [How do you create a DeepPartial Generic Type?](#29-how-do-you-create-a-deeppartial-generic-type)                                                     |
| 30 | [What are the most common mistakes when using Generics in TypeScript?](#30-what-are-the-most-common-mistakes-when-using-generics-in-typescript)       |

---

## 1. What are Generics in TypeScript?

Generics allow you to write reusable code that works with different data types while still maintaining type safety.

```ts
function identity<T>(value: T): T {
  return value;
}
```

`T` is a placeholder type.

---

## 2. Why do we need Generics?

Without generics, we often use `any`, which loses type safety.

```ts
function identity(value: any): any {
  return value;
}
```

With generics:

```ts
function identity<T>(value: T): T {
  return value;
}
```

This preserves the original type.

---

## 3. What is the syntax of a Generic Function?

```ts
function wrap<T>(value: T): T[] {
  return [value];
}
```

Usage:

```ts
wrap<string>('hello');
wrap<number>(10);
```

---

## 4. How do Generic Functions differ from functions using `any`?

| Generic                | `any`                  |
| ---------------------- | ---------------------- |
| Keeps type information | Loses type information |
| Type-safe              | No type safety         |

```ts
function test<T>(arg: T): T {
  return arg;
}
```

---

## 5. What is Type Inference in Generics?

TypeScript can automatically determine the generic type.

```ts
const result = identity('hello');
```

TypeScript infers `T` as `string`.

---

## 6. What are Generic Interfaces?

```ts
interface Box<T> {
  value: T;
}

const box: Box<number> = {
  value: 10
};
```

---

## 7. What are Generic Type Aliases?

```ts
type ApiResponse<T> = {
  data: T;
  success: boolean;
};
```

---

## 8. What are Generic Classes?

```ts
class Storage<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }
}
```

---

## 9. What are Multiple Generic Parameters?

```ts
function pair<K, V>(key: K, value: V) {
  return { key, value };
}
```

---

## 10. What are Generic Constraints?

Constraints restrict which types can be used.

```ts
function logLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

## 11. How does the `extends` keyword work in Generics?

```ts
function printId<T extends { id: number }>(obj: T) {
  console.log(obj.id);
}
```

`T` must contain an `id` property.

---

## 12. How do you restrict a generic to object types only?

```ts
function merge<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}
```

---

## 13. How do you create a generic function that requires a `length` property?

```ts
function count<T extends { length: number }>(value: T): number {
  return value.length;
}
```

---

## 14. What is `keyof` with Generics?

`keyof` gets all valid property names.

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

---

## 15. How do you create a generic `getProperty` function?

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## 16. How do Default Generic Types work?

```ts
interface Api<T = string> {
  data: T;
}
```

If no type is passed, `string` is used.

---

## 17. What are Conditional Types with Generics?

```ts
type IsString<T> = T extends string ? true : false;
```

---

## 18. What is `infer` in Generic Conditional Types?

```ts
type Return<T> = T extends (...args: any[]) => infer R ? R : never;
```

`infer` extracts the return type.

---

## 19. How do Generic Utility Types work?

Examples:

* `Partial<T>`
* `Readonly<T>`
* `Pick<T, K>`

All these are built using generics.

---

## 20. How do you create a generic API response type?

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}
```

---

## 21. How do you create a generic Result type for success and error handling?

```ts
type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };
```

---

## 22. How do you create a generic Repository pattern?

```ts
interface Repository<T> {
  getAll(): T[];
  save(item: T): void;
}
```

---

## 23. How do Generics work with Arrays?

```ts
const numbers: Array<number> = [1, 2, 3];
```

`Array<T>` is a built-in generic type.

---

## 24. How do Generics work with Promises?

```ts
const promise: Promise<string> = Promise.resolve('done');
```

---

## 25. How do Generics work with React Components?

```ts
interface ListProps<T> {
  items: T[];
}
```

This allows reusable typed components.

---

## 26. What are Variadic Tuple Types with Generics?

```ts
type Push<T extends any[], V> = [...T, V];
```

Example:

```ts
type Result = Push<[1, 2], 3>;
```

---

## 27. How do you create a strongly typed EventEmitter using Generics?

```ts
type Events = {
  login: { id: string };
  logout: void;
};
```

```ts
class EventEmitter<T> {
  emit<K extends keyof T>(event: K, payload: T[K]) {}
}
```

---

## 28. What are Recursive Generic Types?

Recursive generics reference themselves.

```ts
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
}
```

---

## 29. How do you create a DeepPartial Generic Type?

```ts
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};
```

---

## 30. What are the most common mistakes when using Generics in TypeScript?

1. Using `any` instead of generics
2. Forgetting constraints
3. Overcomplicating generic types
4. Not understanding `keyof` with generics
5. Using too many generic parameters unnecessarily

Example of a bad generic:

```ts
function test<T, U, V, X>(a: T, b: U): V {
  return a as any;
}
```

This is confusing and should be simplified.
