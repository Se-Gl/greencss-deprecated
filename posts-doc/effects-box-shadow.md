---
isBlog: false
title: 'Box Shadow'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the box shadow.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Effects'
author: 'Severin Glaser'
keywords: 'box shadow, small shadow, medium shadow, large shadow'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step shadow-small-green shadow-small-green box-shadow: 5px 5px 10px -1px 80f906; default color 10 + -1 shadow-green shadow-green box-shadow: 10px 10px 20px -2 5px 80f906; default color 10 + -1 shadow-large-green shadow-large-green box-shadow: 15px 15px 30px -5px 80f906; default color 10 + -1 custom sizing variables control the shadow color on every html element by using the greencss classes shown above use the following structure to generate your text color `shadow color number ` ranging from the primary primary-colors secondary secondary-colors to primary primary-colors secondary secondary-colors -10 with a step of +1 or use the `shadow color number ` the css classes will look like `shadow-green-10` 1 you can choose between three different types of shadows: small `shadow-small color number ` normal `shadow color number ` and large `shadow-large color number ` 2 check all greencss colors brand colours that you can combine with the box shadows 3 a small color number means that the color has more saturation 4 a high number has more white tones  active focus and hover states greencss css class example active:shadow keyword active :shadow-green:active box-shadow: green; focus:shadow keyword focus :shadow-green:focus box-shadow: green; hover:shadow keyword hover :shadow-green:focus box-shadow: green; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:shadow-green` to only apply the shadow-green utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:shadow-green md: 480px 768px md:shadow-green lg: 768px 1080px lg:shadow-green greencss media queries can also be combined with active focus and hover states for example use `sm:shadow-green` to apply the `shadow-green` utility at only small screen sizes at or below 480px or `active:md:shadow-green` to apply the `shadow-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :shadow keyword ` p e `active:md:shadow-green` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:shadow-green focus:shadow-green hover:shadow-green active box shadow focus box shadow hover box shadow active:sm:shadow-green focus:sm:shadow-green hover:sm:shadow-green active small screens box shadow focus small screens box shadow hover small screens box shadow active:md:shadow-green focus:md:shadow-green hover:md:shadow-green active medium screens box shadow focus medium screens box shadow hover medium screens box shadow active:lg:shadow-green focus:lg:shadow-green hover:lg:shadow-green active large screens box shadow focus large screens box shadow hover large screens box shadow sources box-shadow https: developer mozilla org en-us docs web css box-shadow '
---

| _greenCSS_         | CSS class example                                                | minimum Value | maximum Value | Step |
| ------------------ | ---------------------------------------------------------------- | ------------- | ------------- | ---- |
| shadow-small-green | .shadow-small-green { box-shadow: 5px 5px 10px -1px #80f906; }   | default color | 10            | +/-1 |
| shadow-green       | .shadow-green { box-shadow: 10px 10px 20px -2.5px #80f906; }     | default color | 10            | +/-1 |
| shadow-large-green | .shadow-large-green { box-shadow: 15px 15px 30px -5px #80f906; } | default color | 10            | +/-1 |

## Custom Sizing Variables

Control the shadow color on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text color `shadow-{color}-{number}` - ranging from the [primary](#primary-colors)/[secondary](#secondary-colors) to [primary](#primary-colors)/[secondary](#secondary-colors)-10 with a step of +1 or use the `shadow-{color}-{number}`. The CSS classes will look like `shadow-green-10`.

1. You can choose between three different types of shadows: small `shadow-small-{color}-{number}`, normal `shadow-{color}-{number}` and large `shadow-large-{color}-{number}`
2. Check all [greenCSS colors](/brand/colours) that you can combine with the box shadows.
3. A small color number means that the color has more saturation.
4. A high number has more white tones.

```html
<div class="shadow-blue h-100px w-100px bg-green my-50px">test</div>
<div class="shadow-small-blue h-100px w-100px bg-green my-50px">test</div>
<div class="shadow-large-blue h-100px w-100px bg-green my-50px">test</div>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                   |
| ----------------------- | --------------------------------------------------- |
| active:shadow-{keyword} | .active\:shadow-green:active { box-shadow: green; } |
| focus:shadow-{keyword}  | .focus\:shadow-green:focus { box-shadow: green; }   |
| hover:shadow-{keyword}  | .hover\:shadow-green:focus { box-shadow: green; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:shadow-green` to only apply the shadow-green utility class on hover.

```html
<div class="shadow-green-10 hover:shadow-green h-100px w-100px">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:shadow-green |
| md:         | 480px - 768px  | .md:shadow-green |
| lg:         | 768px - 1080px | .lg:shadow-green |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:shadow-green` to apply the `shadow-green` utility at only small screen sizes at or below 480px. Or `active:md:shadow-green` to apply the `shadow-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:shadow-{keyword}` p.e. `active:md:shadow-green`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                      |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:shadow-green , focus:shadow-green , hover:shadow-green          | active box shadow, focus box shadow, hover box shadow                                               |
| active:sm:shadow-green , focus:sm:shadow-green , hover:sm:shadow-green | active small screens box shadow, focus small screens box shadow, hover small screens box shadow,    |
| active:md:shadow-green , focus:md:shadow-green , hover:md:shadow-green | active medium screens box shadow, focus medium screens box shadow, hover medium screens box shadow, |
| active:lg:shadow-green , focus:lg:shadow-green , hover:lg:shadow-green | active large screens box shadow, focus large screens box shadow, hover large screens box shadow,    |

## Sources

- [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
