---
isBlog: false
title: 'Touch Action'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the touch action.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'touch action, touch manipulation'
classNames: ''
plainText: ' greencss css class example touch-auto touch-auto touch-action: auto; touch-none touch-none touch-action: none; touch-pan-x touch-pan-x touch-action: pan-x; touch-pan-left touch-pan-left touch-action: pan-left; touch-pan-right touch-pan-right touch-action: pan-right; touch-pan-y touch-pan-y touch-action: pan-y; touch-pan-up touch-pan-up touch-action: pan-up; touch-pan-down touch-pan-down touch-action: pan-down; touch-pinch-zoom touch-pinch-zoom touch-action: pinch-zoom; touch-manipulation touch-manipulation touch-action: manipulation; custom sizing variables control the touch action on every html element by using the greencss classes shown above use the following structure to generate your touch action class `touch keyword ` and apply the default css classes like `touch-none`  active focus and hover states greencss css class example active:touch keyword active :touch-auto:active touch-action: auto; focus:touch keyword focus :touch-auto:focus touch-action: auto; hover:touch keyword hover :touch-auto:focus touch-action: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:touch-auto` to only apply the touch-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:touch-auto md: 480px 768px md:touch-auto lg: 768px 1080px lg:touch-auto greencss media queries can also be combined with active focus and hover states for example use `sm:touch-auto` to apply the `touch-auto` utility at only small screen sizes at or below 480px or `active:md:touch-auto` to apply the `touch-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :touch keyword ` p e `active:md:touch-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:touch-auto focus:touch-auto hover:touch-auto active touch action focus touch action hover touch action active:sm:touch-auto focus:sm:touch-auto hover:sm:touch-auto active small screens touch action focus small screens touch action hover small screens touch action active:md:touch-auto focus:md:touch-auto hover:md:touch-auto active medium screens touch action focus medium screens touch action hover medium screens touch action active:lg:touch-auto focus:lg:touch-auto hover:lg:touch-auto active large screens touch action focus large screens touch action hover large screens touch action sources touch-action https: developer mozilla org en-us docs web css touch-action '
---

| _greenCSS_         | CSS class example                                   |
| ------------------ | --------------------------------------------------- |
| touch-auto         | .touch-auto { touch-action: auto; }                 |
| touch-none         | .touch-none { touch-action: none; }                 |
| touch-pan-x        | .touch-pan-x { touch-action: pan-x; }               |
| touch-pan-left     | .touch-pan-left { touch-action: pan-left; }         |
| touch-pan-right    | .touch-pan-right { touch-action: pan-right; }       |
| touch-pan-y        | .touch-pan-y { touch-action: pan-y; }               |
| touch-pan-up       | .touch-pan-up { touch-action: pan-up; }             |
| touch-pan-down     | .touch-pan-down { touch-action: pan-down; }         |
| touch-pinch-zoom   | .touch-pinch-zoom { touch-action: pinch-zoom; }     |
| touch-manipulation | .touch-manipulation { touch-action: manipulation; } |

## Custom Sizing Variables

Control the touch action on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your touch action class `touch-{keyword}` and apply the default CSS classes like `touch-none`.

```html
<section class="touch-auto w-100vw h-100vh overflow-auto">
  <div>{children}</div>
</section>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                  |
| ---------------------- | -------------------------------------------------- |
| active:touch-{keyword} | .active\:touch-auto:active { touch-action: auto; } |
| focus:touch-{keyword}  | .focus\:touch-auto:focus { touch-action: auto; }   |
| hover:touch-{keyword}  | .hover\:touch-auto:focus { touch-action: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:touch-auto` to only apply the touch-auto utility class on hover.

```html
<section class="touch-auto hover:touch-none w-100vw h-100vh overflow-auto">
  <div>{children}</div>
</section>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:touch-auto   |
| md:         | 480px - 768px  | .md:touch-auto   |
| lg:         | 768px - 1080px | .lg:touch-auto   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:touch-auto` to apply the `touch-auto` utility at only small screen sizes at or below 480px. Or `active:md:touch-auto` to apply the `touch-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:touch-{keyword}` p.e. `active:md:touch-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                                            |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:touch-auto , focus:touch-auto , hover:touch-auto          | active touch action, focus touch action, hover touch action                                               |
| active:sm:touch-auto , focus:sm:touch-auto , hover:sm:touch-auto | active small screens touch action, focus small screens touch action, hover small screens touch action,    |
| active:md:touch-auto , focus:md:touch-auto , hover:md:touch-auto | active medium screens touch action, focus medium screens touch action, hover medium screens touch action, |
| active:lg:touch-auto , focus:lg:touch-auto , hover:lg:touch-auto | active large screens touch action, focus large screens touch action, hover large screens touch action,    |

## Sources

- [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
