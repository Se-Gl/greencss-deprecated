---
isBlog: false
title: 'Flex Shrink'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s flex shrink.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Flex, flexbox, flex shrink'
classNames: ''
plainText: ' greenCSS css class example shrink shrink flex-shrink: 1; shrink-none shrink-none flex-shrink: 0; how to work with flex shrink use the utility classes above to access your desired class flex shrink use `shrink` to allow a flex item to shrink and fill any available space within the selected div the second element in the image below uses the shrink class ! greenCSS flex shrink images docs flex shrink webp?style=centerme  no flex shrink use `shrink-none` to prevent a flex item from shrinking the second element in the image below uses the shrink-none class ! greenCSS shrink none images docs flex shrink-none webp?style=centerme  active focus and hover states greenCSS css class example active:shrink active :shrink:active flex-shrink: 1; focus:shrink focus :shrink:focus flex-shrink: 1; hover:shrink hover :shrink:hover flex-shrink: 1; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:shrink` to only apply the `shrink` utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:shrink md: 480px 768px md:shrink lg: 768px 1080px lg:shrink greenCSS media queries can also be combined with active focus and hover states for example use `sm:shrink` to apply the shrink utility at only small screen sizes at or below 480px or `active:md:shrink` to apply the shrink utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : flex-shrink-class ` p e `active:md:shrink` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:shrink focus:shrink hover:shrink active shrink focus shrink hover shrink active:sm:shrink focus:sm:shrink hover:sm:shrink active small screens shrink focus small screens shrink hover small screens shrink active:md:shrink focus:md:shrink hover:md:shrink active medium screens shrink focus medium screens shrink hover medium screens shrink active:lg:shrink focus:lg:shrink hover:lg:shrink active large screens shrink focus large screens shrink hover large screens shrink sources flex-shrink https: developer mozilla org en-us docs web css flex-shrink '
---

| _greenCSS_  | CSS class example                |
| ----------- | -------------------------------- |
| shrink      | .shrink { flex-shrink: 1; }      |
| shrink-none | .shrink-none { flex-shrink: 0; } |

## How to work with flex shrink

Use the utility classes above to access your desired class.

### Flex Shrink

Use `shrink` to allow a flex item to shrink and fill any available space within the selected div. (The second element in the image below uses the shrink class).

![greenCSS shrink {800x480} ](/images/docs/flex/shrink.webp)

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="shrink w-100rem h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

### No Flex Shrink

Use `shrink-none` to prevent a flex item from shrinking. (The second element in the image below uses the shrink-none class).
![greenCSS shrink none {800x480} ](/images/docs/flex/shrink-none.webp)

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="shrink-none w-100rem h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_    | CSS class example                          |
| ------------- | ------------------------------------------ |
| active:shrink | .active\:shrink:active { flex-shrink: 1; } |
| focus:shrink  | .focus\:shrink:focus { flex-shrink: 1; }   |
| hover:shrink  | .hover\:shrink:hover { flex-shrink: 1; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:shrink` to only apply the `shrink` utility on hover.

```html
<div class="flex">
  <div class="flex-none w-50rem h-50rem bg-purple">first</div>
  <div class="shrink-none hover:shrink h-50rem bg-purple-3">second</div>
  <div class="flex-none w-25rem h-50rem  bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:shrink       |
| md:         | 480px - 768px  | .md:shrink       |
| lg:         | 768px - 1080px | .lg:shrink       |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:shrink` to apply the shrink utility at only small screen sizes at or below 480px. Or `active:md:shrink` to apply the shrink utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{flex-shrink-class}` p.e. `active:md:shrink`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                               | spoken example                                                                         |
| -------------------------------------------------- | -------------------------------------------------------------------------------------- |
| active:shrink, focus:shrink, hover:shrink          | active shrink, focus shrink, hover shrink                                              |
| active:sm:shrink, focus:sm:shrink, hover:sm:shrink | active small screens shrink, focus small screens shrink, hover small screens shrink    |
| active:md:shrink, focus:md:shrink, hover:md:shrink | active medium screens shrink, focus medium screens shrink, hover medium screens shrink |
| active:lg:shrink, focus:lg:shrink, hover:lg:shrink | active large screens shrink, focus large screens shrink, hover large screens shrink    |

## Sources

- [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
