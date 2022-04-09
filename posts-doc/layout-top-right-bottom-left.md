---
isBlog: false
title: 'Top | Right | Bottom | Left'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to set the top, right, bottom and left positions.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Position, layout, top, right, bottom, left'
classNames: ''
plainText: ' omencss css class example maximum value maximum value step top-auto top-auto top: auto; top number per top-50% top: 50%; -100% 100% 1% right-auto right-auto right: auto; right number per right-50% right: 50%; -100% 100% 1% bottom-auto bottom-auto bottom: auto; bottom number per bottom-50% bottom: 50%; -100% 100% 1% left-auto left-auto left: auto; left number per left-50% left: 50%; -100% 100% 1% how to work with top right bottom left 1 use the ` keyword -auto` to control determine and set the auto position 2 use the ` keyword number per` to control determine and set the position with percent values of a positioned element  negative values to use ` keyword -neg number per` a negative top right bottom left values to place an element in a negative direction position  active focus and hover states omencss css class example active: keyword active :top-auto:active top: auto; focus: keyword focus :top-auto:focus top: auto; hover: keyword hover :top-auto:hover top: auto; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:top-auto` to only apply the top utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:top-auto md: 480px 768px md:top-auto lg: 768px 1080px lg:top-auto omencss media queries can also be combined with active focus and hover states for example use `sm:top-auto` to apply the top auto utility at only small screen sizes at or below 480px or `active:md:top-auto` to apply the top auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query : keyword ` p e `active:md:top-auto` 1 the structure for relative percentage classes is as follows: ` conditional state : media query : keyword number per` p e `active:md:top-50per` 1 the structure for negative relative percentage classes is as follows: ` conditional state : media query : keyword -neg number per` p e `active:md:top-neg-100per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active: keyword focus: keyword hover: keyword active top focus top hover top active:sm: keyword focus:sm: keyword hover:sm: keyword active small screens top focus small screens top hover small screens top active:md: keyword focus:md: keyword hover:md: keyword active medium screens top focus medium screens top hover medium screens top active:lg: keyword focus:lg: keyword hover:lg: keyword active large screens top focus large screens top hover large screens top sources top https: developer mozilla org en-us docs web css top right https: developer mozilla org en-us docs web css right bottom https: developer mozilla org en-us docs web css bottom left https: developer mozilla org en-us docs web css left '
---

| _omenCSS_          | CSS class example              | minimum Value | maximum Value | Step |
| ------------------ | ------------------------------ | ------------- | ------------- | ---- |
| top-auto           | .top-auto { top: auto; }       | -             | -             | -    |
| top-{number}per    | .top-50% { top: 50%; }         | -100%         | 100%          | 1%   |
| right-auto         | .right-auto { right: auto; }   | -             | -             | -    |
| right-{number}per  | .right-50% { right: 50%; }     | -100%         | 100%          | 1%   |
| bottom-auto        | .bottom-auto { bottom: auto; } | -             | -             | -    |
| bottom-{number}per | .bottom-50% { bottom: 50%; }   | -100%         | 100%          | 1%   |
| left-auto          | .left-auto { left: auto; }     | -             | -             | -    |
| left-{number}per   | .left-50% { left: 50%; }       | -100%         | 100%          | 1%   |

## How to work with Top, Right, Bottom, Left

1. Use the `{keyword}-auto` to control, determine and set the auto position.
2. Use the `{keyword}-{number}per` to control, determine and set the position with percent values of a positioned element.

```html
<!-- top side -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top top-0per ">{children}</div>
</div>

<!-- top right corner -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top top-0per right-0per">{children}</div>
</div>

<!-- right side -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top right-0per ...">09</div>
</div>

<!-- bottom right corner -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top bottom-0per right-0per ...">09</div>
</div>

<!-- bottom side -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top bottom-0per ...">08</div>
</div>

<!-- bottom left corner -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top bottom-0per left-0per ...">07</div>
</div>

<!-- left side -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top left-0per ...">07</div>
</div>

<!-- top left corner -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top left-0per top-0per">{children}</div>
</div>
```

## Negative Values

To use `{keyword}-neg-{number}per` a negative top, right, bottom, left values, to place an element in a negative direction/position.

```html
<!-- top side with negative 100% class -->
<div class="bottom-auto h-100vh w-100vw ...">
  <div class="top top-neg-100per ...">{children}</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                       |
| ---------------- | --------------------------------------- |
| active:{keyword} | .active\:top-auto:active { top: auto; } |
| focus:{keyword}  | .focus\:top-auto:focus { top: auto; }   |
| hover:{keyword}  | .hover\:top-auto:hover { top: auto; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:top-auto` to only apply the top utility class on hover.

```html
<div class="bottom-auto hover:top-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:top-auto    |
| md:         | 480px - 768px  | .md:top-auto    |
| lg:         | 768px - 1080px | .lg:top-auto    |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:top-auto` to apply the top auto utility at only small screen sizes at or below 480px. Or `active:md:top-auto` to apply the top auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:{keyword}` p.e. `active:md:top-auto`
1. The structure for relative percentage classes is as follows: `{conditional state}:{media query}:{keyword}-{number}per` p.e. `active:md:top-50per`
1. The structure for negative relative percentage classes is as follows: `{conditional state}:{media query}:{keyword}-neg-{number}per` p.e. `active:md:top-neg-100per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                           | spoken example                                                                 |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| active:{keyword} , focus:{keyword} , hover:{keyword}          | active top, focus top, hover top                                               |
| active:sm:{keyword} , focus:sm:{keyword} , hover:sm:{keyword} | active small screens top, focus small screens top, hover small screens top,    |
| active:md:{keyword} , focus:md:{keyword} , hover:md:{keyword} | active medium screens top, focus medium screens top, hover medium screens top, |
| active:lg:{keyword} , focus:lg:{keyword} , hover:lg:{keyword} | active large screens top, focus large screens top, hover large screens top,    |

## Sources

- [top](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- [right](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
- [bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- [left](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
