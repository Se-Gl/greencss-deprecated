---
isBlog: false
title: 'Place Items'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the alignment of items in relation to its horizontal and vertical axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Place Items, flexbox, align-items, center items, position items'
classNames: ''
plainText: ' omencss css class example - place-items-center place-items-center place-items: center; place-items-start place-items-start place-items: start; place-items-end place-items-end place-items: end; place-items-stretch place-items-stretch place-items: stretch; how to work with place items use the `place-items- keyword ` utilities to set the position of flex and grid elements on the vertical axis place items start in the example below we use `place-items-start` to position the elements at the beginning of the parents horizontal and vertical axis ! omencss place-items-start images docs flex place-items-start webp?style=centerme  place items center in the example below we use `place-items-center` to position the elements in the middle of the parents horizontal and vertical axis ! omencss place-items-center images docs flex place-items-center webp?style=centerme  place items end in the example below we use `place-items-end` to position the elements at the end of the parents horizontal and vertical axis ! omencss place-items-end images docs flex place-items-end webp?style=centerme  place items stretch in the example below we use `place-items-stretch` to stretch the elements in order to cover the horizontal and vertical axis ! omencss place-items-stretch images docs flex place-items-stretch webp?style=centerme  active focus and hover states omencss css class example active:place-items- keyword active :place-items-start:active place-items: start; focus:place-items- keyword focus :place-items-start:focus place-items: start; hover:place-items- keyword hover :place-items-start:hover place-items: start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use `hover:place-items-start` to only apply the place-items-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - sm: 0px - 480px sm:place-items-center md: 480px - 768px md:place-items-center lg: 768px - 1080px lg:place-items-center omencss media queries can also be combined with active focus and hover states for example use `sm:place-items-center` to apply the place-items-center utility at only small screen sizes at or below 480px or `active:md:place-items-center` to apply the place-items-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :place-items- keyword ` p e `active:md:place-items-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - - active:place-items- keyword focus:place-items- keyword hover:place-items- keyword active place items center focus place items center hover place items center active:sm:place-items- keyword focus:sm:place-items- keyword hover:sm:place-items- keyword active small screens place items center focus small screens place items center hover small screens place items center active:md:place-items- keyword focus:md:place-items- keyword hover:md:place-items- keyword active medium screens place items center focus medium screens place items center hover medium screens place items center active:lg:place-items- keyword focus:lg:place-items- keyword hover:lg:place-items- keyword active large screens place items center focus large screens place items center hover large screens place items center sources - place-items https: developer mozilla org en-us docs web css place-items '
---

| _omenCSS_           | CSS class example                              |
| ------------------- | ---------------------------------------------- |
| place-items-center  | .place-items-center { place-items: center; }   |
| place-items-start   | .place-items-start { place-items: start; }     |
| place-items-end     | .place-items-end { place-items: end; }         |
| place-items-stretch | .place-items-stretch { place-items: stretch; } |

## How to work with place items

Use the `place-items-{keyword}` utilities to set the position of flex and grid elements on the vertical axis.

### Place items start

In the example below, we use `place-items-start` to position the elements at the beginning of the parents horizontal and vertical axis.

![omencss place-items-start](/images/docs/flex/place-items-start.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px place-items-start">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### place items center

In the example below, we use `place-items-center` to position the elements in the middle of the parents horizontal and vertical axis.

![omencss place-items-center](/images/docs/flex/place-items-center.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px place-items-center">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place items end

In the example below, we use `place-items-end` to position the elements at the end of the parents horizontal and vertical axis.

![omencss place-items-end](/images/docs/flex/place-items-end.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px place-items-end">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Place items stretch

In the example below, we use `place-items-stretch` to stretch the elements in order to cover the horizontal and vertical axis.

![omencss place-items-stretch](/images/docs/flex/place-items-stretch.webp?style=centerme)

```html
<div class="grid grid-col-2 gap-20px place-items-stretch">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_                    | CSS class example                                        |
| ---------------------------- | -------------------------------------------------------- |
| active:place-items-{keyword} | .active\:place-items-start:active {place-items: start; } |
| focus:place-items-{keyword}  | .focus\:place-items-start:focus { place-items: start; }  |
| hover:place-items-{keyword}  | .hover\:place-items-start:hover { place-items: start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:place-items-start` to only apply the place-items-start utility class on hover.

```html
<div class="flex place-items-stretch hover:place-items-start">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example        |
| ----------- | -------------- | ---------------------- |
| sm:         | 0px - 480px    | .sm:place-items-center |
| md:         | 480px - 768px  | .md:place-items-center |
| lg:         | 768px - 1080px | .lg:place-items-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:place-items-center` to apply the place-items-center utility at only small screen sizes at or below 480px. Or `active:md:place-items-center` to apply the place-items-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:place-items-{keyword}` p.e. `active:md:place-items-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                               | spoken example                                                                                                              |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| active:place-items-{keyword} , focus:place-items-{keyword} , hover:place-items-{keyword}          | active place items center, focus place items center, hover place items center                                               |
| active:sm:place-items-{keyword} , focus:sm:place-items-{keyword} , hover:sm:place-items-{keyword} | active small screens place items center, focus small screens place items center, hover small screens place items center,    |
| active:md:place-items-{keyword} , focus:md:place-items-{keyword} , hover:md:place-items-{keyword} | active medium screens place items center, focus medium screens place items center, hover medium screens place items center, |
| active:lg:place-items-{keyword} , focus:lg:place-items-{keyword} , hover:lg:place-items-{keyword} | active large screens place items center, focus large screens place items center, hover large screens place items center,    |

## Sources

- [place-items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
