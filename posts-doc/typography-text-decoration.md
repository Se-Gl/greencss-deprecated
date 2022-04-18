---
isBlog: false
title: 'Text Decoration'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text decoration.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text decoration, underline, no text decoration, text overline, text line through'
classNames: ''
plainText: ' greencss css class example no-decoration no-decoration text-decoration-line: no-decoration; underline underline text-decoration-line: underline; overline overline text-decoration-line: overline; line-through line-through text-decoration-line: line-through; custom sizing variables control the text decoration on every html element by using the greencss classes shown above use the ` keyword ` above to generate your text decoration like `underline`  active focus and hover states greencss css class example active: keyword active :no-decoration:active text-decoration-line: no-decoration; focus: keyword focus :no-decoration:focus text-decoration-line: no-decoration; hover: keyword hover :no-decoration:focus text-decoration-line: no-decoration; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:no-decoration` to only apply the no-decoration utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm: no-decoration md: 480px 768px md: no-decoration lg: 768px 1080px lg: no-decoration greencss media queries can also be combined with active focus and hover states for example use `sm:no-decoration` to apply the `no-decoration` utility at only small screen sizes at or below 480px or `active:md:no-decoration` to apply the `no-decoration` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : keyword ` p e `active:md:no-decoration` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:no-decoration focus:no-decoration hover:no-decoration active text decoration focus text decoration hover text decoration active:sm:no-decoration focus:sm:no-decoration hover:sm:no-decoration active small screens text decoration focus small screens text decoration hover small screens text decoration active:md:no-decoration focus:md:no-decoration hover:md:no-decoration active medium screens text decoration focus medium screens text decoration hover medium screens text decoration active:lg:no-decoration focus:lg:no-decoration hover:lg:no-decoration active large screens text decoration focus large screens text decoration hover large screens text decoration sources text-decoration-line https: developer mozilla org en-us docs web css text-decoration-line '
---

| _greenCSS_    | CSS class example                                       |
| ------------- | ------------------------------------------------------- |
| no-decoration | .no-decoration { text-decoration-line: no-decoration; } |
| underline     | .underline { text-decoration-line: underline; }         |
| overline      | .overline { text-decoration-line: overline; }           |
| line-through  | .line-through { text-decoration-line: line-through; }   |

## Custom Sizing variables

Control the text decoration on every HTML element by using the greenCSS classes shown above. Use the `{keyword}` above to generate your text decoration - like `underline`.

```html
<a class="no-decoration text-30px">{title}</a>
...
<p class="underline text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_       | CSS class example                                                      |
| ---------------- | ---------------------------------------------------------------------- |
| active:{keyword} | .active\:no-decoration:active { text-decoration-line: no-decoration; } |
| focus:{keyword}  | .focus\:no-decoration:focus { text-decoration-line: no-decoration; }   |
| hover:{keyword}  | .hover\:no-decoration:focus { text-decoration-line: no-decoration; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:no-decoration` to only apply the no-decoration utility class on hover.

```html
<div class="underline hover:no-decoration">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm: no-decoration |
| md:         | 480px - 768px  | .md: no-decoration |
| lg:         | 768px - 1080px | .lg: no-decoration |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:no-decoration` to apply the `no-decoration` utility at only small screen sizes at or below 480px. Or `active:md:no-decoration` to apply the `no-decoration` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{keyword}` p.e. `active:md:no-decoration`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                      | spoken example                                                                                                     |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:no-decoration , focus:no-decoration , hover:no-decoration          | active text decoration, focus text decoration, hover text decoration                                               |
| active:sm:no-decoration , focus:sm:no-decoration , hover:sm:no-decoration | active small screens text decoration, focus small screens text decoration, hover small screens text decoration,    |
| active:md:no-decoration , focus:md:no-decoration , hover:md:no-decoration | active medium screens text decoration, focus medium screens text decoration, hover medium screens text decoration, |
| active:lg:no-decoration , focus:lg:no-decoration , hover:lg:no-decoration | active large screens text decoration, focus large screens text decoration, hover large screens text decoration,    |

## Sources

- [text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
