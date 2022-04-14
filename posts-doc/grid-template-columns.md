---
isBlog: false
title: 'Grid Template Columns'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s grid template columns.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Grid'
author: 'Severin Glaser'
keywords: 'Grid, Grid template column, grid col, grid columns'
classNames: ''
plainText: ' greenCSS css class example grid-col-none grid-col-none grid-template-columns: none ; grid-col-1 grid-col-1 grid-template-columns: repeat 1 minmax 0 1fr ; grid-col-2 grid-col-2 grid-template-columns: repeat 2 minmax 0 1fr ; grid-col-3 grid-col-3 grid-template-columns: repeat 3 minmax 0 1fr ; grid-col-4 grid-col-4 grid-template-columns: repeat 4 minmax 0 1fr ; grid-col-5 grid-col-5 grid-template-columns: repeat 5 minmax 0 1fr ; grid-col-6 grid-col-6 grid-template-columns: repeat 6 minmax 0 1fr ; grid-col-7 grid-col-7 grid-template-columns: repeat 7 minmax 0 1fr ; grid-col-8 grid-col-8 grid-template-columns: repeat 8 minmax 0 1fr ; grid-col-9 grid-col-9 grid-template-columns: repeat 9 minmax 0 1fr ; grid-col-10 grid-col-10 grid-template-columns: repeat 10 minmax 0 1fr ; grid-col-11 grid-col-11 grid-template-columns: repeat 11 minmax 0 1fr ; grid-col-12 grid-col-12 grid-template-columns: repeat 12 minmax 0 1fr ; define the amount of columns in a grid use the grid-col number utilities to create grids easily the range extends from 1-12 in the example below we assume a maximum number of 3 grid columns `grid-cols-3` next to each other with a gap of 30 pixels `gap-30px` ! greenCSS grid template columns images docs Flexbox-columns webp?style=centerme  active focus and hover states greenCSS css class example active:grid-col-1 active :grid-col-1:active grid-template-columns: repeat 1 minmax 0 1fr ; focus:grid-col-1 focus :grid-col-1:focus grid-template-columns: repeat 1 minmax 0 1fr ; hover:grid-col-1 hover :grid-col-1:hover grid-template-columns: repeat 1 minmax 0 1fr ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:grid-col-1` to only apply the `grid-col-1` utility on hover in the example below we consider there is a maximum number of 3 columns next to each other which means that there are three child elements in the same column if you hover over the parent object the number of columns changes to one as a result all child elements will occupy one column  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:grid-col-1 md: 480px 768px md:grid-col-1 lg: 768px 1080px lg:grid-col-1 greenCSS media queries can also be combined with active focus and hover states for example use `sm:grid-col-1` to apply the grid-col-1 utility at only small screen sizes at or below 480px or `hover:md:grid-col-1` to apply the grid-col-1 utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure is as follows: ` conditional state : media query :grid-col numbers ` p e `active:md:grid-col-1` responsive example working with cross-screen displays has never been easier using two greenCSS classes your grid will be compatible with smartphones and desktop displays in no time 1 the structure is as follows: ` media query :grid-col numbers ` p e `sm:grid-col-1` 1 the default value has no media query and will be applied for all screens: `grid-col numbers ` p e `grid-col-1` ! greenCSS responsive macbook grid template columns images docs flex macbook-grid-columns webp?style=centerme ! greenCSS responsive iphone grid template columns images docs flex iphone-grid-columns webp?style=centerme  executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:grid-col-1 focus:grid-col-1 hover:grid-col-1 active grid template columns focus grid template columns hover grid template columns active:sm:grid-col-1 focus:sm:grid-col-1 hover:sm:grid-col-1 active small screens grid template columns focus small screens grid template columns hover small screens grid template columns active:md:grid-col-1 focus:md:grid-col-1 hover:md:grid-col-1 active medium screens grid template columns focus medium screens grid template columns hover medium screens grid template columns active:lg:grid-col-1 focus:lg:grid-col-1 hover:lg:grid-col-1 active large screens grid template columns focus large screens grid template columns hover large screens grid template columns sources grid-template-columns https: developer mozilla org en-us docs web css grid-template-columns '
---

| _greenCSS_     | CSS class example                                                   |
| ------------- | ------------------------------------------------------------------- |
| grid-col-none | .grid-col-none { grid-template-columns: none); }                    |
| grid-col-1    | .grid-col-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }   |
| grid-col-2    | .grid-col-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }   |
| grid-col-3    | .grid-col-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }   |
| grid-col-4    | .grid-col-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }   |
| grid-col-5    | .grid-col-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }   |
| grid-col-6    | .grid-col-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }   |
| grid-col-7    | .grid-col-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }   |
| grid-col-8    | .grid-col-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }   |
| grid-col-9    | .grid-col-9 { grid-template-columns: repeat(9, minmax(0, 1fr)); }   |
| grid-col-10   | .grid-col-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); } |
| grid-col-11   | .grid-col-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); } |
| grid-col-12   | .grid-col-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); } |

## Define the amount of columns in a grid

Use the grid-col-{number} utilities to create grids easily. The range extends from 1-12. In the example below, we assume a maximum number of 3 grid columns `grid-cols-3` next to each other, with a gap of 30 pixels `gap-30px`.

![greenCSS grid template columns](/images/docs/flex/grid-columns.webp?style=centerme)

```html
<div class="grid grid-cols-3 gap-30px">
  <div class="w-50px h-50px bg-purple">first</div>
  <div class="w-50px h-50px bg-purple-1">second</div>
  <div class="w-50px h-50px bg-purple-2">third</div>
  <div class="w-50px h-50px bg-purple-3">fourth</div>
  <div class="w-50px h-50px bg-purple-3">fifth</div>
  <div class="w-50px h-50px bg-purple-3">sixth</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_         | CSS class example                                                                |
| ----------------- | -------------------------------------------------------------------------------- |
| active:grid-col-1 | .active\:grid-col-1:active { grid-template-columns: repeat(1, minmax(0, 1fr)); } |
| focus:grid-col-1  | .focus\:grid-col-1:focus { grid-template-columns: repeat(1, minmax(0, 1fr)); }   |
| hover:grid-col-1  | .hover\:grid-col-1:hover { grid-template-columns: repeat(1, minmax(0, 1fr)); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:grid-col-1` to only apply the `grid-col-1` utility on hover. In the example below, we consider there is a maximum number of 3 columns next to each other, which means that there are three child elements in the same column. If you hover over the parent object, the number of columns changes to one. As a result, all child elements will occupy one column.

```html
<div class="grid grid-col-3 hover:grid-col-1 gap-30px">
  <div class="w-50px h-50px bg-purple">first</div>
  <div class="w-50px h-50px bg-purple-3">second</div>
  <div class="w-50px h-50px bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:grid-col-1  |
| md:         | 480px - 768px  | .md:grid-col-1  |
| lg:         | 768px - 1080px | .lg:grid-col-1  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:grid-col-1` to apply the grid-col-1 utility at only small screen sizes at or below 480px. Or `hover:md:grid-col-1` to apply the grid-col-1 utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure is as follows: `{conditional state}:{media query}:grid-col-{numbers}` p.e. `active:md:grid-col-1`

### Responsive example

Working with cross-screen displays has never been easier. Using two greenCSS classes your grid will be compatible with smartphones and desktop displays in no time.

1. The structure is as follows: `{media query}:grid-col-{numbers}` p.e. `sm:grid-col-1`
1. The default value has no media query and will be applied for all screens: `grid-col-{numbers}` p.e. `grid-col-1`

![greenCSS responsive - MacBook grid template columns](/images/docs/flex/MacBook-grid-columns.webp?style=centerme)
![greenCSS responsive - iPhone grid template columns](/images/docs/flex/iPhone-grid-columns.webp?style=centerme)

```html
<div class="grid grid-cols-3 sm:grid-col-1 gap-30px">
  <div class="w-50px h-50px bg-purple">first</div>
  <div class="w-50px h-50px bg-purple-1">second</div>
  <div class="w-50px h-50px bg-purple-2">third</div>
  <div class="w-50px h-50px bg-purple-3">fourth</div>
  <div class="w-50px h-50px bg-purple-3">fifth</div>
  <div class="w-50px h-50px bg-purple-3">sixth</div>
</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                            | spoken example                                                                                                                      |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| active:grid-col-1, focus:grid-col-1, hover:grid-col-1          | active grid template columns, focus grid template columns, hover grid template columns                                              |
| active:sm:grid-col-1, focus:sm:grid-col-1, hover:sm:grid-col-1 | active small screens grid template columns, focus small screens grid template columns, hover small screens grid template columns    |
| active:md:grid-col-1, focus:md:grid-col-1, hover:md:grid-col-1 | active medium screens grid template columns, focus medium screens grid template columns, hover medium screens grid template columns |
| active:lg:grid-col-1, focus:lg:grid-col-1, hover:lg:grid-col-1 | active large screens grid template columns, focus large screens grid template columns, hover large screens grid template columns    |

## Sources

- [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
