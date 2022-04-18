---
isBlog: false
title: 'Text Alignment'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text align and set the horizontal alignment of the content inside a block element or table-cell box. '
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text align, Text Alignment, how to center text, text center'
classNames: ''
plainText: ' greencss css class example text-left text-left text-align: left; text-center text-center text-align: center; text-right text-right text-align: right; text-justify text-justify text-align: justify; custom sizing variables control the text align on every html element by using the greencss classes shown above use the following structure to generate your text align `text keyword ` use the default css classes like `text-center`  active focus and hover states greencss css class example active:text keyword active :text-left:active text-align: left; focus:text keyword focus :text-left:focus text-align: left; hover:text keyword hover :text-left:focus text-align: left; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-left` to only apply the text-left utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-left md: 480px 768px md:text-left lg: 768px 1080px lg:text-left greencss media queries can also be combined with active focus and hover states for example use `sm:text-left` to apply the `text-left` utility at only small screen sizes at or below 480px or `active:md:text-left` to apply the `text-left` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text keyword ` p e `active:md:text-left` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-left focus:text-left hover:text-left active text align focus text align hover text align active:sm:text-left focus:sm:text-left hover:sm:text-left active small screens text align focus small screens text align hover small screens text align active:md:text-left focus:md:text-left hover:md:text-left active medium screens text align focus medium screens text align hover medium screens text align active:lg:text-left focus:lg:text-left hover:lg:text-left active large screens text align focus large screens text align hover large screens text align sources text-align https: developer mozilla org en-us docs web css text-align '
---

| _greenCSS_   | CSS class example                      |
| ------------ | -------------------------------------- |
| text-left    | .text-left { text-align: left; }       |
| text-center  | .text-center { text-align: center; }   |
| text-right   | .text-right { text-align: right; }     |
| text-justify | .text-justify { text-align: justify; } |

## Custom Sizing variables

Control the text align on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text align `text-{keyword}`. Use the default CSS classes like `text-center`.

```html
<h1 class="text-left text-30px">{title}</h1>
...
<p class="text-center text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_            | CSS class example                               |
| --------------------- | ----------------------------------------------- |
| active:text-{keyword} | .active\:text-left:active { text-align: left; } |
| focus:text-{keyword}  | .focus\:text-left:focus { text-align: left; }   |
| hover:text-{keyword}  | .hover\:text-left:focus { text-align: left; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-left` to only apply the text-left utility class on hover.

```html
<div class="text-center hover:text-left">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:text-left    |
| md:         | 480px - 768px  | .md:text-left    |
| lg:         | 768px - 1080px | .lg:text-left    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-left` to apply the `text-left` utility at only small screen sizes at or below 480px. Or `active:md:text-left` to apply the `text-left` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-{keyword}` p.e. `active:md:text-left`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                      |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:text-left , focus:text-left , hover:text-left          | active text align, focus text align, hover text align                                               |
| active:sm:text-left , focus:sm:text-left , hover:sm:text-left | active small screens text align, focus small screens text align, hover small screens text align,    |
| active:md:text-left , focus:md:text-left , hover:md:text-left | active medium screens text align, focus medium screens text align, hover medium screens text align, |
| active:lg:text-left , focus:lg:text-left , hover:lg:text-left | active large screens text align, focus large screens text align, hover large screens text align,    |

## Sources

- [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
