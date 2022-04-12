---
isBlog: false
title: 'Backdrop Hue Rotate'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the backdrop hue rotate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Backdrop Hue Rotate, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step backdrop-hue-rotate number deg backdrop-hue-rotate-1deg filter: hue-rotate 1deg -180 180 +1° how to work the backdrop hue rotate filter you can either work with positive or negative backdrop hue rotate classes 1 negative classes have the following structure `backdrop-hue-rotate-neg number deg` p e `backdrop-hue-rotate-neg-180deg` 1 positive classes have the following structure `backdrop-hue-rotate number deg` p e `backdrop-hue-rotate-180deg`  active focus and hover states omencss css class example active:backdrop-hue-rotate number deg active :backdrop-hue-rotate-5deg:active filter: hue-rotate 5deg ; focus:backdrop-hue-rotate number deg focus :backdrop-hue-rotate-5deg:focus filter: hue-rotate 5deg ; hover:backdrop-hue-rotate number deg hover :backdrop-hue-rotate-5deg:hover filter: hue-rotate 5deg ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:backdrop-hue-rotate-5deg` to only apply the backdrop-hue-rotate-5deg utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:backdrop-hue-rotate-5deg md: 480 768 md:backdrop-hue-rotate-5deg lg: 768 1080 lg:backdrop-hue-rotate-5deg omencss media queries can also be combined with active focus and hover states for example use `sm:backdrop-hue-rotate-5deg` to apply the backdrop-hue-rotate-5deg utility at only small screen sizes at or below 480 or `active:md:backdrop-hue-rotate-5deg` to apply the backdrop-hue-rotate-5deg utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :backdrop-hue-rotate number deg` p e `active:md:backdrop-hue-rotate-5deg` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:backdrop-hue-rotate-5deg focus:backdrop-hue-rotate-5deg hover:backdrop-hue-rotate-5deg active backdrop hue rotate focus backdrop hue rotate hover backdrop hue rotate active:sm:backdrop-hue-rotate-5deg focus:sm:backdrop-hue-rotate-5deg hover:sm:backdrop-hue-rotate-5deg active small screens backdrop hue rotate focus small screens backdrop hue rotate hover small screens backdrop hue rotate active:md:backdrop-hue-rotate-5deg focus:md:backdrop-hue-rotate-5deg hover:md:backdrop-hue-rotate-5deg active medium screens backdrop hue rotate focus medium screens backdrop hue rotate hover medium screens backdrop hue rotate active:lg:backdrop-hue-rotate-5deg focus:lg:backdrop-hue-rotate-5deg hover:lg:backdrop-hue-rotate-5deg active large screens backdrop hue rotate focus large screens backdrop hue rotate hover large screens backdrop hue rotate sources backdrop-filter https: developer mozilla org en-us docs web css backdrop-filter '
---

| _omenCSS_                       | CSS class example                                     | minimum Value | maximum Value | Step |
| ------------------------------- | ----------------------------------------------------- | ------------- | ------------- | ---- |
| backdrop-hue-rotate-{number}deg | .backdrop-hue-rotate-1deg { filter: hue-rotate(1deg)} | -180          | 180           | +1°  |

## How to work the backdrop hue rotate filter

You can either work with positive or negative backdrop hue rotate classes.

1. Negative classes have the following structure `backdrop-hue-rotate-neg-{number}deg` p.e.`backdrop-hue-rotate-neg-180deg`
1. Positive classes have the following structure `backdrop-hue-rotate-{number}deg` p.e.`backdrop-hue-rotate-180deg`

```html
<!-- most negative backdrop hue rotate class -->
<div class="backdrop-hue-rotate-neg-180deg">{children}</div>
<!-- backdrop hue rotate class of 0 -->
<div class="backdrop-hue-rotate-0deg">{children}</div>
<!-- most positive backdrop hue rotate class -->
<div class="backdrop-hue-rotate-180deg">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                              | CSS class example                                                      |
| -------------------------------------- | ---------------------------------------------------------------------- |
| active:backdrop-hue-rotate-{number}deg | .active\:backdrop-hue-rotate-5deg:active { filter: hue-rotate(5deg); } |
| focus:backdrop-hue-rotate-{number}deg  | .focus\:backdrop-hue-rotate-5deg:focus { filter: hue-rotate(5deg); }   |
| hover:backdrop-hue-rotate-{number}deg  | .hover\:backdrop-hue-rotate-5deg:hover { filter: hue-rotate(5deg); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:backdrop-hue-rotate-5deg` to only apply the backdrop-hue-rotate-5deg utility class on hover.

```html
<div class="backdrop-hue-rotate-100deg hover:backdrop-hue-rotate-5deg ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example              |
| ----------- | ---------- | ---------------------------- |
| sm:         | 0 - 480    | .sm:backdrop-hue-rotate-5deg |
| md:         | 480 - 768  | .md:backdrop-hue-rotate-5deg |
| lg:         | 768 - 1080 | .lg:backdrop-hue-rotate-5deg |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:backdrop-hue-rotate-5deg` to apply the backdrop-hue-rotate-5deg utility at only small screen sizes at or below 480. Or `active:md:backdrop-hue-rotate-5deg` to apply the backdrop-hue-rotate-5deg utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:backdrop-hue-rotate-{number}deg` p.e. `active:md:backdrop-hue-rotate-5deg`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                        | spoken example                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| active:backdrop-hue-rotate-5deg , focus:backdrop-hue-rotate-5deg , hover:backdrop-hue-rotate-5deg          | active backdrop hue rotate, focus backdrop hue rotate, hover backdrop hue rotate                                               |
| active:sm:backdrop-hue-rotate-5deg , focus:sm:backdrop-hue-rotate-5deg , hover:sm:backdrop-hue-rotate-5deg | active small screens backdrop hue rotate, focus small screens backdrop hue rotate, hover small screens backdrop hue rotate,    |
| active:md:backdrop-hue-rotate-5deg , focus:md:backdrop-hue-rotate-5deg , hover:md:backdrop-hue-rotate-5deg | active medium screens backdrop hue rotate, focus medium screens backdrop hue rotate, hover medium screens backdrop hue rotate, |
| active:lg:backdrop-hue-rotate-5deg , focus:lg:backdrop-hue-rotate-5deg , hover:lg:backdrop-hue-rotate-5deg | active large screens backdrop hue rotate, focus large screens backdrop hue rotate, hover large screens backdrop hue rotate,    |

## Sources

- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
