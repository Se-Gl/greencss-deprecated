---
isBlog: false
title: 'Scroll Snap Align'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll snap align.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll snap align, '
classNames: ''
plainText: ' greencss css class example snap-start snap-start scroll-snap-align: start; snap-end snap-end scroll-snap-align: end; snap-center snap-center scroll-snap-align: center; snap-align-none snap-align-none scroll-snap-align: none; custom sizing variables control the scroll snap align on every html element by using the greencss classes shown above use the following structure to generate your scroll snap align class `snap keyword ` and apply the default css classes like `snap-end`  active focus and hover states greencss css class example active:snap keyword active :snap-start:active scroll-snap-align: start; focus:snap keyword focus :snap-start:focus scroll-snap-align: start; hover:snap keyword hover :snap-start:focus scroll-snap-align: start; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:snap-start` to only apply the snap-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:snap-start md: 480px 768px md:snap-start lg: 768px 1080px lg:snap-start greencss media queries can also be combined with active focus and hover states for example use `sm:snap-start` to apply the `snap-start` utility at only small screen sizes at or below 480px or `active:md:snap-start` to apply the `snap-start` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :snap keyword ` p e `active:md:snap-start` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:snap-start focus:snap-start hover:snap-start active scroll snap align focus scroll snap align hover scroll snap align active:sm:snap-start focus:sm:snap-start hover:sm:snap-start active small screens scroll snap align focus small screens scroll snap align hover small screens scroll snap align active:md:snap-start focus:md:snap-start hover:md:snap-start active medium screens scroll snap align focus medium screens scroll snap align hover medium screens scroll snap align active:lg:snap-start focus:lg:snap-start hover:lg:snap-start active large screens scroll snap align focus large screens scroll snap align hover large screens scroll snap align sources scroll-snap-align https: developer mozilla org en-us docs web css scroll-snap-align '
---

| _greenCSS_      | CSS class example                             |
| --------------- | --------------------------------------------- |
| snap-start      | .snap-start { scroll-snap-align: start; }     |
| snap-end        | .snap-end { scroll-snap-align: end; }         |
| snap-center     | .snap-center { scroll-snap-align: center; }   |
| snap-align-none | .snap-align-none { scroll-snap-align: none; } |

## Custom Sizing Variables

Control the scroll snap align on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your scroll snap align class `snap-{keyword}` and apply the default CSS classes like `snap-end`.

```html
<div class="scroll-snap-x">
  <div class="snap-center">
    <div>{children}</div>
  </div>
</div>
```

## Active, focus, and hover states

| _greenCSS_            | CSS class example                                        |
| --------------------- | -------------------------------------------------------- |
| active:snap-{keyword} | .active\:snap-start:active { scroll-snap-align: start; } |
| focus:snap-{keyword}  | .focus\:snap-start:focus { scroll-snap-align: start; }   |
| hover:snap-{keyword}  | .hover\:snap-start:focus { scroll-snap-align: start; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:snap-start` to only apply the snap-start utility class on hover.

```html
<div class="scroll-snap-x">
  <div class="snap-end hover:snap-start">
    <div>{children}</div>
  </div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:snap-start   |
| md:         | 480px - 768px  | .md:snap-start   |
| lg:         | 768px - 1080px | .lg:snap-start   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:snap-start` to apply the `snap-start` utility at only small screen sizes at or below 480px. Or `active:md:snap-start` to apply the `snap-start` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:snap-{keyword}` p.e. `active:md:snap-start`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                                                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:snap-start , focus:snap-start , hover:snap-start          | active scroll snap align, focus scroll snap align, hover scroll snap align                                               |
| active:sm:snap-start , focus:sm:snap-start , hover:sm:snap-start | active small screens scroll snap align, focus small screens scroll snap align, hover small screens scroll snap align,    |
| active:md:snap-start , focus:md:snap-start , hover:md:snap-start | active medium screens scroll snap align, focus medium screens scroll snap align, hover medium screens scroll snap align, |
| active:lg:snap-start , focus:lg:snap-start , hover:lg:snap-start | active large screens scroll snap align, focus large screens scroll snap align, hover large screens scroll snap align,    |

## Sources

- [scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
