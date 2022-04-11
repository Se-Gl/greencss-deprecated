---
isBlog: false
title: 'Grid Template Rows'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s grid template rows.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Grid'
author: 'Severin Glaser'
keywords: 'Grid, Grid template rows, grid row, grid rows'
classNames: ''
plainText: ' omencss css class example grid-rows-none grid-rows-none grid-template-rows: none ; grid-rows-1 grid-rows-1 grid-template-rows: repeat 1 minmax 0 1fr ; grid-rows-2 grid-rows-2 grid-template-rows: repeat 2 minmax 0 1fr ; grid-rows-3 grid-rows-3 grid-template-rows: repeat 3 minmax 0 1fr ; grid-rows-4 grid-rows-4 grid-template-rows: repeat 4 minmax 0 1fr ; grid-rows-5 grid-rows-5 grid-template-rows: repeat 5 minmax 0 1fr ; grid-rows-6 grid-rows-6 grid-template-rows: repeat 6 minmax 0 1fr ; grid-rows-7 grid-rows-7 grid-template-rows: repeat 7 minmax 0 1fr ; grid-rows-8 grid-rows-8 grid-template-rows: repeat 8 minmax 0 1fr ; grid-rows-9 grid-rows-9 grid-template-rows: repeat 9 minmax 0 1fr ; grid-rows-10 grid-rows-10 grid-template-rows: repeat 10 minmax 0 1fr ; grid-rows-11 grid-rows-11 grid-template-rows: repeat 11 minmax 0 1fr ; grid-rows-12 grid-rows-12 grid-template-rows: repeat 12 minmax 0 1fr ; define the amount of rows in a grid use the grid-rows number utilities to create grids easily the range extends from 1-12 in the example below we assume a maximum number of 4 grid rows vertical direction `grid-rows-4` below each other with a gap of 30 pixels `gap-30px` ! omencss grid template rows images docs Flexbox-rows webp?style=centerme  active focus and hover states omencss css class example active:grid-rows-1 active :grid-rows-1:active grid-template-rows: repeat 1 minmax 0 1fr ; focus:grid-rows-1 focus :grid-rows-1:focus grid-template-rows: repeat 1 minmax 0 1fr ; hover:grid-rows-1 hover :grid-rows-1:hover grid-template-rows: repeat 1 minmax 0 1fr ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:grid-rows-1` to only apply the `grid-rows-1` utility on hover in the example below we consider there is a maximum number of 3 rows next to each other which means that there are three child elements in the same column if you hover over the parent object the number of rows changes to one as a result all child elements will occupy one column  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:grid-rows-1 md: 480px 768px md:grid-rows-1 lg: 768px 1080px lg:grid-rows-1 omencss media queries can also be combined with active focus and hover states for example use `sm:grid-rows-1` to apply the grid-rows-1 utility at only small screen sizes at or below 480px or `hover:md:grid-rows-1` to apply the grid-rows-1 utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure is as follows: ` conditional state : media query :grid-rows numbers ` p e `active:md:grid-rows-1` responsive example working with cross-screen displays has never been easier using two omencss classes your grid will be compatible with smartphones and desktop displays in no time 1 the structure is as follows: ` media query :grid-rows numbers ` p e `sm:grid-rows-1` 1 the default value has no media query and will be applied for all screens: `grid-rows numbers ` p e `grid-rows-1` ! omencss responsive macbook grid template rows images docs flex macbook-grid-rows webp?style=centerme ! omencss responsive iphone grid template rows images docs flex iphone-grid-rows webp?style=centerme in the example below we use `grid-rows-4 grid-flow-col sm:grid-rows-1 sm:grid-flow-row` for a default grid with 4 vertical rows which spreads in a column flow horizontally for small screens the class `sm:grid-rows-1 sm:grid-flow-row` is being used which creates a horizontal flow for the element which covers the entire screen by the way you do not have to use `sm:grid-rows-1` as the horizontal flow class `sm:grid-flow-row` takes over control for the elements this class is an unnecessary repetition and was only used to demonstrate the responsive example  executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:grid-rows-1 focus:grid-rows-1 hover:grid-rows-1 active grid template rows focus grid template rows hover grid template rows active:sm:grid-rows-1 focus:sm:grid-rows-1 hover:sm:grid-rows-1 active small screens grid template rows focus small screens grid template rows hover small screens grid template rows active:md:grid-rows-1 focus:md:grid-rows-1 hover:md:grid-rows-1 active medium screens grid template rows focus medium screens grid template rows hover medium screens grid template rows active:lg:grid-rows-1 focus:lg:grid-rows-1 hover:lg:grid-rows-1 active large screens grid template rows focus large screens grid template rows hover large screens grid template rows sources grid-template-rows https: developer mozilla org en-us docs web css grid-template-rows '
---

| _omenCSS_      | CSS class example                                                 |
| -------------- | ----------------------------------------------------------------- |
| grid-rows-none | .grid-rows-none { grid-template-rows: none); }                    |
| grid-rows-1    | .grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }   |
| grid-rows-2    | .grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }   |
| grid-rows-3    | .grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }   |
| grid-rows-4    | .grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr)); }   |
| grid-rows-5    | .grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr)); }   |
| grid-rows-6    | .grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr)); }   |
| grid-rows-7    | .grid-rows-7 { grid-template-rows: repeat(7, minmax(0, 1fr)); }   |
| grid-rows-8    | .grid-rows-8 { grid-template-rows: repeat(8, minmax(0, 1fr)); }   |
| grid-rows-9    | .grid-rows-9 { grid-template-rows: repeat(9, minmax(0, 1fr)); }   |
| grid-rows-10   | .grid-rows-10 { grid-template-rows: repeat(10, minmax(0, 1fr)); } |
| grid-rows-11   | .grid-rows-11 { grid-template-rows: repeat(11, minmax(0, 1fr)); } |
| grid-rows-12   | .grid-rows-12 { grid-template-rows: repeat(12, minmax(0, 1fr)); } |

## Define the amount of rows in a grid

Use the grid-rows-{number} utilities to create grids easily. The range extends from 1-12. In the example below, we assume a maximum number of 4 grid rows (vertical direction) `grid-rows-4` below each other, with a gap of 30 pixels `gap-30px`.

![omencss grid template rows](/images/docs/flex/grid-rows.webp?style=centerme)

```html
<div class="grid grid-rows-4 grid-flow-col gap-30px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-1">second</div>
  <div class="bg-purple-2">third</div>
  <div class="bg-purple-3">fourth</div>
  <div class="bg-purple-4">fifth</div>
  <div class="bg-purple-5">sixth</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_          | CSS class example                                                              |
| ------------------ | ------------------------------------------------------------------------------ |
| active:grid-rows-1 | .active\:grid-rows-1:active { grid-template-rows: repeat(1, minmax(0, 1fr)); } |
| focus:grid-rows-1  | .focus\:grid-rows-1:focus { grid-template-rows: repeat(1, minmax(0, 1fr)); }   |
| hover:grid-rows-1  | .hover\:grid-rows-1:hover { grid-template-rows: repeat(1, minmax(0, 1fr)); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:grid-rows-1` to only apply the `grid-rows-1` utility on hover. In the example below, we consider there is a maximum number of 3 rows next to each other, which means that there are three child elements in the same column. If you hover over the parent object, the number of rows changes to one. As a result, all child elements will occupy one column.

```html
<div class="grid grid-rows-3 hover:grid-rows-1 gap-30px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:grid-rows-1 |
| md:         | 480px - 768px  | .md:grid-rows-1 |
| lg:         | 768px - 1080px | .lg:grid-rows-1 |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:grid-rows-1` to apply the grid-rows-1 utility at only small screen sizes at or below 480px. Or `hover:md:grid-rows-1` to apply the grid-rows-1 utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure is as follows: `{conditional state}:{media query}:grid-rows-{numbers}` p.e. `active:md:grid-rows-1`

### Responsive example

Working with cross-screen displays has never been easier. Using two omenCSS classes your grid will be compatible with smartphones and desktop displays in no time.

1. The structure is as follows: `{media query}:grid-rows-{numbers}` p.e. `sm:grid-rows-1`
1. The default value has no media query and will be applied for all screens: `grid-rows-{numbers}` p.e. `grid-rows-1`

![omencss responsive - MacBook grid template rows](/images/docs/flex/MacBook-grid-rows.webp?style=centerme)
![omencss responsive - iPhone grid template rows](/images/docs/flex/iPhone-grid-rows.webp?style=centerme)

In the example below we use `grid-rows-4 grid-flow-col sm:grid-rows-1 sm:grid-flow-row` for a default grid with 4 vertical rows which spreads in a column flow (horizontally). For small screens the class `sm:grid-rows-1 sm:grid-flow-row` is being used, which creates a horizontal flow for the element which covers the entire screen. By the way you do not have to use `sm:grid-rows-1` as the horizontal flow class `sm:grid-flow-row` takes over control for the elements. This class is an unnecessary repetition and was only used to demonstrate the responsive example.

```html
    <div class="grid grid-rows-4 grid-flow-col sm:grid-rows-1 sm:grid-flow-row gap-30px">
      <div class="bg-purple">first</div>
      <div class="bg-purple-1">second</div>
      <div class="bg-purple-2">third</div>
      <div class="bg-purple-4">fourth</div>
      <div class="bg-purple-5">fifth</div>
      <div class= bg-purple-6">sixth</div>
    </div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                               | spoken example                                                                                                             |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| active:grid-rows-1, focus:grid-rows-1, hover:grid-rows-1          | active grid template rows, focus grid template rows, hover grid template rows                                              |
| active:sm:grid-rows-1, focus:sm:grid-rows-1, hover:sm:grid-rows-1 | active small screens grid template rows, focus small screens grid template rows, hover small screens grid template rows    |
| active:md:grid-rows-1, focus:md:grid-rows-1, hover:md:grid-rows-1 | active medium screens grid template rows, focus medium screens grid template rows, hover medium screens grid template rows |
| active:lg:grid-rows-1, focus:lg:grid-rows-1, hover:lg:grid-rows-1 | active large screens grid template rows, focus large screens grid template rows, hover large screens grid template rows    |

## Sources

- [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
