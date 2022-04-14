---
isBlog: false
title: 'Flex Direction'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s flex direction.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'flex direction, flex, flex-row, flex-row-reverse, flex-col, flex-col-reverse'
classNames: ''
plainText: ' greenCSS css class example flex-row flex-row flex-direction: row; flex-row-reverse flex-row-reverse flex-direction: row-reverse; flex-col flex-col flex-direction: column; flex-col-reverse flex-row flex-direction: column-reverse; how to work with flex direction use the utility classes above to access your desired class row use `flex-row` to position flex elements horizontally ! greenCSS flex-direction row images docs flex flex-direction webp?style=centerme  row reversed use `flex-row-reverse` to position flex elements horizontally in the opposite direction ! greenCSS flex-direction row images docs flex flex-direction-row-reversed webp?style=centerme  column use `flex-col` to position flex elements vertically ! greenCSS flex-direction row images docs flex flex-direction-col webp?style=centerme  column reversed use `flex-col-reverse` to position flex elements vertically in the opposite direction ! greenCSS flex-direction row images docs flex flex-direction-col-reversed webp?style=centerme  active focus and hover states greenCSS css class example active:flex-row active :flex-row:active flex-direction: row; focus:flex-row focus :flex-row:focus flex-direction: row; hover:flex-row hover :flex-row:hover flex-direction: row; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:flex-row` to only apply the flex-row utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:flex-row md: 480px 768px md:flex-row lg: 768px 1080px lg:flex-row greenCSS media queries can also be combined with active focus and hover states for example use `sm:flex-row` to apply the flex-row utility at only small screen sizes at or below 480px or `active:md:flex-row` to apply the flex-row utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :flex-row` p e `active:md:flex-row` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:flex-row focus:flex-row hover:flex-row active flex direction focus flex direction hover flex direction active:sm:flex-row focus:sm:flex-row hover:sm:flex-row active small screens flex direction focus small screens flex direction hover small screens flex direction active:md:flex-row focus:md:flex-row hover:md:flex-row active medium screens flex direction focus medium screens flex direction hover medium screens flex direction active:lg:flex-row focus:lg:flex-row hover:lg:flex-row active large screens flex direction focus large screens flex direction hover large screens flex direction sources flex-direction https: developer mozilla org en-us docs web css flex-direction '
---

| _greenCSS_        | CSS class example                                  |
| ---------------- | -------------------------------------------------- |
| flex-row         | .flex-row { flex-direction: row; }                 |
| flex-row-reverse | .flex-row-reverse { flex-direction: row-reverse; } |
| flex-col         | .flex-col { flex-direction: column; }              |
| flex-col-reverse | .flex-row { flex-direction: column-reverse; }      |

## How to work with flex direction

Use the utility classes above to access your desired class.

### Row

Use `flex-row` to position flex elements horizontally.

![greenCSS flex-direction row](/images/docs/flex/flex-direction.webp?style=centerme)

```html
<div class="flex flex-row h-50px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Row reversed

Use `flex-row-reverse` to position flex elements horizontally in the opposite direction.

![greenCSS flex-direction row](/images/docs/flex/flex-direction-row-reversed.webp?style=centerme)

```html
<div class="flex flex-row-reverse h-50px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Column

Use `flex-col` to position flex elements vertically.

![greenCSS flex-direction row](/images/docs/flex/flex-direction-col.webp?style=centerme)

```html
<div class="flex flex-col h-50px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Column reversed

Use `flex-col-reverse` to position flex elements vertically in the opposite direction.

![greenCSS flex-direction row](/images/docs/flex/flex-direction-col-reversed.webp?style=centerme)

```html
<div class="flex flex-col-reverse h-50px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_       | CSS class example                                 |
| --------------- | ------------------------------------------------- |
| active:flex-row | .active\:flex-row:active { flex-direction: row; } |
| focus:flex-row  | .focus\:flex-row:focus { flex-direction: row; }   |
| hover:flex-row  | .hover\:flex-row:hover { flex-direction: row; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:flex-row` to only apply the flex-row utility on hover.

```html
<div class="flex flex-col md:flex-row h-50px">
  <div class="flex-direction-20per hover:flex-direction-30per bg-purple">first hover</div>
  <div class="flex-direction-20per hover:flex-direction-30per bg-purple-3">second hover</div>
  <div class="flex-direction-60per hover:flex-direction-40per bg-purple-6">third hover</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:flex-row    |
| md:         | 480px - 768px  | .md:flex-row    |
| lg:         | 768px - 1080px | .lg:flex-row    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:flex-row` to apply the flex-row utility at only small screen sizes at or below 480px. Or `active:md:flex-row` to apply the flex-row utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:flex-row` p.e. `active:md:flex-row`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                        | spoken example                                                                                                 |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| active:flex-row , focus:flex-row , hover:flex-row          | active flex direction, focus flex direction, hover flex direction                                              |
| active:sm:flex-row , focus:sm:flex-row , hover:sm:flex-row | active small screens flex direction, focus small screens flex direction, hover small screens flex direction    |
| active:md:flex-row , focus:md:flex-row , hover:md:flex-row | active medium screens flex direction, focus medium screens flex direction, hover medium screens flex direction |
| active:lg:flex-row , focus:lg:flex-row , hover:lg:flex-row | active large screens flex direction, focus large screens flex direction, hover large screens flex direction    |

## Sources

- [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
