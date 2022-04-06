---
isBlog: false
title: 'Grid Auto Rows'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s grid auto rows.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Grid, Grid Auto Rows, gird row, grid rows, grid layout'
classNames: ''
plainText: ' omencss css class example auto-rows-auto auto-rows-auto grid-auto-rows: auto; auto-rows-min auto-rows-min grid-auto-rows: min-content; auto-rows-max auto-rows-max grid-auto-rows: max-content; auto-rows-fr auto-rows-fr grid-auto-rows: minmax 0 1fr ; define the placement of elements in a grid row use the auto-rows keyword to control the size width & height of an element in grid rows control the size in the example below we use a grid system `grid` with a `grid-flow-row` direction which stretches to the maximum size of the object `auto-rows-max` the elements are therefore stretched to the max direction  active focus and hover states with omencss you can conditionally apply utility classes in different states by using variant modifiers like active focus or hover for example use `hover:auto-rows-auto` to apply the `auto-rows-auto` utility class on hover events omencss css class example active:auto-rows-auto active :auto-rows-auto:active grid-auto-rows: auto; focus:auto-rows-auto focus :auto-rows-auto:focus grid-auto-rows: auto; hover:auto-rows-auto hover :auto-rows-auto:hover grid-auto-rows: auto;  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:auto-rows-auto md: 480px 768px md:auto-rows-auto lg: 768px 1080px lg:auto-rows-auto omencss media queries can also be combined with active focus and hover states for example use `sm:auto-rows-auto` to apply the auto-rows-auto utility at only small screen sizes at or below 480px or `hover:md:auto-rows-auto` to apply the auto-rows-auto utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure for row-span is as follows: ` conditional state : media query :auto-rows keyword ` p e `active:md:auto-rows-auto`  executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:auto-rows-auto focus:auto-rows-auto hover:auto-rows-auto active grid auto rows focus grid auto rows hover grid auto rows active:sm:auto-rows-auto focus:sm:auto-rows-auto hover:sm:auto-rows-auto active small screens grid auto rows focus small screens grid auto rows hover small screens grid auto rows active:md:auto-rows-auto focus:md:auto-rows-auto hover:md:auto-rows-auto active medium screens grid auto rows focus medium screens grid auto rows hover medium screens grid auto rows active:lg:auto-rows-auto focus:lg:auto-rows-auto hover:lg:auto-rows-auto active large screens grid auto rows focus large screens grid auto rows hover large screens grid auto rows sources grid-auto-rows https: developer mozilla org en-us docs web css grid-auto-rows '
---

| _omenCSS_      | CSS class example                                 |
| -------------- | ------------------------------------------------- |
| auto-rows-auto | .auto-rows-auto { grid-auto-rows: auto; }         |
| auto-rows-min  | .auto-rows-min { grid-auto-rows: min-content; }   |
| auto-rows-max  | .auto-rows-max { grid-auto-rows: max-content; }   |
| auto-rows-fr   | .auto-rows-fr { grid-auto-rows: minmax(0, 1fr); } |

## Define the placement of elements in a grid row

Use the auto-rows-{keyword} to control the size (width & height) of an element in grid rows.

## Control the size

In the example below, we use a grid system `grid` with a `grid-flow-row` direction which stretches to the maximum size of the object `auto-rows-max`. The elements are therefore stretched to the max direction.

```html
<div class="grid grid-flow-row auto-rows-max">
  <div>first</div>
  <div>second</div>
  <div>third</div>
</div>
```

## Active, focus, and hover states

With omenCSS you can conditionally apply utility classes in different states by using variant modifiers like active, focus or hover. For example, use `hover:auto-rows-auto` to apply the `auto-rows-auto` utility class on hover events.

| _omenCSS_             | CSS class example                                       |
| --------------------- | ------------------------------------------------------- |
| active:auto-rows-auto | .active\:auto-rows-auto:active{ grid-auto-rows: auto; } |
| focus:auto-rows-auto  | .focus\:auto-rows-auto:focus { grid-auto-rows: auto; }  |
| hover:auto-rows-auto  | .hover\:auto-rows-auto:hover { grid-auto-rows: auto; }  |

```html
<div class="grid grid-flow-row auto-rows-max hover:auto-rows-min ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example    |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:auto-rows-auto |
| md:         | 480px - 768px  | .md:auto-rows-auto |
| lg:         | 768px - 1080px | .lg:auto-rows-auto |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:auto-rows-auto` to apply the auto-rows-auto utility at only small screen sizes at or below 480px. Or `hover:md:auto-rows-auto` to apply the auto-rows-auto utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure for row-span is as follows: `{conditional state}:{media query}:auto-rows-{keyword}` p.e. `active:md:auto-rows-auto`

```html
<div class="grid auto-rows-col sm:auto-rows-auto">{children}</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                        | spoken example                                                                                                 |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| active:auto-rows-auto, focus:auto-rows-auto, hover:auto-rows-auto          | active grid auto rows, focus grid auto rows, hover grid auto rows                                              |
| active:sm:auto-rows-auto, focus:sm:auto-rows-auto, hover:sm:auto-rows-auto | active small screens grid auto rows, focus small screens grid auto rows, hover small screens grid auto rows    |
| active:md:auto-rows-auto, focus:md:auto-rows-auto, hover:md:auto-rows-auto | active medium screens grid auto rows, focus medium screens grid auto rows, hover medium screens grid auto rows |
| active:lg:auto-rows-auto, focus:lg:auto-rows-auto, hover:lg:auto-rows-auto | active large screens grid auto rows, focus large screens grid auto rows, hover large screens grid auto rows    |

## Sources

- [grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
