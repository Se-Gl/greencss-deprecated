---
isBlog: false
title: 'Text Transform'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text transform.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text transform, uppercase, lowercase, capitalize'
classNames: ''
plainText: ' greencss css class example uppercase uppercase text-transform: uppercase; lowercase lowercase text-transform: lowercase; capitalize capitalize text-transform: capitalize; no-transform no-transform text-transform: none; full-width full-width text-transform: full-width; full-size-kana full-size-kana text-transform: full-size-kana; custom sizing variables control the text transform on every html element by using the greencss classes shown above use the following structure to generate your text transform ` keyword ` and apply the default css classes like `lowercase`  active focus and hover states greencss css class example active: keyword active :uppercase:active text-transform: uppercase; focus: keyword focus :uppercase:focus text-transform: uppercase; hover: keyword hover :uppercase:focus text-transform: uppercase; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:uppercase` to only apply the uppercase utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:uppercase md: 480px 768px md:uppercase lg: 768px 1080px lg:uppercase greencss media queries can also be combined with active focus and hover states for example use `sm:uppercase` to apply the `uppercase` utility at only small screen sizes at or below 480px or `active:md:uppercase` to apply the `uppercase` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : keyword ` p e `active:md:uppercase` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:uppercase focus:uppercase hover:uppercase active text transform focus text transform hover text transform active:sm:uppercase focus:sm:uppercase hover:sm:uppercase active small screens text transform focus small screens text transform hover small screens text transform active:md:uppercase focus:md:uppercase hover:md:uppercase active medium screens text transform focus medium screens text transform hover medium screens text transform active:lg:uppercase focus:lg:uppercase hover:lg:uppercase active large screens text transform focus large screens text transform hover large screens text transform sources text-transform https: developer mozilla org en-us docs web css text-transform '
---

| _greenCSS_     | CSS class example                                   |
| -------------- | --------------------------------------------------- |
| uppercase      | .uppercase { text-transform: uppercase; }           |
| lowercase      | .lowercase { text-transform: lowercase; }           |
| capitalize     | .capitalize { text-transform: capitalize; }         |
| no-transform   | .no-transform { text-transform: none; }             |
| full-width     | .full-width { text-transform: full-width; }         |
| full-size-kana | .full-size-kana { text-transform: full-size-kana; } |

## Custom Sizing variables

Control the text transform on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text transform `{keyword}` and apply the default CSS classes like `lowercase`.

```html
<h1 class="capitalize text-30px">{title}</h1>
...
<p class="lowercase text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_       | CSS class example                                        |
| ---------------- | -------------------------------------------------------- |
| active:{keyword} | .active\:uppercase:active { text-transform: uppercase; } |
| focus:{keyword}  | .focus\:uppercase:focus { text-transform: uppercase; }   |
| hover:{keyword}  | .hover\:uppercase:focus { text-transform: uppercase; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:uppercase` to only apply the uppercase utility class on hover.

```html
<div class="lowercase hover:uppercase">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:uppercase    |
| md:         | 480px - 768px  | .md:uppercase    |
| lg:         | 768px - 1080px | .lg:uppercase    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:uppercase` to apply the `uppercase` utility at only small screen sizes at or below 480px. Or `active:md:uppercase` to apply the `uppercase` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{keyword}` p.e. `active:md:uppercase`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                                  |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:uppercase , focus:uppercase , hover:uppercase          | active text transform, focus text transform, hover text transform                                               |
| active:sm:uppercase , focus:sm:uppercase , hover:sm:uppercase | active small screens text transform, focus small screens text transform, hover small screens text transform,    |
| active:md:uppercase , focus:md:uppercase , hover:md:uppercase | active medium screens text transform, focus medium screens text transform, hover medium screens text transform, |
| active:lg:uppercase , focus:lg:uppercase , hover:lg:uppercase | active large screens text transform, focus large screens text transform, hover large screens text transform,    |

## Sources

- [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
