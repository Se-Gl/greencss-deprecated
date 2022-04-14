---
isBlog: false
title: 'Font Size'
date: 'Apr 13. 2022'
excerpt: 'Utility classes for controlling the font size.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Font Size, typography, font-size, responsive font'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step text number px text-10px font-size: 1px; 0 100 +1px text number px text-300px font-size: 300px; 110 300 +10px rel-text number vw rel-text-10vw font-size: 1px; 0 100 +1vw custom sizing variables control the font size on every html element by using the greenCSS classes shown above `text-1px` equals to the css class `font-size: 1px` `text-2px` equals to the css class `font-size: 2px` the maximum would be `text-100px` it equals to the css class `font-size: 100px` in general: the greenCSS class steps are +1px ranging from 0-100 if you want to use even highter font sizes you can use font sizes which starts from `text-110px` up to `text-300px` those classes have a step of +10px you can also use responsive font sizes `rel-text number vw` ranging from 0vw to 100vw with a step of +1vw  active focus and hover states greenCSS css class example active: variable active :text-10px:active font-size: 10px; focus: variable focus :text-10px:focus font-size: 10px; hover: variable hover :text-10px:focus font-size: 10px; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:text-10px` to only apply the text-10px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:text-10px md: 480px 768px md:text-10px lg: 768px 1080px lg:text-10px greenCSS media queries can also be combined with active focus and hover states for example use `sm:text-10px` to apply the `text-10px` utility at only small screen sizes at or below 480px or `active:md:text-10px` to apply the `text-10px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : number px` p e `active:md:text-10px` 1 the structure for the relative font size is as follows: ` conditional state : media query :text number vw` p e `active:md:text-10vw` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:text-10px focus:text-10px hover:text-10px active font size focus font size hover font size active:sm:text-10px focus:sm:text-10px hover:sm:text-10px active small screens font size focus small screens font size hover small screens font size active:md:text-10px focus:md:text-10px hover:md:text-10px active medium screens font size focus medium screens font size hover medium screens font size active:lg:text-10px focus:lg:text-10px hover:lg:text-10px active large screens font size focus large screens font size hover large screens font size sources font-size https: developer mozilla org en-us docs web css font-size '
---

| _greenCSS_          | CSS class example                  | minimum Value | maximum Value | Step  |
| ------------------- | ---------------------------------- | ------------- | ------------- | ----- |
| text-{number}px     | .text-10px { font-size: 1px; }     | 0             | 100           | +1px  |
| text-{number}px     | .text-300px { font-size: 300px; }  | 110           | 300           | +10px |
| rel-text-{number}vw | .rel-text-10vw { font-size: 1px; } | 0             | 100           | +1vw  |

## Custom Sizing variables

Control the font size on every HTML element by using the greenCSS classes shown above. `text-1px` equals to the css class `font-size: 1px`, `text-2px` equals to the css class `font-size: 2px` the maximum would be `text-100px`, it equals to the css class `font-size: 100px`. In general: the greenCSS class steps are +1px ranging from 0-100. If you want to use even highter font sizes you can use font sizes which starts from `text-110px` up to `text-300px` - those classes have a step of +10px. You can also use responsive font sizes `rel-text-{number}vw` - ranging from 0vw to 100vw with a step of +1vw.

```html
<div class="text-10px">{children}</div>
<div class="text-110px">{children}</div>
<div class="text-120px">{children}</div>
<div class="rel-text-10vw">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_        | CSS class example                              |
| ----------------- | ---------------------------------------------- |
| active:{variable} | .active\:text-10px:active { font-size: 10px; } |
| focus:{variable}  | .focus\:text-10px:focus { font-size: 10px; }   |
| hover:{variable}  | .hover\:text-10px:focus { font-size: 10px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:text-10px` to only apply the text-10px utility class on hover.

```html
<div class="text-10px hover:text-20px">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:text-10px    |
| md:         | 480px - 768px  | .md:text-10px    |
| lg:         | 768px - 1080px | .lg:text-10px    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-10px` to apply the `text-10px` utility at only small screen sizes at or below 480px. Or `active:md:text-10px` to apply the `text-10px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{number}px` p.e. `active:md:text-10px`
1. The structure for the relative font size is as follows: `{conditional state}:{media query}:text-{number}vw` p.e. `active:md:text-10vw`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| active:text-10px , focus:text-10px , hover:text-10px          | active font size, focus font size, hover font size                                               |
| active:sm:text-10px , focus:sm:text-10px , hover:sm:text-10px | active small screens font size, focus small screens font size, hover small screens font size,    |
| active:md:text-10px , focus:md:text-10px , hover:md:text-10px | active medium screens font size, focus medium screens font size, hover medium screens font size, |
| active:lg:text-10px , focus:lg:text-10px , hover:lg:text-10px | active large screens font size, focus large screens font size, hover large screens font size,    |

## Sources

- [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
