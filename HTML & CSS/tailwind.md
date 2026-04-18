# Tailwind CSS Interview Question Bank

## Index

| #  | Question                                                                                                                       |
| -- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1  | [What is Tailwind CSS?](#1-what-is-tailwind-css)                                                                               |
| 2  | [Why use Tailwind CSS?](#2-why-use-tailwind-css)                                                                               |
| 3  | [Tailwind CSS vs Traditional CSS](#3-tailwind-css-vs-traditional-css)                                                          |
| 4  | [How do you install Tailwind CSS?](#4-how-do-you-install-tailwind-css)                                                         |
| 5  | [What is `tailwind.config.js`?](#5-what-is-tailwindconfigjs)                                                                   |
| 6  | [What are Utility Classes in Tailwind?](#6-what-are-utility-classes-in-tailwind)                                               |
| 7  | [What is JIT Mode in Tailwind CSS?](#7-what-is-jit-mode-in-tailwind-css)                                                       |
| 8  | [How do Responsive Classes work in Tailwind?](#8-how-do-responsive-classes-work-in-tailwind)                                   |
| 9  | [What are Breakpoints in Tailwind CSS?](#9-what-are-breakpoints-in-tailwind-css)                                               |
| 10 | [How do you center a div in Tailwind CSS?](#10-how-do-you-center-a-div-in-tailwind-css)                                        |
| 11 | [How do Flexbox utilities work in Tailwind?](#11-how-do-flexbox-utilities-work-in-tailwind)                                    |
| 12 | [How do Grid utilities work in Tailwind?](#12-how-do-grid-utilities-work-in-tailwind)                                          |
| 13 | [What is the difference between `container` and `mx-auto`?](#13-what-is-the-difference-between-container-and-mx-auto)          |
| 14 | [What are Arbitrary Values in Tailwind CSS?](#14-what-are-arbitrary-values-in-tailwind-css)                                    |
| 15 | [How do you apply hover, focus and active states in Tailwind?](#15-how-do-you-apply-hover-focus-and-active-states-in-tailwind) |
| 16 | [What is Dark Mode in Tailwind CSS?](#16-what-is-dark-mode-in-tailwind-css)                                                    |
| 17 | [How do you create custom colors and spacing in Tailwind?](#17-how-do-you-create-custom-colors-and-spacing-in-tailwind)        |
| 18 | [What is `@apply` in Tailwind CSS?](#18-what-is-apply-in-tailwind-css)                                                         |
| 19 | [What is Purging in Tailwind CSS?](#19-what-is-purging-in-tailwind-css)                                                        |
| 20 | [Tailwind CSS vs Bootstrap](#20-tailwind-css-vs-bootstrap)                                                                     |

---

## 1. What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework.

Instead of writing custom CSS classes, you directly use predefined utility classes in HTML.

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Submit
</button>
```

---

## 2. Why use Tailwind CSS?

Benefits:

* Faster UI development
* No need to write large CSS files
* Consistent spacing and colors
* Easy responsive design
* Highly customizable

---

## 3. Tailwind CSS vs Traditional CSS

| Tailwind CSS           | Traditional CSS           |
| ---------------------- | ------------------------- |
| Uses utility classes   | Uses custom CSS selectors |
| Faster development     | More manual work          |
| Less context switching | Separate CSS file needed  |

---

## 4. How do you install Tailwind CSS?

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Then add:

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}']
}
```

---

## 5. What is `tailwind.config.js`?

This file is used to customize Tailwind.

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF'
      }
    }
  }
}
```

---

## 6. What are Utility Classes in Tailwind?

Utility classes are small reusable classes.

Examples:

```html
<div class="mt-4 p-2 text-center bg-gray-100"></div>
```

* `mt-4` → margin-top
* `p-2` → padding
* `text-center` → text align

---

## 7. What is JIT Mode in Tailwind CSS?

JIT = Just In Time compiler.

It generates only the classes you use.

Benefits:

* Smaller CSS bundle
* Faster build time
* Supports arbitrary values

---

## 8. How do Responsive Classes work in Tailwind?

```html
<div class="text-sm md:text-lg lg:text-2xl"></div>
```

* Default → small screen
* `md:` → medium screen
* `lg:` → large screen

---

## 9. What are Breakpoints in Tailwind CSS?

Default breakpoints:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 10. How do you center a div in Tailwind CSS?

```html
<div class="flex justify-center items-center h-screen">
  Centered
</div>
```

---

## 11. How do Flexbox utilities work in Tailwind?

```html
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

Common classes:

* `flex`
* `justify-center`
* `items-center`
* `flex-col`

---

## 12. How do Grid utilities work in Tailwind?

```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

---

## 13. What is the difference between `container` and `mx-auto`?

| `container`                         | `mx-auto`                    |
| ----------------------------------- | ---------------------------- |
| Sets max-width based on screen size | Centers element horizontally |

---

## 14. What are Arbitrary Values in Tailwind CSS?

You can provide custom values inside square brackets.

```html
<div class="w-[350px] bg-[#123456]"></div>
```

---

## 15. How do you apply hover, focus and active states in Tailwind?

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 active:scale-95"></button>
```

---

## 16. What is Dark Mode in Tailwind CSS?

```html
<div class="bg-white dark:bg-black text-black dark:text-white"></div>
```

Config:

```js
darkMode: 'class'
```

---

## 17. How do you create custom colors and spacing in Tailwind?

```js
extend: {
  spacing: {
    '72': '18rem'
  }
}
```

---

## 18. What is `@apply` in Tailwind CSS?

`@apply` lets you reuse utility classes.

```css
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
```

---

## 19. What is Purging in Tailwind CSS?

Purging removes unused classes from production CSS.

This reduces bundle size.

---

## 20. What are Media Queries in CSS?

Media queries are used to apply different styles based on screen size, device type, or resolution.

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

This changes the layout when the screen width is 768px or less.

---

## 21. What is the difference between `min-width` and `max-width` in media queries?

| `min-width`                           | `max-width`                           |
| ------------------------------------- | ------------------------------------- |
| Applies styles above a specific width | Applies styles below a specific width |

```css
@media (min-width: 768px) {
  .box {
    background: blue;
  }
}
```

```css
@media (max-width: 768px) {
  .box {
    background: red;
  }
}
```

---

## 22. How do media queries work in Tailwind CSS?

Tailwind uses responsive prefixes instead of writing manual media queries.

```html
<div class="text-sm md:text-lg lg:text-2xl"></div>
```

Equivalent CSS:

```css
@media (min-width: 768px) {
  .text-lg {}
}
```

---

## 23. How do you create a mobile-first design using media queries?

Mobile-first means writing default styles for small screens first and then enhancing for larger screens.

```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

Tailwind is mobile-first by default.

---

## 24. Tailwind CSS vs Bootstrap

| Tailwind CSS        | Bootstrap             |
| ------------------- | --------------------- |
| Utility-first       | Component-first       |
| Highly customizable | Ready-made components |
| Smaller final CSS   | Larger bundle         |