---
isBlog: false
title: 'Outline Style'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the outline style.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'outline style, '
classNames: ''
plainText: ' greencss css class example outline-none outline-none outline-style: none; outline-solid outline-solid outline-style: solid; outline-dashed outline-dashed outline-style: dashed; outline-dotted outline-dotted outline-style: dotted; outline-double outline-double outline-style: double; outline-hidden outline-hidden outline-style: hidden; custom sizing variables control the outline style on every html element by using the greencss classes shown above use the following structure to generate your outline style class `outline keyword ` and apply the default css classes like `outline-solid`  setting an outline button if you want to adjust your outline you need to add the following three greencss classes: 1 the outline width docs outline-width p e `outline-1px` 2 the outline style p e `outline-solid` 3 the outline color docs outline-color p e `outline-green-5` 4 optional: the outline offset docs outline-offset distance p e `outline-offset-5px` active focus and hover states greencss css class example active:outline color number active :outline-none:active outline-style: none; focus:outline color number focus :outline-none:focus outline-style: none; hover:outline color number hover :outline-none:focus outline-style: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:outline-none` to only apply the outline-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:outline-none md: 480px 768px md:outline-none lg: 768px 1080px lg:outline-none greencss media queries can also be combined with active focus and hover states for example use `sm:outline-none` to apply the `outline-none` utility at only small screen sizes at or below 480px or `active:md:outline-none` to apply the `outline-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :outline color number ` p e `active:md:outline-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:outline-none focus:outline-none hover:outline-none active outline style focus outline style hover outline style active:sm:outline-none focus:sm:outline-none hover:sm:outline-none active small screens outline style focus small screens outline style hover small screens outline style active:md:outline-none focus:md:outline-none hover:md:outline-none active medium screens outline style focus medium screens outline style hover medium screens outline style active:lg:outline-none focus:lg:outline-none hover:lg:outline-none active large screens outline style focus large screens outline style hover large screens outline style sources outline-style https: developer mozilla org en-us docs web css outline-style '
---

| _greenCSS_     | CSS class example                          |
| -------------- | ------------------------------------------ |
| outline-none   | .outline-none { outline-style: none; }     |
| outline-solid  | .outline-solid { outline-style: solid; }   |
| outline-dashed | .outline-dashed { outline-style: dashed; } |
| outline-dotted | .outline-dotted { outline-style: dotted; } |
| outline-double | .outline-double { outline-style: double; } |
| outline-hidden | .outline-hidden { outline-style: hidden; } |

## Custom Sizing Variables

Control the outline style on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your outline style class `outline-{keyword}` and apply the default CSS classes like `outline-solid`.

```html
<button class="outline-solid outline-green-5 outline-1px outline-offset-5px text-30px">{title}</button>
```

### Setting an outline button

If you want to adjust your outline you need to add the following three greenCSS classes:

1. The [outline width](/docs/outline-width) p.e. `outline-1px`
2. The outline style p.e. `outline-solid`
3. The [outline color](/docs/outline-color) p.e. `outline-green-5`
4. Optional: the [outline offset](/docs/outline-offset) distance p.e. `outline-offset-5px`

## Active, focus, and hover states

| _greenCSS_                      | CSS class example                                     |
| ------------------------------- | ----------------------------------------------------- |
| active:outline-{color}-{number} | .active\:outline-none:active { outline-style: none; } |
| focus:outline-{color}-{number}  | .focus\:outline-none:focus { outline-style: none; }   |
| hover:outline-{color}-{number}  | .hover\:outline-none:focus { outline-style: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:outline-none` to only apply the outline-none utility class on hover.

```html
<button class="outline-solid hover:outline-none outline-green-5 outline-1px outline-offset-5px text-30px">
  {title}
</button>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:outline-none |
| md:         | 480px - 768px  | .md:outline-none |
| lg:         | 768px - 1080px | .lg:outline-none |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:outline-none` to apply the `outline-none` utility at only small screen sizes at or below 480px. Or `active:md:outline-none` to apply the `outline-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:outline-{color}-{number}` p.e. `active:md:outline-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                               |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:outline-none , focus:outline-none , hover:outline-none          | active outline style, focus outline style, hover outline style                                               |
| active:sm:outline-none , focus:sm:outline-none , hover:sm:outline-none | active small screens outline style, focus small screens outline style, hover small screens outline style,    |
| active:md:outline-none , focus:md:outline-none , hover:md:outline-none | active medium screens outline style, focus medium screens outline style, hover medium screens outline style, |
| active:lg:outline-none , focus:lg:outline-none , hover:lg:outline-none | active large screens outline style, focus large screens outline style, hover large screens outline style,    |

## Sources

- [outline-style](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style)
