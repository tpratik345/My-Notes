# Media Queries in CSS Interview Question Bank

## Index

| #  | Question                                                                                                                                |
| -- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [What are Media Queries in CSS?](#1-what-are-media-queries-in-css)                                                                      |
| 2  | [Why do we use Media Queries?](#2-why-do-we-use-media-queries)                                                                          |
| 3  | [What is the syntax of a Media Query?](#3-what-is-the-syntax-of-a-media-query)                                                          |
| 4  | [Difference between `min-width` and `max-width`](#4-difference-between-min-width-and-max-width)                                         |
| 5  | [What is Mobile First Design?](#5-what-is-mobile-first-design)                                                                          |
| 6  | [What is Desktop First Design?](#6-what-is-desktop-first-design)                                                                        |
| 7  | [What are common CSS breakpoints?](#7-what-are-common-css-breakpoints)                                                                  |
| 8  | [How do you target mobile, tablet and desktop using media queries?](#8-how-do-you-target-mobile-tablet-and-desktop-using-media-queries) |
| 9  | [How do media queries work with orientation?](#9-how-do-media-queries-work-with-orientation)                                            |
| 10 | [How do you use media queries for dark mode?](#10-how-do-you-use-media-queries-for-dark-mode)                                           |

---

## 1. What are Media Queries in CSS?

Media queries allow CSS to change based on screen size or device.

```css
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
```

---

## 2. Why do we use Media Queries?

We use media queries to create responsive websites.

Benefits:

* Better mobile support
* Different layout for tablets and desktops
* Improved user experience

---

## 3. What is the syntax of a Media Query?

```css
@media screen and (max-width: 600px) {
  .box {
    display: none;
  }
}
```

---

## 4. Difference between `min-width` and `max-width`

| `min-width`         | `max-width`         |
| ------------------- | ------------------- |
| Applies above value | Applies below value |

---

## 5. What is Mobile First Design?

Start with mobile styles, then add styles for larger screens.

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

---

## 6. What is Desktop First Design?

Start with desktop styles, then reduce for smaller screens.

```css
.card {
  width: 50%;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```

---

## 7. What are common CSS breakpoints?

```txt
Mobile: up to 600px
Tablet: 601px to 1024px
Desktop: above 1024px
```

---

## 8. How do you target mobile, tablet and desktop using media queries?

```css
@media (max-width: 600px) {}
@media (min-width: 601px) and (max-width: 1024px) {}
@media (min-width: 1025px) {}
```

---

## 9. How do media queries work with orientation?

```css
@media (orientation: landscape) {
  body {
    background: yellow;
  }
}
```

---

## 10. How do you use media queries for dark mode?

```css
@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
```
