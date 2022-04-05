---
isBlog: false
title: 'Grid Auto Columns'
date: 'Apr 1. 2022'
excerpt: 'Utility classes for controlling an element`s grid auto columns.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Grid, Grid Auto Columns, gird col, grid columns, grid layout'
classNames: ''
plainText: ' omencss css class example auto-cols-auto auto-cols-auto grid-auto-columns: auto; auto-cols-min auto-cols-min grid-auto-columns: min-content; auto-cols-max auto-cols-max grid-auto-columns: max-content; auto-cols-fr auto-cols-fr grid-auto-columns: minmax 0 1fr ; define the placement of elements in a grid row use the auto-cols- keyword to control the size width & height of an element in grid columns control the size in the example below we use a grid system grid with a grid-flow-col direction which stretches to the maximum size of the object auto-cols-max the elements are therefore stretched to the max direction html div class=grid grid-flow-col auto-cols-max div first div div second div div third div div active focus and hover states with omencss you can conditionally apply utility classes in different states by using variant modifiers like active focus or hover for example use hover:auto-cols-auto to apply the auto-cols-auto utility class on hover events omencss css class example - active:auto-cols-auto active :auto-cols-auto:active grid-auto-columns: auto; focus:auto-cols-auto focus :auto-cols-auto:focus grid-auto-columns: auto; hover:auto-cols-auto hover :auto-cols-auto:hover grid-auto-columns: auto; html div class=grid grid-flow-col auto-cols-max hover:auto-cols-min div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - sm: 0px - 480px sm:auto-cols-auto md: 480px - 768px md:auto-cols-auto lg: 768px - 1080px lg:auto-cols-auto omencss media queries can also be combined with active focus and hover states for example use sm:auto-cols-auto to apply the auto-cols-auto utility at only small screen sizes at or below 480px or hover:md:auto-cols-auto to apply the auto-cols-auto utility at only between small screen sizes 480px and medium screen sizes 768px on hover 1 the structure for row-span is as follows: conditional state : media query :auto-cols- keyword p e active:md:auto-cols-auto html div class=grid auto-cols-col sm:auto-cols-auto div executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - active:auto-cols-auto focus:auto-cols-auto hover:auto-cols-auto active grid auto columns focus grid auto columns hover grid auto columns active:sm:auto-cols-auto focus:sm:auto-cols-auto hover:sm:auto-cols-auto active small screens grid auto columns focus small screens grid auto columns hover small screens grid auto columns active:md:auto-cols-auto focus:md:auto-cols-auto hover:md:auto-cols-auto active medium screens grid auto columns focus medium screens grid auto columns hover medium screens grid auto columns active:lg:auto-cols-auto focus:lg:auto-cols-auto hover:lg:auto-cols-auto active large screens grid auto columns focus large screens grid auto columns hover large screens grid auto columns '
---

| _omenCSS_      | CSS class example                                    |
| -------------- | ---------------------------------------------------- |
| auto-cols-auto | .auto-cols-auto { grid-auto-columns: auto; }         |
| auto-cols-min  | .auto-cols-min { grid-auto-columns: min-content; }   |
| auto-cols-max  | .auto-cols-max { grid-auto-columns: max-content; }   |
| auto-cols-fr   | .auto-cols-fr { grid-auto-columns: minmax(0, 1fr); } |

## Define the placement of elements in a grid row

Use the auto-cols-{keyword} to control the size (width & height) of an element in grid columns.

## Control the size

In the example below, we use a grid system `grid` with a `grid-flow-col` direction which stretches to the maximum size of the object `auto-cols-max`. The elements are therefore stretched to the max direction.

```html
<div class="grid grid-flow-col auto-cols-max">
  <div>first</div>
  <div>second</div>
  <div>third</div>
</div>
```

## Active, focus, and hover states

With omenCSS you can conditionally apply utility classes in different states by using variant modifiers like active, focus or hover. For example, use `hover:auto-cols-auto` to apply the `auto-cols-auto` utility class on hover events.

| _omenCSS_             | CSS class example                                          |
| --------------------- | ---------------------------------------------------------- |
| active:auto-cols-auto | .active\:auto-cols-auto:active{ grid-auto-columns: auto; } |
| focus:auto-cols-auto  | .focus\:auto-cols-auto:focus { grid-auto-columns: auto; }  |
| hover:auto-cols-auto  | .hover\:auto-cols-auto:hover { grid-auto-columns: auto; }  |

```html
<div class="grid grid-flow-col auto-cols-max hover:auto-cols-min ...">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example    |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:auto-cols-auto |
| md:         | 480px - 768px  | .md:auto-cols-auto |
| lg:         | 768px - 1080px | .lg:auto-cols-auto |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:auto-cols-auto` to apply the auto-cols-auto utility at only small screen sizes at or below 480px. Or `hover:md:auto-cols-auto` to apply the auto-cols-auto utility at only between small screen sizes (480px) and medium screen sizes (768px) on hover.

1. The structure for row-span is as follows: `{conditional state}:{media query}:auto-cols-{keyword}` p.e. `active:md:auto-cols-auto`

```html
<div class="grid auto-cols-col sm:auto-cols-auto">...</div>
```

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                        | spoken example                                                                                                          |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| active:auto-cols-auto, focus:auto-cols-auto, hover:auto-cols-auto          | active grid auto columns, focus grid auto columns, hover grid auto columns                                              |
| active:sm:auto-cols-auto, focus:sm:auto-cols-auto, hover:sm:auto-cols-auto | active small screens grid auto columns, focus small screens grid auto columns, hover small screens grid auto columns    |
| active:md:auto-cols-auto, focus:md:auto-cols-auto, hover:md:auto-cols-auto | active medium screens grid auto columns, focus medium screens grid auto columns, hover medium screens grid auto columns |
| active:lg:auto-cols-auto, focus:lg:auto-cols-auto, hover:lg:auto-cols-auto | active large screens grid auto columns, focus large screens grid auto columns, hover large screens grid auto columns    |

## Sources

- [grid-auto-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
