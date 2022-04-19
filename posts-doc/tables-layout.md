---
isBlog: false
title: 'Table Layout'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the table layout.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Tables'
author: 'Severin Glaser'
keywords: 'table layout, '
classNames: ''
plainText: ' greencss css class example table-auto table-auto table-layout: auto; table-fixed table-fixed table-layout: fixed; custom sizing variables control the table layout on every html element by using the greencss classes shown above use the following structure to generate your table layout `table keyword ` ranging from fixed to auto with a step of +table layoutc p e `table-fixed` control the table layout on every html element by using the greencss classes shown above use the following structure to generate your table layout class `table keyword ` and apply the default css classes like `table-fixed`  active focus and hover states greencss css class example active:table keyword active :table-auto:active table-layout: auto; focus:table keyword focus :table-auto:focus table-layout: auto; hover:table keyword hover :table-auto:focus table-layout: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:table-auto` to only apply the table-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:table-auto md: 480px 768px md:table-auto lg: 768px 1080px lg:table-auto greencss media queries can also be combined with active focus and hover states for example use `sm:table-auto` to apply the `table-auto` utility at only small screen sizes at or below 480px or `active:md:table-auto` to apply the `table-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :table keyword ` p e `active:md:table-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:table-auto focus:table-auto hover:table-auto active table layout focus table layout hover table layout active:sm:table-auto focus:sm:table-auto hover:sm:table-auto active small screens table layout focus small screens table layout hover small screens table layout active:md:table-auto focus:md:table-auto hover:md:table-auto active medium screens table layout focus medium screens table layout hover medium screens table layout active:lg:table-auto focus:lg:table-auto hover:lg:table-auto active large screens table layout focus large screens table layout hover large screens table layout sources table-layout https: developer mozilla org en-us docs web css table-layout '
---

| _greenCSS_  | CSS class example                     |
| ----------- | ------------------------------------- |
| table-auto  | .table-auto { table-layout: auto; }   |
| table-fixed | .table-fixed { table-layout: fixed; } |

## Custom Sizing Variables

Control the table layout on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your table layout `table-{keyword}` - ranging from fixed to auto with a step of +table layoutc p.e. `table-fixed`.

Control the table layout on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your table layout class `table-{keyword}` and apply the default CSS classes like `table-fixed`.

```html
<table class="table-auto">
  <thead>
    <tr>
      <th>{table-items}</th>
    </tr>
  </thead>
  ...
</table>
```

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                  |
| ---------------------- | -------------------------------------------------- |
| active:table-{keyword} | .active\:table-auto:active { table-layout: auto; } |
| focus:table-{keyword}  | .focus\:table-auto:focus { table-layout: auto; }   |
| hover:table-{keyword}  | .hover\:table-auto:focus { table-layout: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:table-auto` to only apply the table-auto utility class on hover.

```html
<table class="table-fixed hover:table-auto">
  <thead>
    <tr>
      <th>{table-items}</th>
    </tr>
  </thead>
  ...
</table>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:table-auto   |
| md:         | 480px - 768px  | .md:table-auto   |
| lg:         | 768px - 1080px | .lg:table-auto   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:table-auto` to apply the `table-auto` utility at only small screen sizes at or below 480px. Or `active:md:table-auto` to apply the `table-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:table-{keyword}` p.e. `active:md:table-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                             | spoken example                                                                                            |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| active:table-auto , focus:table-auto , hover:table-auto          | active table layout, focus table layout, hover table layout                                               |
| active:sm:table-auto , focus:sm:table-auto , hover:sm:table-auto | active small screens table layout, focus small screens table layout, hover small screens table layout,    |
| active:md:table-auto , focus:md:table-auto , hover:md:table-auto | active medium screens table layout, focus medium screens table layout, hover medium screens table layout, |
| active:lg:table-auto , focus:lg:table-auto , hover:lg:table-auto | active large screens table layout, focus large screens table layout, hover large screens table layout,    |

## Sources

- [table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
