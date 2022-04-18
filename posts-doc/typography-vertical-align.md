---
isBlog: false
title: 'Vertical Align'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the vertical align.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'vertical align, '
classNames: ''
plainText: ' greencss css class example vertical-baseline vertical-baseline vertical-align: baseline; vertical-sub vertical-sub vertical-align: sub; vertical-super vertical-super vertical-align: super; vertical-text-top vertical-text-top vertical-align: text-top; vertical-text-bottom vertical-text-bottom vertical-align: text-bottom; vertical-middle vertical-middle vertical-align: middle; vertical-top vertical-top vertical-align: top; vertical-bottom vertical-bottom vertical-align: bottom; custom sizing variables control the vertical align on every html element by using the greencss classes shown above use the following structure to generate your vertical align `vertical keyword ` and apply the default css classes like `vertical-sub`  active focus and hover states greencss css class example active:vertical keyword active :vertical-baseline:active vertical-align: baseline; focus:vertical keyword focus :vertical-baseline:focus vertical-align: baseline; hover:vertical keyword hover :vertical-baseline:focus vertical-align: baseline; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:vertical-baseline` to only apply the vertical-baseline utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:vertical-baseline md: 480px 768px md:vertical-baseline lg: 768px 1080px lg:vertical-baseline greencss media queries can also be combined with active focus and hover states for example use `sm:vertical-baseline` to apply the `vertical-baseline` utility at only small screen sizes at or below 480px or `active:md:vertical-baseline` to apply the `vertical-baseline` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :vertical keyword ` p e `active:md:vertical-baseline` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:vertical-baseline focus:vertical-baseline hover:vertical-baseline active vertical align focus vertical align hover vertical align active:sm:vertical-baseline focus:sm:vertical-baseline hover:sm:vertical-baseline active small screens vertical align focus small screens vertical align hover small screens vertical align active:md:vertical-baseline focus:md:vertical-baseline hover:md:vertical-baseline active medium screens vertical align focus medium screens vertical align hover medium screens vertical align active:lg:vertical-baseline focus:lg:vertical-baseline hover:lg:vertical-baseline active large screens vertical align focus large screens vertical align hover large screens vertical align sources vertical-align https: developer mozilla org en-us docs web css vertical-align '
---

| _greenCSS_           | CSS class example                                      |
| -------------------- | ------------------------------------------------------ |
| vertical-baseline    | .vertical-baseline { vertical-align: baseline; }       |
| vertical-sub         | .vertical-sub { vertical-align: sub; }                 |
| vertical-super       | .vertical-super { vertical-align: super; }             |
| vertical-text-top    | .vertical-text-top { vertical-align: text-top; }       |
| vertical-text-bottom | .vertical-text-bottom { vertical-align: text-bottom; } |
| vertical-middle      | .vertical-middle { vertical-align: middle; }           |
| vertical-top         | .vertical-top { vertical-align: top; }                 |
| vertical-bottom      | .vertical-bottom { vertical-align: bottom; }           |

## Custom Sizing variables

Control the vertical align on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your vertical align `vertical-{keyword}` and apply the default CSS classes like `vertical-sub`.

```html
<h1 class="vertical-baseline text-30px">{title}</h1>
...
<p class="vertical-sub text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                               |
| ------------------------- | --------------------------------------------------------------- |
| active:vertical-{keyword} | .active\:vertical-baseline:active { vertical-align: baseline; } |
| focus:vertical-{keyword}  | .focus\:vertical-baseline:focus { vertical-align: baseline; }   |
| hover:vertical-{keyword}  | .hover\:vertical-baseline:focus { vertical-align: baseline; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:vertical-baseline` to only apply the vertical-baseline utility class on hover.

```html
<div class="vertical-sub hover:vertical-baseline">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:vertical-baseline |
| md:         | 480px - 768px  | .md:vertical-baseline |
| lg:         | 768px - 1080px | .lg:vertical-baseline |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:vertical-baseline` to apply the `vertical-baseline` utility at only small screen sizes at or below 480px. Or `active:md:vertical-baseline` to apply the `vertical-baseline` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:vertical-{keyword}` p.e. `active:md:vertical-baseline`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                  |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:vertical-baseline , focus:vertical-baseline , hover:vertical-baseline          | active vertical align, focus vertical align, hover vertical align                                               |
| active:sm:vertical-baseline , focus:sm:vertical-baseline , hover:sm:vertical-baseline | active small screens vertical align, focus small screens vertical align, hover small screens vertical align,    |
| active:md:vertical-baseline , focus:md:vertical-baseline , hover:md:vertical-baseline | active medium screens vertical align, focus medium screens vertical align, hover medium screens vertical align, |
| active:lg:vertical-baseline , focus:lg:vertical-baseline , hover:lg:vertical-baseline | active large screens vertical align, focus large screens vertical align, hover large screens vertical align,    |

## Sources

- [vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
