# Bootstrap Interview Question Bank

## Index

| #  | Question                                                                                                                                  |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | [What is Bootstrap?](#1-what-is-bootstrap)                                                                                                |
| 2  | [Why use Bootstrap?](#2-why-use-bootstrap)                                                                                                |
| 3  | [Bootstrap vs CSS](#3-bootstrap-vs-css)                                                                                                   |
| 4  | [How do you include Bootstrap in a project?](#4-how-do-you-include-bootstrap-in-a-project)                                                |
| 5  | [What is the Bootstrap Grid System?](#5-what-is-the-bootstrap-grid-system)                                                                |
| 6  | [What are Bootstrap Breakpoints?](#6-what-are-bootstrap-breakpoints)                                                                      |
| 7  | [Difference between `container`, `container-fluid`, and `container-sm`](#7-difference-between-container-container-fluid-and-container-sm) |
| 8  | [What are Bootstrap Utility Classes?](#8-what-are-bootstrap-utility-classes)                                                              |
| 9  | [How do you create a responsive column layout in Bootstrap?](#9-how-do-you-create-a-responsive-column-layout-in-bootstrap)                |
| 10 | [What is the difference between `col`, `col-auto`, and `col-6`?](#10-what-is-the-difference-between-col-col-auto-and-col-6)               |
| 11 | [What are Bootstrap Components?](#11-what-are-bootstrap-components)                                                                       |
| 12 | [How do you create a Navbar in Bootstrap?](#12-how-do-you-create-a-navbar-in-bootstrap)                                                   |
| 13 | [What are Bootstrap Cards?](#13-what-are-bootstrap-cards)                                                                                 |
| 14 | [What is the difference between `d-none` and `visibility-hidden`?](#14-what-is-the-difference-between-d-none-and-visibility-hidden)       |
| 15 | [How do spacing utilities work in Bootstrap?](#15-how-do-spacing-utilities-work-in-bootstrap)                                             |
| 16 | [How do color classes work in Bootstrap?](#16-how-do-color-classes-work-in-bootstrap)                                                     |
| 17 | [What are Bootstrap Forms?](#17-what-are-bootstrap-forms)                                                                                 |
| 18 | [What are Bootstrap Modals?](#18-what-are-bootstrap-modals)                                                                               |
| 19 | [What is Bootstrap Carousel?](#19-what-is-bootstrap-carousel)                                                                             |
| 20 | [Bootstrap vs Tailwind CSS](#20-bootstrap-vs-tailwind-css)                                                                                |

---

## 1. What is Bootstrap?

Bootstrap is a popular CSS framework that provides pre-built components and responsive grid system.

```html
<button class="btn btn-primary">Submit</button>
```

---

## 2. Why use Bootstrap?

Benefits:

* Faster UI creation
* Responsive by default
* Large set of ready-made components
* Easy to use

---

## 3. Bootstrap vs CSS

| Bootstrap          | CSS            |
| ------------------ | -------------- |
| Predefined classes | Manual styling |
| Faster development | More control   |

---

## 4. How do you include Bootstrap in a project?

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

---

## 5. What is the Bootstrap Grid System?

Bootstrap uses a 12-column grid.

```html
<div class="row">
  <div class="col-6"></div>
  <div class="col-6"></div>
</div>
```

---

## 6. What are Bootstrap Breakpoints?

```txt
sm ≥ 576px
md ≥ 768px
lg ≥ 992px
xl ≥ 1200px
xxl ≥ 1400px
```

---

## 7. Difference between `container`, `container-fluid`, and `container-sm`

| Class             | Meaning                        |
| ----------------- | ------------------------------ |
| `container`       | Responsive fixed width         |
| `container-fluid` | Full width                     |
| `container-sm`    | Fixed width from small screens |

---

## 8. What are Bootstrap Utility Classes?

Examples:

```html
<div class="text-center mt-3 p-2 bg-light"></div>
```

---

## 9. How do you create a responsive column layout in Bootstrap?

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4"></div>
</div>
```

---

## 10. What is the difference between `col`, `col-auto`, and `col-6`?

| Class      | Meaning                |
| ---------- | ---------------------- |
| `col`      | Equal width            |
| `col-auto` | Width based on content |
| `col-6`    | Takes 6 columns        |

---

## 11. What are Bootstrap Components?

Examples:

* Navbar
* Modal
* Card
* Alert
* Carousel

---

## 12. How do you create a Navbar in Bootstrap?

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
```

---

## 13. What are Bootstrap Cards?

```html
<div class="card">
  <div class="card-body">Hello</div>
</div>
```

---

## 14. What is the difference between `d-none` and `visibility-hidden`?

| `d-none`            | `visibility-hidden` |
| ------------------- | ------------------- |
| Removes from layout | Keeps space         |

---

## 15. How do spacing utilities work in Bootstrap?

```html
<div class="mt-3 px-4"></div>
```

* `m` = margin
* `p` = padding

---

## 16. How do color classes work in Bootstrap?

```html
<div class="bg-primary text-white"></div>
```

---

## 17. What are Bootstrap Forms?

Bootstrap provides styled form controls.

```html
<input class="form-control" type="text">
```

---

## 18. What are Bootstrap Modals?

Modals are popup dialogs.

```html
<div class="modal"></div>
```

---

## 19. What is Bootstrap Carousel?

Carousel is used to create image sliders.

```html
<div id="carouselExample" class="carousel slide"></div>
```

---

## 20. What are Media Queries in Bootstrap?

Bootstrap uses predefined breakpoints and responsive utility classes.

```html
<div class="col-12 col-md-6 col-lg-4"></div>
```

This means:

* Full width on small screens
* 6 columns on medium screens
* 4 columns on large screens

---

## 21. How do you write custom media queries in Bootstrap?

You can still write normal CSS media queries along with Bootstrap.

```css
@media (max-width: 576px) {
  .custom-box {
    display: none;
  }
}
```

---

## 22. What are Bootstrap Responsive Display Utilities?

Bootstrap provides classes to show/hide content at different breakpoints.

```html
<div class="d-none d-md-block">Visible only on medium and above</div>
```

```html
<div class="d-block d-md-none">Visible only on mobile</div>
```

---

## 23. Bootstrap vs Tailwind CSS

| Bootstrap              | Tailwind CSS             |
| ---------------------- | ------------------------ |
| Component-based        | Utility-based            |
| Faster for simple apps | Better for custom design |
| Larger CSS size        | Smaller final build      |
