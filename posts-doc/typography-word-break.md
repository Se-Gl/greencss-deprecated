---
isBlog: false
title: 'Word Break'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the word break.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'word break, '
classNames: ''
plainText: ' greencss css class example break-normal break-normal word-break: normal; break-all break-all word-break: all; break-keep-all break-keep-all word-break: keep-all; custom sizing variables control the word break on every html element by using the greencss classes shown above use the following structure to generate your word break class `break keyword ` and apply the default css classes like`break-all`  active focus and hover states greencss css class example active:break keyword active :break-normal:active word-break: normal; focus:break keyword focus :break-normal:focus word-break: normal; hover:break keyword hover :break-normal:focus word-break: normal; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:break-normal` to only apply the break-normal utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:break-normal md: 480px 768px md:break-normal lg: 768px 1080px lg:break-normal greencss media queries can also be combined with active focus and hover states for example use `sm:break-normal` to apply the `break-normal` utility at only small screen sizes at or below 480px or `active:md:break-normal` to apply the `break-normal` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :break keyword ` p e `active:md:break-normal` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:break-normal focus:break-normal hover:break-normal active word break focus word break hover word break active:sm:break-normal focus:sm:break-normal hover:sm:break-normal active small screens word break focus small screens word break hover small screens word break active:md:break-normal focus:md:break-normal hover:md:break-normal active medium screens word break focus medium screens word break hover medium screens word break active:lg:break-normal focus:lg:break-normal hover:lg:break-normal active large screens word break focus large screens word break hover large screens word break sources word-break https: developer mozilla org en-us docs web css word-break '
---

| _greenCSS_     | CSS class example                         |
| -------------- | ----------------------------------------- |
| break-normal   | .break-normal { word-break: normal; }     |
| break-all      | .break-all { word-break: all; }           |
| break-keep-all | .break-keep-all { word-break: keep-all; } |

## Custom Sizing variables

Control the word break on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your word break class `break-{keyword}` and apply the default CSS classes like`break-all`.

```html
<h1 class="break-normal text-30px">{title}</h1>
...
<p class="break-all text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                    |
| ---------------------- | ---------------------------------------------------- |
| active:break-{keyword} | .active\:break-normal:active { word-break: normal; } |
| focus:break-{keyword}  | .focus\:break-normal:focus { word-break: normal; }   |
| hover:break-{keyword}  | .hover\:break-normal:focus { word-break: normal; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:break-normal` to only apply the break-normal utility class on hover.

```html
<div class="break-all hover:break-normal">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:break-normal |
| md:         | 480px - 768px  | .md:break-normal |
| lg:         | 768px - 1080px | .lg:break-normal |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:break-normal` to apply the `break-normal` utility at only small screen sizes at or below 480px. Or `active:md:break-normal` to apply the `break-normal` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:break-{keyword}` p.e. `active:md:break-normal`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:break-normal , focus:break-normal , hover:break-normal          | active word break, focus word break, hover word break                                               |
| active:sm:break-normal , focus:sm:break-normal , hover:sm:break-normal | active small screens word break, focus small screens word break, hover small screens word break,    |
| active:md:break-normal , focus:md:break-normal , hover:md:break-normal | active medium screens word break, focus medium screens word break, hover medium screens word break, |
| active:lg:break-normal , focus:lg:break-normal , hover:lg:break-normal | active large screens word break, focus large screens word break, hover large screens word break,    |

## Sources

- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
