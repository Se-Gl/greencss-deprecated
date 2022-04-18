---
isBlog: false
title: 'Text Decoration Style'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text decoration style.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text decoration style, solid, dotted, dashed, wavy text'
classNames: ''
plainText: ' greencss css class example text-decoration-solid text-decoration-solid text-decoration-style: solid; text-decoration-double text-decoration-double text-decoration-style: double; text-decoration-dotted text-decoration-dotted text-decoration-style: dotted; text-decoration-dashed text-decoration-dashed text-decoration-style: dashed; text-decoration-wavy text-decoration-wavy text-decoration-style: wavy; custom sizing variables control the text decoration style on every html element by using the greencss classes shown above use the following structure to generate your text decoration style `text-decoration keyword ` simply use the default css classes like `text-decoration-double`  active focus and hover states greencss css class example active:text-decoration keyword active :text-decoration-solid:active text-decoration-style: solid; focus:text-decoration keyword focus :text-decoration-solid:focus text-decoration-style: solid; hover:text-decoration keyword hover :text-decoration-solid:focus text-decoration-style: solid; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-decoration-solid` to only apply the text-decoration-solid utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-decoration-solid md: 480px 768px md:text-decoration-solid lg: 768px 1080px lg:text-decoration-solid greencss media queries can also be combined with active focus and hover states for example use `sm:text-decoration-solid` to apply the `text-decoration-solid` utility at only small screen sizes at or below 480px or `active:md:text-decoration-solid` to apply the `text-decoration-solid` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text-decoration keyword ` p e `active:md:text-decoration-solid` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-decoration-solid focus:text-decoration-solid hover:text-decoration-solid active text decoration style focus text decoration style hover text decoration style active:sm:text-decoration-solid focus:sm:text-decoration-solid hover:sm:text-decoration-solid active small screens text decoration style focus small screens text decoration style hover small screens text decoration style active:md:text-decoration-solid focus:md:text-decoration-solid hover:md:text-decoration-solid active medium screens text decoration style focus medium screens text decoration style hover medium screens text decoration style active:lg:text-decoration-solid focus:lg:text-decoration-solid hover:lg:text-decoration-solid active large screens text decoration style focus large screens text decoration style hover large screens text decoration style sources text-decoration-style https: developer mozilla org en-us docs web css text-decoration-style '
---

| _greenCSS_             | CSS class example                                          |
| ---------------------- | ---------------------------------------------------------- |
| text-decoration-solid  | .text-decoration-solid { text-decoration-style: solid; }   |
| text-decoration-double | .text-decoration-double { text-decoration-style: double; } |
| text-decoration-dotted | .text-decoration-dotted { text-decoration-style: dotted; } |
| text-decoration-dashed | .text-decoration-dashed { text-decoration-style: dashed; } |
| text-decoration-wavy   | .text-decoration-wavy { text-decoration-style: wavy; }     |

## Custom Sizing variables

Control the text decoration style on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text decoration style `text-decoration-{keyword}`. Simply use the default CSS classes like `text-decoration-double`.

```html
<h1 class="text-decoration-solid text-30px">{title}</h1>
...
<p class="text-decoration-double text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                       | CSS class example                                                       |
| -------------------------------- | ----------------------------------------------------------------------- |
| active:text-decoration-{keyword} | .active\:text-decoration-solid:active { text-decoration-style: solid; } |
| focus:text-decoration-{keyword}  | .focus\:text-decoration-solid:focus { text-decoration-style: solid; }   |
| hover:text-decoration-{keyword}  | .hover\:text-decoration-solid:focus { text-decoration-style: solid; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-decoration-solid` to only apply the text-decoration-solid utility class on hover.

```html
<div class="text-decoration-double hover:text-decoration-solid">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example          |
| ----------- | -------------- | ------------------------- |
| sm:         | 0px - 480px    | .sm:text-decoration-solid |
| md:         | 480px - 768px  | .md:text-decoration-solid |
| lg:         | 768px - 1080px | .lg:text-decoration-solid |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-decoration-solid` to apply the `text-decoration-solid` utility at only small screen sizes at or below 480px. Or `active:md:text-decoration-solid` to apply the `text-decoration-solid` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-decoration-{keyword}` p.e. `active:md:text-decoration-solid`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                              | spoken example                                                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| active:text-decoration-solid , focus:text-decoration-solid , hover:text-decoration-solid          | active text decoration style, focus text decoration style, hover text decoration style                                               |
| active:sm:text-decoration-solid , focus:sm:text-decoration-solid , hover:sm:text-decoration-solid | active small screens text decoration style, focus small screens text decoration style, hover small screens text decoration style,    |
| active:md:text-decoration-solid , focus:md:text-decoration-solid , hover:md:text-decoration-solid | active medium screens text decoration style, focus medium screens text decoration style, hover medium screens text decoration style, |
| active:lg:text-decoration-solid , focus:lg:text-decoration-solid , hover:lg:text-decoration-solid | active large screens text decoration style, focus large screens text decoration style, hover large screens text decoration style,    |

## Sources

- [text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)
