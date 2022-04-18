---
isBlog: false
title: 'Text Decoration Color'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text decoration color.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text decoration color, text-decoration-color'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step text-decoration-green text-decoration-green color: 80f906; default color 10 + -1 text-decoration-green-10 text-decoration-green-10 color: f9fff3; default color 10 + -1 custom sizing variables control the text decoration color on every html element by using the greencss classes shown above use the following structure to generate your text decoration color `text-decoration color number ` ranging from the default color to default color +10 in theory it looks liek: `text-decoration color number ` use the default css classes like `text-decoration-green-10` 1 check all greencss colors brand colours 2 a small number means that the text decoration color has more saturation 3 a high number uses more white tones  active focus and hover states greencss css class example active:text-decoration color number active :text-decoration-green:active text-decoration-color: 80f906; focus:text-decoration color number focus :text-decoration-green:focus text-decoration-color: 80f906; hover:text-decoration color number hover :text-decoration-green:focus text-decoration-color: 80f906; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-decoration-green` to only apply the text-decoration-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-decoration-green md: 480px 768px md:text-decoration-green lg: 768px 1080px lg:text-decoration-green greencss media queries can also be combined with active focus and hover states for example use `sm:text-decoration-green` to apply the `text-decoration-green` utility at only small screen sizes at or below 480px or `active:md:text-decoration-green` to apply the `text-decoration-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text-decoration color number ` p e `active:md:text-decoration-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-decoration-green focus:text-decoration-green hover:text-decoration-green active text decoration color focus text decoration color hover text decoration color active:sm:text-decoration-green focus:sm:text-decoration-green hover:sm:text-decoration-green active small screens text decoration color focus small screens text decoration color hover small screens text decoration color active:md:text-decoration-green focus:md:text-decoration-green hover:md:text-decoration-green active medium screens text decoration color focus medium screens text decoration color hover medium screens text decoration color active:lg:text-decoration-green focus:lg:text-decoration-green hover:lg:text-decoration-green active large screens text decoration color focus large screens text decoration color hover large screens text decoration color sources text-decoration-color https: developer mozilla org en-us docs web css text-decoration-color '
---

| _greenCSS_               | CSS class example                             | minimum Value | maximum Value | Step |
| ------------------------ | --------------------------------------------- | ------------- | ------------- | ---- |
| text-decoration-green    | .text-decoration-green { color: #80f906; }    | default color | 10            | +/-1 |
| text-decoration-green-10 | .text-decoration-green-10 { color: #f9fff3; } | default color | 10            | +/-1 |

## Custom Sizing variables

Control the text decoration color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text decoration color `text-decoration-{color}-{number}` - ranging from the default color to default color +10. In theory it looks liek: `text-decoration-{color}-{number}`. Use the default CSS classes like `text-decoration-green-10`.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the text decoration color has more saturation.
3. A high number uses more white tones.

```html
<h1 class="text-decoration-green text-30px">{title}</h1>
...
<p class="text-decoration-green-10 text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                              | CSS class example                                                         |
| --------------------------------------- | ------------------------------------------------------------------------- |
| active:text-decoration-{color}-{number} | .active\:text-decoration-green:active { text-decoration-color: #80f906; } |
| focus:text-decoration-{color}-{number}  | .focus\:text-decoration-green:focus { text-decoration-color: #80f906; }   |
| hover:text-decoration-{color}-{number}  | .hover\:text-decoration-green:focus { text-decoration-color: #80f906; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-decoration-green` to only apply the text-decoration-green utility class on hover.

```html
<div class="text-decoration-green-10 hover:text-decoration-green">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example          |
| ----------- | -------------- | ------------------------- |
| sm:         | 0px - 480px    | .sm:text-decoration-green |
| md:         | 480px - 768px  | .md:text-decoration-green |
| lg:         | 768px - 1080px | .lg:text-decoration-green |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-decoration-green` to apply the `text-decoration-green` utility at only small screen sizes at or below 480px. Or `active:md:text-decoration-green` to apply the `text-decoration-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-decoration-{color}-{number}` p.e. `active:md:text-decoration-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                              | spoken example                                                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| active:text-decoration-green , focus:text-decoration-green , hover:text-decoration-green          | active text decoration color, focus text decoration color, hover text decoration color                                               |
| active:sm:text-decoration-green , focus:sm:text-decoration-green , hover:sm:text-decoration-green | active small screens text decoration color, focus small screens text decoration color, hover small screens text decoration color,    |
| active:md:text-decoration-green , focus:md:text-decoration-green , hover:md:text-decoration-green | active medium screens text decoration color, focus medium screens text decoration color, hover medium screens text decoration color, |
| active:lg:text-decoration-green , focus:lg:text-decoration-green , hover:lg:text-decoration-green | active large screens text decoration color, focus large screens text decoration color, hover large screens text decoration color,    |

## Sources

- [text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)
