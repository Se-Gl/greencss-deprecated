---
isBlog: false
title: 'Transform Origin'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the transform origin.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'transform origin, '
classNames: ''
plainText: ' greencss css class example origin-center origin-center transform-origin: center; origin-top origin-top transform-origin: top; origin-top-right origin-top-right transform-origin: top right; origin-right origin-right transform-origin: right; origin-bottom-right origin-bottom-right transform-origin: bottom right; origin-bottom origin-bottom transform-origin: bottom; origin-bottom-left origin-bottom-left transform-origin: bottom left; origin-left origin-left transform-origin: left; origin-top-left origin-top-left transform-origin: top left; custom sizing variables control the transform origin on every html element by using the greencss classes shown above use the following structure to generate your transform origin class `origin keyword ` and apply the default css classes like `origin-top`  active focus and hover states greencss css class example active:origin keyword active :origin-center:active transform-origin: center; focus:origin keyword focus :origin-center:focus transform-origin: center; hover:origin keyword hover :origin-center:focus transform-origin: center; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:origin-center` to only apply the origin-center utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:origin-center md: 480px 768px md:origin-center lg: 768px 1080px lg:origin-center greencss media queries can also be combined with active focus and hover states for example use `sm:origin-center` to apply the `origin-center` utility at only small screen sizes at or below 480px or `active:md:origin-center` to apply the `origin-center` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :origin keyword ` p e `active:md:origin-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:origin-center focus:origin-center hover:origin-center active transform origin focus transform origin hover transform origin active:sm:origin-center focus:sm:origin-center hover:sm:origin-center active small screens transform origin focus small screens transform origin hover small screens transform origin active:md:origin-center focus:md:origin-center hover:md:origin-center active medium screens transform origin focus medium screens transform origin hover medium screens transform origin active:lg:origin-center focus:lg:origin-center hover:lg:origin-center active large screens transform origin focus large screens transform origin hover large screens transform origin sources transform-origin https: developer mozilla org en-us docs web css transform-origin '
---

| _greenCSS_          | CSS class example                                        |
| ------------------- | -------------------------------------------------------- |
| origin-center       | .origin-center { transform-origin: center; }             |
| origin-top          | .origin-top { transform-origin: top; }                   |
| origin-top-right    | .origin-top-right { transform-origin: top right; }       |
| origin-right        | .origin-right { transform-origin: right; }               |
| origin-bottom-right | .origin-bottom-right { transform-origin: bottom right; } |
| origin-bottom       | .origin-bottom { transform-origin: bottom; }             |
| origin-bottom-left  | .origin-bottom-left { transform-origin: bottom left; }   |
| origin-left         | .origin-left { transform-origin: left; }                 |
| origin-top-left     | .origin-top-left { transform-origin: top left; }         |

## Custom Sizing Variables

Control the transform origin on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your transform origin class `origin-{keyword}` and apply the default CSS classes like `origin-top`.

```html
<div class="origin-center rotate-90deg">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                           |
| ----------------------- | ----------------------------------------------------------- |
| active:origin-{keyword} | .active\:origin-center:active { transform-origin: center; } |
| focus:origin-{keyword}  | .focus\:origin-center:focus { transform-origin: center; }   |
| hover:origin-{keyword}  | .hover\:origin-center:focus { transform-origin: center; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:origin-center` to only apply the origin-center utility class on hover.

```html
<div class="origin-center hover:origin-top rotate-90deg">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example  |
| ----------- | -------------- | ----------------- |
| sm:         | 0px - 480px    | .sm:origin-center |
| md:         | 480px - 768px  | .md:origin-center |
| lg:         | 768px - 1080px | .lg:origin-center |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:origin-center` to apply the `origin-center` utility at only small screen sizes at or below 480px. Or `active:md:origin-center` to apply the `origin-center` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:origin-{keyword}` p.e. `active:md:origin-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                      | spoken example                                                                                                        |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:origin-center , focus:origin-center , hover:origin-center          | active transform origin, focus transform origin, hover transform origin                                               |
| active:sm:origin-center , focus:sm:origin-center , hover:sm:origin-center | active small screens transform origin, focus small screens transform origin, hover small screens transform origin,    |
| active:md:origin-center , focus:md:origin-center , hover:md:origin-center | active medium screens transform origin, focus medium screens transform origin, hover medium screens transform origin, |
| active:lg:origin-center , focus:lg:origin-center , hover:lg:origin-center | active large screens transform origin, focus large screens transform origin, hover large screens transform origin,    |

## Sources

- [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
