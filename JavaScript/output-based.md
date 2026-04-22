# Frequently Asked Tricky Interview Questions

## 1. What is output?

```js
console.log([] == ![]);
```

Output:

```js
true
```

Because:

```js
![] => false
[] == false
[] => ''
false => 0
'' == 0 => true
```

---

## 2. What is output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```js
3
3
3
```

Because `var` is function scoped.

Using `let` gives:

```js
0
1
2
```

---

## 3. What is output?

```js
console.log(typeof NaN);
```

Output:

```js
number
```

---

## 4. What is output?

```js
console.log(0.1 + 0.2 === 0.3);
```

Output:

```js
false
```

Because of floating point precision.

---

## 5. [] == ![] what is this return in javascript explain

```js
[] == ![]   //  true
```

Steps:
### 1. Evaluate `![] => false`
### 2. Now expression becomes: `[] == false`
### 3. Apply == (Loose Equality Rules): If one side is an object (like []), it gets converted to a primitive.
### 4. Convert [] to primitive:
```js
[].toString()  //  ""
```
So:
```js
[]  →  ""
```
Now expression becomes:
```js
"" == false
```
5. Convert both sides to numbers
"" → 0
false → 0
```js
0 == 0   //  true
```

In case it is like below
```js
[] === ![]   //  false
```

## 6. Top 10 JavaScript Tricky Questions
### 1. [] == ![]

Result: true

```js
![] → false
[] → "" → 0
false → 0
```

### 2. [] == []

Answer: false

Arrays are reference types

Two different arrays → different memory references

### 3. {} == {}

Answer: false

Same reason as above :

Objects are compared by reference, not value

### 4. null == undefined

Answer: true

Special rule in JS:

null and undefined are loosely equal

### 5. null === undefined

Answer: false

Strict equality → types differ

### 6. "0" == false

Answer: true

Steps:

```js
"0" → 0
false → 0
```

### 7. "0" === false

Answer: false

No type coercion → string vs boolean

### 8. [] == 0

Answer: true

Steps:

```js
[] → ""
"" → 0
```

### 9. [1] == 1

Answer: true

Steps:
```js
[1] → "1"
"1" → 1
```

### 10. [1,2] == "1,2"

Answer: true

Steps:
```js
[1,2].toString() → "1,2"
```

### 11. NaN == NaN

Answer: false

Only value in JS that is not equal to itself

✔ Correct way:

Number.isNaN(NaN) // true


## 7. Tricky JS Questions with + and -

### 1. "5" + 2

Answer: "52"

 + with a string → concatenation

### 2. "5" - 2

Answer: 3

 - always converts to number

### 3. "5" + true

Answer: "5true"

 String + anything → string concatenation

### 4. "5" - true

Answer: 4

```js
 true → 1
 5 - 1 = 4
```

### 5. true + true

Answer: 2

```js
true → 1
```

### 6. true + false

Answer: 1

### 7. null + 1

Answer: 1

```js
null → 0
```

### 8. undefined + 1

Answer: NaN

```js
undefined → NaN
```

### 9. "10" + 2 + 3

Answer: "1023"

Left to right:

```js
"10" + 2 → "102"
"102" + 3 → "1023"
10. "10" + (2 + 3)
"105"
```

Brackets change the game

### 11. 10 + "2" + 3

Answer: "1023"

 Once string appears → everything becomes string

### 12. 10 + 2 + "3"

Answer: "123"

 First numbers → 12
 Then string → "123"

### 13. [] + []

Answer: ""

 Both become empty strings

### 14. [] + {}

Answer: "[object Object]"

```js
 [] → ""
 {} → "[object Object]"
```

### 15. {} + [] ⚠️ (Tricky!)
0   // or "[object Object]" depending on context

 In console (JS engine):

{} may be treated as a block → result 0

 In expression:
```js
({} + []) // "[object Object]"
```

### 16. [] - []

Answer: 0

```js
 "" - "" → 0
```

### 17. [5] - 2

Answer: 3

```js
 [5] → "5" → 5
```

### 18. [5,6] - 2

Answer: NaN

 "5,6" → cannot convert to number

### 19. "" + 1 + 0

Answer: "10"

### 20. "" - 1 + 0

Answer: -1

```js
 "" → 0
 0 - 1 = -1
```

### Patterns You MUST Remember
* + Operator:
  - If any operand is string → concatenation
  - Otherwise → numeric addition
*  -, *, /
  - Always convert to number


### Conversions Cheat Sheet:

| Value       | Converts to |
| ----------- | ----------- |
| `true`      | 1           |
| `false`     | 0           |
| `null`      | 0           |
| `undefined` | NaN         |
| `[]`        | "" → 0      |
| `[5]`       | "5" → 5     |
| `[1,2]`     | "1,2" → NaN |

## 8. `var`, `let`, `const` tricky questions

