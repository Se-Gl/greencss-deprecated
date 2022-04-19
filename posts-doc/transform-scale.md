---
isBlog: false
title: 'Transform Scale'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the transform scale.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'transform scale, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step scale number scale-1 transform: scale 0 1 ; -30 +30 +1 scale-x number scale-x-1 transform: scalex 1 ; -30 +30 +1 scale-y number scale-y-1 transform: scaley 1 ; -30 +30 +1 custom sizing variables control the transform scale on every html element by using the greencss classes shown above use the following structure to generate your transform scale `scale number ` ranging from -30 to 30 with a step of +1 p e `scale-1` if you only want to scale your element in the horizontal direction use `scale-x number ` p e `scale-x-1` if you only want to scale your element in the vertical direction use `scale-y number ` p e `scale-y-1`  scale negative if you use negative values use `scale-neg number ` p e `scale-neg-30` you can also apply negative classes up to -30 for horizontal scaling `scale-x-neg number ` and vertical scaling elements `scale-y-neg number ` active focus and hover states greencss css class example active:scale keyword active :scale-1:active transform: scale 0 1 ; focus:scale keyword focus :scale-1:focus transform: scale 0 1 ; hover:scale keyword hover :scale-1:focus transform: scale 0 1 ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scale-1` to only apply the scale-1 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scale-1 md: 480px 768px md:scale-1 lg: 768px 1080px lg:scale-1 greencss media queries can also be combined with active focus and hover states for example use `sm:scale-1` to apply the `scale-1` utility at only small screen sizes at or below 480px or `active:md:scale-1` to apply the `scale-1` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scale keyword ` p e `active:md:scale-1` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scale-1 focus:scale-1 hover:scale-1 active scale focus scale hover scale active:sm:scale-1 focus:sm:scale-1 hover:sm:scale-1 active small screens scale focus small screens scale hover small screens scale active:md:scale-1 focus:md:scale-1 hover:md:scale-1 active medium screens scale focus medium screens scale hover medium screens scale active:lg:scale-1 focus:lg:scale-1 hover:lg:scale-1 active large screens scale focus large screens scale hover large screens scale sources scale https: developer mozilla org en-us docs web css scale '
---

| _greenCSS_       | CSS class example                    | minimum Value | maximum Value | Step |
| ---------------- | ------------------------------------ | ------------- | ------------- | ---- |
| scale-{number}   | .scale-1 { transform: scale(0.1); }  | -30           | +30           | +1   |
| scale-x-{number} | .scale-x-1 { transform: scaleX(1); } | -30           | +30           | +1   |
| scale-y-{number} | .scale-y-1 { transform: scaleY(1); } | -30           | +30           | +1   |

## Custom Sizing Variables

Control the transform scale on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your transform scale `scale-{number}` - ranging from -30 to 30 with a step of +1 p.e. `scale-1`. If you only want to scale your element in the horizontal direction, use `scale-x-{number}` p.e. `scale-x-1`. If you only want to scale your element in the vertical direction, use `scale-y-{number}` p.e. `scale-y-1`.

```html
<div class="scale-1">{children}</div>
<div class="scale-x-1">{children}</div>
<div class="scale-y-1">{children}</div>
```

### Scale Negative

If you use negative values, use `scale-neg-{number}` p.e.`scale-neg-30`. You can also apply negative classes up to -30 for horizontal scaling `scale-x-neg-{number}` and vertical scaling elements `scale-y-neg-{number}`.

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                  |
| ---------------------- | -------------------------------------------------- |
| active:scale-{keyword} | .active\:scale-1:active { transform: scale(0.1); } |
| focus:scale-{keyword}  | .focus\:scale-1:focus { transform: scale(0.1); }   |
| hover:scale-{keyword}  | .hover\:scale-1:focus { transform: scale(0.1); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scale-1` to only apply the scale-1 utility class on hover.

```html
<div class="scale-1 hover:scale-10">{children}</div>
<div class="scale-x-1 hover:scale-x-10">{children}</div>
<div class="scale-y-1 hover:scale-y-10">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:scale-1      |
| md:         | 480px - 768px  | .md:scale-1      |
| lg:         | 768px - 1080px | .lg:scale-1      |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scale-1` to apply the `scale-1` utility at only small screen sizes at or below 480px. Or `active:md:scale-1` to apply the `scale-1` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scale-{keyword}` p.e. `active:md:scale-1`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                    | spoken example                                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:scale-1 , focus:scale-1 , hover:scale-1          | active scale, focus scale, hover scale                                               |
| active:sm:scale-1 , focus:sm:scale-1 , hover:sm:scale-1 | active small screens scale, focus small screens scale, hover small screens scale,    |
| active:md:scale-1 , focus:md:scale-1 , hover:md:scale-1 | active medium screens scale, focus medium screens scale, hover medium screens scale, |
| active:lg:scale-1 , focus:lg:scale-1 , hover:lg:scale-1 | active large screens scale, focus large screens scale, hover large screens scale,    |

## Sources

- [scale](https://developer.mozilla.org/en-US/docs/Web/CSS/scale)
