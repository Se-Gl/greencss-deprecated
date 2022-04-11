---
isBlog: false
title: 'Flex Wrap'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s flex wrap.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Flex wrap, flex, flex-wrap-reverse, flex-nowrap'
classNames: ''
plainText: ' omencss css class example flex-wrap flex-wrap flex-wrap: row; flex-wrap-reverse flex-wrap-reverse flex-wrap: wrap-reverse; flex-nowrap flex-nowrap flex-wrap: nowrap; how to work with flex wrap use the utility classes above to access your desired class nowrap use `flex-nowrap` to prevent flex items from wrapping non-flexible elements will overflow a container if it falls out of the viewport ! omencss flex-nowrap images docs flex flex-nowrap webp?style=centerme  flex wrap use `flex-wrap` to allow flex items to wrap normally ! omencss flex-wrap images docs flex flex-wrap-normal webp?style=centerme  flex wrap reverse use `flex-wrap-reverse` to wrap elements in reverse ! omencss flex-wrap images docs flex flex-wrap-reverse webp?style=centerme  active focus and hover states omencss css class example active:flex-wrap active :flex-wrap:active flex-wrap: row; focus:flex-wrap focus :flex-wrap:focus flex-wrap: row; hover:flex-wrap hover :flex-wrap:hover flex-wrap: row; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:flex-wrap` to only apply the flex-wrap utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:flex-wrap md: 480px 768px md:flex-wrap lg: 768px 1080px lg:flex-wrap omencss media queries can also be combined with active focus and hover states for example use `sm:flex-wrap` to apply the flex-wrap utility at only small screen sizes at or below 480px or `active:md:flex-wrap` to apply the flex-wrap utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : flex-wrap-class ` p e `active:md:flex-wrap` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:flex-wrap focus:flex-wrap hover:flex-wrap active flex wrap focus flex wrap hover flex wrap active:sm:flex-wrap focus:sm:flex-wrap hover:sm:flex-wrap active small screens flex wrap focus small screens flex wrap hover small screens flex wrap active:md:flex-wrap focus:md:flex-wrap hover:md:flex-wrap active medium screens flex wrap focus medium screens flex wrap hover medium screens flex wrap active:lg:flex-wrap focus:lg:flex-wrap hover:lg:flex-wrap active large screens flex wrap focus large screens flex wrap hover large screens flex wrap sources flex-wrap https: developer mozilla org en-us docs web css flex-wrap '
---

| _omenCSS_         | CSS class example                               |
| ----------------- | ----------------------------------------------- |
| flex-wrap         | .flex-wrap { flex-wrap: row; }                  |
| flex-wrap-reverse | .flex-wrap-reverse { flex-wrap: wrap-reverse; } |
| flex-nowrap       | .flex-nowrap{ flex-wrap: nowrap; }              |

## How to work with flex wrap

Use the utility classes above to access your desired class.

### Nowrap

Use `flex-nowrap` to prevent flex items from wrapping. Non-flexible elements will overflow a container, if it falls out of the viewport.

![omencss flex-nowrap](/images/docs/flex/flex-nowrap.webp?style=centerme)

```html
<div class="flex flex-nowrap">
  <div class="w-50per p-20px bg-purple">
    <div class="text-white text-center p-20px">first</div>
  </div>
  <div class="w-50per p-20px bg-purple-3">
    <div class="text-white text-center p-20px">second</div>
  </div>
  <div class="w-50per p-20px bg-purple-6">
    <div class="text-white text-center p-20px">third</div>
  </div>
</div>
```

### Flex wrap

Use `flex-wrap` to allow flex items to wrap normally.

![omencss flex-wrap](/images/docs/flex/flex-wrap-normal.webp?style=centerme)

```html
<div class="flex flex-wrap">
  <div class="w-50per p-20px bg-purple">
    <div class="text-white text-center p-20px">first</div>
  </div>
  <div class="w-33per p-20px bg-purple-3">
    <div class="text-white text-center p-20px">second</div>
  </div>
  <div class="w-33per p-20px bg-purple-6">
    <div class="text-white text-center p-20px">third</div>
  </div>
</div>
```

### Flex wrap reverse

Use `flex-wrap-reverse` to wrap elements in reverse.

![omencss flex-wrap](/images/docs/flex/flex-wrap-reverse.webp?style=centerme)

```html
<div class="flex flex-wrap-reverse">
  <div class="w-50per p-20px bg-purple">
    <div class="text-white text-center p-20px">first</div>
  </div>
  <div class="w-33per p-20px bg-purple-3">
    <div class="text-white text-center p-20px">second</div>
  </div>
  <div class="w-33per p-20px bg-purple-6">
    <div class="text-white text-center p-20px">third</div>
  </div>
</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                             |
| ---------------- | --------------------------------------------- |
| active:flex-wrap | .active\:flex-wrap:active { flex-wrap: row; } |
| focus:flex-wrap  | .focus\:flex-wrap:focus { flex-wrap: row; }   |
| hover:flex-wrap  | .hover\:flex-wrap:hover { flex-wrap: row; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:flex-wrap` to only apply the flex-wrap utility on hover.

```html
<div class="flex flex-nowrap hover:flex-wrap">
  <div class="w-50per p-20px bg-purple">
    <div class="text-white text-center p-20px">first</div>
  </div>
  <div class="w-33per p-20px bg-purple-3">
    <div class="text-white text-center p-20px">second</div>
  </div>
  <div class="w-33per p-20px bg-purple-6">
    <div class="text-white text-center p-20px">third</div>
  </div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:flex-wrap   |
| md:         | 480px - 768px  | .md:flex-wrap   |
| lg:         | 768px - 1080px | .lg:flex-wrap   |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:flex-wrap` to apply the flex-wrap utility at only small screen sizes at or below 480px. Or `active:md:flex-wrap` to apply the flex-wrap utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{flex-wrap-class}` p.e. `active:md:flex-wrap`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                           | spoken example                                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| active:flex-wrap , focus:flex-wrap , hover:flex-wrap          | active flex wrap, focus flex wrap, hover flex wrap                                              |
| active:sm:flex-wrap , focus:sm:flex-wrap , hover:sm:flex-wrap | active small screens flex wrap, focus small screens flex wrap, hover small screens flex wrap    |
| active:md:flex-wrap , focus:md:flex-wrap , hover:md:flex-wrap | active medium screens flex wrap, focus medium screens flex wrap, hover medium screens flex wrap |
| active:lg:flex-wrap , focus:lg:flex-wrap , hover:lg:flex-wrap | active large screens flex wrap, focus large screens flex wrap, hover large screens flex wrap    |

## Sources

- [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
