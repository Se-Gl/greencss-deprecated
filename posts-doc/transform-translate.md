---
isBlog: false
title: 'Transform Translate'
date: 'May 18. 2022'
excerpt: 'Utility classes for controlling the translate.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'translate, transform'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step translate keyword per translate-50per transform: translate 50% ; 0% 100% +1% translate-x keyword px translate-x-1px transform: translatex 1px ; -100px 100px +1px translate-x keyword rem translate-x-11rem transform: translatex 11rem ; -30rem 30rem +1rem translate-x keyword per translate-x-50per transform: translatex 50% ; -100% 100% +1% translate-y keyword px translate-y-1px transform: translatey 1px ; -100px 100px +1px translate-y keyword rem translate-y-11rem transform: translatey 11rem ; -30rem 30rem +1rem translate-y keyword per translate-y-50per transform: translatey 50% ; -100% 100% +1% custom sizing variables control transform translate on every html element by using the greencss classes shown above use the following structure to generate your translate `translate direction keyword unit ` ranging from 1px to 100px and 11rem to 30rem with a step of +1px +1rem p e `translate-x-20px` 1 `translate keyword unit ` will be used for a translation in all direction available units: `-per` 2 `translate-x keyword unit ` will be used for a translation in the horizontal axis available units: `-per -px -rem` 3 `translate-y keyword unit ` will be used for a translation in the vertical axis available units: `-per -px -rem`  negative translate if you use negative values use `translate direction -neg number unit ` you can apply negative class values depending on its unit: px and % from -100 to 0 and rem from -30rem to 0rem  active focus and hover states greencss css class example active:translate keyword active :translate-x-11rem:active transform: translatex 11rem ; focus:translate keyword focus :translate-x-11rem:focus transform: translatex 11rem ; hover:translate keyword hover :translate-x-11rem:focus transform: translatex 11rem ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:translate-x-11rem` to only apply the translate utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:translate md: 480px 768px md:translate lg: 768px 1080px lg:translate greencss media queries can also be combined with active focus and hover states for example use `sm:translate-x-11rem` to apply the `translate-x-11rem` utility at only small screen sizes at or below 480px or `active:md:translate-x-11rem` to apply the `translate-x-11rem` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :translate direction keyword ` p e `active:md:translate-x-20rem` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:translate focus:translate hover:translate active translate focus translate hover translate active:sm:translate focus:sm:translate hover:sm:translate active small screens translate focus small screens translate hover small screens translate active:md:translate focus:md:translate hover:md:translate active medium screens translate focus medium screens translate hover medium screens translate active:lg:translate focus:lg:translate hover:lg:translate active large screens translate focus large screens translate hover large screens translate sources translate https: developer mozilla org en-us docs web css transform-function translate translatex https: developer mozilla org en-us docs web css transform-function translatex translatey https: developer mozilla org en-us docs web css transform-function translatey '
---

| _greenCSS_               | CSS class example                                    | minimum Value | maximum Value | Step  |
| ------------------------ | ---------------------------------------------------- | ------------- | ------------- | ----- |
| translate-{keyword}per   | .translate-50per { transform: translate(50%); }      | 0%            | 100%          | +1%   |
| translate-x-{keyword}px  | .translate-x-1px { transform: translateX(1px); }     | -100px        | 100px         | +1px  |
| translate-x-{keyword}rem | .translate-x-11rem { transform: translateX(11rem); } | -30rem        | 30rem         | +1rem |
| translate-x-{keyword}per | .translate-x-50per { transform: translateX(50%); }   | -100%         | 100%          | +1%   |
| translate-y-{keyword}px  | .translate-y-1px { transform: translateY(1px); }     | -100px        | 100px         | +1px  |
| translate-y-{keyword}rem | .translate-y-11rem { transform: translateY(11rem); } | -30rem        | 30rem         | +1rem |
| translate-y-{keyword}per | .translate-y-50per { transform: translateY(50%); }   | -100%         | 100%          | +1%   |

## Custom Sizing Variables

Control transform translate on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your translate `translate-{direction}-{keyword}{unit}` - ranging from 1px to 100px and 11rem to 30rem with a step of +1px/+1rem p.e. `translate-x-20px`.

1. `translate-{keyword}{unit}` will be used for a translation in all direction. Available units: `-per`
2. `translate-x-{keyword}{unit}` will be used for a translation in the horizontal axis. Available units: `-per, -px, -rem`
3. `translate-y-{keyword}{unit}` will be used for a translation in the vertical axis. Available units: `-per, -px, -rem`

```html
<h1 class="translate-50per text-30px">{title}</h1>
<h1 class="translate-x-50px text-30px">{title}</h1>
<h1 class="translate-y-10px text-30px">{title}</h1>
```

## Negative Translate

If you use negative values, use `translate-{direction}-neg-{number}{unit}`. You can apply negative class values depending on its unit: px and % from -100 to 0 and rem from -30rem to 0rem.

```html
<div class="translate-x-neg-100per ...">{children}</div>
<div class="translate-x-neg-100px ...">{children}</div>
<div class="translate-x-neg-30rem ...">{children}</div>
<div class="translate-y-neg-100per ...">{children}</div>
<div class="translate-y-neg-100px ...">{children}</div>
<div class="translate-y-neg-30rem ...">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                                   |
| -------------------------- | ------------------------------------------------------------------- |
| active:translate-{keyword} | .active\:translate-x-11rem:active { transform: translateX(11rem); } |
| focus:translate-{keyword}  | .focus\:translate-x-11rem:focus { transform: translateX(11rem); }   |
| hover:translate-{keyword}  | .hover\:translate-x-11rem:focus { transform: translateX(11rem); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:translate-x-11rem` to only apply the translate utility class on hover.

```html
<div class="translate-x-11rem hover:translate-y-30rem">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:translate    |
| md:         | 480px - 768px  | .md:translate    |
| lg:         | 768px - 1080px | .lg:translate    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:translate-x-11rem` to apply the `translate-x-11rem` utility at only small screen sizes at or below 480px. Or `active:md:translate-x-11rem` to apply the `translate-x-11rem` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:translate-{direction}-{keyword}` p.e. `active:md:translate-x-20rem`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| active:translate , focus:translate , hover:translate          | active translate, focus translate, hover translate                                               |
| active:sm:translate , focus:sm:translate , hover:sm:translate | active small screens translate, focus small screens translate, hover small screens translate,    |
| active:md:translate , focus:md:translate , hover:md:translate | active medium screens translate, focus medium screens translate, hover medium screens translate, |
| active:lg:translate , focus:lg:translate , hover:lg:translate | active large screens translate, focus large screens translate, hover large screens translate,    |

## Sources

- [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
- [translateX](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX)
- [translateY](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY)
