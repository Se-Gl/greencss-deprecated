---
isBlog: false
title: 'Scroll Behavior'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll behavior.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll behavior, smooth scroll, smooth scroll behavior'
classNames: ''
plainText: ' greencss css class example scroll-auto scroll-auto scroll-behavior: auto; scroll-smooth scroll-smooth scroll-behavior: smooth; custom sizing variables control the scroll behavior on every html element by using the greencss classes shown above use the following structure to generate your scroll behavior class `scroll keyword ` and apply the default css classes like `scroll-smooth`  active focus and hover states greencss css class example active:scroll keyword active :scroll-auto:active scroll-behavior: auto; focus:scroll keyword focus :scroll-auto:focus scroll-behavior: auto; hover:scroll keyword hover :scroll-auto:focus scroll-behavior: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scroll-auto` to only apply the scroll-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scroll-auto md: 480px 768px md:scroll-auto lg: 768px 1080px lg:scroll-auto greencss media queries can also be combined with active focus and hover states for example use `sm:scroll-auto` to apply the `scroll-auto` utility at only small screen sizes at or below 480px or `active:md:scroll-auto` to apply the `scroll-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scroll keyword ` p e `active:md:scroll-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scroll-auto focus:scroll-auto hover:scroll-auto active scroll behavior focus scroll behavior hover scroll behavior active:sm:scroll-auto focus:sm:scroll-auto hover:sm:scroll-auto active small screens scroll behavior focus small screens scroll behavior hover small screens scroll behavior active:md:scroll-auto focus:md:scroll-auto hover:md:scroll-auto active medium screens scroll behavior focus medium screens scroll behavior hover medium screens scroll behavior active:lg:scroll-auto focus:lg:scroll-auto hover:lg:scroll-auto active large screens scroll behavior focus large screens scroll behavior hover large screens scroll behavior sources scroll-behavior https: developer mozilla org en-us docs web css scroll-behavior '
---

| _greenCSS_    | CSS class example                           |
| ------------- | ------------------------------------------- |
| scroll-auto   | .scroll-auto { scroll-behavior: auto; }     |
| scroll-smooth | .scroll-smooth { scroll-behavior: smooth; } |

## Custom Sizing Variables

Control the scroll behavior on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your scroll behavior class `scroll-{keyword}` and apply the default CSS classes like `scroll-smooth`.

```html
<main class="scroll-smooth">
  <section class="min-h-100vh">{children}</section>
  <section class="min-h-100vh">{children}</section>
</main>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                      |
| ----------------------- | ------------------------------------------------------ |
| active:scroll-{keyword} | .active\:scroll-auto:active { scroll-behavior: auto; } |
| focus:scroll-{keyword}  | .focus\:scroll-auto:focus { scroll-behavior: auto; }   |
| hover:scroll-{keyword}  | .hover\:scroll-auto:focus { scroll-behavior: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scroll-auto` to only apply the scroll-auto utility class on hover.

```html
<main class="scroll-smooth hover:scroll-auto">
  <section class="min-h-100vh">{children}</section>
  <section class="min-h-100vh">{children}</section>
</main>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:scroll-auto  |
| md:         | 480px - 768px  | .md:scroll-auto  |
| lg:         | 768px - 1080px | .lg:scroll-auto  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scroll-auto` to apply the `scroll-auto` utility at only small screen sizes at or below 480px. Or `active:md:scroll-auto` to apply the `scroll-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scroll-{keyword}` p.e. `active:md:scroll-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:scroll-auto , focus:scroll-auto , hover:scroll-auto          | active scroll behavior, focus scroll behavior, hover scroll behavior                                               |
| active:sm:scroll-auto , focus:sm:scroll-auto , hover:sm:scroll-auto | active small screens scroll behavior, focus small screens scroll behavior, hover small screens scroll behavior,    |
| active:md:scroll-auto , focus:md:scroll-auto , hover:md:scroll-auto | active medium screens scroll behavior, focus medium screens scroll behavior, hover medium screens scroll behavior, |
| active:lg:scroll-auto , focus:lg:scroll-auto , hover:lg:scroll-auto | active large screens scroll behavior, focus large screens scroll behavior, hover large screens scroll behavior,    |

## Sources

- [scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
