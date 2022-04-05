---
isBlog: false
title: 'Grid Auto Flow'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s grid auto flow.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Grid, grid row start, grid row end, grid layout'
classNames: ''
plainText: ' omencss css class example - - grid-flow-row grid-flow-row grid-auto-flow: row; grid-flow-col grid-flow-col grid-auto-flow: column; grid-flow-row-dense grid-flow-row-dense grid-auto-flow: row dense; grid-flow-col-dense grid-flow-row grid-auto-flow: column dense; define the placement of elements in a grid row use the grid-flow- keyword set the direction of an element by using auto-placing algorithm control the direction in the example below we use 3 grid rows `grid-rows-3` with a `grid-flow-col` direction the elements are therefore placed in a vertical direction ! omencss grid auto flow images docs flex grid-auto-flow webp?style=centerme  active focus and hover states with omencss you can conditionally apply utility classes in different states by using variant modifiers like active focus or hover for example use `hover:grid-flow-row` to apply the `grid-flow-row` utility class on hover events omencss css class example - active:grid-flow-row active :grid-flow-row:active grid-auto-flow: row; focus:grid-flow-row focus :grid-flow-row:focus grid-auto-flow: row; hover:grid-flow-row hover :grid-flow-row:hover grid-auto-flow: row;  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:grid-flow-row md: 480px - 768px md:grid-flow-row lg: 768px - 1080px lg:grid-flow-row omencss media queries can also be combined with active focus and hover states for example use `sm:grid-flow-row` to apply the grid-flow-row utility at only small screen sizes at or below 480px or `hover:md:grid-flow-row` to apply the grid-flow-row utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure for row-span is as follows: ` conditional state : media query :grid-flow- keyword ` p e `active:md:grid-flow-row`  executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - active:grid-flow-row focus:grid-flow-row hover:grid-flow-row active grid auto flow focus grid auto flow hover grid auto flow active:sm:grid-flow-row focus:sm:grid-flow-row hover:sm:grid-flow-row active small screens grid auto flow focus small screens grid auto flow hover small screens grid auto flow active:md:grid-flow-row focus:md:grid-flow-row hover:md:grid-flow-row active medium screens grid auto flow focus medium screens grid auto flow hover medium screens grid auto flow active:lg:grid-flow-row focus:lg:grid-flow-row hover:lg:grid-flow-row active large screens grid auto flow focus large screens grid auto flow hover large screens grid auto flow sources - grid-auto-flow https: developer mozilla org en-us docs web css grid-auto-flow '
---

| _omenCSS_           | CSS class example                                   |
| ------------------- | --------------------------------------------------- |
| grid-flow-row       | .grid-flow-row { grid-auto-flow: row; }             |
| grid-flow-col       | .grid-flow-col { grid-auto-flow: column; }          |
| grid-flow-row-dense | .grid-flow-row-dense { grid-auto-flow: row dense; } |
| grid-flow-col-dense | .grid-flow-row { grid-auto-flow: column dense; }    |

## Define the placement of elements in a grid row

Use the grid-flow-{keyword} set the direction of an element by using auto-placing algorithm.

## Control the direction

In the example below, we use 3 grid rows `grid-rows-3` with a `grid-flow-col` direction. The elements are therefore placed in a vertical direction.

![omencss grid auto flow](/images/docs/flex/grid-auto-flow.webp?style=centerme)

```html
<div class="grid grid-flow-col grid-col-2 grid-rows-2">
  <div class="col-span-2 bg-purple">first</div>
  <div class="col-span-1 bg-purple-2">second</div>
  <div class="bg-purple-4">third</div>
  <div class="bg-purple-6">fourth</div>
</div>
```

## Active, focus, and hover states

With omenCSS you can conditionally apply utility classes in different states by using variant modifiers like active, focus or hover. For example, use `hover:grid-flow-row` to apply the `grid-flow-row` utility class on hover events.

| _omenCSS_            | CSS class example                                     |
| -------------------- | ----------------------------------------------------- |
| active:grid-flow-row | .active\:grid-flow-row:active{ grid-auto-flow: row; } |
| focus:grid-flow-row  | .focus\:grid-flow-row:focus { grid-auto-flow: row; }  |
| hover:grid-flow-row  | .hover\:grid-flow-row:hover { grid-auto-flow: row; }  |

```html
<div class="grid grid-flow-col hover:grid-flow-row ...">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example   |
| ----------- | -------------- | ----------------- |
| sm:         | 0px - 480px    | .sm:grid-flow-row |
| md:         | 480px - 768px  | .md:grid-flow-row |
| lg:         | 768px - 1080px | .lg:grid-flow-row |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:grid-flow-row` to apply the grid-flow-row utility at only small screen sizes at or below 480px. Or `hover:md:grid-flow-row` to apply the grid-flow-row utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure for row-span is as follows: `{conditional state}:{media query}:grid-flow-{keyword}` p.e. `active:md:grid-flow-row`

```html
<div class="grid grid-flow-col sm:grid-flow-row">...</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                     | spoken example                                                                                                 |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| active:grid-flow-row, focus:grid-flow-row, hover:grid-flow-row          | active grid auto flow, focus grid auto flow, hover grid auto flow                                              |
| active:sm:grid-flow-row, focus:sm:grid-flow-row, hover:sm:grid-flow-row | active small screens grid auto flow, focus small screens grid auto flow, hover small screens grid auto flow    |
| active:md:grid-flow-row, focus:md:grid-flow-row, hover:md:grid-flow-row | active medium screens grid auto flow, focus medium screens grid auto flow, hover medium screens grid auto flow |
| active:lg:grid-flow-row, focus:lg:grid-flow-row, hover:lg:grid-flow-row | active large screens grid auto flow, focus large screens grid auto flow, hover large screens grid auto flow    |

## Sources

- [grid-auto-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
