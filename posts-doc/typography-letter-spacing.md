---
isBlog: false
title: 'Letter Spacing'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the Letter Spacing.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Letter Spacing, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step letter-spacing number px letter-spacing-30 letter-spacing: 30; -30 30 +-1 letter-spacing-neg-30 letter-spacing-neg-30 letter-spacing: -30; custom sizing variables control the letter spacing on every html element by using the greencss classes shown above use the following structure to generate your letter spacing `letter-spacing number px` ranging from -30 to 30 with a step of +-1 or use the `letter-spacing number px` to use the default css classes like `letter-spacing-neg-30`  active focus and hover states greencss css class example active:letter-spacing number px active :letter-spacing-30:active letter-spacing: 30; focus:letter-spacing number px focus :letter-spacing-30:focus letter-spacing: 30; hover:letter-spacing number px hover :letter-spacing-30:focus letter-spacing: 30; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:letter-spacing-30` to only apply the letter-spacing-30 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:letter-spacing-30 md: 480px 768px md:letter-spacing-30 lg: 768px 1080px lg:letter-spacing-30 greencss media queries can also be combined with active focus and hover states for example use `sm:letter-spacing-30` to apply the `letter-spacing-30` utility at only small screen sizes at or below 480px or `active:md:letter-spacing-30` to apply the `letter-spacing-30` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :letter-spacing number px` p e `active:md:letter-spacing-30` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:letter-spacing-30 focus:letter-spacing-30 hover:letter-spacing-30 active letter spacing focus letter spacing hover letter spacing active:sm:letter-spacing-30 focus:sm:letter-spacing-30 hover:sm:letter-spacing-30 active small screens letter spacing focus small screens letter spacing hover small screens letter spacing active:md:letter-spacing-30 focus:md:letter-spacing-30 hover:md:letter-spacing-30 active medium screens letter spacing focus medium screens letter spacing hover medium screens letter spacing active:lg:letter-spacing-30 focus:lg:letter-spacing-30 hover:lg:letter-spacing-30 active large screens letter spacing focus large screens letter spacing hover large screens letter spacing sources letter-spacing https: developer mozilla org en-us docs web css letter-spacing '
---

| _greenCSS_                | CSS class example                               | minimum Value | maximum Value | Step |
| ------------------------- | ----------------------------------------------- | ------------- | ------------- | ---- |
| letter-spacing-{number}px | .letter-spacing-30 { letter-spacing: 30; }      | -30           | 30            | +-1  |
| letter-spacing-neg-30     | .letter-spacing-neg-30 { letter-spacing: -30; } | -             | -             | -    |

## Custom Sizing variables

Control the Letter Spacing on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your Letter Spacing `letter-spacing-{number}px` - ranging from -30 to 30 with a step of +-1 or use the `letter-spacing-{number}px` to use the default CSS classes like `letter-spacing-neg-30`.

```html
<h1 class="letter-spacing-30 text-30px">{title}</h1>
...
<p class="letter-spacing-neg-30 text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                       | CSS class example                                         |
| -------------------------------- | --------------------------------------------------------- |
| active:letter-spacing-{number}px | .active\:letter-spacing-30:active { letter-spacing: 30; } |
| focus:letter-spacing-{number}px  | .focus\:letter-spacing-30:focus { letter-spacing: 30; }   |
| hover:letter-spacing-{number}px  | .hover\:letter-spacing-30:focus { letter-spacing: 30; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:letter-spacing-30` to only apply the letter-spacing-30 utility class on hover.

```html
<div class="letter-spacing-neg-30 hover:letter-spacing-30">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:letter-spacing-30 |
| md:         | 480px - 768px  | .md:letter-spacing-30 |
| lg:         | 768px - 1080px | .lg:letter-spacing-30 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:letter-spacing-30` to apply the `letter-spacing-30` utility at only small screen sizes at or below 480px. Or `active:md:letter-spacing-30` to apply the `letter-spacing-30` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:letter-spacing-{number}px` p.e. `active:md:letter-spacing-30`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                  |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:letter-spacing-30 , focus:letter-spacing-30 , hover:letter-spacing-30          | active Letter Spacing, focus Letter Spacing, hover Letter Spacing                                               |
| active:sm:letter-spacing-30 , focus:sm:letter-spacing-30 , hover:sm:letter-spacing-30 | active small screens Letter Spacing, focus small screens Letter Spacing, hover small screens Letter Spacing,    |
| active:md:letter-spacing-30 , focus:md:letter-spacing-30 , hover:md:letter-spacing-30 | active medium screens Letter Spacing, focus medium screens Letter Spacing, hover medium screens Letter Spacing, |
| active:lg:letter-spacing-30 , focus:lg:letter-spacing-30 , hover:lg:letter-spacing-30 | active large screens Letter Spacing, focus large screens Letter Spacing, hover large screens Letter Spacing,    |

## Sources

- [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
