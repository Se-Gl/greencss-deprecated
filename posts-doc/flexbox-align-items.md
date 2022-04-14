---
isBlog: false
title: 'Align Items'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the rows of grid and flex environements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Align Items, flexbox, align-items, center items, position items'
classNames: ''
plainText: ' greenCSS css class example items-center items-center align-items: center; items-start items-start align-items: flex-start; items-end items-end align-items: flex-end; items-baseline items-baseline align-items: baseline; items-stretch items-stretch align-items: stretch; how to work with align items use the `items keyword ` utilities to set the position of flex and grid elements on the vertical axis items start in the example below we use `items-start` to position the elements at the beginning of the parents vertical axis ! greenCSS align-items-start images docs flex align-items-start webp?style=centerme  items center in the example below we use `items-center` to position the elements along the middle of the parents vertical axis ! greenCSS items-center images docs flex align-items-center webp?style=centerme  items end in the example below we use `items-end` to position the elements at the end of the parents vertical axis ! greenCSS align-items-end images docs flex align-items-end webp?style=centerme  items baseline in the example below we use `items-baseline` to position the elements along the baseline of the vertical axis ! greenCSS align-items-baseline images docs flex align-items-baseline webp?style=centerme  items stretch in the example below we use `items-stretch` to stretch the elements in order to cover the vertical axis ! greenCSS align-items-stretch images docs flex align-items-stretch webp?style=centerme  active focus and hover states greenCSS css class example active:items keyword active :items-start:active align-items: flex-start; focus:items keyword focus :items-start:focus align-items: flex-start; hover:items keyword hover :items-start:hover align-items: flex-start; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:items-start` to only apply the items-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:items-center md: 480px 768px md:items-center lg: 768px 1080px lg:items-center greenCSS media queries can also be combined with active focus and hover states for example use `sm:items-center` to apply the items-center utility at only small screen sizes at or below 480px or `active:md:items-center` to apply the items-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :items keyword ` p e `active:md:items-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:items keyword focus:items keyword hover:items keyword active align items center focus align items center hover align items center active:sm:items keyword focus:sm:items keyword hover:sm:items keyword active small screens align items center focus small screens align items center hover small screens align items center active:md:items keyword focus:md:items keyword hover:md:items keyword active medium screens align items center focus medium screens align items center hover medium screens align items center active:lg:items keyword focus:lg:items keyword hover:lg:items keyword active large screens align items center focus large screens align items center hover large screens align items center sources align-items https: developer mozilla org en-us docs web css align-items '
---

| _greenCSS_     | CSS class example                          |
| -------------- | ------------------------------------------ |
| items-center   | .items-center { align-items: center; }     |
| items-start    | .items-start { align-items: flex-start; }  |
| items-end      | .items-end { align-items: flex-end; }      |
| items-baseline | .items-baseline { align-items: baseline; } |
| items-stretch  | .items-stretch { align-items: stretch; }   |

## How to work with align items

Use the `items-{keyword}` utilities to set the position of flex and grid elements on the vertical axis.

### Items start

In the example below, we use `items-start` to position the elements at the beginning of the parents vertical axis.

![greenCSS align-items-start](/images/docs/flex/align-items-start.webp?style=centerme)

```html
<div class="flex items-start gap-20px">
  <div class="py-20px bg-purple">first</div>
  <div class="py-40px bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

### Items center

In the example below, we use `items-center` to position the elements along the middle of the parents vertical axis.

![greenCSS items-center](/images/docs/flex/align-items-center.webp?style=centerme)

```html
<div class="flex items-center gap-20px">
  <div class="py-20px bg-purple">first</div>
  <div class="py-40px bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

### Items end

In the example below, we use `items-end` to position the elements at the end of the parents vertical axis.

![greenCSS align-items-end](/images/docs/flex/align-items-end.webp?style=centerme)

```html
<div class="flex items-end gap-20px">
  <div class="py-20px bg-purple">first</div>
  <div class="py-40px bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

### Items baseline

In the example below, we use `items-baseline` to position the elements along the baseline of the vertical axis.

![greenCSS align-items-baseline](/images/docs/flex/align-items-baseline.webp?style=centerme)

```html
<div class="flex items-baseline gap-20px">
  <div class="py-40px bg-purple">first</div>
  <div class="py-12rem bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

### Items stretch

In the example below, we use `items-stretch` to stretch the elements in order to cover the vertical axis.

![greenCSS align-items-stretch](/images/docs/flex/align-items-stretch.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px">
  <div class="py-20px bg-purple">first</div>
  <div class="py-40px bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                       |
| ---------------------- | ------------------------------------------------------- |
| active:items-{keyword} | .active\:items-start:active {align-items: flex-start; } |
| focus:items-{keyword}  | .focus\:items-start:focus { align-items: flex-start; }  |
| hover:items-{keyword}  | .hover\:items-start:hover { align-items: flex-start; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:items-start` to only apply the items-start utility class on hover.

```html
<div class="flex items-stretch hover:items-start">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:items-center |
| md:         | 480px - 768px  | .md:items-center |
| lg:         | 768px - 1080px | .lg:items-center |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:items-center` to apply the items-center utility at only small screen sizes at or below 480px. Or `active:md:items-center` to apply the items-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:items-{keyword}` p.e. `active:md:items-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                                              |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| active:items-{keyword} , focus:items-{keyword} , hover:items-{keyword}          | active align items center, focus align items center, hover align items center                                               |
| active:sm:items-{keyword} , focus:sm:items-{keyword} , hover:sm:items-{keyword} | active small screens align items center, focus small screens align items center, hover small screens align items center,    |
| active:md:items-{keyword} , focus:md:items-{keyword} , hover:md:items-{keyword} | active medium screens align items center, focus medium screens align items center, hover medium screens align items center, |
| active:lg:items-{keyword} , focus:lg:items-{keyword} , hover:lg:items-{keyword} | active large screens align items center, focus large screens align items center, hover large screens align items center,    |

## Sources

- [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
