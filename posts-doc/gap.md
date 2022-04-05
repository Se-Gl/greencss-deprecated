---
isBlog: false
title: 'Gap'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s gap.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'gap, column-gap, row-gap'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step gap size px gap-1px gap: 1px; gap-0px gap-100px 1px gap-x size px gap-x-1px column-gap: 1px; gap-x-0px gap-x-100px 1px gap-y size px gap-y-1px row-gap: 1px; gap-x-0px gap-x-100px 1px gap size rem gap-11rem gap: 1rem; gap-11rem gap-30rem 1rem gap-x size rem gap-x-11rem column-gap: 1rem; gap-x-11rem gap-x-30rem 1rem gap-y size rem gap-y-11rem row-gap: 1rem; gap-x-11rem gap-x-30rem 1rem how to work with gap use the `gap number unit ` utilities to set the initial gutter within a flexbox or grid system 1 use `gap number unit ` for a general gutter in the vertical and horizontal direction 2 use `gap-x number unit ` for a gutter in a horizontal direction 3 use `gap-y number unit ` for a gutter in a vertical direction in the example below we to have a gap of 20 pixels `gap-20px` ! omencss gap images docs flex gap webp?style=centerme  active focus and hover states omencss css class example range active:gap size px active :gap size px:active flex-gap: 1%; active:gap-0px to active:gap-100px focus:gap size px focus :gap size px:focus flex-gap: 1%; focus:gap-0px to focus:gap-100px hover:gap size px hover :gap size px:hover flex-gap: 1%; hover:gap-0px to hover:gap-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:gap-10px` to only apply the gap-10px utility on hover ! omencss flex-gap hover images docs flex flex-gap-hover webp?style=centerme  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:gap-10px md: 480px 768px md:gap-10px lg: 768px 1080px lg:gap-10px omencss media queries can also be combined with active focus and hover states for example use `sm:gap-10px` to apply the gap-10px utility at only small screen sizes at or below 480px or `active:md:gap-10px` to apply the gap-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :gap number unit ` p e `active:md:gap-50px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:gap size px focus:gap size px hover:gap size px active gap focus gap hover gap active:sm:gap size px focus:sm:gap size px hover:sm:gap size px active small screens gap focus small screens gap hover small screens gap active:md:gap size px focus:md:gap size px hover:md:gap size px active medium screens gap focus medium screens gap hover medium screens gap active:lg:gap size px focus:lg:gap size px hover:lg:gap size px active large screens gap focus large screens gap hover large screens gap sources gap https: developer mozilla org en-us docs web css gap '
---

| _omenCSS_       | CSS class example                  | minimum Value | maximum Value | Step |
| --------------- | ---------------------------------- | ------------- | ------------- | ---- |
| gap-{size}px    | .gap-1px { gap: 1px; }             | gap-0px       | gap-100px     | 1px  |
| gap-x-{size}px  | .gap-x-1px { column-gap: 1px; }    | gap-x-0px     | gap-x-100px   | 1px  |
| gap-y-{size}px  | .gap-y-1px { row-gap: 1px; }       | gap-x-0px     | gap-x-100px   | 1px  |
| gap-{size}rem   | .gap-11rem { gap: 1rem; }          | gap-11rem     | gap-30rem     | 1rem |
| gap-x-{size}rem | .gap-x-11rem { column-gap: 1rem; } | gap-x-11rem   | gap-x-30rem   | 1rem |
| gap-y-{size}rem | .gap-y-11rem { row-gap: 1rem; }    | gap-x-11rem   | gap-x-30rem   | 1rem |

## How to work with gap

Use the `gap-{number}{unit}` utilities to set the initial gutter within a flexbox or grid system.

1. Use `gap-{number}{unit}` for a general gutter in the vertical and horizontal direction.
2. Use `gap-x-{number}{unit}` for a gutter in a horizontal direction.
3. Use `gap-y-{number}{unit}` for a gutter in a vertical direction.

In the example below, we to have a gap of 20 pixels `gap-20px`.

![omencss gap](/images/docs/flex/gap.webp?style=centerme)

```html
<div class="grid gap-20px grid-col-2">
  <div class="w-50px h-50px bg-purple">first</div>
  <div class="w-50px h-50px bg-purple-3">second</div>
  <div class="w-50px h-50px bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_           | CSS class example                              | Range                              |
| ------------------- | ---------------------------------------------- | ---------------------------------- |
| active:gap-{size}px | .active\:gap-{size}px:active { flex-gap: 1%; } | active:gap-0px to active:gap-100px |
| focus:gap-{size}px  | .focus\:gap-{size}px:focus { flex-gap: 1%; }   | focus:gap-0px to focus:gap-100px   |
| hover:gap-{size}px  | .hover\:gap-{size}px:hover { flex-gap: 1%; }   | hover:gap-0px to hover:gap-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:gap-10px` to only apply the gap-10px utility on hover.

![omencss flex-gap hover](/images/docs/flex/flex-gap-hover.webp?style=centerme)

```html
<div class="grid gap-20px hover:gap-50px">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:gap-10px    |
| md:         | 480px - 768px  | .md:gap-10px    |
| lg:         | 768px - 1080px | .lg:gap-10px    |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:gap-10px` to apply the gap-10px utility at only small screen sizes at or below 480px. Or `active:md:gap-10px` to apply the gap-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:gap-{number}{unit}` p.e. `active:md:gap-50px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                 |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| active:gap-{size}px , focus:gap-{size}px , hover:gap-{size}px          | active gap, focus gap, hover gap                                               |
| active:sm:gap-{size}px , focus:sm:gap-{size}px , hover:sm:gap-{size}px | active small screens gap, focus small screens gap, hover small screens gap,    |
| active:md:gap-{size}px , focus:md:gap-{size}px , hover:md:gap-{size}px | active medium screens gap, focus medium screens gap, hover medium screens gap, |
| active:lg:gap-{size}px , focus:lg:gap-{size}px , hover:lg:gap-{size}px | active large screens gap, focus large screens gap, hover large screens gap,    |

## Sources

- [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
