# HTML & CSS Interview Question Bank

## Index

| #  | Question                                                                       | Link                                                                            |
| -- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 1  | What is the difference between preload and prefetch in the `<link>` tag?       | [Go](#1-what-is-the-difference-between-preload-and-prefetch-in-the-link-tag)    |
| 2  | What are pseudo classes and pseudo elements?                                   | [Go](#2-what-are-pseudo-classes-and-pseudo-elements)                            |
| 3  | What is `preventDefault()`?                                                    | [Go](#3-what-is-preventdefault)                                                 |
| 4  | What is `stopPropagation()`?                                                   | [Go](#4-what-is-stoppropagation)                                                |
| 5  | Explain the CSS Box Model                                                      | [Go](#5-explain-the-css-box-model)                                              |
| 6  | What is a CSS Sprite?                                                          | [Go](#6-what-is-a-css-sprite)                                                   |
| 7  | What are CSS Preprocessors?                                                    | [Go](#7-what-are-css-preprocessors)                                             |
| 8  | What are Mixins?                                                               | [Go](#8-what-are-mixins)                                                        |
| 9  | Explain CSS Specificity                                                        | [Go](#9-explain-css-specificity)                                                |
| 10 | What is `!important`?                                                          | [Go](#10-what-is-important)                                                     |
| 11 | What are CSS Combinators?                                                      | [Go](#11-what-are-css-combinators)                                              |
| 12 | What does `::before` do?                                                       | [Go](#12-what-does-before-do)                                                   |
| 13 | Difference between `visibility: hidden` and `display: none`                    | [Go](#13-difference-between-visibility-hidden-and-display-none)                 |
| 14 | Explain CSS Position Values                                                    | [Go](#14-explain-css-position-values)                                           |
| 15 | Difference between `box-sizing: border-box` and `content-box`                  | [Go](#15-difference-between-box-sizing-border-box-and-content-box)              |
| 16 | Difference between inline, inline-block and block                              | [Go](#16-difference-between-inline-inline-block-and-block)                      |
| 17 | Flexbox vs Grid                                                                | [Go](#17-flexbox-vs-grid)                                                       |
| 18 | What are HTML Entities?                                                        | [Go](#18-what-are-html-entities)                                                |
| 19 | What are Semantic Elements?                                                    | [Go](#19-what-are-semantic-elements)                                            |
| 20 | What are Meta Tags?                                                            | [Go](#20-what-are-meta-tags)                                                    |
| 21 | localStorage vs sessionStorage                                                 | [Go](#21-localstorage-vs-sessionstorage)                                        |
| 22 | What are Web Workers?                                                          | [Go](#22-what-are-web-workers)                                                  |
| 23 | What are HTML Attributes?                                                      | [Go](#23-what-are-html-attributes)                                              |
| 24 | What are Data Attributes?                                                      | [Go](#24-what-are-data-attributes)                                              |
| 25 | What is CSS Reset?                                                             | [Go](#25-what-is-css-reset)                                                     |
| 26 | How do you select elements by attribute in CSS?                                | [Go](#26-how-do-you-select-elements-by-attribute-in-css)                        |
| 27 | Difference between HTML and HTML5                                              | [Go](#27-difference-between-html-and-html5)                                     |
| 28 | Relative vs Static Position                                                    | [Go](#28-relative-vs-static-position)                                           |
| 29 | What does the `target` attribute do in an anchor tag?                          | [Go](#29-what-does-the-target-attribute-do-in-an-anchor-tag)                    |
| 30 | What is Tabindex?                                                              | [Go](#30-what-is-tabindex)                                                      |
| 31 | What are CSS Variables?                                                        | [Go](#31-what-are-css-variables)                                                |
| 32 | Difference between Section and Span in HTML                                    | [Go](#32-difference-between-section-and-span-in-html)                           |
| 33 | What is the `<noscript>` tag?                                                  | [Go](#33-what-is-the-noscript-tag)                                              |
| 34 | What are Backticks in JavaScript Template Literals?                            | [Go](#34-what-are-backticks-in-javascript-template-literals)                    |
| 35 | What is a `<textarea>` tag?                                                    | [Go](#35-what-is-a-textarea-tag)                                                |
| 36 | Difference between `mouseenter` and `mouseover`                                | [Go](#36-difference-between-mouseenter-and-mouseover)                           |
| 37 | Difference between `offsetHeight`, `offsetWidth` and `getBoundingClientRect()` | [Go](#37-difference-between-offsetheight-offsetwidth-and-getboundingclientrect) |

---

## 1. What is the difference between preload and prefetch in the `<link>` tag?

```html
<link rel="preload" href="style.css" as="style">
<link rel="prefetch" href="next-page.js">
```

* `preload` loads a resource immediately because it is required for the current page.
* `prefetch` loads a resource for future navigation when the browser is idle.

Use `preload` for fonts, CSS, or critical scripts.
Use `prefetch` for resources likely needed on the next page.

---

## 2. What are pseudo classes and pseudo elements?

Pseudo classes target the state of an element.

```css
a:hover {
  color: red;
}
```

Pseudo elements target a specific part of an element.

```css
p::first-letter {
  font-size: 32px;
}
```

| Pseudo Class   | Pseudo Element   |
| -------------- | ---------------- |
| `:hover`       | `::before`       |
| `:focus`       | `::after`        |
| `:nth-child()` | `::first-letter` |

---

## 3. What is `preventDefault()`?

`preventDefault()` stops the browser's default action.

```js
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
});
```

Examples:

* Prevent form submission
* Prevent link navigation

---

## 4. What is `stopPropagation()`?

`stopPropagation()` stops event bubbling.

```js
button.addEventListener('click', (e) => {
  e.stopPropagation();
});
```

The parent event will not run.

---

## 5. Explain the CSS Box Model

Every element is made of:

1. Content
2. Padding
3. Border
4. Margin

```css
width: 200px;
padding: 20px;
border: 5px solid black;
margin: 10px;
```

Actual width = 200 + 20 + 20 + 5 + 5 = 250px

---

## 6. What is a CSS Sprite?

A CSS Sprite combines multiple images into one image.

Benefits:

* Fewer HTTP requests
* Better performance

```css
.icon {
  background-image: url('sprite.png');
  background-position: -20px -40px;
}
```

---

## 7. What are CSS Preprocessors?

CSS preprocessors add extra features to CSS.

Popular preprocessors:

* Sass
* Less
* Stylus

Features:

* Variables
* Nesting
* Mixins

---

## 8. What are Mixins?

Mixins allow reusable CSS blocks.

```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include center;
}
```

---

## 9. Explain CSS Specificity

Specificity decides which CSS rule is applied.

Priority:

1. Inline styles
2. ID selector
3. Class selector
4. Element selector

```css
#title {
  color: red;
}
```

---

## 10. What is `!important`?

`!important` overrides all other rules.

```css
p {
  color: red !important;
}
```

Avoid overusing it.

---

## 11. What are CSS Combinators?

| Combinator | Meaning      |
| ---------- | ------------ |
| `div p`    | Descendant   |
| `div > p`  | Direct child |
| `div + p`  | Next sibling |
| `div ~ p`  | All siblings |

---

## 12. What does `::before` do?

`::before` inserts content before an element.

```css
button::before {
  content: '🔥';
}
```

---

## 13. Difference between `visibility: hidden` and `display: none`

| visibility: hidden               | display: none               |
| -------------------------------- | --------------------------- |
| Element hidden but space remains | Element removed from layout |

---

## 14. Explain CSS Position Values

* `static` → default
* `relative` → moves relative to itself
* `absolute` → relative to nearest positioned parent
* `fixed` → fixed on screen
* `sticky` → sticks after scrolling

```css
position: sticky;
top: 0;
```

---

## 15. Difference between `box-sizing: border-box` and `content-box`

```css
box-sizing: border-box;
```

| border-box                           | content-box            |
| ------------------------------------ | ---------------------- |
| Includes padding and border in width | Width only for content |

---

## 16. Difference between inline, inline-block and block

| inline          | inline-block         | block            |
| --------------- | -------------------- | ---------------- |
| No width/height | Width/height allowed | Takes full width |

Examples:

* `span` → inline
* `img` → inline-block
* `div` → block

---

## 17. Flexbox vs Grid

| Flexbox         | Grid             |
| --------------- | ---------------- |
| One-dimensional | Two-dimensional  |
| Row or column   | Rows and columns |

Use Flexbox for alignment.
Use Grid for page layout.

---

## 18. What are HTML Entities?

Used to display reserved characters.

```html
&lt;div&gt;
&nbsp;
&amp;
```

---

## 19. What are Semantic Elements?

Semantic elements clearly describe meaning.

Examples:

```html
<header></header>
<nav></nav>
<section></section>
<footer></footer>
```

Benefits:

* Better SEO
* Better accessibility

---

## 20. What are Meta Tags?

Meta tags provide information about the page.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 21. localStorage vs sessionStorage

| localStorage                        | sessionStorage          |
| ----------------------------------- | ----------------------- |
| Persists even after closing browser | Cleared when tab closes |
| Larger lifetime                     | Session only            |

---

## 22. What are Web Workers?

Web Workers run JavaScript in background thread.

```js
const worker = new Worker('worker.js');
```

Used for heavy calculations.

---

## 23. What are HTML Attributes?

Attributes provide extra information.

```html
<input type="text" disabled>
```

Examples:

* `id`
* `class`
* `src`
* `href`

---

## 24. What are Data Attributes?

Custom attributes starting with `data-`.

```html
<div data-id="123"></div>
```

```js
element.dataset.id
```

---

## 25. What is CSS Reset?

CSS Reset removes browser default styles.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 26. How do you select elements by attribute in CSS?

```css
input[type="text"] {
  border: 1px solid black;
}
```

---

## 27. Difference between HTML and HTML5

| HTML                   | HTML5                   |
| ---------------------- | ----------------------- |
| Older version          | Modern version          |
| No semantic tags       | Semantic tags available |
| No video/audio support | Supports video/audio    |

---

## 28. Relative vs Static Position

| relative                             | static           |
| ------------------------------------ | ---------------- |
| Can move using top/left              | Cannot move      |
| Creates reference for absolute child | Default position |

---

## 29. What does the `target` attribute do in an anchor tag?

```html
<a href="https://example.com" target="_blank">Open</a>
```

Common values:

* `_self`
* `_blank`
* `_parent`
* `_top`

---

## 30. What is Tabindex?

`tabindex` controls keyboard focus order.

```html
<input tabindex="1">
```

---

## 31. What are CSS Variables?

```css
:root {
  --primary-color: blue;
}

button {
  color: var(--primary-color);
}
```

---

## 32. Difference between Section and Span in HTML

| section                | span                   |
| ---------------------- | ---------------------- |
| Block semantic element | Inline generic element |

---

## 33. What is the `<noscript>` tag?

Displayed when JavaScript is disabled.

```html
<noscript>Please enable JavaScript.</noscript>
```

---

## 34. What are Backticks in JavaScript Template Literals?

```js
const name = 'Pratik';
console.log(`Hello ${name}`);
```

Backticks support:

* String interpolation
* Multi-line strings

---

## 35. What is a `<textarea>` tag?

```html
<textarea rows="4" cols="20"></textarea>
```

Used for multi-line input.

---

## 36. Difference between `mouseenter` and `mouseover`

| mouseenter      | mouseover            |
| --------------- | -------------------- |
| Fires once      | Fires multiple times |
| Does not bubble | Bubbles              |

---

## 37. Difference between `offsetHeight`, `offsetWidth` and `getBoundingClientRect()`

```js
element.offsetHeight
element.offsetWidth
element.getBoundingClientRect()
```

* `offsetHeight` includes padding and border
* `offsetWidth` includes padding and border
* `getBoundingClientRect()` returns exact position and size

Example:

```js
const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left);
```
