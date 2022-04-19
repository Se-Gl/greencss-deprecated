---
isBlog: false
title: 'Outline Offset'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the outline offset.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Border'
author: 'Severin Glaser'
keywords: 'outline offset, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step outline-offset-0px outline-offset-0px outline-offset: 0px; 0px 10px +1px outline-offset-10px outline-offset-10px outline-offset: 10px; 0px 10px +1px custom sizing variables control the outline offset on every html element by using the greencss classes shown above use the following structure to generate your outline offset `outline-offset number px` ranging from 0px to 10px with a step of +1px p e `outline-offset-10px`  setting an outline button if you want to adjust your outline you need to add the following three greencss classes: 1 the outline width docs outline-width p e `outline-1px` 2 the outline style docs outline-style p e `outline-solid` 3 the outline color docs outline-color p e `outline-green-5` 4 optional: the outline offset docs outline-offset distance p e `outline-offset-5px` active focus and hover states greencss css class example active:outline-offset number px active :outline-offset-0px:active outline-offset: 0px; focus:outline-offset number px focus :outline-offset-0px:focus outline-offset: 0px; hover:outline-offset number px hover :outline-offset-0px:focus outline-offset: 0px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:outline-offset-0px` to only apply the outline-offset-0px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:outline-offset-0px md: 480px 768px md:outline-offset-0px lg: 768px 1080px lg:outline-offset-0px greencss media queries can also be combined with active focus and hover states for example use `sm:outline-offset-0px` to apply the `outline-offset-0px` utility at only small screen sizes at or below 480px or `active:md:outline-offset-0px` to apply the `outline-offset-0px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :outline-offset number px` p e `active:md:outline-offset-0px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:outline-offset-0px focus:outline-offset-0px hover:outline-offset-0px active outline offset focus outline offset hover outline offset active:sm:outline-offset-0px focus:sm:outline-offset-0px hover:sm:outline-offset-0px active small screens outline offset focus small screens outline offset hover small screens outline offset active:md:outline-offset-0px focus:md:outline-offset-0px hover:md:outline-offset-0px active medium screens outline offset focus medium screens outline offset hover medium screens outline offset active:lg:outline-offset-0px focus:lg:outline-offset-0px hover:lg:outline-offset-0px active large screens outline offset focus large screens outline offset hover large screens outline offset sources outline-offset https: developer mozilla org en-us docs web css outline-offset '
---

| _greenCSS_          | CSS class example                              | minimum Value | maximum Value | Step |
| ------------------- | ---------------------------------------------- | ------------- | ------------- | ---- |
| outline-offset-0px  | .outline-offset-0px { outline-offset: 0px; }   | 0px           | 10px          | +1px |
| outline-offset-10px | .outline-offset-10px { outline-offset: 10px; } | 0px           | 10px          | +1px |

## Custom Sizing Variables

Control the outline offset on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your outline offset `outline-offset-{number}px` - ranging from 0px to 10px with a step of +1px p.e. `outline-offset-10px`.

```html
<button class="outline-offset-5px outline-solid outline-green-5 outline-1px text-30px">{title}</button>
```

### Setting an outline button

If you want to adjust your outline you need to add the following three greenCSS classes:

1. The [outline width](/docs/outline-width) p.e. `outline-1px`
2. The [outline style](/docs/outline-style) p.e. `outline-solid`
3. The [outline color](/docs/outline-color) p.e. `outline-green-5`
4. Optional: the [outline offset](/docs/outline-offset) distance p.e. `outline-offset-5px`

## Active, focus, and hover states

| _greenCSS_                       | CSS class example                                           |
| -------------------------------- | ----------------------------------------------------------- |
| active:outline-offset-{number}px | .active\:outline-offset-0px:active { outline-offset: 0px; } |
| focus:outline-offset-{number}px  | .focus\:outline-offset-0px:focus { outline-offset: 0px; }   |
| hover:outline-offset-{number}px  | .hover\:outline-offset-0px:focus { outline-offset: 0px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:outline-offset-0px` to only apply the outline-offset-0px utility class on hover.

```html
<button class="outline-offset-10px hover:outline-offset-0px outline-solid outline-green-5 outline-1px text-30px">
  {title}
</button>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example       |
| ----------- | -------------- | ---------------------- |
| sm:         | 0px - 480px    | .sm:outline-offset-0px |
| md:         | 480px - 768px  | .md:outline-offset-0px |
| lg:         | 768px - 1080px | .lg:outline-offset-0px |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:outline-offset-0px` to apply the `outline-offset-0px` utility at only small screen sizes at or below 480px. Or `active:md:outline-offset-0px` to apply the `outline-offset-0px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:outline-offset-{number}px` p.e. `active:md:outline-offset-0px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                     | spoken example                                                                                                  |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:outline-offset-0px , focus:outline-offset-0px , hover:outline-offset-0px          | active outline offset, focus outline offset, hover outline offset                                               |
| active:sm:outline-offset-0px , focus:sm:outline-offset-0px , hover:sm:outline-offset-0px | active small screens outline offset, focus small screens outline offset, hover small screens outline offset,    |
| active:md:outline-offset-0px , focus:md:outline-offset-0px , hover:md:outline-offset-0px | active medium screens outline offset, focus medium screens outline offset, hover medium screens outline offset, |
| active:lg:outline-offset-0px , focus:lg:outline-offset-0px , hover:lg:outline-offset-0px | active large screens outline offset, focus large screens outline offset, hover large screens outline offset,    |

## Sources

- [outline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset)
