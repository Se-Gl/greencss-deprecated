---
isBlog: false
title: 'Skew'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the skew.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'skew, skewing, horizontal skew, vertical skew'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step skew-x number deg skew-x-30deg transform: skewx 30deg ; -30deg 30deg +1° skew-y number deg skew-y-30deg transform: skewy 30deg ; -30deg 30deg +1° custom sizing variables control the skew on every html element by using the greencss classes shown above use the following structure to generate your skew `skew-x number unit ` ranging from -30deg to 30deg with a step of +1° p e `skew-x-30deg`  negative skew if you use negative values use `skew-neg number deg` p e `skew-x-neg-30deg` you can apply negative classes up to -30 for horizontal skewing `skew-x-neg number ` and vertical skewing elements `skew-y-neg number ` active focus and hover states greencss css class example active:skew-x number unit active :skew-x-30deg:active transform: skewx 30deg ; focus:skew-x number unit focus :skew-x-30deg:focus transform: skewx 30deg ; hover:skew-x number unit hover :skew-x-30deg:focus transform: skewx 30deg ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:skew-x-30deg` to only apply the skew-x-30deg utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:skew-x-30deg md: 480px 768px md:skew-x-30deg lg: 768px 1080px lg:skew-x-30deg greencss media queries can also be combined with active focus and hover states for example use `sm:skew-x-30deg` to apply the `skew-x-30deg` utility at only small screen sizes at or below 480px or `active:md:skew-x-30deg` to apply the `skew-x-30deg` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :skew-x number unit ` p e `active:md:skew-x-30deg` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:skew-x-30deg focus:skew-x-30deg hover:skew-x-30deg active skew focus skew hover skew active:sm:skew-x-30deg focus:sm:skew-x-30deg hover:sm:skew-x-30deg active small screens skew focus small screens skew hover small screens skew active:md:skew-x-30deg focus:md:skew-x-30deg hover:md:skew-x-30deg active medium screens skew focus medium screens skew hover medium screens skew active:lg:skew-x-30deg focus:lg:skew-x-30deg hover:lg:skew-x-30deg active large screens skew focus large screens skew hover large screens skew sources transform https: developer mozilla org en-us docs web css transform '
---

| _greenCSS_         | CSS class example                          | minimum Value | maximum Value | Step |
| ------------------ | ------------------------------------------ | ------------- | ------------- | ---- |
| skew-x-{number}deg | .skew-x-30deg { transform: skewX(30deg); } | -30deg        | 30deg         | +1°  |
| skew-y-{number}deg | .skew-y-30deg { transform: skewY(30deg); } | -30deg        | 30deg         | +1°  |

## Custom Sizing Variables

Control the skew on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your skew `skew-x-{number}{unit}` - ranging from -30deg to 30deg with a step of +1° p.e. `skew-x-30deg`.

```html
<h1 class="skew-x-30deg text-30px">{title}</h1>
```

### Negative Skew

If you use negative values, use `skew-neg-{number}deg` p.e.`skew-x-neg-30deg`. You can apply negative classes up to -30 for horizontal skewing `skew-x-neg-{number}` and vertical skewing elements `skew-y-neg-{number}`.

## Active, focus, and hover states

| _greenCSS_                    | CSS class example                                         |
| ----------------------------- | --------------------------------------------------------- |
| active:skew-x-{number}-{unit} | .active\:skew-x-30deg:active { transform: skewX(30deg); } |
| focus:skew-x-{number}-{unit}  | .focus\:skew-x-30deg:focus { transform: skewX(30deg); }   |
| hover:skew-x-{number}-{unit}  | .hover\:skew-x-30deg:focus { transform: skewX(30deg); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:skew-x-30deg` to only apply the skew-x-30deg utility class on hover.

```html
<h1 class="skew-x-30deg hover:skew-x-neg-30deg text-30px">{title}</h1>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:skew-x-30deg |
| md:         | 480px - 768px  | .md:skew-x-30deg |
| lg:         | 768px - 1080px | .lg:skew-x-30deg |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:skew-x-30deg` to apply the `skew-x-30deg` utility at only small screen sizes at or below 480px. Or `active:md:skew-x-30deg` to apply the `skew-x-30deg` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:skew-x-{number}-{unit}` p.e. `active:md:skew-x-30deg`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                    |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| active:skew-x-30deg , focus:skew-x-30deg , hover:skew-x-30deg          | active skew, focus skew, hover skew                                               |
| active:sm:skew-x-30deg , focus:sm:skew-x-30deg , hover:sm:skew-x-30deg | active small screens skew, focus small screens skew, hover small screens skew,    |
| active:md:skew-x-30deg , focus:md:skew-x-30deg , hover:md:skew-x-30deg | active medium screens skew, focus medium screens skew, hover medium screens skew, |
| active:lg:skew-x-30deg , focus:lg:skew-x-30deg , hover:lg:skew-x-30deg | active large screens skew, focus large screens skew, hover large screens skew,    |

## Sources

- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
