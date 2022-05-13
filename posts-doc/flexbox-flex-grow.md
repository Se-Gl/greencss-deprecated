---
isBlog: false
title: 'Flex Grow'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s flex grow.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Flex, flexbox, flex grow'
classNames: ''
plainText: ' greenCSS css class example grow grow flex-grow: 1; grow-none grow-none flex-grow: 0; how to work with flex grow use the utility classes above to access your desired class flex grow use `grow` to allow a flex item to grow and fill any available space within the selected div the second element in the image below uses the grow class ! greenCSS flex grow images docs flex grow webp?style=centerme  no flex grow use `grow-none` to prevent a flex item from growing the second element in the image below uses the grow-none class ! greenCSS grow none images docs flex grow-none webp?style=centerme  active focus and hover states greenCSS css class example active:grow active :grow:active flex-grow: 1; focus:grow focus :grow:focus flex-grow: 1; hover:grow hover :grow:hover flex-grow: 1; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:grow` to only apply the `grow` utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:grow md: 480px 768px md:grow lg: 768px 1080px lg:grow greenCSS media queries can also be combined with active focus and hover states for example use `sm:grow` to apply the grow utility at only small screen sizes at or below 480px or `active:md:grow` to apply the grow utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : flex-grow-class ` p e `active:md:grow` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:grow focus:grow hover:grow active grow focus grow hover grow active:sm:grow focus:sm:grow hover:sm:grow active small screens grow focus small screens grow hover small screens grow active:md:grow focus:md:grow hover:md:grow active medium screens grow focus medium screens grow hover medium screens grow active:lg:grow focus:lg:grow hover:lg:grow active large screens grow focus large screens grow hover large screens grow sources flex-grow https: developer mozilla org en-us docs web css flex-grow '
---

| _greenCSS_ | CSS class example            |
| ---------- | ---------------------------- |
| grow       | .grow { flex-grow: 1; }      |
| grow-none  | .grow-none { flex-grow: 0; } |

## How to work with flex grow

Use the utility classes above to access your desired class.

### Flex Grow

Use `grow` to allow a flex item to grow and fill any available space within the selected div. (The second element in the image below uses the grow class).

![greenCSS grow {800x480} ](/images/docs/flex/grow.webp)

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="grow h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

### No Flex Grow

Use `grow-none` to prevent a flex item from growing. (The second element in the image below uses the grow-none class).
![greenCSS none {800x480} ](/images/docs/flex/grow-none.webp)

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="grow-none h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_  | CSS class example                      |
| ----------- | -------------------------------------- |
| active:grow | .active\:grow:active { flex-grow: 1; } |
| focus:grow  | .focus\:grow:focus { flex-grow: 1; }   |
| hover:grow  | .hover\:grow:hover { flex-grow: 1; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:grow` to only apply the `grow` utility on hover.

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="grow-none hover:grow h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:grow         |
| md:         | 480px - 768px  | .md:grow         |
| lg:         | 768px - 1080px | .lg:grow         |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:grow` to apply the grow utility at only small screen sizes at or below 480px. Or `active:md:grow` to apply the grow utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{flex-grow-class}` p.e. `active:md:grow`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                         | spoken example                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------- |
| active:grow, focus:grow, hover:grow          | active grow, focus grow, hover grow                                              |
| active:sm:grow, focus:sm:grow, hover:sm:grow | active small screens grow, focus small screens grow, hover small screens grow    |
| active:md:grow, focus:md:grow, hover:md:grow | active medium screens grow, focus medium screens grow, hover medium screens grow |
| active:lg:grow, focus:lg:grow, hover:lg:grow | active large screens grow, focus large screens grow, hover large screens grow    |

## Sources

- [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
