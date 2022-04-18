---
isBlog: false
title: 'Text Orientation'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the text orientation.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'text orientation, text sideways, text rotate'
classNames: ''
plainText: ' greencss css class example orientation-mixed orientation-mixed text-orientation: mixed; orientation-upright orientation-upright text-orientation: upright; orientation-sideways-right orientation-sideways-right text-orientation: sideways-right; orientation-sideways orientation-sideways text-orientation: sideways; custom sizing variables control the text orientation on every html element by using the greencss classes shown above use the following structure to generate your text orientation class `orientation keyword ` and apply the default css classes like `orientation-upright`  active focus and hover states greencss css class example active:orientation keyword active :orientation-mixed:active text-orientation: mixed; focus:orientation keyword focus :orientation-mixed:focus text-orientation: mixed; hover:orientation keyword hover :orientation-mixed:focus text-orientation: mixed; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:orientation-mixed` to only apply the orientation-mixed utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:orientation-mixed md: 480px 768px md:orientation-mixed lg: 768px 1080px lg:orientation-mixed greencss media queries can also be combined with active focus and hover states for example use `sm:orientation-mixed` to apply the `orientation-mixed` utility at only small screen sizes at or below 480px or `active:md:orientation-mixed` to apply the `orientation-mixed` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :orientation keyword ` p e `active:md:orientation-mixed` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:orientation-mixed focus:orientation-mixed hover:orientation-mixed active text orientation focus text orientation hover text orientation active:sm:orientation-mixed focus:sm:orientation-mixed hover:sm:orientation-mixed active small screens text orientation focus small screens text orientation hover small screens text orientation active:md:orientation-mixed focus:md:orientation-mixed hover:md:orientation-mixed active medium screens text orientation focus medium screens text orientation hover medium screens text orientation active:lg:orientation-mixed focus:lg:orientation-mixed hover:lg:orientation-mixed active large screens text orientation focus large screens text orientation hover large screens text orientation sources text-orientation https: developer mozilla org en-us docs web css text-orientation '
---

| _greenCSS_                 | CSS class example                                                 |
| -------------------------- | ----------------------------------------------------------------- |
| orientation-mixed          | .orientation-mixed { text-orientation: mixed; }                   |
| orientation-upright        | .orientation-upright { text-orientation: upright; }               |
| orientation-sideways-right | .orientation-sideways-right { text-orientation: sideways-right; } |
| orientation-sideways       | .orientation-sideways { text-orientation: sideways; }             |

## Custom Sizing variables

Control the text orientation on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your text orientation class `orientation-{keyword}` and apply the default CSS classes like `orientation-upright`.

```html
<h1 class="orientation-mixed text-30px">{title}</h1>
...
<p class="orientation-upright text-15px">{children}</p>
```

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                              |
| ---------------------------- | -------------------------------------------------------------- |
| active:orientation-{keyword} | .active\:orientation-mixed:active { text-orientation: mixed; } |
| focus:orientation-{keyword}  | .focus\:orientation-mixed:focus { text-orientation: mixed; }   |
| hover:orientation-{keyword}  | .hover\:orientation-mixed:focus { text-orientation: mixed; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:orientation-mixed` to only apply the orientation-mixed utility class on hover.

```html
<div class="orientation-upright hover:orientation-mixed">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example      |
| ----------- | -------------- | --------------------- |
| sm:         | 0px - 480px    | .sm:orientation-mixed |
| md:         | 480px - 768px  | .md:orientation-mixed |
| lg:         | 768px - 1080px | .lg:orientation-mixed |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:orientation-mixed` to apply the `orientation-mixed` utility at only small screen sizes at or below 480px. Or `active:md:orientation-mixed` to apply the `orientation-mixed` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:orientation-{keyword}` p.e. `active:md:orientation-mixed`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                        |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:orientation-mixed , focus:orientation-mixed , hover:orientation-mixed          | active text orientation, focus text orientation, hover text orientation                                               |
| active:sm:orientation-mixed , focus:sm:orientation-mixed , hover:sm:orientation-mixed | active small screens text orientation, focus small screens text orientation, hover small screens text orientation,    |
| active:md:orientation-mixed , focus:md:orientation-mixed , hover:md:orientation-mixed | active medium screens text orientation, focus medium screens text orientation, hover medium screens text orientation, |
| active:lg:orientation-mixed , focus:lg:orientation-mixed , hover:lg:orientation-mixed | active large screens text orientation, focus large screens text orientation, hover large screens text orientation,    |

## Sources

- [text-orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)
