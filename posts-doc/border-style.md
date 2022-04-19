---
isBlog: false
title: 'Border Style'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the border style.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'border style, dotted border, solid border, hide border'
classNames: ''
plainText: ' greencss css class example border-solid border-solid border-style: solid; border-dashed border-dashed border-style: dashed; border-dotted border-dotted border-style: dotted; border-double border-double border-style: double; border-hidden border-hidden border-style: hidden; border-none border-none border-style: none; custom sizing variables control the border style on every html element by using the greencss classes shown above use the following structure to generate your border style class `border keyword ` and apply the default css classes like `border-dashed`  setting a border if you want to adjust your border you need to add the following three greencss classes: 1 the border width docs border-width p e `border-10px` 2 the border style p e `border-solid` 3 the border color docs border-color p e `border-green` active focus and hover states greencss css class example active:border keyword active :border-solid:active border-style: solid; focus:border keyword focus :border-solid:focus border-style: solid; hover:border keyword hover :border-solid:focus border-style: solid; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:border-solid` to only apply the border-solid utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:border-solid md: 480px 768px md:border-solid lg: 768px 1080px lg:border-solid greencss media queries can also be combined with active focus and hover states for example use `sm:border-solid` to apply the `border-solid` utility at only small screen sizes at or below 480px or `active:md:border-solid` to apply the `border-solid` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :border keyword ` p e `active:md:border-solid` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:border-solid focus:border-solid hover:border-solid active border style focus border style hover border style active:sm:border-solid focus:sm:border-solid hover:sm:border-solid active small screens border style focus small screens border style hover small screens border style active:md:border-solid focus:md:border-solid hover:md:border-solid active medium screens border style focus medium screens border style hover medium screens border style active:lg:border-solid focus:lg:border-solid hover:lg:border-solid active large screens border style focus large screens border style hover large screens border style sources border-style https: developer mozilla org en-us docs web css border-style '
---

| _greenCSS_    | CSS class example                        |
| ------------- | ---------------------------------------- |
| border-solid  | .border-solid { border-style: solid; }   |
| border-dashed | .border-dashed { border-style: dashed; } |
| border-dotted | .border-dotted { border-style: dotted; } |
| border-double | .border-double { border-style: double; } |
| border-hidden | .border-hidden { border-style: hidden; } |
| border-none   | .border-none { border-style: none; }     |

## Custom Sizing Variables

Control the border style on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your border style class `border-{keyword}` and apply the default CSS classes like `border-dashed`.

```html
<div class="border-solid border-green border-10px h-50rem w-50rem bg-green-10">{title}</div>
```

### Setting a border

If you want to adjust your border you need to add the following three greenCSS classes:

1. The [border width](/docs/border-width) p.e. `border-10px`
2. The border style p.e. `border-solid`
3. The [border color](/docs/border-color) p.e. `border-green`

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                     |
| ----------------------- | ----------------------------------------------------- |
| active:border-{keyword} | .active\:border-solid:active { border-style: solid; } |
| focus:border-{keyword}  | .focus\:border-solid:focus { border-style: solid; }   |
| hover:border-{keyword}  | .hover\:border-solid:focus { border-style: solid; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:border-solid` to only apply the border-solid utility class on hover.

```html
<div class="border-dashed hover:border-solid">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:border-solid |
| md:         | 480px - 768px  | .md:border-solid |
| lg:         | 768px - 1080px | .lg:border-solid |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:border-solid` to apply the `border-solid` utility at only small screen sizes at or below 480px. Or `active:md:border-solid` to apply the `border-solid` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:border-{keyword}` p.e. `active:md:border-solid`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                            |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:border-solid , focus:border-solid , hover:border-solid          | active border style, focus border style, hover border style                                               |
| active:sm:border-solid , focus:sm:border-solid , hover:sm:border-solid | active small screens border style, focus small screens border style, hover small screens border style,    |
| active:md:border-solid , focus:md:border-solid , hover:md:border-solid | active medium screens border style, focus medium screens border style, hover medium screens border style, |
| active:lg:border-solid , focus:lg:border-solid , hover:lg:border-solid | active large screens border style, focus large screens border style, hover large screens border style,    |

## Sources

- [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
