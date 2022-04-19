---
isBlog: false
title: 'Outline Width'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the outline width.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'outline width, outline style, outline offset'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step outline-1px outline-1px outline-width: 1px; 0px 10px +1px custom sizing variables control the outline width on every html element by using the greencss classes shown above use the following structure to generate your outline width `outline number px` ranging from 0px to 10px with a step of +1px p e `outline-10px`  setting an outline button if you want to adjust your outline you need to add the following three greencss classes: 1 the outline width p e `outline-10px` 2 the outline style docs outline-style p e `outline-solid` 3 the outline color docs outline-color p e `outline-green-5` 4 optional: the outline offset docs outline-offset distance p e `outline-offset-5px` active focus and hover states greencss css class example active:outline number px active :outline-1px:active outline-width: 1px; focus:outline number px focus :outline-1px:focus outline-width: 1px; hover:outline number px hover :outline-1px:focus outline-width: 1px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:outline-1px` to only apply the outline-1px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:outline-1px md: 480px 768px md:outline-1px lg: 768px 1080px lg:outline-1px greencss media queries can also be combined with active focus and hover states for example use `sm:outline-1px` to apply the `outline-1px` utility at only small screen sizes at or below 480px or `active:md:outline-1px` to apply the `outline-1px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :outline number px` p e `active:md:outline-1px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:outline-1px focus:outline-1px hover:outline-1px active outline width focus outline width hover outline width active:sm:outline-1px focus:sm:outline-1px hover:sm:outline-1px active small screens outline width focus small screens outline width hover small screens outline width active:md:outline-1px focus:md:outline-1px hover:md:outline-1px active medium screens outline width focus medium screens outline width hover medium screens outline width active:lg:outline-1px focus:lg:outline-1px hover:lg:outline-1px active large screens outline width focus large screens outline width hover large screens outline width sources outline-width https: developer mozilla org en-us docs web css outline-width '
---

| _greenCSS_  | CSS class example                    | minimum Value | maximum Value | Step |
| ----------- | ------------------------------------ | ------------- | ------------- | ---- |
| outline-1px | .outline-1px { outline-width: 1px; } | 0px           | 10px          | +1px |

## Custom Sizing Variables

Control the outline width on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your outline width `outline-{number}px` - ranging from 0px to 10px with a step of +1px p.e. `outline-10px`.

```html
<button class="outline-1px outline-solid outline-green-5 outline-offset-5px text-30px">{title}</button>
```

### Setting an outline button

If you want to adjust your outline you need to add the following three greenCSS classes:

1. The outline width p.e. `outline-10px`
2. The [outline style](/docs/outline-style) p.e. `outline-solid`
3. The [outline color](/docs/outline-color) p.e. `outline-green-5`
4. Optional: the [outline offset](/docs/outline-offset) distance p.e. `outline-offset-5px`

## Active, focus, and hover states

| _greenCSS_                | CSS class example                                   |
| ------------------------- | --------------------------------------------------- |
| active:outline-{number}px | .active\:outline-1px:active { outline-width: 1px; } |
| focus:outline-{number}px  | .focus\:outline-1px:focus { outline-width: 1px; }   |
| hover:outline-{number}px  | .hover\:outline-1px:focus { outline-width: 1px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:outline-1px` to only apply the outline-1px utility class on hover.

```html
<button class="outline-10px hover:outline-1px outline-solid outline-green-5 outline-offset-5px text-30px">
  {title}
</button>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:outline-1px  |
| md:         | 480px - 768px  | .md:outline-1px  |
| lg:         | 768px - 1080px | .lg:outline-1px  |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:outline-1px` to apply the `outline-1px` utility at only small screen sizes at or below 480px. Or `active:md:outline-1px` to apply the `outline-1px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:outline-{number}px` p.e. `active:md:outline-1px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                | spoken example                                                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:outline-1px , focus:outline-1px , hover:outline-1px          | active outline width, focus outline width, hover outline width                                               |
| active:sm:outline-1px , focus:sm:outline-1px , hover:sm:outline-1px | active small screens outline width, focus small screens outline width, hover small screens outline width,    |
| active:md:outline-1px , focus:md:outline-1px , hover:md:outline-1px | active medium screens outline width, focus medium screens outline width, hover medium screens outline width, |
| active:lg:outline-1px , focus:lg:outline-1px , hover:lg:outline-1px | active large screens outline width, focus large screens outline width, hover large screens outline width,    |

## Sources

- [outline-width](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width)
