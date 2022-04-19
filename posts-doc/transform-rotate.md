---
isBlog: false
title: 'Transform Rotate'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the rotate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'rotate, rotation'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step rotate number deg rotate-1deg transform: rotate 1deg ; -180 180 +1° custom sizing variables control the transform rotation on every html element by using the greencss classes shown above use the following structure to generate your transform rotate `rotate number per` ranging from -180 to 180 with a step of +1° p e `rotate-10deg`  negative rotation if you use negative values use `rotate-neg number deg` p e `rotate-neg-30deg` active focus and hover states greencss css class example active:rotate number deg active :rotate-1deg:active transform: rotate 1deg ; focus:rotate number deg focus :rotate-1deg:focus transform: rotate 1deg ; hover:rotate number deg hover :rotate-1deg:focus transform: rotate 1deg ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:rotate-1deg` to only apply the rotate-1deg utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:rotate-1deg md: 480px 768px md:rotate-1deg lg: 768px 1080px lg:rotate-1deg greencss media queries can also be combined with active focus and hover states for example use `sm:rotate-1deg` to apply the `rotate-1deg` utility at only small screen sizes at or below 480px or `active:md:rotate-1deg` to apply the `rotate-1deg` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :rotate number deg` p e `active:md:rotate-1deg` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:rotate-1deg focus:rotate-1deg hover:rotate-1deg active rotate focus rotate hover rotate active:sm:rotate-1deg focus:sm:rotate-1deg hover:sm:rotate-1deg active small screens rotate focus small screens rotate hover small screens rotate active:md:rotate-1deg focus:md:rotate-1deg hover:md:rotate-1deg active medium screens rotate focus medium screens rotate hover medium screens rotate active:lg:rotate-1deg focus:lg:rotate-1deg hover:lg:rotate-1deg active large screens rotate focus large screens rotate hover large screens rotate sources transform https: developer mozilla org en-us docs web css transform '
---

| _greenCSS_         | CSS class example                         | minimum Value | maximum Value | Step |
| ------------------ | ----------------------------------------- | ------------- | ------------- | ---- |
| rotate-{number}deg | .rotate-1deg { transform: rotate(1deg); } | -180          | 180           | +1°  |

## Custom Sizing Variables

Control the transform rotation on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your transform rotate `rotate-{number}per` - ranging from -180 to 180 with a step of +1° p.e. `rotate-10deg`.

```html
<div class="rotate-45deg">{children}</div>
```

### Negative Rotation

If you use negative values, use `rotate-neg-{number}deg` p.e.`rotate-neg-30deg`.

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                        |
| ------------------------- | -------------------------------------------------------- |
| active:rotate-{number}deg | .active\:rotate-1deg:active { transform: rotate(1deg); } |
| focus:rotate-{number}deg  | .focus\:rotate-1deg:focus { transform: rotate(1deg); }   |
| hover:rotate-{number}deg  | .hover\:rotate-1deg:focus { transform: rotate(1deg); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:rotate-1deg` to only apply the rotate-1deg utility class on hover.

```html
<div class="rotate-45deg hover:rotate-neg-180deg">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:rotate-1deg  |
| md:         | 480px - 768px  | .md:rotate-1deg  |
| lg:         | 768px - 1080px | .lg:rotate-1deg  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:rotate-1deg` to apply the `rotate-1deg` utility at only small screen sizes at or below 480px. Or `active:md:rotate-1deg` to apply the `rotate-1deg` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:rotate-{number}deg` p.e. `active:md:rotate-1deg`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                          |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:rotate-1deg , focus:rotate-1deg , hover:rotate-1deg          | active rotate, focus rotate, hover rotate                                               |
| active:sm:rotate-1deg , focus:sm:rotate-1deg , hover:sm:rotate-1deg | active small screens rotate, focus small screens rotate, hover small screens rotate,    |
| active:md:rotate-1deg , focus:md:rotate-1deg , hover:md:rotate-1deg | active medium screens rotate, focus medium screens rotate, hover medium screens rotate, |
| active:lg:rotate-1deg , focus:lg:rotate-1deg , hover:lg:rotate-1deg | active large screens rotate, focus large screens rotate, hover large screens rotate,    |

## Sources

- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
