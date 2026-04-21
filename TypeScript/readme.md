# TypeScript Interview Question Bank

## Index

| #  | Question                                                                                                       |
| -- | -------------------------------------------------------------------------------------------------------------- |
| 1  | [What is TypeScript?](#1-what-is-typescript)                                                                   |
| 2  | [Why do we use TypeScript?](#2-why-do-we-use-typescript)                                                       |
| 3  | [Difference between TypeScript and JavaScript](#3-difference-between-typescript-and-javascript)                |
| 4  | [How do you compile TypeScript?](#4-how-do-you-compile-typescript)                                             |
| 5  | [What are Basic Types in TypeScript?](#5-what-are-basic-types-in-typescript)                                   |
| 6  | [What is Type Inference?](#6-what-is-type-inference)                                                           |
| 7  | [Difference between `any`, `unknown`, and `never`](#7-difference-between-any-unknown-and-never)                |
| 8  | [What is an Interface?](#8-what-is-an-interface)                                                               |
| 9  | [Interface vs Type Alias](#9-interface-vs-type-alias)                                                          |
| 10 | [What are Optional Properties?](#10-what-are-optional-properties)                                              |
| 11 | [What are Readonly Properties?](#11-what-are-readonly-properties)                                              |
| 12 | [What is Union Type?](#12-what-is-union-type)                                                                  |
| 13 | [What is Intersection Type?](#13-what-is-intersection-type)                                                    |
| 14 | [What is a Tuple?](#14-what-is-a-tuple)                                                                        |
| 15 | [What is Enum?](#15-what-is-enum)                                                                              |
| 16 | [Tuple vs Enum](#16-tuple-vs-enum)                                                                             |
| 17 | [What is `keyof`?](#17-what-is-keyof)                                                                          |
| 18 | [What is `typeof` in TypeScript?](#18-what-is-typeof-in-typescript)                                            |
| 19 | [What is Generics?](#19-what-is-generics)                                                                      |
| 20 | [Why use Generics?](#20-why-use-generics)                                                                      |
| 21 | [What are Generic Constraints?](#21-what-are-generic-constraints)                                              |
| 22 | [What is `extends` keyword?](#22-what-is-extends-keyword)                                                      |
| 23 | [What is `infer` keyword?](#23-what-is-infer-keyword)                                                          |
| 24 | [What are Conditional Types?](#24-what-are-conditional-types)                                                  |
| 25 | [What is Mapped Type?](#25-what-is-mapped-type)                                                                |
| 26 | [What is Utility Type?](#26-what-is-utility-type)                                                              |
| 27 | [What is `Partial<T>`?](#27-what-is-partialt)                                                                  |
| 28 | [What is `Required<T>`?](#28-what-is-requiredt)                                                                |
| 29 | [What is `Readonly<T>`?](#29-what-is-readonlyt)                                                                |
| 30 | [What is `Pick<T, K>`?](#30-what-is-pickt-k)                                                                   |
| 31 | [What is `Omit<T, K>`?](#31-what-is-omitt-k)                                                                   |
| 32 | [What is `Record<K, T>`?](#32-what-is-recordk-t)                                                               |
| 33 | [What is `Exclude<T, U>`?](#33-what-is-excludet-u)                                                             |
| 34 | [What is `Extract<T, U>`?](#34-what-is-extractt-u)                                                             |
| 35 | [What is `ReturnType<T>`?](#35-what-is-returntypet)                                                            |
| 36 | [What is `Parameters<T>`?](#36-what-is-parameterst)                                                            |
| 37 | [What is Type Assertion?](#37-what-is-type-assertion)                                                          |
| 38 | [Difference between Type Assertion and Type Casting](#38-difference-between-type-assertion-and-type-casting)   |
| 39 | [What are Type Guards?](#39-what-are-type-guards)                                                              |
| 40 | [What is `instanceof` type guard?](#40-what-is-instanceof-type-guard)                                          |
| 41 | [What is `in` operator type guard?](#41-what-is-in-operator-type-guard)                                        |
| 42 | [What is `is` keyword in TypeScript?](#42-what-is-is-keyword-in-typescript)                                    |
| 43 | [What is Function Overloading?](#43-what-is-function-overloading)                                              |
| 44 | [What are Access Modifiers?](#44-what-are-access-modifiers)                                                    |
| 45 | [Difference between `public`, `private`, and `protected`](#45-difference-between-public-private-and-protected) |
| 46 | [What is Abstract Class?](#46-what-is-abstract-class)                                                          |
| 47 | [Abstract Class vs Interface](#47-abstract-class-vs-interface)                                                 |
| 48 | [What is `implements` vs `extends`?](#48-what-is-implements-vs-extends)                                        |
| 49 | [What are Decorators?](#49-what-are-decorators)                                                                |
| 50 | [What is Declaration File (`.d.ts`)?](#50-what-is-declaration-file-dts)                                        |

---

## 1. What is TypeScript?

TypeScript is a superset of JavaScript created by Microsoft.

It adds:

* Static typing
* Interfaces
* Generics
* Compile-time error checking

```ts
let name: string = 'Pratik';
```

TypeScript code is compiled into JavaScript before running in the browser.

---

## 2. Why do we use TypeScript?

Benefits:

* Finds errors before runtime
* Better autocompletion and IntelliSense
* Easier refactoring
* Better for large applications
* Improves maintainability

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Passing a string will give a compile-time error.

---

## 3. Difference between TypeScript and JavaScript

| TypeScript                       | JavaScript        |
| -------------------------------- | ----------------- |
| Statically typed                 | Dynamically typed |
| Compile step required            | Runs directly     |
| Better tooling                   | Less strict       |
| Supports interfaces and generics | Does not          |

---

## 4. How do you compile TypeScript?

```bash
tsc app.ts
```

This generates:

```bash
app.js
```

You can also initialize config:

```bash
tsc --init
```

---

## 5. What are Basic Types in TypeScript?

```ts
let age: number = 25;
let username: string = 'John';
let active: boolean = true;
let ids: number[] = [1, 2, 3];
```

Common types:

* `number`
* `string`
* `boolean`
* `null`
* `undefined`
* `array`
* `object`
* `tuple`

---

## 6. What is Type Inference?

TypeScript automatically detects the type.

```ts
let city = 'Pune';
```

TypeScript infers:

```ts
let city: string
```

---

## 7. Difference between `any`, `unknown`, and `never`

| Type      | Meaning                             |
| --------- | ----------------------------------- |
| `any`     | Anything allowed                    |
| `unknown` | Unknown type, must check before use |
| `never`   | Value never occurs                  |

```ts
let a: any = 10;
let b: unknown = 'hello';
```

```ts
function throwError(): never {
  throw new Error('Oops');
}
```

---

## 8. What is an Interface?

Interface defines the structure of an object.

```ts
interface User {
  name: string;
  age: number;
}
```

Interface with Function

```js
interface AddFunction {
  (x: number, y: number): number;
}

const add: AddFunction = (x, y) => {
  return x + y;
};

console.log(add(5, 10)); // Output: 15
```

---

## 9. Interface vs Type Alias

| Interface        | Type                             |
| ---------------- | -------------------------------- |
| Best for objects | Can represent any type           |
| Can be extended  | Can use unions and intersections |

```ts
type ID = string | number;
```

---

## 10. What are Optional Properties?

```ts
interface User {
  name: string;
  age?: number;
}
```

`age` is optional.

---

## 11. What are Readonly Properties?

```ts
interface User {
  readonly id: number;
}
```

Cannot be changed after initialization.

---

## 12. What is Union Type?

A union allows multiple possible types.

```ts
let value: string | number;
```

---

## 13. What is Intersection Type?

Combines multiple types into one.

```ts
type A = { name: string };
type B = { age: number };

type Person = A & B;
```

---

## 14. What is a Tuple?

Tuple stores fixed number of values with fixed types.

```ts
let user: [string, number] = ['John', 25];
```

---

## 15. What is Enum?

Enums define named constants.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0 (default value)
```

---

## 16. Tuple vs Enum

| Tuple                   | Enum                 |
| ----------------------- | -------------------- |
| Ordered values          | Named constants      |
| Different types allowed | Mostly same category |

---

## 17. What is `keyof`?

`keyof` gets all keys of a type.

```ts
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;
```

Result:

```ts
'name' | 'age'
```

---

## 18. What is `typeof` in TypeScript?

Used to get the type of a variable.

```ts
const person = {
  name: 'John'
};

type Person = typeof person;
```

---

## 19. What is Generics?

Generics allow reusable components/functions with flexible types.

```ts
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["a", "b", "c"]);
```

---

## 20. Why use Generics?

Without generics:

```ts
function identity(value: any) {
  return value;
}
```

This loses type safety.

Generics keep the original type.

---

## 21. What are Generic Constraints?

Constraints restrict generic types.

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

## 22. What is `extends` keyword?

`extends` is used for:

* Class inheritance
* Interface inheritance
* Generic constraints

```ts
interface Admin extends User {
  role: string;
}
```

---

## 23. What is `infer` keyword?

`infer` extracts a type inside conditional types. infer will be present with extends only.

## 1. Extract Array element type
```js
type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>; // string
type B = ElementType<number[]>; // number
type C = ElementType<boolean>;  // never
```

Explanation:
  * If T is an array → extract its element type
  * Otherwise → return never

## 2. Extract Function Return Type:

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = MyReturnType<() => number>; // number
type B = MyReturnType<(x: string) => boolean>; // boolean
```
This is actually how built-in ReturnType<T> works internally.

## 3. Extract Function Parameters
```js
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type A = MyParameters<(x: number, y: string) => void>; 
// [number, string]
```
`infer P` captures all parameters as a `tuple`.

## 4. Extract Promise Type

```js
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<number>;         // number
```

## 5. Nested infer
```js
type DeepUnwrap<T> = 
  T extends Promise<infer U> 
    ? U extends Promise<infer V> 
      ? V 
      : U 
    : T;

type A = DeepUnwrap<Promise<Promise<number>>>; // number
```

---

## 24. What are Conditional Types?

```ts
type IsString<T> = T extends string ? true : false;
```

---

## 25. What is Mapped Type?

Mapped types transform properties of another type.

```ts
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

---

## 26. What is Utility Type?

TypeScript provides built-in helper types.

Examples:

* `Partial`
* `Readonly`
* `Pick`
* `Omit`

---

## 27. What is `Partial<T>`?

Makes all properties optional.

```ts
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
```

---

## 28. What is `Required<T>`?

Makes all properties required.

```ts
type RequiredUser = Required<User>;
```

---

## 29. What is `Readonly<T>`?

Makes all properties readonly.

```ts
type ReadonlyUser = Readonly<User>;
```

---

## 30. What is `Pick<T, K>`?

Select specific properties.

```ts
type NameOnly = Pick<User, 'name'>;
```

---

## 31. What is `Omit<T, K>`?

Remove specific properties.

```ts
type UserWithoutAge = Omit<User, 'age'>;
```

---

## 32. What is `Record<K, T>`?

Creates an object type with fixed keys and value type.

```ts
type Users = Record<string, number>;
```

---

## 33. What is `Exclude<T, U>`?

Removes types from union.

```ts
type Result = Exclude<'a' | 'b' | 'c', 'a'>;
```

Result:

```ts
'b' | 'c'
```

---

## 34. What is `Extract<T, U>`?

Keeps only matching types.

```ts
type Result = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
```

---

## 35. What is `ReturnType<T>`?

Gets the return type of a function.

```ts
function getUser() {
  return { name: 'John' };
}

type User = ReturnType<typeof getUser>;
```

---

## 36. What is `Parameters<T>`?

Gets function parameter types.

```ts
function greet(name: string, age: number) {}

type Params = Parameters<typeof greet>;
```

Result:

```ts
[string, number]
```

---

## 37. What is Type Assertion?

Type assertion tells TypeScript what the type is.

```ts
const input = document.getElementById('name') as HTMLInputElement;
```

---

## 38. Difference between Type Assertion and Type Casting

TypeScript does not actually change runtime value.

```ts
let value = '123' as unknown as number;
```

This only changes the compiler's understanding.

---

## 39. What are Type Guards?

Type guards narrow down a type.

```ts
function print(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}
```

---

## 40. What is `instanceof` type guard?

```ts
if (value instanceof Date) {
  console.log(value.getFullYear());
}
```

---

## 41. What is `in` operator type guard?

```ts
if ('name' in user) {
  console.log(user.name);
}
```

---

## 42. What is `is` keyword in TypeScript?

Used for custom type guards.

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

---

## 43. What is Function Overloading?

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}
```

---

## 44. What are Access Modifiers?

TypeScript supports:

* `public`
* `private`
* `protected`

---

## 45. Difference between `public`, `private`, and `protected`

| Modifier  | Accessible Inside Class | Child Class | Outside |
| --------- | ----------------------- | ----------- | ------- |
| public    | Yes                     | Yes         | Yes     |
| private   | Yes                     | No          | No      |
| protected | Yes                     | Yes         | No      |

---

## 46. What is Abstract Class?

An abstract class cannot be instantiated directly.

```ts
abstract class Animal {
  abstract makeSound(): void;
}
```

---

## 47. Abstract Class vs Interface

| Abstract Class          | Interface        |
| ----------------------- | ---------------- |
| Can have implementation | Only declaration |
| Supports constructor    | Does not         |

---

## 48. What is `implements` vs `extends`?

| implements           | extends                      |
| -------------------- | ---------------------------- |
| Used with interfaces | Used with classes/interfaces |

```ts
class Dog implements Animal {}
```

---

## 49. What are Decorators?

Decorators add metadata to classes or methods.

```ts
function Logger(target: Function) {
  console.log(target);
}

@Logger
class User {}
```

---

## 50. What is Declaration File (`.d.ts`)?

Declaration files describe types for JavaScript libraries.

```ts
declare module 'my-library';
```

Used when library does not provide TypeScript types.

---

# Advanced Interview Questions

## What is the difference between `interface merging` and `type alias`?

Interfaces can merge automatically.

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
{
  name: string;
  age: number;
}
```

Type aliases cannot merge.

---

## Why is `unknown` safer than `any`?

Because `unknown` forces you to check the type first.

```ts
let value: unknown = 'hello';

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

---

## Why do we use `never` in exhaustive checks?

```ts
type Shape = 'circle' | 'square';

function check(shape: Shape) {
  switch (shape) {
    case 'circle':
      break;
    case 'square':
      break;
    default:
      const x: never = shape;
  }
}
```

This ensures all cases are handled.
