---
isBlog: false
title: 'Columns'
date: 'Apr 07. 2022'
excerpt: 'Utility classes to control the number of columns within html elements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Columns, column auto, layout'
classNames: ''
plainText: ' greenCSS css class example maximum value maximum value step col-auto col-auto columns: auto; col number col-1 columns: 1; 1 12 +1 col number rem col-1rem columns: 1rem; 1 100 +1rem how to work with columns use the `col keyword ` to set the number of columns or `col number unit ` utility classes to set the individual width of a column the columns are arranged vertically in every case column number if you use `col number ` the column width of the columns will be automatically adjusted the range goes from `col-1` to `col-12` p e in a `col-2` usecase every single column will have 50% of the entire width  column width use the `col number unit ` to set a specific width for each column the range goes from `col-1rem` to `col-100rem` p e when using `col-20rem` every single column will have a fixed width of 20rem units  column gap you can easily add the gap docs gap class in order to control the gutter within the columns  active focus and hover states greenCSS css class example active:col keyword active :col-auto:active columns: auto; focus:col keyword focus :col-auto:focus columns: auto; hover:col keyword hover :col-auto:hover columns: auto; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:col-auto` to only apply the col-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:col-auto md: 480px 768px md:col-auto lg: 768px 1080px lg:col-auto greenCSS media queries can also be combined with active focus and hover states for example use `sm:col-auto` to apply the col-auto utility at only small screen sizes at or below 480px or `active:md:col-auto` to apply the col-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :col keyword ` p e `active:md:col-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:col keyword focus:col keyword hover:col keyword active columns auto focus columns auto hover columns auto active:sm:col keyword focus:sm:col keyword hover:sm:col keyword active small screens columns auto focus small screens columns auto hover small screens columns auto active:md:col keyword focus:md:col keyword hover:md:col keyword active medium screens columns auto focus medium screens columns auto hover medium screens columns auto active:lg:col keyword focus:lg:col keyword hover:lg:col keyword active large screens columns auto focus large screens columns auto hover large screens columns auto sources columns https: developer mozilla org en-us docs web css columns '
---

| _greenCSS_      | CSS class example            | minimum Value | maximum Value | Step  |
| --------------- | ---------------------------- | ------------- | ------------- | ----- |
| col-auto        | .col-auto { columns: auto; } | -             | -             | -     |
| col-{number}    | .col-1 { columns: 1; }       | 1             | 12            | +1    |
| col-{number}rem | .col-1rem { columns: 1rem; } | 1             | 100           | +1rem |

## How to work with columns

Use the `col-{keyword}` to set the number of columns or `col-{number}{unit}` utility classes to set the individual width of a column. The columns are arranged vertically in every case.

### Column Number

If you use `col-{number}`, the column width of the columns will be automatically adjusted - the range goes from `col-1` to `col-12`. p.e. in a `col-2` usecase, every single column will have 50% of the entire width.

```html
<div class="col-2 ...">
  <div class="w-100per ...">first</div>
  <div class="w-100per ...">second</div>
  <!-- ... -->
</div>
```

### Column Width

Use the `col-{number}{unit}` to set a specific width for each column - the range goes from `col-1rem` to `col-100rem`. p.e. when using `col-20rem`, every single column will have a fixed width of 20rem units.

```html
<div class="col-20rem ...">
  <div class="w-100per ...">first</div>
  <div class="w-100per ...">second</div>
  <!-- ... -->
</div>
```

### Column Gap

You can easily add the [gap](/docs/gap) class in order to control the gutter within the columns.

```html
<div class="col-20rem gap-20px...">
  <div class="w-100per ...">first</div>
  <div class="w-100per ...">second</div>
  <!-- ... -->
</div>
```

## Active, focus, and hover states

| _greenCSS_           | CSS class example                          |
| -------------------- | ------------------------------------------ |
| active:col-{keyword} | .active\:col-auto:active {columns: auto; } |
| focus:col-{keyword}  | .focus\:col-auto:focus { columns: auto; }  |
| hover:col-{keyword}  | .hover\:col-auto:hover { columns: auto; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:col-auto` to only apply the col-auto utility class on hover.

```html
<div class="col-2 hover:col-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:col-auto     |
| md:         | 480px - 768px  | .md:col-auto     |
| lg:         | 768px - 1080px | .lg:col-auto     |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:col-auto` to apply the col-auto utility at only small screen sizes at or below 480px. Or `active:md:col-auto` to apply the col-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:col-{keyword}` p.e. `active:md:col-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                      | spoken example                                                                                            |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:col-{keyword} , focus:col-{keyword} , hover:col-{keyword}          | active columns auto, focus columns auto, hover columns auto                                               |
| active:sm:col-{keyword} , focus:sm:col-{keyword} , hover:sm:col-{keyword} | active small screens columns auto, focus small screens columns auto, hover small screens columns auto,    |
| active:md:col-{keyword} , focus:md:col-{keyword} , hover:md:col-{keyword} | active medium screens columns auto, focus medium screens columns auto, hover medium screens columns auto, |
| active:lg:col-{keyword} , focus:lg:col-{keyword} , hover:lg:col-{keyword} | active large screens columns auto, focus large screens columns auto, hover large screens columns auto,    |

## Sources

- [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
