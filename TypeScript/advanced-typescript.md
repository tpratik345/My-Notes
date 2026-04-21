# TypeScript Advanced Interview Question Bank

## Main Index

| #  | Question                                                                                                                           |
| -- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [What is TypeScript and why is it used?](#1-what-is-typescript-and-why-is-it-used)                                                 |
| 2  | [Difference between TypeScript and JavaScript](#2-difference-between-typescript-and-javascript)                                    |
| 3  | [What is Type Inference?](#3-what-is-type-inference)                                                                               |
| 4  | [Difference between `any`, `unknown`, and `never`](#4-difference-between-any-unknown-and-never)                                    |
| 5  | [What is `void` in TypeScript?](#5-what-is-void-in-typescript)                                                                     |
| 6  | [What are Union and Intersection Types?](#6-what-are-union-and-intersection-types)                                                 |
| 7  | [What is a Tuple?](#7-what-is-a-tuple)                                                                                             |
| 8  | [What is an Enum?](#8-what-is-an-enum)                                                                                             |
| 9  | [Interface vs Type Alias](#9-interface-vs-type-alias)                                                                              |
| 10 | [What is Declaration Merging?](#10-what-is-declaration-merging)                                                                    |
| 11 | [What is `keyof`?](#11-what-is-keyof)                                                                                              |
| 12 | [What is `typeof` in TypeScript?](#12-what-is-typeof-in-typescript)                                                                |
| 13 | [What is Indexed Access Type?](#13-what-is-indexed-access-type)                                                                    |
| 14 | [What are Literal Types?](#14-what-are-literal-types)                                                                              |
| 15 | [What are Template Literal Types?](#15-what-are-template-literal-types)                                                            |
| 16 | [What are Generics?](#16-what-are-generics)                                                                                        |
| 17 | [What are Generic Constraints?](#17-what-are-generic-constraints)                                                                  |
| 18 | [What is `infer` in TypeScript?](#18-what-is-infer-in-typescript)                                                                  |
| 19 | [What are Conditional Types?](#19-what-are-conditional-types)                                                                      |
| 20 | [What are Mapped Types?](#20-what-are-mapped-types)                                                                                |
| 21 | [What is `Partial<T>`?](#21-what-is-partialt)                                                                                      |
| 22 | [What is `Required<T>`?](#22-what-is-requiredt)                                                                                    |
| 23 | [What is `Readonly<T>`?](#23-what-is-readonlyt)                                                                                    |
| 24 | [What is `Pick<T, K>` and `Omit<T, K>`?](#24-what-is-pickt-k-and-omitt-k)                                                          |
| 25 | [What is `Record<K, T>`?](#25-what-is-recordk-t)                                                                                   |
| 26 | [What is `Exclude<T, U>` and `Extract<T, U>`?](#26-what-is-excludet-u-and-extractt-u)                                              |
| 27 | [What is `ReturnType<T>`?](#27-what-is-returntypet)                                                                                |
| 28 | [What is `Parameters<T>`?](#28-what-is-parameterst)                                                                                |
| 29 | [What is Function Overloading?](#29-what-is-function-overloading)                                                                  |
| 30 | [What are Type Guards?](#30-what-are-type-guards)                                                                                  |
| 31 | [What is the `is` keyword in custom type guards?](#31-what-is-the-is-keyword-in-custom-type-guards)                                |
| 32 | [What is Type Narrowing?](#32-what-is-type-narrowing)                                                                              |
| 33 | [What is Discriminated Union?](#33-what-is-discriminated-union)                                                                    |
| 34 | [What is Exhaustive Checking using `never`?](#34-what-is-exhaustive-checking-using-never)                                          |
| 35 | [What are Access Modifiers in TypeScript?](#35-what-are-access-modifiers-in-typescript)                                            |
| 36 | [What is an Abstract Class?](#36-what-is-an-abstract-class)                                                                        |
| 37 | [Difference between `implements` and `extends`](#37-difference-between-implements-and-extends)                                     |
| 38 | [What are Decorators?](#38-what-are-decorators)                                                                                    |
| 39 | [What is a `.d.ts` file?](#39-what-is-a-dts-file)                                                                                  |
| 40 | [What is Namespace in TypeScript?](#40-what-is-namespace-in-typescript)                                                            |
| 41 | [What is Module Augmentation?](#41-what-is-module-augmentation)                                                                    |
| 42 | [What is `as const`?](#42-what-is-as-const)                                                                                        |
| 43 | [What is Variadic Tuple Type?](#43-what-is-variadic-tuple-type)                                                                    |
| 44 | [What is Recursive Type?](#44-what-is-recursive-type)                                                                              |
| 45 | [What is Branded Type?](#45-what-is-branded-type)                                                                                  |
| 46 | [What is Covariance and Contravariance?](#46-what-is-covariance-and-contravariance)                                                |
| 47 | [What is Structural Typing in TypeScript?](#47-what-is-structural-typing-in-typescript)                                            |
| 48 | [What is Nominal Typing and how do we simulate it?](#48-what-is-nominal-typing-and-how-do-we-simulate-it)                          |
| 49 | [How does TypeScript work with React?](#49-how-does-typescript-work-with-react)                                                    |
| 50 | [What are common TypeScript compiler options in `tsconfig.json`?](#50-what-are-common-typescript-compiler-options-in-tsconfigjson) |

---

## Complex Interview Questions Index

| #  | Question                                                                                                                                        |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [How would you implement DeepReadonly<T>?](#complex-1-how-would-you-implement-deepreadonlyt)                                                    |
| 2  | [How would you implement DeepPartial<T>?](#complex-2-how-would-you-implement-deeppartialt)                                                      |
| 3  | [How do you create a utility type to get nested object keys?](#complex-3-how-do-you-create-a-utility-type-to-get-nested-object-keys)            |
| 4  | [How do conditional types distribute over unions?](#complex-4-how-do-conditional-types-distribute-over-unions)                                  |
| 5  | [How would you write a type-safe EventEmitter?](#complex-5-how-would-you-write-a-type-safe-eventemitter)                                        |
| 6  | [How do you extract the argument type of a function?](#complex-6-how-do-you-extract-the-argument-type-of-a-function)                            |
| 7  | [How do you implement PromiseReturnType<T>?](#complex-7-how-do-you-implement-promisereturntypet)                                                |
| 8  | [How do you flatten nested array types?](#complex-8-how-do-you-flatten-nested-array-types)                                                      |
| 9  | [How do you create mutually exclusive object types?](#complex-9-how-do-you-create-mutually-exclusive-object-types)                              |
| 10 | [How do you strongly type Redux actions in TypeScript?](#complex-10-how-do-you-strongly-type-redux-actions-in-typescript)                       |
| 11 | [How do you type React props with generics?](#complex-11-how-do-you-type-react-props-with-generics)                                             |
| 12 | [How do you create a generic API response type?](#complex-12-how-do-you-create-a-generic-api-response-type)                                     |
| 13 | [How do you infer tuple elements?](#complex-13-how-do-you-infer-tuple-elements)                                                                 |
| 14 | [How do you create a typed route params utility?](#complex-14-how-do-you-create-a-typed-route-params-utility)                                   |
| 15 | [How do you enforce exhaustive switch statements?](#complex-15-how-do-you-enforce-exhaustive-switch-statements)                                 |
| 16 | [How do you type recursive JSON data?](#complex-16-how-do-you-type-recursive-json-data)                                                         |
| 17 | [How do you type dynamic object keys?](#complex-17-how-do-you-type-dynamic-object-keys)                                                         |
| 18 | [How do you create a strongly typed mapObject utility?](#complex-18-how-do-you-create-a-strongly-typed-mapobject-utility)                       |
| 19 | [How do you create a utility type to remove readonly recursively?](#complex-19-how-do-you-create-a-utility-type-to-remove-readonly-recursively) |
| 20 | [How do you create a utility type for function composition?](#complex-20-how-do-you-create-a-utility-type-for-function-composition)             |
| 21 | [How do you strongly type a finite state machine?](#complex-21-how-do-you-strongly-type-a-finite-state-machine)                                 |
| 22 | [How do you type polymorphic React components?](#complex-22-how-do-you-type-polymorphic-react-components)                                       |
| 23 | [How do you create a generic debounce utility type?](#complex-23-how-do-you-create-a-generic-debounce-utility-type)                             |
| 24 | [How do you infer object values as literal types?](#complex-24-how-do-you-infer-object-values-as-literal-types)                                 |
| 25 | [How do you strongly type a configuration object?](#complex-25-how-do-you-strongly-type-a-configuration-object)                                 |
| 26 | [How do you create a type-safe fetch wrapper?](#complex-26-how-do-you-create-a-type-safe-fetch-wrapper)                                         |
| 27 | [How do you type a middleware pipeline?](#complex-27-how-do-you-type-a-middleware-pipeline)                                                     |
| 28 | [How do you type a plugin system?](#complex-28-how-do-you-type-a-plugin-system)                                                                 |
| 29 | [How do you avoid excessive use of `any` in a large codebase?](#complex-29-how-do-you-avoid-excessive-use-of-any-in-a-large-codebase)           |
| 30 | [What are the most common advanced TypeScript interview mistakes?](#complex-30-what-are-the-most-common-advanced-typescript-interview-mistakes) |

---

## 1. What is TypeScript and why is it used?

TypeScript is a superset of JavaScript that adds static typing and compile-time checks.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Benefits:

* Better IntelliSense
* Fewer runtime bugs
* Easier refactoring
* Great for large applications

---

## 2. Difference between TypeScript and JavaScript

| TypeScript                       | JavaScript     |
| -------------------------------- | -------------- |
| Static typing                    | Dynamic typing |
| Compiled to JS                   | Runs directly  |
| Supports interfaces and generics | Does not       |

---

## 3. What is Type Inference?

TypeScript automatically detects a variable type.

```ts
let name = 'John';
```

TypeScript infers `string`.

---

## 4. Difference between `any`, `unknown`, and `never`

| Type      | Description                |
| --------- | -------------------------- |
| `any`     | Disables type checking     |
| `unknown` | Safer alternative to `any` |
| `never`   | Function never returns     |

```ts
function fail(): never {
  throw new Error();
}
```

---

## 5. What is `void` in TypeScript?

`void` means a function does not return anything.

```ts
function log(message: string): void {
  console.log(message);
}
```

---

## 6. What are Union and Intersection Types?

```ts
type ID = string | number;
type User = Name & Address;
```

* Union means one of many types
* Intersection means combine types

---

## 7. What is a Tuple?

```ts
const user: [string, number] = ['John', 25];
```

Tuples enforce fixed position and type.

---

## 8. What is an Enum?

```ts
enum Status {
  Pending,
  Success,
  Failed
}
```

Enums provide named constants.

---

## 9. Interface vs Type Alias

| Interface                    | Type Alias                        |
| ---------------------------- | --------------------------------- |
| Supports declaration merging | Does not                          |
| Best for objects             | Best for unions and intersections |

---

## 10. What is Declaration Merging?

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Result:

```ts
{ name: string; age: number }
```

---

## 11. What is `keyof`?

```ts
type Keys = keyof User;
```

Returns all keys of an object type.

---

## 12. What is `typeof` in TypeScript?

```ts
const person = { name: 'John' };
type Person = typeof person;
```

---

## 13. What is Indexed Access Type?

```ts
type Name = User['name'];
```

Gets the type of a specific property.

---

## 14. What are Literal Types?

```ts
type Direction = 'left' | 'right';
```

Only specific values are allowed.

---

## 15. What are Template Literal Types?

```ts
type EventName = `on${Capitalize<string>}`;
```

Used to generate dynamic string types.

---

## 16. What are Generics?

```ts
function identity<T>(value: T): T {
  return value;
}
```

Generics make functions reusable and type-safe.

---

## 17. What are Generic Constraints?

```ts
function length<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

## 18. What is `infer` in TypeScript?

```ts
type Return<T> = T extends (...args: any[]) => infer R ? R : never;
```

`infer` extracts a type.

---

## 19. What are Conditional Types?

```ts
type IsString<T> = T extends string ? true : false;
```

---

## 20. What are Mapped Types?

```ts
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
}
```

---

## 21. What is `Partial<T>`?

Makes all properties optional.

```ts
type PartialUser = Partial<User>;
```

---

## 22. What is `Required<T>`?

Makes all properties required.

---

## 23. What is `Readonly<T>`?

Makes all properties readonly.

---

## 24. What is `Pick<T, K>` and `Omit<T, K>`?

```ts
type NameOnly = Pick<User, 'name'>;
type WithoutAge = Omit<User, 'age'>;
```

---

## 25. What is `Record<K, T>`?

```ts
type Scores = Record<string, number>;
```

---

## 26. What is `Exclude<T, U>` and `Extract<T, U>`?

```ts
type A = Exclude<'a' | 'b', 'a'>;
type B = Extract<'a' | 'b', 'a'>;
```

---

## 27. What is `ReturnType<T>`?

Gets a function's return type.

---

## 28. What is `Parameters<T>`?

Gets a function's parameter types.

---

## 29. What is Function Overloading?

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
```

---

## 30. What are Type Guards?

Type guards narrow down the type.

```ts
if (typeof value === 'string') {}
```

---

## 31. What is the `is` keyword in custom type guards?

```ts
function isString(v: unknown): v is string {
  return typeof v === 'string';
}
```

---

## 32. What is Type Narrowing?

Type narrowing reduces a union type into a specific type.

---

## 33. What is Discriminated Union?

```ts
type Shape =
  | { type: 'circle'; radius: number }
  | { type: 'square'; size: number };
```

---

## 34. What is Exhaustive Checking using `never`?

```ts
const _: never = value;
```

Ensures all cases are handled.

---

## 35. What are Access Modifiers in TypeScript?

* `public`
* `private`
* `protected`

---

## 36. What is an Abstract Class?

Abstract classes cannot be instantiated.

---

## 37. Difference between `implements` and `extends`

`implements` is for interfaces.
`extends` is for inheritance.

---

## 38. What are Decorators?

Decorators modify classes or methods.

---

## 39. What is a `.d.ts` file?

Used for declaration files and external library typings.

---

## 40. What is Namespace in TypeScript?

Namespaces organize code.

---

## 41. What is Module Augmentation?

Module augmentation adds types to an existing module.

---

## 42. What is `as const`?

```ts
const roles = ['admin', 'user'] as const;
```

Prevents widening of types.

---

## 43. What is Variadic Tuple Type?

```ts
type Args<T extends any[]> = [...T, string];
```

---

## 44. What is Recursive Type?

```ts
type Tree = {
  value: string;
  children: Tree[];
}
```

---

## 45. What is Branded Type?

Used to simulate nominal typing.

```ts
type UserId = string & { __brand: 'UserId' };
```

---

## 46. What is Covariance and Contravariance?

Advanced function compatibility concepts.

---

## 47. What is Structural Typing in TypeScript?

TypeScript checks object shape, not exact class.

---

## 48. What is Nominal Typing and how do we simulate it?

Using branding.

---

## 49. How does TypeScript work with React?

TypeScript helps define props, state, refs, hooks.

```ts
interface Props {
  title: string;
}
```

---

## 50. What are common TypeScript compiler options in `tsconfig.json`?

```json
{
  "strict": true,
  "noImplicitAny": true
}
```

---

## Complex 1. How would you implement DeepReadonly<T>?

```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};
```

---

## Complex 2. How would you implement DeepPartial<T>?

```ts
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};
```

---

## Complex 3. How do you create a utility type to get nested object keys?

```ts
type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? K | `${K & string}.${NestedKeys<T[K]>}`
    : K
}[keyof T];
```

---

## Complex 4. How do conditional types distribute over unions?

```ts
type Wrap<T> = T extends any ? [T] : never;
```

`Wrap<string | number>` becomes `[string] | [number]`.

---

## Complex 5. How would you write a type-safe EventEmitter?

```ts
type Events = {
  login: { userId: string };
  logout: void;
};
```

Each event maps to its payload.

---

## Complex 6. How do you extract the argument type of a function?

```ts
type FirstArg<T> = T extends (arg: infer A) => any ? A : never;
```

---

## Complex 7. How do you implement PromiseReturnType<T>?

```ts
type PromiseReturnType<T> = T extends Promise<infer U> ? U : T;
```

---

## Complex 8. How do you flatten nested array types?

```ts
type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;
```

---

## Complex 9. How do you create mutually exclusive object types?

Use unions and `never`.

```ts
type A = { x: string; y?: never };
```

---

## Complex 10. How do you strongly type Redux actions in TypeScript?

Use discriminated unions.

---

## Complex 11. How do you type React props with generics?

```ts
interface ListProps<T> {
  items: T[];
}
```

---

## Complex 12. How do you create a generic API response type?

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

---

## Complex 13. How do you infer tuple elements?

```ts
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
```

---

## Complex 14. How do you create a typed route params utility?

```ts
type Params = { id: string };
```

---

## Complex 15. How do you enforce exhaustive switch statements?

Use `never` in default case.

---

## Complex 16. How do you type recursive JSON data?

```ts
type JSONValue = string | number | boolean | JSONObject | JSONArray;
```

---

## Complex 17. How do you type dynamic object keys?

```ts
type Dynamic = Record<string, string>;
```

---

## Complex 18. How do you create a strongly typed mapObject utility?

Use generics with `keyof`.

---

## Complex 19. How do you create a utility type to remove readonly recursively?

```ts
type Mutable<T> = {
  -readonly [K in keyof T]: Mutable<T[K]>;
}
```

---

## Complex 20. How do you create a utility type for function composition?

Using variadic tuple types.

---

## Complex 21. How do you strongly type a finite state machine?

Use discriminated unions.

---

## Complex 22. How do you type polymorphic React components?

Use generic `as` prop.

---

## Complex 23. How do you create a generic debounce utility type?

```ts
type Debounced<T extends (...args: any) => any> = (...args: Parameters<T>) => void;
```

---

## Complex 24. How do you infer object values as literal types?

Use `as const`.

---

## Complex 25. How do you strongly type a configuration object?

Use interfaces and readonly.

---

## Complex 26. How do you create a type-safe fetch wrapper?

```ts
async function fetchData<T>(): Promise<T> {}
```

---

## Complex 27. How do you type a middleware pipeline?

Use generic function composition.

---

## Complex 28. How do you type a plugin system?

Use interfaces and module augmentation.

---

## Complex 29. How do you avoid excessive use of `any` in a large codebase?

* Use `unknown`
* Add strict mode
* Use utility types

---

## Complex 30. What are the most common advanced TypeScript interview mistakes?

* Confusing `type` and `interface`
* Using `any` too much
* Not understanding `never`
* Missing distributive conditional types
