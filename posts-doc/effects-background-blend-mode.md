---
isBlog: false
title: 'Background Blend Mode'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the background blend mode.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Effects'
author: 'Severin Glaser'
keywords: 'background blend mode, '
classNames: ''
plainText: ' greencss css class example bg-blend-normal bg-blend-normal bg-blend-mode: normal; bg-blend-multiply bg-blend-multiply bg-blend-mode: multiply; bg-blend-screen bg-blend-screen bg-blend-mode: screen; bg-blend-overlay bg-blend-overlay bg-blend-mode: overlay; bg-blend-darken bg-blend-darken bg-blend-mode: darken; bg-blend-lighten bg-blend-lighten bg-blend-mode: lighten; bg-blend-color-dodge bg-blend-color-dodge bg-blend-mode: color-dodge; bg-blend-color-burn bg-blend-color-burn bg-blend-mode: color-burn; bg-blend-hard-light bg-blend-hard-light bg-blend-mode: hard-light; bg-blend-soft-light bg-blend-soft-light bg-blend-mode: soft-light; bg-blend-difference bg-blend-difference bg-blend-mode: difference; bg-blend-exclusion bg-blend-exclusion bg-blend-mode: exclusion; bg-blend-hue bg-blend-hue bg-blend-mode: hue; bg-blend-saturation bg-blend-saturation bg-blend-mode: saturation; bg-blend-color bg-blend-color bg-blend-mode: color; bg-blend-luminosity bg-blend-luminosity bg-blend-mode: luminosity; custom sizing variables control the background blend mode on every html element by using the greencss classes shown above use the following structure to generate your background blend mode `bg-blend keyword ` ranging from multiply to normal with a step of +background blend modec p e `bg-blend-multiply` control the background blend mode on every html element by using the greencss classes shown above use the following structure to generate your background blend mode class `bg-blend keyword ` and apply the default css classes like `bg-blend-multiply`  active focus and hover states greencss css class example active:bg-blend keyword active :bg-blend-normal:active bg-blend-mode: normal; focus:bg-blend keyword focus :bg-blend-normal:focus bg-blend-mode: normal; hover:bg-blend keyword hover :bg-blend-normal:focus bg-blend-mode: normal; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-blend-normal` to only apply the bg-blend-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-blend-normal md: 480px 768px md:bg-blend-normal lg: 768px 1080px lg:bg-blend-normal greencss media queries can also be combined with active focus and hover states for example use `sm:bg-blend-normal` to apply the `bg-blend-normal` utility at only small screen sizes at or below 480px or `active:md:bg-blend-normal` to apply the `bg-blend-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg-blend keyword ` p e `active:md:bg-blend-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-blend-normal focus:bg-blend-normal hover:bg-blend-normal active background blend mode focus background blend mode hover background blend mode active:sm:bg-blend-normal focus:sm:bg-blend-normal hover:sm:bg-blend-normal active small screens background blend mode focus small screens background blend mode hover small screens background blend mode active:md:bg-blend-normal focus:md:bg-blend-normal hover:md:bg-blend-normal active medium screens background blend mode focus medium screens background blend mode hover medium screens background blend mode active:lg:bg-blend-normal focus:lg:bg-blend-normal hover:lg:bg-blend-normal active large screens background blend mode focus large screens background blend mode hover large screens background blend mode sources bg-blend-mode https: developer mozilla org en-us docs web css bg-blend-mode '
---

| _greenCSS_           | CSS class example                                     |
| -------------------- | ----------------------------------------------------- |
| bg-blend-normal      | .bg-blend-normal { bg-blend-mode: normal; }           |
| bg-blend-multiply    | .bg-blend-multiply { bg-blend-mode: multiply; }       |
| bg-blend-screen      | .bg-blend-screen { bg-blend-mode: screen; }           |
| bg-blend-overlay     | .bg-blend-overlay { bg-blend-mode: overlay; }         |
| bg-blend-darken      | .bg-blend-darken { bg-blend-mode: darken; }           |
| bg-blend-lighten     | .bg-blend-lighten { bg-blend-mode: lighten; }         |
| bg-blend-color-dodge | .bg-blend-color-dodge { bg-blend-mode: color-dodge; } |
| bg-blend-color-burn  | .bg-blend-color-burn { bg-blend-mode: color-burn; }   |
| bg-blend-hard-light  | .bg-blend-hard-light { bg-blend-mode: hard-light; }   |
| bg-blend-soft-light  | .bg-blend-soft-light { bg-blend-mode: soft-light; }   |
| bg-blend-difference  | .bg-blend-difference { bg-blend-mode: difference; }   |
| bg-blend-exclusion   | .bg-blend-exclusion { bg-blend-mode: exclusion; }     |
| bg-blend-hue         | .bg-blend-hue { bg-blend-mode: hue; }                 |
| bg-blend-saturation  | .bg-blend-saturation { bg-blend-mode: saturation; }   |
| bg-blend-color       | .bg-blend-color { bg-blend-mode: color; }             |
| bg-blend-luminosity  | .bg-blend-luminosity { bg-blend-mode: luminosity; }   |

## Custom Sizing Variables

Control the background blend mode on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background blend mode `bg-blend-{keyword}` - ranging from multiply to normal with a step of +background blend modec p.e. `bg-blend-multiply`.

Control the background blend mode on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background blend mode class `bg-blend-{keyword}` and apply the default CSS classes like `bg-blend-multiply`.

```html
<div class="bg-blend-normal ...">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                          |
| ------------------------- | ---------------------------------------------------------- |
| active:bg-blend-{keyword} | .active\:bg-blend-normal:active { bg-blend-mode: normal; } |
| focus:bg-blend-{keyword}  | .focus\:bg-blend-normal:focus { bg-blend-mode: normal; }   |
| hover:bg-blend-{keyword}  | .hover\:bg-blend-normal:focus { bg-blend-mode: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-blend-normal` to only apply the bg-blend-normal utility class on hover.

```html
<div class="bg-blend-multiply hover:bg-blend-normal">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example    |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:bg-blend-normal |
| md:         | 480px - 768px  | .md:bg-blend-normal |
| lg:         | 768px - 1080px | .lg:bg-blend-normal |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-blend-normal` to apply the `bg-blend-normal` utility at only small screen sizes at or below 480px. Or `active:md:bg-blend-normal` to apply the `bg-blend-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-blend-{keyword}` p.e. `active:md:bg-blend-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                                                       |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| active:bg-blend-normal , focus:bg-blend-normal , hover:bg-blend-normal          | active background blend mode, focus background blend mode, hover background blend mode                                               |
| active:sm:bg-blend-normal , focus:sm:bg-blend-normal , hover:sm:bg-blend-normal | active small screens background blend mode, focus small screens background blend mode, hover small screens background blend mode,    |
| active:md:bg-blend-normal , focus:md:bg-blend-normal , hover:md:bg-blend-normal | active medium screens background blend mode, focus medium screens background blend mode, hover medium screens background blend mode, |
| active:lg:bg-blend-normal , focus:lg:bg-blend-normal , hover:lg:bg-blend-normal | active large screens background blend mode, focus large screens background blend mode, hover large screens background blend mode,    |

## Sources

- [bg-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
