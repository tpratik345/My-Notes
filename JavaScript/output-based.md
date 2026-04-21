# Frequently Asked Tricky Interview Questions

## What is output?

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

## What is output?

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

## What is output?

```js
console.log(typeof NaN);
```

Output:

```js
number
```

---

## What is output?

```js
console.log(0.1 + 0.2 === 0.3);
```

Output:

```js
false
```

Because of floating point precision.

---
