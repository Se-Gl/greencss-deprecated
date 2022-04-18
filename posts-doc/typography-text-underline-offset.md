---
isBlog: false
title: 'Text Underline Offset'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text underline offset.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text underline offset'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step text-underline-auto text-underline-auto text-underline-offset: auto; -30px 30px +1px text-underline-1px text-underline-1px text-underline-offset: 1px; custom sizing variables control the text underline offset on every html element by using the greencss classes shown above use the following structure to generate your text decoration thickness `text-underline number px` ranging from -30px `text-underline-neg-30px` to 30px `text-underline-30px` with a step of +1px or use the `text-underline keyword ` to use the default css classes like `text-underline-auto`  active focus and hover states greencss css class example active:text-underline keyword active :text-underline-auto:active text-underline-offset: auto; focus:text-underline keyword focus :text-underline-auto:focus text-underline-offset: auto; hover:text-underline keyword hover :text-underline-auto:focus text-underline-offset: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-underline-auto` to only apply the text-underline-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-underline-auto md: 480px 768px md:text-underline-auto lg: 768px 1080px lg:text-underline-auto greencss media queries can also be combined with active focus and hover states for example use `sm:text-underline-auto` to apply the `text-underline-auto` utility at only small screen sizes at or below 480px or `active:md:text-underline-auto` to apply the `text-underline-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text-underline keyword ` p e `active:md:text-underline-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-underline-auto focus:text-underline-auto hover:text-underline-auto active text underline offset focus text underline offset hover text underline offset active:sm:text-underline-auto focus:sm:text-underline-auto hover:sm:text-underline-auto active small screens text underline offset focus small screens text underline offset hover small screens text underline offset active:md:text-underline-auto focus:md:text-underline-auto hover:md:text-underline-auto active medium screens text underline offset focus medium screens text underline offset hover medium screens text underline offset active:lg:text-underline-auto focus:lg:text-underline-auto hover:lg:text-underline-auto active large screens text underline offset focus large screens text underline offset hover large screens text underline offset sources text-underline-offset https: developer mozilla org en-us docs web css text-underline-offset '
---

| _greenCSS_          | CSS class example                                     | minimum Value | maximum Value | Step |
| ------------------- | ----------------------------------------------------- | ------------- | ------------- | ---- |
| text-underline-auto | .text-underline-auto { text-underline-offset: auto; } | -30px         | 30px          | +1px |
| text-underline-1px  | .text-underline-1px { text-underline-offset: 1px; }   | -             | -             | -    |

## Custom Sizing variables

Control the text underline offset on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text decoration thickness `text-underline{number}px` - ranging from -30px `text-underline-neg-30px` to 30px `text-underline-30px` with a step of +1px or use the `text-underline-{keyword}` to use the default CSS classes like `text-underline-auto`.

```html
<h1 class="text-underline-auto text-30px">{title}</h1>
...
<p class="text-underline-1px text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                      | CSS class example                                                    |
| ------------------------------- | -------------------------------------------------------------------- |
| active:text-underline-{keyword} | .active\:text-underline-auto:active { text-underline-offset: auto; } |
| focus:text-underline-{keyword}  | .focus\:text-underline-auto:focus { text-underline-offset: auto; }   |
| hover:text-underline-{keyword}  | .hover\:text-underline-auto:focus { text-underline-offset: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-underline-auto` to only apply the text-underline-auto utility class on hover.

```html
<a class="text-underline-10px hover:text-underline-auto">{children}</a>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example        |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:text-underline-auto |
| md:         | 480px - 768px  | .md:text-underline-auto |
| lg:         | 768px - 1080px | .lg:text-underline-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-underline-auto` to apply the `text-underline-auto` utility at only small screen sizes at or below 480px. Or `active:md:text-underline-auto` to apply the `text-underline-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-underline-{keyword}` p.e. `active:md:text-underline-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                        | spoken example                                                                                                                       |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| active:text-underline-auto , focus:text-underline-auto , hover:text-underline-auto          | active text underline offset, focus text underline offset, hover text underline offset                                               |
| active:sm:text-underline-auto , focus:sm:text-underline-auto , hover:sm:text-underline-auto | active small screens text underline offset, focus small screens text underline offset, hover small screens text underline offset,    |
| active:md:text-underline-auto , focus:md:text-underline-auto , hover:md:text-underline-auto | active medium screens text underline offset, focus medium screens text underline offset, hover medium screens text underline offset, |
| active:lg:text-underline-auto , focus:lg:text-underline-auto , hover:lg:text-underline-auto | active large screens text underline offset, focus large screens text underline offset, hover large screens text underline offset,    |

## Sources

- [text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
