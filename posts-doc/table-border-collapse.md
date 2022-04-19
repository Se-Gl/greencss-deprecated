---
isBlog: false
title: 'Border Collapse'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the border collapse.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Tables'
author: 'Severin Glaser'
keywords: 'border collapse, border separate'
classNames: ''
plainText: ' greencss css class example border-collapse border-collapse border-collapse: collapse; border-separate border-separate border-collapse: separate; custom sizing variables control the border collapse on every html element by using the greencss classes shown above use the following structure to generate your border collapse class `border keyword ` and apply the default css classes like `border-separate`  active focus and hover states greencss css class example active:border keyword active :border-collapse:active border-collapse: collapse; focus:border keyword focus :border-collapse:focus border-collapse: collapse; hover:border keyword hover :border-collapse:focus border-collapse: collapse; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:border-collapse` to only apply the border-collapse utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:border-collapse md: 480px 768px md:border-collapse lg: 768px 1080px lg:border-collapse greencss media queries can also be combined with active focus and hover states for example use `sm:border-collapse` to apply the `border-collapse` utility at only small screen sizes at or below 480px or `active:md:border-collapse` to apply the `border-collapse` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :border keyword ` p e `active:md:border-collapse` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:border-collapse focus:border-collapse hover:border-collapse active border collapse focus border collapse hover border collapse active:sm:border-collapse focus:sm:border-collapse hover:sm:border-collapse active small screens border collapse focus small screens border collapse hover small screens border collapse active:md:border-collapse focus:md:border-collapse hover:md:border-collapse active medium screens border collapse focus medium screens border collapse hover medium screens border collapse active:lg:border-collapse focus:lg:border-collapse hover:lg:border-collapse active large screens border collapse focus large screens border collapse hover large screens border collapse sources border-collapse https: developer mozilla org en-us docs web css border-collapse '
---

| _greenCSS_      | CSS class example                               |
| --------------- | ----------------------------------------------- |
| border-collapse | .border-collapse { border-collapse: collapse; } |
| border-separate | .border-separate { border-collapse: separate; } |

## Custom Sizing Variables

Control the border collapse on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your border collapse class `border-{keyword}` and apply the default CSS classes like `border-separate`.

```html
<table class="border-collapse border-green border-1px border-solid">
  <thead>
    <tr>
      <th class="border-solid border-green-10 border-1px border-solid">{table-items}</th>
    </tr>
  </thead>
</table>
```

## Active, focus, and hover states

| _greenCSS_              | CSS class example                                              |
| ----------------------- | -------------------------------------------------------------- |
| active:border-{keyword} | .active\:border-collapse:active { border-collapse: collapse; } |
| focus:border-{keyword}  | .focus\:border-collapse:focus { border-collapse: collapse; }   |
| hover:border-{keyword}  | .hover\:border-collapse:focus { border-collapse: collapse; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:border-collapse` to only apply the border-collapse utility class on hover.

```html
<table class="border-separate hover:border-collapse border-green border-1px border-solid">
  <thead>
    <tr>
      <th class="border-solid border-green-10 border-1px border-solid">{table-items}</th>
    </tr>
  </thead>
</table>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example    |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:border-collapse |
| md:         | 480px - 768px  | .md:border-collapse |
| lg:         | 768px - 1080px | .lg:border-collapse |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:border-collapse` to apply the `border-collapse` utility at only small screen sizes at or below 480px. Or `active:md:border-collapse` to apply the `border-collapse` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:border-{keyword}` p.e. `active:md:border-collapse`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                            | spoken example                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:border-collapse , focus:border-collapse , hover:border-collapse          | active border collapse, focus border collapse, hover border collapse                                               |
| active:sm:border-collapse , focus:sm:border-collapse , hover:sm:border-collapse | active small screens border collapse, focus small screens border collapse, hover small screens border collapse,    |
| active:md:border-collapse , focus:md:border-collapse , hover:md:border-collapse | active medium screens border collapse, focus medium screens border collapse, hover medium screens border collapse, |
| active:lg:border-collapse , focus:lg:border-collapse , hover:lg:border-collapse | active large screens border collapse, focus large screens border collapse, hover large screens border collapse,    |

## Sources

- [border-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)
