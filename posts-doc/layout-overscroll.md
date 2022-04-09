---
isBlog: false
title: 'Overscroll Behavior'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to determine the behavior and the scale of images.'
contain*image: '/images/blog/contain/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Overscroll Behavior, layout, overscroll-behavior-x, overscroll-behavior-y'
classNames: ''
plainText: ' omencss css class example overscroll-auto overscroll-auto overscroll-behavior: auto; overscroll-contain overscroll-contain overscroll-behavior: contain; overscroll-none overscroll-none overscroll-behavior: none; overscroll-y-auto overscroll-y-auto overscroll-behavior-y: auto; overscroll-y-contain overscroll-y-contain overscroll-behavior-y: contain; overscroll-y-none overscroll-y-none overscroll-behavior-y: none; overscroll-x-auto overscroll-x-auto overscroll-behavior-x: auto; overscroll-x-contain overscroll-x-contain overscroll-behavior-x: contain; overscroll-x-none overscroll-x-none overscroll-behavior-x: none; how to work with overscroll 1 use the `overscroll keyword ` to determine how a browser behaves when it reaches the limit of a general scrolling area 2 you can also use `overscroll-x keyword ` to control what a browser does when it reaches the limit of the horizontal scrolling area 3 you can also use `overscroll-y keyword ` to handle the browser behavior when it approaches the limit of the vertical scrolling area overscroll behavior auto the default class is normally `overscroll-auto` as it handles the overscroll behavior automatically  overscroll behavior contain use `overscroll-contain` to prevent scrolling in the target area from bypassing scrolling into the parent element the default scroll overflow behavior is present inside the element with a bounce effect or refresh other areas are not affected by scroll chaining  overscroll behavior none use `overscroll-none` to prevent the default scroll overflow behavior  active focus and hover states omencss css class example active:overscroll keyword active :overscroll-auto:active overscroll-behavior: auto; focus:overscroll keyword focus :overscroll-auto:focus overscroll-behavior: auto; hover:overscroll keyword hover :overscroll-auto:hover overscroll-behavior: auto; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:overscroll-contain` to only apply the overscroll-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:overscroll-auto md: 480px 768px md:overscroll-auto lg: 768px 1080px lg:overscroll-auto omencss media queries can also be combined with active focus and hover states for example use `sm:overscroll-auto` to apply the overscroll-auto utility at only small screen sizes at or below 480px or `active:md:overscroll-auto` to apply the overscroll-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :overscroll keyword ` p e `active:md:overscroll-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:overscroll keyword focus:overscroll keyword hover:overscroll keyword active overscroll auto focus overscroll auto hover overscroll auto active:sm:overscroll keyword focus:sm:overscroll keyword hover:sm:overscroll keyword active small screens overscroll auto focus small screens overscroll auto hover small screens overscroll auto active:md:overscroll keyword focus:md:overscroll keyword hover:md:overscroll keyword active medium screens overscroll auto focus medium screens overscroll auto hover medium screens overscroll auto active:lg:overscroll keyword focus:lg:overscroll keyword hover:lg:overscroll keyword active large screens overscroll auto focus large screens overscroll auto hover large screens overscroll auto sources overscroll https: developer mozilla org en-us docs web css overscroll-behavior '
---

| _omenCSS_            | CSS class example                                         |
| -------------------- | --------------------------------------------------------- |
| overscroll-auto      | .overscroll-auto { overscroll-behavior: auto; }           |
| overscroll-contain   | .overscroll-contain { overscroll-behavior: contain; }     |
| overscroll-none      | .overscroll-none { overscroll-behavior: none; }           |
| overscroll-y-auto    | .overscroll-y-auto { overscroll-behavior-y: auto; }       |
| overscroll-y-contain | .overscroll-y-contain { overscroll-behavior-y: contain; } |
| overscroll-y-none    | .overscroll-y-none { overscroll-behavior-y: none; }       |
| overscroll-x-auto    | .overscroll-x-auto { overscroll-behavior-x: auto; }       |
| overscroll-x-contain | .overscroll-x-contain { overscroll-behavior-x: contain; } |
| overscroll-x-none    | .overscroll-x-none { overscroll-behavior-x: none; }       |

## How to work with overscroll

1. Use the `overscroll-{keyword}` to determine how a browser behaves when it reaches the limit of a general scrolling area.
2. You can also use `overscroll-x-{keyword}` to control what a browser does when it reaches the limit of the horizontal scrolling area.
3. You can also use `overscroll-y-{keyword}` to handle the browser behavior when it approaches the limit of the vertical scrolling area.

### Overscroll Behavior Auto

The default class is normally `overscroll-auto` as it handles the overscroll behavior automatically.

```html
<div class="overscroll-auto">{children}</div>
```

### Overscroll Behavior Contain

Use `overscroll-contain` to prevent scrolling in the target area from bypassing scrolling into the parent element. The default scroll overflow behavior is present inside the element with a "bounce" effect or refresh. Other areas are not affected by scroll chaining.

```html
<div class="overscroll-contain">{children}</div>
```

### Overscroll Behavior None

Use `overscroll-none` to prevent the default scroll overflow behavior.

```html
<div class="overscroll-none">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                   | CSS class example                                              |
| --------------------------- | -------------------------------------------------------------- |
| active:overscroll-{keyword} | .active\:overscroll-auto:active { overscroll-behavior: auto; } |
| focus:overscroll-{keyword}  | .focus\:overscroll-auto:focus { overscroll-behavior: auto; }   |
| hover:overscroll-{keyword}  | .hover\:overscroll-auto:hover { overscroll-behavior: auto; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:overscroll-contain` to only apply the overscroll-auto utility class on hover.

```html
<div class="overscroll-none hover:overscroll-contain">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example     |
| ----------- | -------------- | ------------------- |
| sm:         | 0px - 480px    | .sm:overscroll-auto |
| md:         | 480px - 768px  | .md:overscroll-auto |
| lg:         | 768px - 1080px | .lg:overscroll-auto |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:overscroll-auto` to apply the overscroll-auto utility at only small screen sizes at or below 480px. Or `active:md:overscroll-auto` to apply the overscroll-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:overscroll-{keyword}` p.e. `active:md:overscroll-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                            | spoken example                                                                                                     |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:overscroll-{keyword} , focus:overscroll-{keyword} , hover:overscroll-{keyword}          | active overscroll auto, focus overscroll auto, hover overscroll auto                                               |
| active:sm:overscroll-{keyword} , focus:sm:overscroll-{keyword} , hover:sm:overscroll-{keyword} | active small screens overscroll auto, focus small screens overscroll auto, hover small screens overscroll auto,    |
| active:md:overscroll-{keyword} , focus:md:overscroll-{keyword} , hover:md:overscroll-{keyword} | active medium screens overscroll auto, focus medium screens overscroll auto, hover medium screens overscroll auto, |
| active:lg:overscroll-{keyword} , focus:lg:overscroll-{keyword} , hover:lg:overscroll-{keyword} | active large screens overscroll auto, focus large screens overscroll auto, hover large screens overscroll auto,    |

## Sources

- [overscroll](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
