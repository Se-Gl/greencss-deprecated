---
isBlog: false
title: 'Grid Row Start | End'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s grid row start and end.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Grid'
author: 'Severin Glaser'
keywords: 'Grid, grid row start, grid row end, grid layout'
classNames: ''
plainText: ' greenCSS css class example row-auto row-auto grid-row: auto; row-span-1 row-span-1 grid-row: grid-row: 1; row-span-2 row-span-2 grid-row: grid-row: 2; row-span-3 row-span-3 grid-row: grid-row: 3; row-span-4 row-span-4 grid-row: grid-row: 4; row-span-5 row-span-5 grid-row: grid-row: 5; row-span-6 row-span-6 grid-row: grid-row: 6; row-span-7 row-span-7 grid-row: grid-row: 7; row-span-8 row-span-8 grid-row: grid-row: 8; row-span-9 row-span-9 grid-row: grid-row: 9; row-span-10 row-span-10 grid-row: rgrid-row: 10; row-span-11 row-span-11 grid-row: rgrid-row: 11; row-span-12 row-span-12 grid-row: rgrid-row: 12; row-span-full row-span-full grid-row: math div 1 -1 ; row-start-auto row-start-auto grid-row-start: auto; row-start-1 row-start-1 grid-row-start: 1; row-start-2 row-start-2 grid-row-start: 2; row-start-3 row-start-3 grid-row-start: 3; row-start-4 row-start-4 grid-row-start: 4; row-start-5 row-start-5 grid-row-start: 5; row-start-6 row-start-6 grid-row-start: 6; row-start-7 row-start-7 grid-row-start: 7; row-start-8 row-start-8 grid-row-start: 8; row-start-9 row-start-9 grid-row-start: 9; row-start-10 row-start-10 grid-row-start: 10; row-start-11 row-start-11 grid-row-start: 11; row-start-12 row-start-12 grid-row-start: 12; row-end-auto row-end-auto grid-row-end: auto; row-end-1 row-end-1 grid-row-end: 1; row-end-2 row-end-2 grid-row-end: 2; row-end-3 row-end-3 grid-row-end: 3; row-end-4 row-end-4 grid-row-end: 4; row-end-5 row-end-5 grid-row-end: 5; row-end-6 row-end-6 grid-row-end: 6; row-end-7 row-end-7 grid-row-end: 7; row-end-8 row-end-8 grid-row-end: 8; row-end-9 row-end-9 grid-row-end: 9; row-end-10 row-end-10 grid-row-end: 10; row-end-11 row-end-11 grid-row-end: 11; row-end-12 row-end-12 grid-row-end: 12; define the placement of elements in a grid row use the row-span number set the row amount in a css grid the range extends from 1-12 set when and where the element starts and ends ⚠️ note that css grid lines start at 1 and not 0 in firefox you can easily head to your console and click `grid` in the source code it will show the exact numbers in your grid ! greenCSS grid row source code firefox images docs flex source-code-row webp?style=centerme ! greenCSS grid row source code result firefox images docs flex source-code-result-row webp?style=centerme example in the example below we assume a maximum number of 3 grid grid-row `grid-rows-3` next to each other with a gap of 30 pixels `gap-15px` and a padding of 50px `p-50px` the first child element starts at position 3 and ends at position 4 in the grid the second element starts at position 1 and ends at position 3 the third div element spawns over 4 rows and ends at position 7 the fourth element stretches over the entire grid it starts at position 1 and ends at position 7 ! greenCSS grid row start end images docs Flexbox-rows-start-end webp?style=centerme  row start & end use either the row-start number or row-end number to let an element start stop or end at a certain position in the grid the range extends from 1-12 s ⚠️ note that css grid lines start at 1 and not 0 for a better overview and easier coding experience cf define the placement of elements in a grid row define-the-placement-of-elements-in-a-grid-row ! greenCSS grid row start end example images docs Flexbox-rows-start-end-example webp?style=centerme  active focus and hover states with greenCSS you can conditionally apply utility classes in different states by using variant modifiers like active focus or hover for example use `hover:row-span-1` to apply the `row-span-1` utility class on hover events greenCSS css class example active:row-span-1 active :row-span-1:active grid-row: grid-row: 1; focus:row-span-1 focus :row-span-1:focus grid-row: grid-row: 1; hover:row-span-1 hover :row-span-1:hover grid-row: grid-row: 1;  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:row-span-1 md: 480px 768px md:row-span-1 lg: 768px 1080px lg:row-span-1 greenCSS media queries can also be combined with active focus and hover states for example use `sm:row-span-1` to apply the row-span-1 utility at only small screen sizes at or below 480px or `hover:md:row-span-1` to apply the row-span-1 utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure for row-span is as follows: ` conditional state : media query :row-span numbers ` p e `active:md:row-span-1` 2 the structure for row-start is as follows: ` conditional state : media query :row-start numbers ` p e `active:md:row-start-1` 3 the structure for row-end is as follows: ` conditional state : media query :row-end numbers ` p e `active:md:row-end-1`  executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:row-span-1 focus:row-span-1 hover:row-span-1 active grid row span focus grid row span hover grid row span active:sm:row-span-1 focus:sm:row-span-1 hover:sm:row-span-1 active small screens grid row span focus small screens grid row span hover small screens grid row span active:md:row-span-1 focus:md:row-span-1 hover:md:row-span-1 active medium screens grid row span focus medium screens grid row span hover medium screens grid row span active:lg:row-span-1 focus:lg:row-span-1 hover:lg:row-span-1 active large screens grid row span focus large screens grid row span hover large screens grid row span sources grid-row-start https: developer mozilla org en-us docs web css grid-row-start grid-row-end https: developer mozilla org en-us docs web css grid-row-end '
---

| _greenCSS_     | CSS class example                           |
| -------------- | ------------------------------------------- |
| row-auto       | .row-auto { grid-row: auto; }               |
| row-span-1     | .row-span-1 { grid-row: grid-row: 1; }      |
| row-span-2     | .row-span-2 { grid-row: grid-row: 2; }      |
| row-span-3     | .row-span-3 { grid-row: grid-row: 3; }      |
| row-span-4     | .row-span-4 { grid-row: grid-row: 4; }      |
| row-span-5     | .row-span-5 { grid-row: grid-row: 5; }      |
| row-span-6     | .row-span-6 { grid-row: grid-row: 6; }      |
| row-span-7     | .row-span-7 { grid-row: grid-row: 7; }      |
| row-span-8     | .row-span-8 { grid-row: grid-row: 8; }      |
| row-span-9     | .row-span-9 { grid-row: grid-row: 9; }      |
| row-span-10    | .row-span-10 { grid-row: rgrid-row: 10; }   |
| row-span-11    | .row-span-11 { grid-row: rgrid-row: 11; }   |
| row-span-12    | .row-span-12 { grid-row: rgrid-row: 12; }   |
| row-span-full  | .row-span-full {grid-row: math.div(1, -1);} |
| row-start-auto | .row-start-auto { grid-row-start: auto; }   |
| row-start-1    | .row-start-1 { grid-row-start: 1; }         |
| row-start-2    | .row-start-2 { grid-row-start: 2; }         |
| row-start-3    | .row-start-3 { grid-row-start: 3; }         |
| row-start-4    | .row-start-4 { grid-row-start: 4; }         |
| row-start-5    | .row-start-5 { grid-row-start: 5; }         |
| row-start-6    | .row-start-6 { grid-row-start: 6; }         |
| row-start-7    | .row-start-7 { grid-row-start: 7; }         |
| row-start-8    | .row-start-8 { grid-row-start: 8; }         |
| row-start-9    | .row-start-9 { grid-row-start: 9; }         |
| row-start-10   | .row-start-10 { grid-row-start: 10; }       |
| row-start-11   | .row-start-11 { grid-row-start: 11; }       |
| row-start-12   | .row-start-12 { grid-row-start: 12; }       |
| row-end-auto   | .row-end-auto { grid-row-end: auto; }       |
| row-end-1      | .row-end-1 { grid-row-end: 1; }             |
| row-end-2      | .row-end-2 { grid-row-end: 2; }             |
| row-end-3      | .row-end-3 { grid-row-end: 3; }             |
| row-end-4      | .row-end-4 { grid-row-end: 4; }             |
| row-end-5      | .row-end-5 { grid-row-end: 5; }             |
| row-end-6      | .row-end-6 { grid-row-end: 6; }             |
| row-end-7      | .row-end-7 { grid-row-end: 7; }             |
| row-end-8      | .row-end-8 { grid-row-end: 8; }             |
| row-end-9      | .row-end-9 { grid-row-end: 9; }             |
| row-end-10     | .row-end-10 { grid-row-end: 10; }           |
| row-end-11     | .row-end-11 { grid-row-end: 11; }           |
| row-end-12     | .row-end-12 { grid-row-end: 12; }           |

## Define the placement of elements in a grid row

Use the row-span-{number} set the row amount in a CSS grid. The range extends from 1-12. Set when and where the element starts and ends.

⚠️ Note that CSS grid lines start at 1 and not 0. In firefox you can easily head to your console and click `grid` in the source code. It will show the exact numbers in your grid.

![greenCSS grid row source code firefox](/images/docs/flex/source-code-row.webp?style=centerme)
![greenCSS grid row source code result firefox](/images/docs/flex/source-code-result-row.webp?style=centerme)

### Example

In the example below, we assume a maximum number of 3 grid grid-row `grid-rows-3` next to each other, with a gap of 30 pixels `gap-15px` and a padding of 50px `p-50px`. The first child element starts at position 3 and ends at position 4 in the grid. The second element starts at position 1 and ends at position 3. The third div element spawns over 4 rows and ends at position 7. The fourth element stretches over the entire grid, it starts at position 1 and ends at position 7.

![greenCSS grid row start end](/images/docs/flex/grid-rows-start-end.webp?style=centerme)

```html
<div class="grid grid-rows-3 grid-flow-col gap-15px bg-purple-10 p-50px">
  <div class="row-span-3 bg-purple ...">First</div>
  <div class="row-span-1 bg-purple-2 ...">Second</div>
  <div class="row-span-2 col-span-2 bg-purple-4 ...">Third</div>
</div>
```

## Row start & end

Use either the row-start-{number} or row-end-{number} to let an element start, stop or end at a certain position in the grid. The range extends from 1-12. S

⚠️ Note that CSS grid lines start at 1 and not 0. For a better overview and easier coding experience cf.[Define the placement of elements in a grid row](#define-the-placement-of-elements-in-a-grid-row)

![greenCSS grid row start end example](/images/docs/flex/grid-rows-start-end-example.webp?style=centerme)

```html
<div class="grid grid-rows-3 grid-flow-col gap-15px bg-purple-10 p-50px">
  <div class="row-start-2 row-span-2 bg-purple ...">First</div>
  <div class="row-end-3 row-span-2 bg-purple-2 ...">Second</div>
  <div class="row-start-1 row-end-4 bg-purple-4 ...">Third</div>
</div>
```

## Active, focus, and hover states

With greenCSS you can conditionally apply utility classes in different states by using variant modifiers like active, focus or hover. For example, use `hover:row-span-1` to apply the `row-span-1` utility class on hover events.

| _greenCSS_        | CSS class example                                    |
| ----------------- | ---------------------------------------------------- |
| active:row-span-1 | .active\:row-span-1:active{ grid-row: grid-row: 1; } |
| focus:row-span-1  | .focus\:row-span-1:focus { grid-row: grid-row: 1; }  |
| hover:row-span-1  | .hover\:row-span-1:hover { grid-row: grid-row: 1; }  |

```html
<div class="grid grid-rows-3 grid-flow-col gap-15px ...">
  <div class="row-span-3 hover:row-span-1 ...">First</div>
  ...
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:row-span-1   |
| md:         | 480px - 768px  | .md:row-span-1   |
| lg:         | 768px - 1080px | .lg:row-span-1   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:row-span-1` to apply the row-span-1 utility at only small screen sizes at or below 480px. Or `hover:md:row-span-1` to apply the row-span-1 utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure for row-span is as follows: `{conditional state}:{media query}:row-span-{numbers}` p.e. `active:md:row-span-1`
2. The structure for row-start is as follows: `{conditional state}:{media query}:row-start-{numbers}` p.e. `active:md:row-start-1`
3. The structure for row-end is as follows: `{conditional state}:{media query}:row-end-{numbers}` p.e. `active:md:row-end-1`

```html
<div class="grid cols-3 sm:row-span-1 gap-30px">
  <div class="row-span-6 hover:sm:row-span-12">first</div>
</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                           | spoken example                                                                                              |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| active:row-span-1, focus:row-span-1, hover:row-span-1          | active grid row span, focus grid row span, hover grid row span                                              |
| active:sm:row-span-1, focus:sm:row-span-1, hover:sm:row-span-1 | active small screens grid row span, focus small screens grid row span, hover small screens grid row span    |
| active:md:row-span-1, focus:md:row-span-1, hover:md:row-span-1 | active medium screens grid row span, focus medium screens grid row span, hover medium screens grid row span |
| active:lg:row-span-1, focus:lg:row-span-1, hover:lg:row-span-1 | active large screens grid row span, focus large screens grid row span, hover large screens grid row span    |

## Sources

- [grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
- [grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
