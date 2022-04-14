---
isBlog: false
title: 'Drop Shadow'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to enhance drop shadow with colours.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Drop Shadow, filter, filters, colours, shadow'
classNames: ''
plainText: ' greenCSS css class example drop-shadow colour drop-shadow-black filter: drop-shadow 10px 10px 20px 101010 ; how to work the drop shadow filter use the `drop-shadow colour ` utilities to set the colour of the drop shadow for an element have a closel look which colours brand colours are available note `white` and `transparent` do not offer any descending colour classes  active focus and hover states greenCSS css class example active:drop-shadow colour active :drop-shadow-black-5:active filter: drop-shadow 10px 10px 20px 4d4d4d ; focus:drop-shadow colour focus :drop-shadow-black-5:focus filter: drop-shadow 10px 10px 20px 4d4d4d ; hover:drop-shadow colour hover :drop-shadow-black-5:hover filter: drop-shadow 10px 10px 20px 4d4d4d ; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:drop-shadow-black-5` to only apply the drop-shadow-black-5 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:drop-shadow-black-5 md: 480px 768px md:drop-shadow-black-5 lg: 768px 1080px lg:drop-shadow-black-5 greenCSS media queries can also be combined with active focus and hover states for example use `sm:drop-shadow-black-5` to apply the drop-shadow-black-5 utility at only small screen sizes at or below 480px or `active:md:drop-shadow-black-5` to apply the drop-shadow-black-5 utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :drop-shadow colour ` p e `active:md:drop-shadow-black-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:drop-shadow-black-5 focus:drop-shadow-black-5 hover:drop-shadow-black-5 active drop shadow focus drop shadow hover drop shadow active:sm:drop-shadow-black-5 focus:sm:drop-shadow-black-5 hover:sm:drop-shadow-black-5 active small screens drop shadow focus small screens drop shadow hover small screens drop shadow active:md:drop-shadow-black-5 focus:md:drop-shadow-black-5 hover:md:drop-shadow-black-5 active medium screens drop shadow focus medium screens drop shadow hover medium screens drop shadow active:lg:drop-shadow-black-5 focus:lg:drop-shadow-black-5 hover:lg:drop-shadow-black-5 active large screens drop shadow focus large screens drop shadow hover large screens drop shadow sources drop-shadow https: developer mozilla org en-us docs web css filter-function drop-shadow '
---

| _greenCSS_           | CSS class example                                                  |
| -------------------- | ------------------------------------------------------------------ |
| drop-shadow-{colour} | .drop-shadow-black { filter: drop-shadow(10px 10px 20px #101010);} |

## How to work the drop shadow filter

Use the `drop-shadow-{colour}` utilities to set the colour of the drop shadow for an element. Have a closel look which [colours](/brand/colours) are available. Note, `white` and `transparent` do not offer any descending colour classes.

```html
<!-- no drop shadow -->
<div class="drop-shadow-transparent">{children}</div>
<!-- white shadow -->
<div class="drop-shadow-white">{children}</div>
<!-- black-5 shadow -->
<div class="drop-shadow-black-5">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                  | CSS class example                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------ |
| active:drop-shadow-{colour} | .active\:drop-shadow-black-5:active { filter: drop-shadow(10px 10px 20px #4d4d4d); } |
| focus:drop-shadow-{colour}  | .focus\:drop-shadow-black-5:focus { filter: drop-shadow(10px 10px 20px #4d4d4d); }   |
| hover:drop-shadow-{colour}  | .hover\:drop-shadow-black-5:hover { filter: drop-shadow(10px 10px 20px #4d4d4d); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:drop-shadow-black-5` to only apply the drop-shadow-black-5 utility class on hover.

```html
<div class="drop-shadow-black hover:drop-shadow-black-5 ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example        |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:drop-shadow-black-5 |
| md:         | 480px - 768px  | .md:drop-shadow-black-5 |
| lg:         | 768px - 1080px | .lg:drop-shadow-black-5 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:drop-shadow-black-5` to apply the drop-shadow-black-5 utility at only small screen sizes at or below 480px. Or `active:md:drop-shadow-black-5` to apply the drop-shadow-black-5 utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:drop-shadow-{colour}` p.e. `active:md:drop-shadow-black-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                        | spoken example                                                                                         |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:drop-shadow-black-5 , focus:drop-shadow-black-5 , hover:drop-shadow-black-5          | active drop shadow, focus drop shadow, hover drop shadow                                               |
| active:sm:drop-shadow-black-5 , focus:sm:drop-shadow-black-5 , hover:sm:drop-shadow-black-5 | active small screens drop shadow, focus small screens drop shadow, hover small screens drop shadow,    |
| active:md:drop-shadow-black-5 , focus:md:drop-shadow-black-5 , hover:md:drop-shadow-black-5 | active medium screens drop shadow, focus medium screens drop shadow, hover medium screens drop shadow, |
| active:lg:drop-shadow-black-5 , focus:lg:drop-shadow-black-5 , hover:lg:drop-shadow-black-5 | active large screens drop shadow, focus large screens drop shadow, hover large screens drop shadow,    |

## Sources

- [drop-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
