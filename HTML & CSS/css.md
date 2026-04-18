# Advanced CSS Interview Question Bank

## Index

| #  | Question                                                                                                                                                                   |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [What is CSS Specificity?](#1-what-is-css-specificity)                                                                                                                     |
| 2  | [How does CSS Specificity Calculation work?](#2-how-does-css-specificity-calculation-work)                                                                                 |
| 3  | [What is the difference between `position: absolute` and `position: fixed`?](#3-what-is-the-difference-between-position-absolute-and-position-fixed)                       |
| 4  | [What is `position: sticky`?](#4-what-is-position-sticky)                                                                                                                  |
| 5  | [What is the difference between Flexbox and CSS Grid?](#5-what-is-the-difference-between-flexbox-and-css-grid)                                                             |
| 6  | [What is the difference between `em`, `rem`, `%`, `vw`, and `vh`?](#6-what-is-the-difference-between-em-rem-vw-and-vh)                                                     |
| 7  | [What is `z-index` and how does stacking context work?](#7-what-is-z-index-and-how-does-stacking-context-work)                                                             |
| 8  | [What is `box-sizing: border-box`?](#8-what-is-box-sizing-border-box)                                                                                                      |
| 9  | [What is CSS Variable (`--variable`)?](#9-what-is-css-variable---variable)                                                                                                 |
| 10 | [What are CSS Custom Properties?](#10-what-are-css-custom-properties)                                                                                                      |
| 11 | [What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?](#11-what-is-the-difference-between-display-none-visibility-hidden-and-opacity-0) |
| 12 | [What are CSS Pseudo Classes and Pseudo Elements?](#12-what-are-css-pseudo-classes-and-pseudo-elements)                                                                    |
| 13 | [What is the difference between `::before` and `::after`?](#13-what-is-the-difference-between-before-and-after)                                                            |
| 14 | [What are CSS Transitions?](#14-what-are-css-transitions)                                                                                                                  |
| 15 | [What are CSS Animations?](#15-what-are-css-animations)                                                                                                                    |
| 16 | [Difference between Transition and Animation](#16-difference-between-transition-and-animation)                                                                             |
| 17 | [What is `transform` in CSS?](#17-what-is-transform-in-css)                                                                                                                |
| 18 | [What is the difference between `translate`, `scale`, `rotate`, and `skew`?](#18-what-is-the-difference-between-translate-scale-rotate-and-skew)                           |
| 19 | [What is CSS Clamp?](#19-what-is-css-clamp)                                                                                                                                |
| 20 | [What are CSS Functions like `calc()`, `min()`, `max()`?](#20-what-are-css-functions-like-calc-min-max)                                                                    |
| 21 | [What is CSS Grid Template Areas?](#21-what-is-css-grid-template-areas)                                                                                                    |
| 22 | [What is the difference between `overflow: hidden`, `scroll`, and `auto`?](#22-what-is-the-difference-between-overflow-hidden-scroll-and-auto)                             |
| 23 | [What is Object-fit?](#23-what-is-object-fit)                                                                                                                              |
| 24 | [What is `backdrop-filter`?](#24-what-is-backdrop-filter)                                                                                                                  |
| 25 | [What is the difference between `nth-child()` and `nth-of-type()`?](#25-what-is-the-difference-between-nth-child-and-nth-of-type)                                          |

---

## 1. What is CSS Specificity?

CSS Specificity determines which CSS rule is applied when multiple rules match the same element.

Priority:

1. Inline styles
2. ID selectors
3. Class, attribute and pseudo-class selectors
4. Element and pseudo-element selectors

```css
#title {
  color: red;
}
```

---

## 2. How does CSS Specificity Calculation work?

Example:

```css
#header .title p {
  color: blue;
}
```

Specificity value:

* 1 ID
* 1 class
* 1 element

Result:

```txt
1,1,1
```

---

## 3. What is the difference between `position: absolute` and `position: fixed`?

| Absolute                              | Fixed                        |
| ------------------------------------- | ---------------------------- |
| Relative to nearest positioned parent | Relative to browser viewport |
| Scrolls with page                     | Stays fixed while scrolling  |

---

## 4. What is `position: sticky`?

Sticky behaves like relative until a scroll point is reached.

```css
position: sticky;
top: 0;
```

---

## 5. What is the difference between Flexbox and CSS Grid?

| Flexbox                         | Grid                        |
| ------------------------------- | --------------------------- |
| One-dimensional                 | Two-dimensional             |
| Better for row or column layout | Better for full page layout |

---

## 6. What is the difference between `em`, `rem`, `%`, `vw`, and `vh`?

| Unit  | Relative To      |
| ----- | ---------------- |
| `em`  | Parent font size |
| `rem` | Root font size   |
| `%`   | Parent element   |
| `vw`  | Viewport width   |
| `vh`  | Viewport height  |

---

## 7. What is `z-index` and how does stacking context work?

`z-index` controls which element appears on top.

```css
.box {
  position: relative;
  z-index: 10;
}
```

Higher `z-index` appears above lower ones.

---

## 8. What is `box-sizing: border-box`?

With `border-box`, width includes padding and border.

```css
box-sizing: border-box;
```

---

## 9. What is CSS Variable (`--variable`)?

```css
:root {
  --primary-color: blue;
}
```

Use:

```css
color: var(--primary-color);
```

---

## 10. What are CSS Custom Properties?

Custom properties are reusable CSS variables.

They can change dynamically.

---

## 11. What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?

| Property             | Visible? | Takes Space? |
| -------------------- | -------- | ------------ |
| `display: none`      | No       | No           |
| `visibility: hidden` | No       | Yes          |
| `opacity: 0`         | No       | Yes          |

---

## 12. What are CSS Pseudo Classes and Pseudo Elements?

```css
button:hover {}
p::first-letter {}
```

---

## 13. What is the difference between `::before` and `::after`?

| `::before`                     | `::after`                     |
| ------------------------------ | ----------------------------- |
| Inserts content before element | Inserts content after element |

---

## 14. What are CSS Transitions?

Transitions animate a property change.

```css
button {
  transition: background 0.3s ease;
}
```

---

## 15. What are CSS Animations?

```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 16. Difference between Transition and Animation

| Transition     | Animation                  |
| -------------- | -------------------------- |
| Needs trigger  | Can run automatically      |
| Simple changes | Complex multi-step effects |

---

## 17. What is `transform` in CSS?

```css
transform: rotate(45deg);
```

Used for movement, scaling, rotation.

---

## 18. What is the difference between `translate`, `scale`, `rotate`, and `skew`?

| Function      | Meaning        |
| ------------- | -------------- |
| `translate()` | Move element   |
| `scale()`     | Resize element |
| `rotate()`    | Rotate element |
| `skew()`      | Slant element  |

---

## 19. What is CSS Clamp?

`clamp()` sets a value between minimum and maximum.

```css
font-size: clamp(1rem, 2vw, 2rem);
```

---

## 20. What are CSS Functions like `calc()`, `min()`, `max()`?

```css
width: calc(100% - 20px);
width: min(500px, 100%);
width: max(300px, 50%);
```

---

## 21. What is CSS Grid Template Areas?

```css
grid-template-areas:
  'header header'
  'sidebar main';
```

---

## 22. What is the difference between `overflow: hidden`, `scroll`, and `auto`?

| Property | Behavior                   |
| -------- | -------------------------- |
| `hidden` | Hides overflow             |
| `scroll` | Always shows scrollbar     |
| `auto`   | Scrollbar only when needed |

---

## 23. What is Object-fit?

```css
img {
  object-fit: cover;
}
```

Controls how image fits inside container.

---

## 24. What is `backdrop-filter`?

```css
backdrop-filter: blur(10px);
```

Used to blur content behind an element.

---

## 25. What is the difference between `nth-child()` and `nth-of-type()`?

| `nth-child()`       | `nth-of-type()`                   |
| ------------------- | --------------------------------- |
| Counts all children | Counts only matching element type |