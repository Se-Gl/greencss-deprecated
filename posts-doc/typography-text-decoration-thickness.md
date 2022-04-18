---
isBlog: false
title: 'Text Decoration Thickness'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text decoration thickness.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text decoration thickness, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step text-decoration-thickness-auto text-decoration-thickness-auto text-decoration-thickness: auto; text-decoration-thickness-from-font text-decoration-thickness-from-font text-decoration-thickness: from-font; text-decoration-thickness number px text-decoration-thickness-1px text-decoration-thickness: 1px; -30px 30px + 1px custom sizing variables control the text decoration thickness on every html element by using the greencss classes shown above use the following structure to generate your text decoration thickness `text-decoration-thickness number px` ranging from -30px `text-decoration-thickness-neg-30px` to 30px `text-decoration-thickness-30px` with a step of +1px or use the `text-decoration-thickness keyword ` to use the default css classes like `text-decoration-thickness-from-font`  active focus and hover states greencss css class example active:text-decoration-thickness keyword active :text-decoration-thickness-5px:active text-decoration-thickness: 5px; focus:text-decoration-thickness keyword focus :text-decoration-thickness-5px:focus text-decoration-thickness: 5px; hover:text-decoration-thickness keyword hover :text-decoration-thickness-5px:focus text-decoration-thickness: 5px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-decoration-thickness-auto` to only apply the text-decoration-thickness-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:text-decoration-thickness-auto md: 480px 768px md:text-decoration-thickness-auto lg: 768px 1080px lg:text-decoration-thickness-auto greencss media queries can also be combined with active focus and hover states for example use `sm:text-decoration-thickness-auto` to apply the `text-decoration-thickness-auto` utility at only small screen sizes at or below 480px or `active:md:text-decoration-thickness-auto` to apply the `text-decoration-thickness-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :text-decoration-thickness keyword ` p e `active:md:text-decoration-thickness-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:text-decoration-thickness-auto focus:text-decoration-thickness-auto hover:text-decoration-thickness-auto active text decoration thickness focus text decoration thickness hover text decoration thickness active:sm:text-decoration-thickness-auto focus:sm:text-decoration-thickness-auto hover:sm:text-decoration-thickness-auto active small screens text decoration thickness focus small screens text decoration thickness hover small screens text decoration thickness active:md:text-decoration-thickness-auto focus:md:text-decoration-thickness-auto hover:md:text-decoration-thickness-auto active medium screens text decoration thickness focus medium screens text decoration thickness hover medium screens text decoration thickness active:lg:text-decoration-thickness-auto focus:lg:text-decoration-thickness-auto hover:lg:text-decoration-thickness-auto active large screens text decoration thickness focus large screens text decoration thickness hover large screens text decoration thickness sources text-decoration-thickness https: developer mozilla org en-us docs web css text-decoration-thickness '
---

| _greenCSS_                           | CSS class example                                                              | minimum Value | maximum Value | Step    |
| ------------------------------------ | ------------------------------------------------------------------------------ | ------------- | ------------- | ------- |
| text-decoration-thickness-auto       | .text-decoration-thickness-auto { text-decoration-thickness: auto; }           | -             | -             | -       |
| text-decoration-thickness-from-font  | .text-decoration-thickness-from-font { text-decoration-thickness: from-font; } | -             | -             | -       |
| text-decoration-thickness-{number}px | .text-decoration-thickness-1px { text-decoration-thickness: 1px; }             | -30px         | 30px          | +/- 1px |

## Custom Sizing variables

Control the text decoration thickness on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text decoration thickness `text-decoration-thickness-{number}px` - ranging from -30px `text-decoration-thickness-neg-30px` to 30px `text-decoration-thickness-30px` with a step of +1px or use the `text-decoration-thickness-{keyword}` to use the default CSS classes like `text-decoration-thickness-from-font`.

```html
<p class="text-decoration-thickness-auto text-30px">{title}</p>
...
<p class="text-decoration-thickness-from-font text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                                 | CSS class example                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------- |
| active:text-decoration-thickness-{keyword} | .active\:text-decoration-thickness-5px:active { text-decoration-thickness: 5px; } |
| focus:text-decoration-thickness-{keyword}  | .focus\:text-decoration-thickness-5px:focus { text-decoration-thickness: 5px; }   |
| hover:text-decoration-thickness-{keyword}  | .hover\:text-decoration-thickness-5px:focus { text-decoration-thickness: 5px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-decoration-thickness-auto` to only apply the text-decoration-thickness-auto utility class on hover.

```html
<div class="text-decoration-thickness-from-font hover:text-decoration-thickness-5px">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example                   |
| ----------- | -------------- | ---------------------------------- |
| sm:         | 0px - 480px    | .sm:text-decoration-thickness-auto |
| md:         | 480px - 768px  | .md:text-decoration-thickness-auto |
| lg:         | 768px - 1080px | .lg:text-decoration-thickness-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-decoration-thickness-auto` to apply the `text-decoration-thickness-auto` utility at only small screen sizes at or below 480px. Or `active:md:text-decoration-thickness-auto` to apply the `text-decoration-thickness-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:text-decoration-thickness-{keyword}` p.e. `active:md:text-decoration-thickness-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                                         | spoken example                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| active:text-decoration-thickness-auto , focus:text-decoration-thickness-auto , hover:text-decoration-thickness-auto          | active text decoration thickness, focus text decoration thickness, hover text decoration thickness                                               |
| active:sm:text-decoration-thickness-auto , focus:sm:text-decoration-thickness-auto , hover:sm:text-decoration-thickness-auto | active small screens text decoration thickness, focus small screens text decoration thickness, hover small screens text decoration thickness,    |
| active:md:text-decoration-thickness-auto , focus:md:text-decoration-thickness-auto , hover:md:text-decoration-thickness-auto | active medium screens text decoration thickness, focus medium screens text decoration thickness, hover medium screens text decoration thickness, |
| active:lg:text-decoration-thickness-auto , focus:lg:text-decoration-thickness-auto , hover:lg:text-decoration-thickness-auto | active large screens text decoration thickness, focus large screens text decoration thickness, hover large screens text decoration thickness,    |

## Sources

- [text-decoration-thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
