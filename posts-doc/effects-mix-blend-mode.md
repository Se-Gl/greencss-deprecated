---
isBlog: false
title: 'Mix Blend Mode'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the mix blend mode.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Effects'
author: 'Severin Glaser'
keywords: 'mix blend mode, '
classNames: ''
plainText: ' greencss css class example mix-blend-normal mix-blend-normal mix-blend-mode: normal; mix-blend-multiply mix-blend-multiply mix-blend-mode: multiply; mix-blend-screen mix-blend-screen mix-blend-mode: screen; mix-blend-overlay mix-blend-overlay mix-blend-mode: overlay; mix-blend-darken mix-blend-darken mix-blend-mode: darken; mix-blend-lighten mix-blend-lighten mix-blend-mode: lighten; mix-blend-color-dodge mix-blend-color-dodge mix-blend-mode: color-dodge; mix-blend-color-burn mix-blend-color-burn mix-blend-mode: color-burn; mix-blend-hard-light mix-blend-hard-light mix-blend-mode: hard-light; mix-blend-soft-light mix-blend-soft-light mix-blend-mode: soft-light; mix-blend-difference mix-blend-difference mix-blend-mode: difference; mix-blend-exclusion mix-blend-exclusion mix-blend-mode: exclusion; mix-blend-hue mix-blend-hue mix-blend-mode: hue; mix-blend-saturation mix-blend-saturation mix-blend-mode: saturation; mix-blend-color mix-blend-color mix-blend-mode: color; mix-blend-luminosity mix-blend-luminosity mix-blend-mode: luminosity; custom sizing variables control the mix blend mode on every html element by using the greencss classes shown above use the following structure to generate your mix blend mode class `mix-blend keyword ` and apply the default css classes like `mix-blend-multiply`  active focus and hover states greencss css class example active:mix-blend keyword active :mix-blend-normal:active mix-blend-mode: normal; focus:mix-blend keyword focus :mix-blend-normal:focus mix-blend-mode: normal; hover:mix-blend keyword hover :mix-blend-normal:focus mix-blend-mode: normal; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:mix-blend-normal` to only apply the mix-blend-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:mix-blend-normal md: 480px 768px md:mix-blend-normal lg: 768px 1080px lg:mix-blend-normal greencss media queries can also be combined with active focus and hover states for example use `sm:mix-blend-normal` to apply the `mix-blend-normal` utility at only small screen sizes at or below 480px or `active:md:mix-blend-normal` to apply the `mix-blend-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :mix-blend keyword ` p e `active:md:mix-blend-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:mix-blend-normal focus:mix-blend-normal hover:mix-blend-normal active mix blend mode focus mix blend mode hover mix blend mode active:sm:mix-blend-normal focus:sm:mix-blend-normal hover:sm:mix-blend-normal active small screens mix blend mode focus small screens mix blend mode hover small screens mix blend mode active:md:mix-blend-normal focus:md:mix-blend-normal hover:md:mix-blend-normal active medium screens mix blend mode focus medium screens mix blend mode hover medium screens mix blend mode active:lg:mix-blend-normal focus:lg:mix-blend-normal hover:lg:mix-blend-normal active large screens mix blend mode focus large screens mix blend mode hover large screens mix blend mode sources mix-blend-mode https: developer mozilla org en-us docs web css mix-blend-mode '
---

| _greenCSS_            | CSS class example                                       |
| --------------------- | ------------------------------------------------------- |
| mix-blend-normal      | .mix-blend-normal { mix-blend-mode: normal; }           |
| mix-blend-multiply    | .mix-blend-multiply { mix-blend-mode: multiply; }       |
| mix-blend-screen      | .mix-blend-screen { mix-blend-mode: screen; }           |
| mix-blend-overlay     | .mix-blend-overlay { mix-blend-mode: overlay; }         |
| mix-blend-darken      | .mix-blend-darken { mix-blend-mode: darken; }           |
| mix-blend-lighten     | .mix-blend-lighten { mix-blend-mode: lighten; }         |
| mix-blend-color-dodge | .mix-blend-color-dodge { mix-blend-mode: color-dodge; } |
| mix-blend-color-burn  | .mix-blend-color-burn { mix-blend-mode: color-burn; }   |
| mix-blend-hard-light  | .mix-blend-hard-light { mix-blend-mode: hard-light; }   |
| mix-blend-soft-light  | .mix-blend-soft-light { mix-blend-mode: soft-light; }   |
| mix-blend-difference  | .mix-blend-difference { mix-blend-mode: difference; }   |
| mix-blend-exclusion   | .mix-blend-exclusion { mix-blend-mode: exclusion; }     |
| mix-blend-hue         | .mix-blend-hue { mix-blend-mode: hue; }                 |
| mix-blend-saturation  | .mix-blend-saturation { mix-blend-mode: saturation; }   |
| mix-blend-color       | .mix-blend-color { mix-blend-mode: color; }             |
| mix-blend-luminosity  | .mix-blend-luminosity { mix-blend-mode: luminosity; }   |

## Custom Sizing Variables

Control the mix blend mode on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your mix blend mode class `mix-blend-{keyword}` and apply the default CSS classes like `mix-blend-multiply`.

```html
<div class="mix-blend-normal ...">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                            |
| -------------------------- | ------------------------------------------------------------ |
| active:mix-blend-{keyword} | .active\:mix-blend-normal:active { mix-blend-mode: normal; } |
| focus:mix-blend-{keyword}  | .focus\:mix-blend-normal:focus { mix-blend-mode: normal; }   |
| hover:mix-blend-{keyword}  | .hover\:mix-blend-normal:focus { mix-blend-mode: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:mix-blend-normal` to only apply the mix-blend-normal utility class on hover.

```html
<div class="mix-blend-multiply hover:mix-blend-normal">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:mix-blend-normal |
| md:         | 480px - 768px  | .md:mix-blend-normal |
| lg:         | 768px - 1080px | .lg:mix-blend-normal |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:mix-blend-normal` to apply the `mix-blend-normal` utility at only small screen sizes at or below 480px. Or `active:md:mix-blend-normal` to apply the `mix-blend-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:mix-blend-{keyword}` p.e. `active:md:mix-blend-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                                  |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:mix-blend-normal , focus:mix-blend-normal , hover:mix-blend-normal          | active mix blend mode, focus mix blend mode, hover mix blend mode                                               |
| active:sm:mix-blend-normal , focus:sm:mix-blend-normal , hover:sm:mix-blend-normal | active small screens mix blend mode, focus small screens mix blend mode, hover small screens mix blend mode,    |
| active:md:mix-blend-normal , focus:md:mix-blend-normal , hover:md:mix-blend-normal | active medium screens mix blend mode, focus medium screens mix blend mode, hover medium screens mix blend mode, |
| active:lg:mix-blend-normal , focus:lg:mix-blend-normal , hover:lg:mix-blend-normal | active large screens mix blend mode, focus large screens mix blend mode, hover large screens mix blend mode,    |

## Sources

- [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
