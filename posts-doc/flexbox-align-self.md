---
isBlog: false
title: 'Align Self'
date: 'Apr 05. 2022'
excerpt: 'Utility classes to control the rows of grid and flex environements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'Align Self, flexbox, align-items, center items, position items'
classNames: ''
plainText: ' omencss css class example - self-auto self-auto align-self: auto; self-center self-center align-self: center; self-start self-start align-self: flex-start; self-end self-end align-self: flex-end; self-baseline self-baseline align-self: baseline; self-stretch self-stretch align-self: stretch; how to work with align self use the self- keyword utilities to set the individual position of flex and grid elements on its unique vertical axis self-auto in the example below we use self-auto to position the elements at the beginning of the vertical axis in relation to its parents ! omencss align-self-auto images docs flex align-items-stretch webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-auto bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div self-start in the example below we use self-start to position the elements at the beginning of the vertical axis in relation to its parents ! omencss align-self-start images docs flex align-self-start webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-start bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div self-center in the example below we use self-center to position the elements along the middle of the vertical axis in relation to its parents ! omencss self-center images docs flex align-self-center webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-center bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div self-end in the example below we use self-end to position the elements at the end of the vertical axis in relation to its parents ! omencss align-self-end images docs flex align-self-end webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-end bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div self-baseline in the example below we use self-baseline to position the elements along the baseline of the vertical axis in relation to its parents ! omencss align-self-baseline images docs flex align-self-baseline webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-baseline py-20px bg-purple first div div class=py-40px bg-purple-3 second div div class=py-60px bg-purple-6 third div div self-stretch in the example below we use self-stretch to stretch the elements in order to cover the vertical axis in relation to its parents ! omencss align-self-stretch images docs flex align-items-stretch webp?style=centerme html div class=flex items-stretch gap-20px h-50px div class=self-stretch bg-purple first div div class=bg-purple-3 second div div class=bg-purple-6 third div div active focus and hover states omencss css class example - - active:self- keyword active :self-start:active align-self: flex-start; focus:self- keyword focus :self-start:focus align-self: flex-start; hover:self- keyword hover :self-start:hover align-self: flex-start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:self-start to only apply the self-start utility class on hover html div class=flex self-stretch hover:self-start div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:self-center md: 480px - 768px md:self-center lg: 768px - 1080px lg:self-center omencss media queries can also be combined with active focus and hover states for example use sm:self-center to apply the self-center utility at only small screen sizes at or below 480px or active:md:self-center to apply the self-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query :self- keyword p e active:md:self-center executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:self- keyword focus:self- keyword hover:self- keyword active align self center focus align self center hover align self center active:sm:self- keyword focus:sm:self- keyword hover:sm:self- keyword active small screens align self center focus small screens align self center hover small screens align self center active:md:self- keyword focus:md:self- keyword hover:md:self- keyword active medium screens align self center focus medium screens align self center hover medium screens align self center active:lg:self- keyword focus:lg:self- keyword hover:lg:self- keyword active large screens align self center focus large screens align self center hover large screens align self center sources - align-self https: developer mozilla org en-us docs web css align-self '
---

| _omenCSS_     | CSS class example                        |
| ------------- | ---------------------------------------- |
| self-auto     | .self-auto { align-self: auto; }         |
| self-center   | .self-center { align-self: center; }     |
| self-start    | .self-start { align-self: flex-start; }  |
| self-end      | .self-end { align-self: flex-end; }      |
| self-baseline | .self-baseline { align-self: baseline; } |
| self-stretch  | .self-stretch { align-self: stretch; }   |

## How to work with align self

Use the `self-{keyword}` utilities to set the individual position of flex and grid elements on its unique vertical axis.

### Self-auto

In the example below, we use `self-auto` to position the elements at the beginning of the vertical axis in relation to its parents.

![omencss align-self-auto](/images/docs/flex/align-items-stretch.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-auto bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Self-start

In the example below, we use `self-start` to position the elements at the beginning of the vertical axis in relation to its parents.

![omencss align-self-start](/images/docs/flex/align-self-start.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-start bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Self-center

In the example below, we use `self-center` to position the elements along the middle of the vertical axis in relation to its parents.

![omencss self-center](/images/docs/flex/align-self-center.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-center bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Self-end

In the example below, we use `self-end` to position the elements at the end of the vertical axis in relation to its parents.

![omencss align-self-end](/images/docs/flex/align-self-end.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-end bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Self-baseline

In the example below, we use `self-baseline` to position the elements along the baseline of the vertical axis in relation to its parents.

![omencss align-self-baseline](/images/docs/flex/align-self-baseline.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-baseline py-20px bg-purple">first</div>
  <div class="py-40px bg-purple-3">second</div>
  <div class="py-60px bg-purple-6">third</div>
</div>
```

### Self-stretch

In the example below, we use `self-stretch` to stretch the elements in order to cover the vertical axis in relation to its parents.

![omencss align-self-stretch](/images/docs/flex/align-items-stretch.webp?style=centerme)

```html
<div class="flex items-stretch gap-20px h-50px">
  <div class="self-stretch bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_             | CSS class example                                     |
| --------------------- | ----------------------------------------------------- |
| active:self-{keyword} | .active\:self-start:active {align-self: flex-start; } |
| focus:self-{keyword}  | .focus\:self-start:focus { align-self: flex-start; }  |
| hover:self-{keyword}  | .hover\:self-start:hover { align-self: flex-start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:self-start` to only apply the self-start utility class on hover.

```html
<div class="flex self-stretch hover:self-start">...</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:self-center |
| md:         | 480px - 768px  | .md:self-center |
| lg:         | 768px - 1080px | .lg:self-center |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:self-center` to apply the self-center utility at only small screen sizes at or below 480px. Or `active:md:self-center` to apply the self-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:self-{keyword}` p.e. `active:md:self-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                          | spoken example                                                                                                           |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:self-{keyword} , focus:self-{keyword} , hover:self-{keyword}          | active align self center, focus align self center, hover align self center                                               |
| active:sm:self-{keyword} , focus:sm:self-{keyword} , hover:sm:self-{keyword} | active small screens align self center, focus small screens align self center, hover small screens align self center,    |
| active:md:self-{keyword} , focus:md:self-{keyword} , hover:md:self-{keyword} | active medium screens align self center, focus medium screens align self center, hover medium screens align self center, |
| active:lg:self-{keyword} , focus:lg:self-{keyword} , hover:lg:self-{keyword} | active large screens align self center, focus large screens align self center, hover large screens align self center,    |

## Sources

- [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
