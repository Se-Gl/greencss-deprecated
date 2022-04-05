---
isBlog: false
title: 'Order'
date: 'Mar 29. 2022'
excerpt: 'Utility classes for controlling an element`s order.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Flex, flexbox, rrder'
classNames: ''
plainText: ' omencss css class example - order-first order-first order: -9999; order-last order-last order: 9999; order-none order-none order: 0; order-1 order-1 order: 1; order-2 order-2 order: 2; order-3 order-3 order: 3; order-4 order-4 order: 4; order-5 order-5 order: 5; order-6 order-6 order: 6; order-7 order-7 order: 7; order-8 order-8 order: 8; order-9 order-9 order: 9; order-10 order-10 order: 10; order-11 order-11 order: 11; order-12 order-12 order: 12; how to work with order use the utility classes above to access your desired class order works with flex and grid use order- order-values to render flex and grid elements in a different way in the dom ! omencss order images docs flex order webp?style=centerme html div class=flex div class=order-last w-50px h-50px bg-purple first div div class=order-first w-50px h-50px bg-purple-3 second div div class=order-none w-50px h-50px bg-purple-6 third div div active focus and hover states omencss css class example - active:order-first active :order-first:active order: -9999; focus:order-first focus :order-first:focus order: -9999; hover:order-first hover :order-first:hover order: -9999; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:order-first to only apply the order-first utility on hover html div class=flex div class=order-1 hover:order-last w-50px h-50px bg-purple first div div class=order-2 hover:order-3 w-50px h-50px bg-purple-3 second div div class=order-3 hover:order-first w-50px h-50px bg-purple-6 third div div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:order-first md: 480px - 768px md:order-first lg: 768px - 1080px lg:order-first omencss media queries can also be combined with active focus and hover states for example use sm:order-first to apply the order-first utility at only small screen sizes at or below 480px or active:md:order-first to apply the order-first utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query : order-values p e active:md:order-first executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - - active:order-first focus:order-first hover:order-first active order focus order hover order active:sm:order-first focus:sm:order-first hover:sm:order-first active small screens order focus small screens order hover small screens order active:md:order-first focus:md:order-first hover:md:order-first active medium screens order focus medium screens order hover medium screens order active:lg:order-first focus:lg:order-first hover:lg:order-first active large screens order focus large screens order hover large screens order '
---

| _omenCSS_   | CSS class example              |
| ----------- | ------------------------------ |
| order-first | .order-first { order: -9999; } |
| order-last  | .order-last { order: 9999; }   |
| order-none  | .order-none { order: 0; }      |
| order-1     | .order-1 { order: 1; }         |
| order-2     | .order-2 { order: 2; }         |
| order-3     | .order-3 { order: 3; }         |
| order-4     | .order-4 { order: 4; }         |
| order-5     | .order-5 { order: 5; }         |
| order-6     | .order-6 { order: 6; }         |
| order-7     | .order-7 { order: 7; }         |
| order-8     | .order-8 { order: 8; }         |
| order-9     | .order-9 { order: 9; }         |
| order-10    | .order-10 { order: 10; }       |
| order-11    | .order-11 { order: 11; }       |
| order-12    | .order-12 { order: 12; }       |

## How to work with order

Use the utility classes above to access your desired class.

### Order works with flex and grid

Use `order-{order-values}` to render flex and grid elements in a different way in the DOM.

![omencss order](/images/docs/flex/order.webp?style=centerme)

```html
<div class="flex">
  <div class="order-last w-50px h-50px bg-purple">first</div>
  <div class="order-first w-50px h-50px bg-purple-3">second</div>
  <div class="order-none w-50px h-50px bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_          | CSS class example                             |
| ------------------ | --------------------------------------------- |
| active:order-first | .active\:order-first:active { order: -9999; } |
| focus:order-first  | .focus\:order-first:focus { order: -9999; }   |
| hover:order-first  | .hover\:order-first:hover { order: -9999; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:order-first` to only apply the `order-first` utility on hover.

```html
<div class="flex">
  <div class="order-1 hover:order-last w-50px h-50px bg-purple">first</div>
  <div class="order-2 hover:order-3 w-50px h-50px bg-purple-3">second</div>
  <div class="order-3 hover:order-first w-50px h-50px bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:order-first |
| md:         | 480px - 768px  | .md:order-first |
| lg:         | 768px - 1080px | .lg:order-first |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:order-first` to apply the order-first utility at only small screen sizes at or below 480px. Or `active:md:order-first` to apply the order-first utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{order-values}` p.e. `active:md:order-first`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                               | spoken example                                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| active:order-first, focus:order-first, hover:order-first          | active order, focus order, hover order                                              |
| active:sm:order-first, focus:sm:order-first, hover:sm:order-first | active small screens order, focus small screens order, hover small screens order    |
| active:md:order-first, focus:md:order-first, hover:md:order-first | active medium screens order, focus medium screens order, hover medium screens order |
| active:lg:order-first, focus:lg:order-first, hover:lg:order-first | active large screens order, focus large screens order, hover large screens order    |

## Sources

- [ordering-flex-items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
