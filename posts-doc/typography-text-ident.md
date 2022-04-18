---
isBlog: false
title: 'Text Indent'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text indent.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text indent'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step text-indent number rem text-indent-30rem text-indent: 1rem; 0rem 30rem +1rem custom sizing variables control the text indent on every html element by using the greencss classes shown above use the following structure to generate your text indent `text-indent number rem` ranging from 0rem to 30rem with a step of +1rem or use the `text-indent number rem` to use the default css classes like `text-indent-10rem`  active focus and hover states greencss css class example active:text-indent number rem active :text-indent-1rem:active text-indent: 1rem; focus:text-indent number rem focus :text-indent-1rem:focus text-indent: 1rem; hover:text-indent number rem hover :text-indent-1rem:focus text-indent: 1rem; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-indent-1rem` to only apply the text-indent-1rem utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-indent-1rem md: 480px 768px md:text-indent-1rem lg: 768px 1080px lg:text-indent-1rem greencss media queries can also be combined with active focus and hover states for example use `sm:text-indent-1rem` to apply the `text-indent-1rem` utility at only small screen sizes at or below 480px or `active:md:text-indent-1rem` to apply the `text-indent-1rem` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text-indent number rem` p e `active:md:text-indent-1rem` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-indent-1rem focus:text-indent-1rem hover:text-indent-1rem active text indent focus text indent hover text indent active:sm:text-indent-1rem focus:sm:text-indent-1rem hover:sm:text-indent-1rem active small screens text indent focus small screens text indent hover small screens text indent active:md:text-indent-1rem focus:md:text-indent-1rem hover:md:text-indent-1rem active medium screens text indent focus medium screens text indent hover medium screens text indent active:lg:text-indent-1rem focus:lg:text-indent-1rem hover:lg:text-indent-1rem active large screens text indent focus large screens text indent hover large screens text indent sources text-indent https: developer mozilla org en-us docs web css text-indent '
---

| _greenCSS_              | CSS class example                         | minimum Value | maximum Value | Step  |
| ----------------------- | ----------------------------------------- | ------------- | ------------- | ----- |
| text-indent-{number}rem | .text-indent-30rem { text-indent: 1rem; } | 0rem          | 30rem         | +1rem |

## Custom Sizing variables

Control the text indent on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text indent `text-indent-{number}rem` - ranging from 0rem to 30rem with a step of +1rem or use the `text-indent-{number}rem` to use the default CSS classes like `text-indent-10rem`.

```html
<h1 class="text-indent-1rem text-30px">{title}</h1>
...
<p class="text-indent-10rem text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                     | CSS class example                                       |
| ------------------------------ | ------------------------------------------------------- |
| active:text-indent-{number}rem | .active\:text-indent-1rem:active { text-indent: 1rem; } |
| focus:text-indent-{number}rem  | .focus\:text-indent-1rem:focus { text-indent: 1rem; }   |
| hover:text-indent-{number}rem  | .hover\:text-indent-1rem:focus { text-indent: 1rem; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-indent-1rem` to only apply the text-indent-1rem utility class on hover.

```html
<div class="text-indent-10rem hover:text-indent-1rem">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:text-indent-1rem |
| md:         | 480px - 768px  | .md:text-indent-1rem |
| lg:         | 768px - 1080px | .lg:text-indent-1rem |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-indent-1rem` to apply the `text-indent-1rem` utility at only small screen sizes at or below 480px. Or `active:md:text-indent-1rem` to apply the `text-indent-1rem` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-indent-{number}rem` p.e. `active:md:text-indent-1rem`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                         |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:text-indent-1rem , focus:text-indent-1rem , hover:text-indent-1rem          | active text indent, focus text indent, hover text indent                                               |
| active:sm:text-indent-1rem , focus:sm:text-indent-1rem , hover:sm:text-indent-1rem | active small screens text indent, focus small screens text indent, hover small screens text indent,    |
| active:md:text-indent-1rem , focus:md:text-indent-1rem , hover:md:text-indent-1rem | active medium screens text indent, focus medium screens text indent, hover medium screens text indent, |
| active:lg:text-indent-1rem , focus:lg:text-indent-1rem , hover:lg:text-indent-1rem | active large screens text indent, focus large screens text indent, hover large screens text indent,    |

## Sources

- [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
