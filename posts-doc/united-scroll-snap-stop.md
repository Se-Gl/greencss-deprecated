---
isBlog: false
title: 'Scroll Snap Stop'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll snap stop.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll snap stop, '
classNames: ''
plainText: ' greencss css class example snap-normal snap-normal scroll-snap-stop: normal; snap-always snap-always scroll-snap-stop: always; custom sizing variables control the scroll snap stop on every html element by using the greencss classes shown above use the following structure to generate your scroll snap stop class `snap keyword ` and apply the default css classes like `snap-always`  active focus and hover states greencss css class example active:snap keyword active :snap-normal:active scroll-snap-stop: normal; focus:snap keyword focus :snap-normal:focus scroll-snap-stop: normal; hover:snap keyword hover :snap-normal:focus scroll-snap-stop: normal; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:snap-normal` to only apply the snap-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:snap-normal md: 480px 768px md:snap-normal lg: 768px 1080px lg:snap-normal greencss media queries can also be combined with active focus and hover states for example use `sm:snap-normal` to apply the `snap-normal` utility at only small screen sizes at or below 480px or `active:md:snap-normal` to apply the `snap-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :snap keyword ` p e `active:md:snap-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:snap-normal focus:snap-normal hover:snap-normal active scroll snap stop focus scroll snap stop hover scroll snap stop active:sm:snap-normal focus:sm:snap-normal hover:sm:snap-normal active small screens scroll snap stop focus small screens scroll snap stop hover small screens scroll snap stop active:md:snap-normal focus:md:snap-normal hover:md:snap-normal active medium screens scroll snap stop focus medium screens scroll snap stop hover medium screens scroll snap stop active:lg:snap-normal focus:lg:snap-normal hover:lg:snap-normal active large screens scroll snap stop focus large screens scroll snap stop hover large screens scroll snap stop sources scroll-snap-stop https: developer mozilla org en-us docs web css scroll-snap-stop '
---

| _greenCSS_  | CSS class example                          |
| ----------- | ------------------------------------------ |
| snap-normal | .snap-normal { scroll-snap-stop: normal; } |
| snap-always | .snap-always { scroll-snap-stop: always; } |

## Custom Sizing Variables

Control the scroll snap stop on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your scroll snap stop class `snap-{keyword}` and apply the default CSS classes like `snap-always`.

```html
<div class="scroll-snap-x">
  <div class="snap-always snap-center">
    <div>{children}</div>
  </div>
</div>
```

## Active, focus, and hover states

| _greenCSS_            | CSS class example                                         |
| --------------------- | --------------------------------------------------------- |
| active:snap-{keyword} | .active\:snap-normal:active { scroll-snap-stop: normal; } |
| focus:snap-{keyword}  | .focus\:snap-normal:focus { scroll-snap-stop: normal; }   |
| hover:snap-{keyword}  | .hover\:snap-normal:focus { scroll-snap-stop: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:snap-normal` to only apply the snap-normal utility class on hover.

```html
<div class="snap-always hover:snap-normal">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:snap-normal  |
| md:         | 480px - 768px  | .md:snap-normal  |
| lg:         | 768px - 1080px | .lg:snap-normal  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:snap-normal` to apply the `snap-normal` utility at only small screen sizes at or below 480px. Or `active:md:snap-normal` to apply the `snap-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:snap-{keyword}` p.e. `active:md:snap-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                                        |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:snap-normal , focus:snap-normal , hover:snap-normal          | active scroll snap stop, focus scroll snap stop, hover scroll snap stop                                               |
| active:sm:snap-normal , focus:sm:snap-normal , hover:sm:snap-normal | active small screens scroll snap stop, focus small screens scroll snap stop, hover small screens scroll snap stop,    |
| active:md:snap-normal , focus:md:snap-normal , hover:md:snap-normal | active medium screens scroll snap stop, focus medium screens scroll snap stop, hover medium screens scroll snap stop, |
| active:lg:snap-normal , focus:lg:snap-normal , hover:lg:snap-normal | active large screens scroll snap stop, focus large screens scroll snap stop, hover large screens scroll snap stop,    |

## Sources

- [scroll-snap-stop](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)
