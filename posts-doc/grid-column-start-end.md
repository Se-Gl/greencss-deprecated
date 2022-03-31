---
isBlog: false
title: 'Grid Column Start | End'
date: 'Mar 30. 2022'
excerpt: 'Utility classes for controlling an element`s grid column start and end.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Grid, grid column start, grid column end, grid layout'
classNames: ''
plainText: ' omencss css class example col-auto col-auto grid-column: auto; col-span-1 col-span-1 grid-column: grid-column: 1; col-span-2 col-span-2 grid-column: grid-column: 2; col-span-3 col-span-3 grid-column: grid-column: 3; col-span-4 col-span-4 grid-column: grid-column: 4; col-span-5 col-span-5 grid-column: grid-column: 5; col-span-6 col-span-6 grid-column: grid-column: 6; col-span-7 col-span-7 grid-column: grid-column: 7; col-span-8 col-span-8 grid-column: grid-column: 8; col-span-9 col-span-9 grid-column: grid-column: 9; col-span-10 col-span-10 grid-column: rgrid-column: 10; col-span-11 col-span-11 grid-column: rgrid-column: 11; col-span-12 col-span-12 grid-column: rgrid-column: 12; col-span-full col-span-full grid-column: math div 1 -1 ; col-start-auto col-start-auto grid-column-start: auto; col-start-1 col-start-1 grid-column-start: grid-column-start: 1; col-start-2 col-start-2 grid-column-start: grid-column-start: 2; col-start-3 col-start-3 grid-column-start: grid-column-start: 3; col-start-4 col-start-4 grid-column-start: grid-column-start: 4; col-start-5 col-start-5 grid-column-start: grid-column-start: 5; col-start-6 col-start-6 grid-column-start: grid-column-start: 6; col-start-7 col-start-7 grid-column-start: grid-column-start: 7; col-start-8 col-start-8 grid-column-start: grid-column-start: 8; col-start-9 col-start-9 grid-column-start: grid-column-start: 9; col-start-10 col-start-10 grid-column-start: rgrid-column-start: 10; col-start-11 col-start-11 grid-column-start: rgrid-column-start: 11; col-start-12 col-start-12 grid-column-start: rgrid-column-start: 12; col-start-full col-start-full grid-column-start: math div 1 -1 ; col-end-auto col-end-auto grid-column-end: auto; col-end-1 col-end-1 grid-column-end: grid-column-end: 1; col-end-2 col-end-2 grid-column-end: grid-column-end: 2; col-end-3 col-end-3 grid-column-end: grid-column-end: 3; col-end-4 col-end-4 grid-column-end: grid-column-end: 4; col-end-5 col-end-5 grid-column-end: grid-column-end: 5; col-end-6 col-end-6 grid-column-end: grid-column-end: 6; col-end-7 col-end-7 grid-column-end: grid-column-end: 7; col-end-8 col-end-8 grid-column-end: grid-column-end: 8; col-end-9 col-end-9 grid-column-end: grid-column-end: 9; col-end-10 col-end-10 grid-column-end: rgrid-column-end: 10; col-end-11 col-end-11 grid-column-end: rgrid-column-end: 11; col-end-12 col-end-12 grid-column-end: rgrid-column-end: 12; col-end-full col-end-full grid-column-end: math div 1 -1 ; define the placement of elements in a grid use the col-span- number set the column amount in a css grid the range extends from 1-12 set when and where the element starts and ends ⚠️ note that css grid lines start at 1 and not 0 in firefox you can easily head to your console and click grid in the source code it will show the exact numbers in your grid ! omencss grid source code firefox images docs flex source-code webp?style=centerme ! omencss grid source code result firefox images docs flex source-code-result webp?style=centerme example in the example below we assume a maximum number of 6 grid grid-column grid-col-6 next to each other with a gap of 30 pixels gap-30px and a padding of 50px p-50px the first child element starts at position 3 and ends at position 4 in the grid the second element starts at position 1 and ends at position 3 the third div element spawns over 4 columns and ends at position 7 the fourth element stretches over the entire grid it starts at position 1 and ends at position 7 ! omencss grid column start end images docs flex grid-columns-start-end webp?style=centerme html div class=grid grid-col-6 gap-30px bg-purple-10 p-50px div class=col-start-3 col-end-4 h-100px bg-purple first div div class=col-start-1 col-end-3 h-100px bg-purple-2 second div div class=col-span-4 col-end-7 h-100px bg-purple-4 third div div class=col-start-1 col-end-7 h-100px bg-purple-6 fourth div div active focus and hover states with omencss you can conditionally apply utility classes in different states by using variant modifiers like active focus or hover for example use hover:col-span-2 to apply the col-span-2 utility class on hover events omencss css class example - active:col-span-1 active :col-span-1:active grid-column: grid-column: 1; focus:col-span-1 focus :col-span-1:focus grid-column: grid-column: 1; hover:col-span-1 hover :col-span-1:hover grid-column: grid-column: 1; html div class=grid grid-col-6 gap-30px div class=w-50px h-50px bg-purple first div div class=w-50px h-50px bg-purple-3 second div div class=w-50px h-50px bg-purple-6 third div div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:col-span-1 md: 480px - 768px md:col-span-1 lg: 768px - 1080px lg:col-span-1 omencss media queries can also be combined with active focus and hover states for example use sm:col-span-1 to apply the col-span-1 utility at only small screen sizes at or below 480px or hover:md:col-span-1 to apply the col-span-1 utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure for col-span is as follows: conditional state : media query :col-span- numbers p e active:md:col-span-1 2 the structure for col-start is as follows: conditional state : media query :col-start- numbers p e active:md:col-start-1 3 the structure for col-end is as follows: conditional state : media query :col-end- numbers p e active:md:col-start-1 html div class=grid cols-3 sm:col-span-1 gap-30px div class=col-span-4 hover:col-span-8 first div div executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:col-span-1 focus:col-span-1 hover:col-span-1 active grid column span focus grid column span hover grid column span active:sm:col-span-1 focus:sm:col-span-1 hover:sm:col-span-1 active small screens grid column span focus small screens grid column span hover small screens grid column span active:md:col-span-1 focus:md:col-span-1 hover:md:col-span-1 active medium screens grid column span focus medium screens grid column span hover medium screens grid column span active:lg:col-span-1 focus:lg:col-span-1 hover:lg:col-span-1 active large screens grid column span focus large screens grid column span hover large screens grid column span '
---

| _omenCSS_      | CSS class example                                            |
| -------------- | ------------------------------------------------------------ |
| col-auto       | .col-auto { grid-column: auto; }                             |
| col-span-1     | .col-span-1 { grid-column: grid-column: 1; }                 |
| col-span-2     | .col-span-2 { grid-column: grid-column: 2; }                 |
| col-span-3     | .col-span-3 { grid-column: grid-column: 3; }                 |
| col-span-4     | .col-span-4 { grid-column: grid-column: 4; }                 |
| col-span-5     | .col-span-5 { grid-column: grid-column: 5; }                 |
| col-span-6     | .col-span-6 { grid-column: grid-column: 6; }                 |
| col-span-7     | .col-span-7 { grid-column: grid-column: 7; }                 |
| col-span-8     | .col-span-8 { grid-column: grid-column: 8; }                 |
| col-span-9     | .col-span-9 { grid-column: grid-column: 9; }                 |
| col-span-10    | .col-span-10 { grid-column: rgrid-column: 10; }              |
| col-span-11    | .col-span-11 { grid-column: rgrid-column: 11; }              |
| col-span-12    | .col-span-12 { grid-column: rgrid-column: 12; }              |
| col-span-full  | .col-span-full {grid-column: math.div(1, -1);}               |
| col-start-auto | .col-start-auto { grid-column-start: auto; }                 |
| col-start-1    | .col-start-1 { grid-column-start: grid-column-start: 1; }    |
| col-start-2    | .col-start-2 { grid-column-start: grid-column-start: 2; }    |
| col-start-3    | .col-start-3 { grid-column-start: grid-column-start: 3; }    |
| col-start-4    | .col-start-4 { grid-column-start: grid-column-start: 4; }    |
| col-start-5    | .col-start-5 { grid-column-start: grid-column-start: 5; }    |
| col-start-6    | .col-start-6 { grid-column-start: grid-column-start: 6; }    |
| col-start-7    | .col-start-7 { grid-column-start: grid-column-start: 7; }    |
| col-start-8    | .col-start-8 { grid-column-start: grid-column-start: 8; }    |
| col-start-9    | .col-start-9 { grid-column-start: grid-column-start: 9; }    |
| col-start-10   | .col-start-10 { grid-column-start: rgrid-column-start: 10; } |
| col-start-11   | .col-start-11 { grid-column-start: rgrid-column-start: 11; } |
| col-start-12   | .col-start-12 { grid-column-start: rgrid-column-start: 12; } |
| col-start-full | .col-start-full {grid-column-start: math.div(1, -1);}        |
| col-end-auto   | .col-end-auto { grid-column-end: auto; }                     |
| col-end-1      | .col-end-1 { grid-column-end: grid-column-end: 1; }          |
| col-end-2      | .col-end-2 { grid-column-end: grid-column-end: 2; }          |
| col-end-3      | .col-end-3 { grid-column-end: grid-column-end: 3; }          |
| col-end-4      | .col-end-4 { grid-column-end: grid-column-end: 4; }          |
| col-end-5      | .col-end-5 { grid-column-end: grid-column-end: 5; }          |
| col-end-6      | .col-end-6 { grid-column-end: grid-column-end: 6; }          |
| col-end-7      | .col-end-7 { grid-column-end: grid-column-end: 7; }          |
| col-end-8      | .col-end-8 { grid-column-end: grid-column-end: 8; }          |
| col-end-9      | .col-end-9 { grid-column-end: grid-column-end: 9; }          |
| col-end-10     | .col-end-10 { grid-column-end: rgrid-column-end: 10; }       |
| col-end-11     | .col-end-11 { grid-column-end: rgrid-column-end: 11; }       |
| col-end-12     | .col-end-12 { grid-column-end: rgrid-column-end: 12; }       |
| col-end-full   | .col-end-full {grid-column-end: math.div(1, -1);}            |

## Define the placement of elements in a grid

Use the col-span-{number} set the column amount in a CSS grid. The range extends from 1-12. Set when and where the element starts and ends.

⚠️ Note that CSS grid lines start at 1 and not 0. In firefox you can easily head to your console and click `grid` in the source code. It will show the exact numbers in your grid.
![omencss grid source code firefox](/images/docs/flex/source-code.webp?style=centerme)
![omencss grid source code result firefox](/images/docs/flex/source-code-result.webp?style=centerme)

### Example

In the example below, we assume a maximum number of 6 grid grid-column `grid-col-6` next to each other, with a gap of 30 pixels `gap-30px` and a padding of 50px `p-50px`. The first child element starts at position 3 and ends at position 4 in the grid. The second element starts at position 1 and ends at position 3. The third div element spawns over 4 columns and ends at position 7. The fourth element stretches over the entire grid, it starts at position 1 and ends at position 7.

![omencss grid column start end](/images/docs/flex/grid-columns-start-end.webp?style=centerme)

```html
<div class="grid grid-col-6 gap-30px bg-purple-10 p-50px">
  <div class="col-start-3 col-end-4 h-100px bg-purple ...">First</div>
  <div class="col-start-1 col-end-3 h-100px bg-purple-2 ...">Second</div>
  <div class="col-span-4 col-end-7 h-100px bg-purple-4 ...">Third</div>
  <div class="col-start-1 col-end-7 h-100px bg-purple-6 ...">Fourth</div>
</div>
```

## Active, focus, and hover states

With omenCSS you can conditionally apply utility classes in different states by using variant modifiers like active, focus or hover. For example, use `hover:col-span-2` to apply the `col-span-2` utility class on hover events.

| _omenCSS_         | CSS class example                                          |
| ----------------- | ---------------------------------------------------------- |
| active:col-span-1 | .active\:col-span-1:active{ grid-column: grid-column: 1; } |
| focus:col-span-1  | .focus\:col-span-1:focus { grid-column: grid-column: 1; }  |
| hover:col-span-1  | .hover\:col-span-1:hover { grid-column: grid-column: 1; }  |

```html
<div class="grid grid-col-6 gap-30px">
  <div class="w-50px h-50px bg-purple">first</div>
  <div class="w-50px h-50px bg-purple-3">second</div>
  <div class="w-50px h-50px bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:col-span-1  |
| md:         | 480px - 768px  | .md:col-span-1  |
| lg:         | 768px - 1080px | .lg:col-span-1  |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:col-span-1` to apply the col-span-1 utility at only small screen sizes at or below 480px. Or `hover:md:col-span-1` to apply the col-span-1 utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure for col-span is as follows: `{conditional state}:{media query}:col-span-{numbers}` p.e. `active:md:col-span-1`
2. The structure for col-start is as follows: `{conditional state}:{media query}:col-start-{numbers}` p.e. `active:md:col-start-1`
3. The structure for col-end is as follows: `{conditional state}:{media query}:col-end-{numbers}` p.e. `active:md:col-end-1`

```html
<div class="grid cols-3 sm:col-span-1 gap-30px">
  <div class="col-span-4 hover:col-span-8">first</div>
</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                            | spoken example                                                                                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| active:col-span-1, focus:col-span-1, hover:col-span-1          | active grid column span, focus grid column span, hover grid column span                                              |
| active:sm:col-span-1, focus:sm:col-span-1, hover:sm:col-span-1 | active small screens grid column span, focus small screens grid column span, hover small screens grid column span    |
| active:md:col-span-1, focus:md:col-span-1, hover:md:col-span-1 | active medium screens grid column span, focus medium screens grid column span, hover medium screens grid column span |
| active:lg:col-span-1, focus:lg:col-span-1, hover:lg:col-span-1 | active large screens grid column span, focus large screens grid column span, hover large screens grid column span    |
