---
isBlog: false
title: 'Appearance'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the appearance.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'appearance, '
classNames: ''
plainText: ' greencss css class example appearance-none appearance-none appearance: none; appearance-auto appearance-auto appearance: auto; custom sizing variables control the appearance on every html element by using the greencss classes shown above use the following structure to generate your appearance class `appearance keyword ` and apply the default css classes like `appearance-auto`  active focus and hover states greencss css class example active:appearance keyword active :appearance-none:active appearance: none; focus:appearance keyword focus :appearance-none:focus appearance: none; hover:appearance keyword hover :appearance-none:focus appearance: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:appearance-none` to only apply the appearance-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:appearance-none md: 480px 768px md:appearance-none lg: 768px 1080px lg:appearance-none greencss media queries can also be combined with active focus and hover states for example use `sm:appearance-none` to apply the `appearance-none` utility at only small screen sizes at or below 480px or `active:md:appearance-none` to apply the `appearance-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :appearance keyword ` p e `active:md:appearance-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:appearance-none focus:appearance-none hover:appearance-none active appearance focus appearance hover appearance active:sm:appearance-none focus:sm:appearance-none hover:sm:appearance-none active small screens appearance focus small screens appearance hover small screens appearance active:md:appearance-none focus:md:appearance-none hover:md:appearance-none active medium screens appearance focus medium screens appearance hover medium screens appearance active:lg:appearance-none focus:lg:appearance-none hover:lg:appearance-none active large screens appearance focus large screens appearance hover large screens appearance sources appearance https: developer mozilla org en-us docs web css appearance '
---

| _greenCSS_      | CSS class example                      |
| --------------- | -------------------------------------- |
| appearance-none | .appearance-none { appearance: none; } |
| appearance-auto | .appearance-auto { appearance: auto; } |

## Custom Sizing Variables

Control the appearance on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your appearance class `appearance-{keyword}` and apply the default CSS classes like `appearance-auto`.

```html
<select class="appearance-none">
  <option>{option}</option>
</select>
```

## Active, focus, and hover states

| _greenCSS_                  | CSS class example                                     |
| --------------------------- | ----------------------------------------------------- |
| active:appearance-{keyword} | .active\:appearance-none:active { appearance: none; } |
| focus:appearance-{keyword}  | .focus\:appearance-none:focus { appearance: none; }   |
| hover:appearance-{keyword}  | .hover\:appearance-none:focus { appearance: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:appearance-none` to only apply the appearance-none utility class on hover.

```html
<select class="appearance-auto hover:appearance-none">
  <option>{option}</option>
</select>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example    |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:appearance-none |
| md:         | 480px - 768px  | .md:appearance-none |
| lg:         | 768px - 1080px | .lg:appearance-none |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:appearance-none` to apply the `appearance-none` utility at only small screen sizes at or below 480px. Or `active:md:appearance-none` to apply the `appearance-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:appearance-{keyword}` p.e. `active:md:appearance-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                      |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:appearance-none , focus:appearance-none , hover:appearance-none          | active appearance, focus appearance, hover appearance                                               |
| active:sm:appearance-none , focus:sm:appearance-none , hover:sm:appearance-none | active small screens appearance, focus small screens appearance, hover small screens appearance,    |
| active:md:appearance-none , focus:md:appearance-none , hover:md:appearance-none | active medium screens appearance, focus medium screens appearance, hover medium screens appearance, |
| active:lg:appearance-none , focus:lg:appearance-none , hover:lg:appearance-none | active large screens appearance, focus large screens appearance, hover large screens appearance,    |

## Sources

- [appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
