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
| 51 | [Omit vs Exclude](#51-omit-vs-exclude)                                                                         |
| 52 | [Pick vs Extract](#52-pick-vs-extract)                                                                         |
| 53 | [What is Template Literal?](#53-what-is-template-literal)                                                      |

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
  - It takes an object type and returns a union of its keys

```ts
type Keys = keyof SomeType;
```

### 1. Example:
```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
// ^=> "id" | "name" | "age"
```

### 2. Example: Safe Property Access

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "Pratik" };

getValue(user, "id");   // ✅
getValue(user, "name"); // ✅
getValue(user, "age");  // ❌ Error
```
In above example the `K` will be be the Keyof `T(object)`

### 3. `keyof` with Index Signatures

```ts
type Dictionary = {
  [key: string]: number;
};

type Keys = keyof Dictionary;
// string | number
```
`[key: string]` this will allow dynamic key allocation the value as `number`.
Also if we want to ahve a dynamic `key` and `value` pair we should be using Record<K, T>

It can be also possible by Template Literals:
```ts
type DataKey = `data_${string}`;

type DynamicData = {
  [K in DataKey]: string | number;
};

const stats: DynamicData = {
  data_score: 100,
  data_username: "pratik_codes",
  // status: "active" // Error! Must start with 'data_'
};
```
It is used when dynamic keys must follow a specific naming convention.


### 4. `keyof` with Arrays

```ts
type Arr = string[];

type Keys = keyof Arr;
// number | "length" | "push" | "pop" | ...
```

### 5. `keyof` + `typeof`

```ts
const user = {
  id: 1,
  name: "Pratik",
};

type Keys = keyof typeof user;
// "id" | "name"
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
type User = { id: number; name: string; age: number; }
type PartialUser = Partial<User>
// ^= { id?: number; name?: string; age?: number; }
```

---

## 28. What is `Required<T>`?

Makes all properties required.

```ts
type PartialUser = { id?: number; name?: string; age?: number; }
type RequiredUser = Required<PartialUser>
// ^= { id: number; name: string; age: number; }
```

---

## 29. What is `Readonly<T>`?

Makes all properties readonly.

```ts
type ReadonlyUser = Readonly<User>;
```

---

## 30. What is `Pick<T, K>`?

Create a new object type that contains only the specified keys from the original object.

```ts
type User = { id: number; name: string; age: number; }
type UserFormFields = Pick<User, 'name' | 'age'>
// ^= { name: string; age: number; }
```

Useful for creating subsets of object types without needing to redefine every property. Use
Pick whenever your type is derived from the existing object type.
Opposite of `Omit` .

---

## 31. What is `Omit<T, K>`?

Create a new object type that contains all properties except the specified keys from the original object.

```ts
type User = { id: number; name: string; age: number; }
type UserWithoutAgeOrName = Omit<User, 'age' | 'name'>
// ^= { id: number; }
```
Useful for creating subsets of object types without needing to redefine every property. Use
Omit whenever your type is derived from the existing object type.
Opposite of `Pick`.

---

## 32. What is `Record<K, T>`?

Create an object type with specific keys that all have the same value type.

```ts
type UserRole = 'admin' | 'user' | 'guest'
type Permissions = Record<UserRole, string[]>
// ^= { admin: string[]; user: string[]; guest: string[]; }
```

Perfect for creating dictionaries or maps with known keys. Commonly used for configurations, mappings, and lookup tables.

---

## 33. What is `Exclude<T, U>`?

Removes types from union.

```ts
type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'orange'
type RedishColors = Exclude<Colors, "blue" | "green">
// ^= 'red' | 'yellow' | 'orange'
```

Useful for creating subsets of union types without needing to redefine every member. Use
Exclude whenever your union is derived from the existing union type.
Opposite of `Extract` , and similar to `Omit` .

---

## 34. What is `Extract<T, U>`?

Keeps only matching types.

```ts
type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'orange'
type RedishColors = Extract<Colors, "red" | "yellow" | "orange">
// ^= 'red' | 'yellow' | 'orange'
```

Useful for creating subsets of union types without needing to redefine every member. Use
Extract whenever your union is derived from the existing union type.
Opposite of `Exclude` , and similar to `Pick` .

---

## 35. What is `ReturnType<T>`?

Gets the return type of a function.

```ts
function getUser(id: number) {
return { id, name: "John" }
}
type User = ReturnType<typeof getUser>
// ^= { id: number; name: string; }
```

---

## 36. What is `Parameters<T>`?

Gets function parameter types in a tuple.

```ts
type GreetFunction = (name: string, age: number) => string
type GreetParams = Parameters<GreetFunction>
// ^= [string, number]
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

Type Assertion (Re-labeling):

```ts
let myValue: any = "123";
// We tell TS to treat it as a string, but the value is still "123"
let strLength = (myValue as string).length; 
```

Type Casting (Converting):
```js
let myValue: string = "123";
// We actually convert the string "123" into the number 123
let myNumber: number = Number(myValue); 
```

| Feature        | Type Assertion (`as`)                           | Type Casting (Conversion)               |
|----------------|-------------------------------------------------|-----------------------------------------|
| Timing         | Compile-time only                               | Runtime                                 |
| Effect on Data | None; just "re-labels" the variable             | Transforms the underlying value         |
| Syntax         | `value as string` or `<string>value`            | `String(value)`, `Number(value)`, etc.  |
| Risk           | Can cause runtime errors if assertion is wrong  | Safer; data is explicitly transformed   |

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

It is a built-in mechanism that uses the JavaScript instanceof operator to narrow down the type of a variable within a conditional block.

```ts
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // Successfully narrowed to Dog
  } else {
    pet.meow(); // Automatically narrowed to Cat
  }
}
```

---

## 41. What is `in` operator type guard?

Used to narrow down the type of an object by checking for the existence of a specific property at runtime

```ts
interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    // TypeScript knows 'animal' is a Bird here
    animal.fly();
  } else {
    // TypeScript knows 'animal' is a Fish here
    animal.swim();
  }
}

```

---

## 42. What is `is` keyword in TypeScript?

Used to define Type Predicates, which allow you to create `custom Type Guards`. 

In this example, the `isString` function uses the `is` keyword to tell TypeScript that val is `definitely` a string if it returns true. 

```ts
function isString(val: unknown): val is string {
  return typeof val === "string";
}

let input: string | number = "Hello";

if (isString(input)) {
  // TypeScript knows 'input' is a string here
  console.log(input.toLowerCase()); 
} else {
  // TypeScript knows 'input' must be a number here
  console.log(input.toFixed(2));
}
```

| Keyword | Purpose                                                                                              | Usage Context                     |
|---------|------------------------------------------------------------------------------------------------------|-----------------------------------|
| `is`    | **Type Guarding:** Dynamically checks and narrows a type at runtime via a function.                  | Used in function return types.    |
| `as`    | **Type Assertion:** Forces the compiler to treat a value as a specific type without a runtime check. | Used directly on variables.       |

---

## 43. What is Function Overloading?

`Function overloading` in TypeScript is a feature that allows a single function to be called in multiple ways with different parameter types or counts.

```ts
// 1. Overload Signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// 2 & 3. Implementation Signature and Body
function combine(a: any, b: any): any {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

combine(10, 20);      // Result: 30 (matches overload 1)
combine("Hi ", "JS"); // Result: "Hi JS" (matches overload 2)
// combine(10, "Hi"); // Error: No overload matches this call
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

## 48. What is `extends` vs `implements`?

Entends:

```ts
class Animal {
    makeSound(): void {
        console.log('Dog sound');
    }
}
// Derived class representing a 
// specific type of animal: Dog
class Dog extends Animal {
    bark(): void {
        console.log('Dog is barking!');
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.bark();
```

Implements:
```ts
interface GeeksforGeeks {
    print(): void;
}

class GFG implements GeeksforGeeks {
    print() {
        console.log('GeeksForGeeks');
    }
}
const output = new GFG();
output.print();
```

| Features                 | extends                                                                  | implements                                                                                       |
|--------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Inheritance              | Extends is used for class inheritance.                                   | Implements is used for interface implementation.                                                 |
|                          | It allows a class to inherit properties and methods from another class.  | It enables a class to provide specific implementations for the methods defined in an interface.  |
| Multiple Inheritance     | A class can extend only one class                                        | A class can implement multiple interfaces                                                        |
| Implementation of Methods| No direct implementation of methods                                      | Requires the class to provide concrete implementations for all methods declared in the interface |
| Code Reusability         | Promotes code reusability                                                | Promotes code reusability and abstraction through interfaces                                     |
| Abstract Classes         | Can extend abstract classes                                              | Cannot extend abstract classes but can implement abstract methods                                |

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

The primary goal of a `.d.ts` file is to describe the shape of existing JavaScript code so that TypeScript can provide autocompletion and type-checking without needing the original source code to be written in TypeScript.

| Feature          | `.ts` (Source File)                         | `.d.ts` (Declaration File)              |
|------------------|---------------------------------------------|-----------------------------------------|
| Contains Logic?  | Yes (e.g., `const x = 10;`)                 | No (e.g., `declare const x: number;`)   |
| Generates JS?    | Yes, after compilation                      | No, never                               |
| Main Usage       | Writing your application                    | Providing types for external code       |
| Metadata         | Includes types + code                       | Includes only types                     |

---

## 51. Omit vs Exclude

### Core Difference:
| Feature  | `Omit`                        | `Exclude`               |
| -------- | ----------------------------- | ----------------------- |
| Works on | **Object types**              | **Union types**         |
| Purpose  | Remove properties from object | Remove types from union |
| Output   | New object type               | New union type          |

### 1. Omit<T, K>
  - Removes properties from an object type
  ```ts
  type User = {
    id: number;
    name: string;
    password: string;
  };
  type SafeUser = Omit<User, "password">;
  // ^=> { id: number; name: string; }
  ```

### 2. Exclude<T, U>
  - Removes types from a union
  ```ts
  type A = "a" | "b" | "c";

  type Result = Exclude<A, "a">;
  // ^=> "b" | "c"
  ```
  ```ts
  type Status = "success" | "error" | "loading";

  type WithoutLoading = Exclude<Status, "loading">;
  // ^=> "success" | "error"
  ```

### How They Are Related
 `Omit` actually uses `Exclude` internally!
 ```ts
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
 ```

 Breakdown:
    1. `keyof` T → get all keys
    2. `Exclude` → remove unwanted keys
    3. `Pick` → construct new object

---

## 52. Pick vs Extract

### Core Difference:
| Feature  | `Pick`                     | `Extract`             |
| -------- | -------------------------- | --------------------- |
| Works on | **Object types**           | **Union types**       |
| Purpose  | Select specific properties | Select specific types |
| Output   | New object type            | New union type        |

### 1. Pick<T, K>
  - Used to select properties from an object
  ```ts
  type User = {
    id: number;
    name: string;
    email: string;
  };

  type UserPreview = Pick<User, "id" | "name">;
  // ^=> { id: number; name: string; }
  ```

### 2. Extract<T, U>
  - Used to filter types from a union
  ```ts
  type A = "a" | "b" | "c";
  type Result = Extract<A, "a" | "b">;
  // ^=> "a" | "b"
  ```

### Internal Understanding

1. `Pick` is based on mapped types:
```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

2. `Extract` is just a conditional type:
```ts
type Extract<T, U> = T extends U ? T : never;
```

---

## 53. What is `Template Literal`?

* Template Literals are strings that allow for embedded expressions and multi-line text.
* They use backticks (`) instead of single or double quotes

```ts
type Vertical = "top" | "bottom";
type Horizontal = "left" | "right";

type Alignment = `${Vertical}-${Horizontal}`;
// This creates: "top-left" | "top-right" | "bottom-left" | "bottom-right"

let myPosition: Alignment = "top-left"; // Success
// let myPosition: Alignment = "center"; // Error!
```


# Advanced Interview Questions

## What is the difference between `interface merging` and `type alias`?

`Interfaces` can merge automatically.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

/*
It will be merged into below:
  {
    name: string;
    age: number;
  }
*/
```

`Type` aliases cannot merge.

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
If a new type is added → TypeScript error.

This ensures all cases are handled.


