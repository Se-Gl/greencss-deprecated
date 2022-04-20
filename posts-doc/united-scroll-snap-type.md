---
isBlog: false
title: 'Scroll Snap Type'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll snap type.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll snap type, '
classNames: 'Scroll Snap Type'
plainText: ' greencss css class example scroll-snap keyword scroll-snap-none scroll-snap-type: none; scroll-snap-x scroll-snap-x scroll-snap-type: x; scroll-snap-y scroll-snap-y scroll-snap-type: y; scroll-snap-block scroll-snap-block scroll-snap-type: block; scroll-snap-inline scroll-snap-inline scroll-snap-type: inline; scroll-snap-both scroll-snap-both scroll-snap-type: both; custom sizing variables control the scroll snap type on every html element by using the greencss classes shown above use the following structure to generate your scroll snap type class `scroll-snap keyword ` and apply the default css classes like `scroll-snap-x`  active focus and hover states greencss css class example active:scroll-snap keyword active :scroll-snap-none:active scroll-snap-type: none; focus:scroll-snap keyword focus :scroll-snap-none:focus scroll-snap-type: none; hover:scroll-snap keyword hover :scroll-snap-none:focus scroll-snap-type: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scroll-snap-none` to only apply the scroll-snap-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scroll-snap-none md: 480px 768px md:scroll-snap-none lg: 768px 1080px lg:scroll-snap-none greencss media queries can also be combined with active focus and hover states for example use `sm:scroll-snap-none` to apply the `scroll-snap-none` utility at only small screen sizes at or below 480px or `active:md:scroll-snap-none` to apply the `scroll-snap-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scroll-snap keyword ` p e `active:md:scroll-snap-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scroll-snap-none focus:scroll-snap-none hover:scroll-snap-none active scroll snap type focus scroll snap type hover scroll snap type active:sm:scroll-snap-none focus:sm:scroll-snap-none hover:sm:scroll-snap-none active small screens scroll snap type focus small screens scroll snap type hover small screens scroll snap type active:md:scroll-snap-none focus:md:scroll-snap-none hover:md:scroll-snap-none active medium screens scroll snap type focus medium screens scroll snap type hover medium screens scroll snap type active:lg:scroll-snap-none focus:lg:scroll-snap-none hover:lg:scroll-snap-none active large screens scroll snap type focus large screens scroll snap type hover large screens scroll snap type sources scroll-snap-type https: developer mozilla org en-us docs web css scroll-snap-type '
---

| _greenCSS_            | CSS class example                                 |
| --------------------- | ------------------------------------------------- |
| scroll-snap-{keyword} | .scroll-snap-none { scroll-snap-type: none; }     |
| scroll-snap-x         | .scroll-snap-x { scroll-snap-type: x; }           |
| scroll-snap-y         | .scroll-snap-y { scroll-snap-type: y; }           |
| scroll-snap-block     | .scroll-snap-block { scroll-snap-type: block; }   |
| scroll-snap-inline    | .scroll-snap-inline { scroll-snap-type: inline; } |
| scroll-snap-both      | .scroll-snap-both { scroll-snap-type: both; }     |

## Custom Sizing Variables

Control the scroll snap type on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your scroll snap type class `scroll-snap-{keyword}` and apply the default CSS classes like `scroll-snap-x`.

```html
<div class="scroll-snap-x">
  <div class="snap-center">
    <div>{children}</div>
  </div>
</div>
```

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                            |
| ---------------------------- | ------------------------------------------------------------ |
| active:scroll-snap-{keyword} | .active\:scroll-snap-none:active { scroll-snap-type: none; } |
| focus:scroll-snap-{keyword}  | .focus\:scroll-snap-none:focus { scroll-snap-type: none; }   |
| hover:scroll-snap-{keyword}  | .hover\:scroll-snap-none:focus { scroll-snap-type: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scroll-snap-none` to only apply the scroll-snap-none utility class on hover.

```html
<div class="scroll-snap-x">
  <div class="scroll-snap-x hover:scroll-snap-none">
    <div>{children}</div>
  </div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:scroll-snap-none |
| md:         | 480px - 768px  | .md:scroll-snap-none |
| lg:         | 768px - 1080px | .lg:scroll-snap-none |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scroll-snap-none` to apply the `scroll-snap-none` utility at only small screen sizes at or below 480px. Or `active:md:scroll-snap-none` to apply the `scroll-snap-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scroll-snap-{keyword}` p.e. `active:md:scroll-snap-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                                        |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:scroll-snap-none , focus:scroll-snap-none , hover:scroll-snap-none          | active scroll snap type, focus scroll snap type, hover scroll snap type                                               |
| active:sm:scroll-snap-none , focus:sm:scroll-snap-none , hover:sm:scroll-snap-none | active small screens scroll snap type, focus small screens scroll snap type, hover small screens scroll snap type,    |
| active:md:scroll-snap-none , focus:md:scroll-snap-none , hover:md:scroll-snap-none | active medium screens scroll snap type, focus medium screens scroll snap type, hover medium screens scroll snap type, |
| active:lg:scroll-snap-none , focus:lg:scroll-snap-none , hover:lg:scroll-snap-none | active large screens scroll snap type, focus large screens scroll snap type, hover large screens scroll snap type,    |

## Sources

- [scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
