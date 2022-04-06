---
isBlog: false
title: 'Aspect Ratio'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the aspect ratio of html elements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Aspect Ratio, Aspect-Ratio, layout'
classNames: ''
plainText: ' omencss css class example aspect-auto aspect-auto aspect-ratio: auto; aspect-square aspect-square aspect-ratio: math div 1 1 ; aspect-video aspect-video aspect-ratio: math div 16 9 ; how to work with aspect ratio use the `aspect keyword ` utilities to set the individual aspect ratio of an element aspect auto in the example below we use `aspect-auto` to set the height automatically according to the preselected width  aspect square in the example below we use `aspect-square` to set an equal width and height for your iframe  aspect video in the example below we use `aspect-video` to set an 16:9 ratio for your iframe  active focus and hover states omencss css class example active:aspect keyword active :aspect-auto:active aspect-ratio: start; focus:aspect keyword focus :aspect-auto:focus aspect-ratio: start; hover:aspect keyword hover :aspect-auto:hover aspect-ratio: start; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:aspect-auto` to only apply the aspect-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:aspect-auto md: 480px 768px md:aspect-auto lg: 768px 1080px lg:aspect-auto omencss media queries can also be combined with active focus and hover states for example use `sm:aspect-auto` to apply the aspect-auto utility at only small screen sizes at or below 480px or `active:md:aspect-auto` to apply the aspect-auto utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :aspect keyword ` p e `active:md:aspect-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:aspect keyword focus:aspect keyword hover:aspect keyword active aspect ratio auto focus aspect ratio auto hover aspect ratio auto active:sm:aspect keyword focus:sm:aspect keyword hover:sm:aspect keyword active small screens aspect ratio auto focus small screens aspect ratio auto hover small screens aspect ratio auto active:md:aspect keyword focus:md:aspect keyword hover:md:aspect keyword active medium screens aspect ratio auto focus medium screens aspect ratio auto hover medium screens aspect ratio auto active:lg:aspect keyword focus:lg:aspect keyword hover:lg:aspect keyword active large screens aspect ratio auto focus large screens aspect ratio auto hover large screens aspect ratio auto sources aspect-ratio https: developer mozilla org en-us docs web css aspect-ratio '
---

| _omenCSS_     | CSS class example                                |
| ------------- | ------------------------------------------------ |
| aspect-auto   | .aspect-auto { aspect-ratio: auto; }             |
| aspect-square | .aspect-square { aspect-ratio: math.div(1, 1); } |
| aspect-video  | .aspect-video { aspect-ratio: math.div(16, 9); } |

## How to work with aspect ratio

Use the `aspect-{keyword}` utilities to set the individual aspect ratio of an element.

### Aspect auto

In the example below, we use `aspect-auto` to set the height automatically according to the preselected width.

```html
<iframe class="w-75vw aspect-video " src="https://www.youtube.com/..."></iframe>
```

### Aspect square

In the example below, we use `aspect-square` to set an equal width and height for your iframe.

```html
<iframe class="w-75vw aspect-square " src="https://www.youtube.com/..."></iframe>
```

### Aspect video

In the example below, we use `aspect-video` to set an 16:9 ratio for your iframe.

```html
<iframe class="w-75vw aspect-video " src="https://www.youtube.com/..."></iframe>
```

## Active, focus, and hover states

| _omenCSS_               | CSS class example                                   |
| ----------------------- | --------------------------------------------------- |
| active:aspect-{keyword} | .active\:aspect-auto:active {aspect-ratio: start; } |
| focus:aspect-{keyword}  | .focus\:aspect-auto:focus { aspect-ratio: start; }  |
| hover:aspect-{keyword}  | .hover\:aspect-auto:hover { aspect-ratio: start; }  |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:aspect-auto` to only apply the aspect-auto utility class on hover.

```html
<div class="aspect-square hover:aspect-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:aspect-auto |
| md:         | 480px - 768px  | .md:aspect-auto |
| lg:         | 768px - 1080px | .lg:aspect-auto |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:aspect-auto` to apply the aspect-auto utility at only small screen sizes at or below 480px. Or `active:md:aspect-auto` to apply the aspect-auto utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:aspect-{keyword}` p.e. `active:md:aspect-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                | spoken example                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:aspect-{keyword} , focus:aspect-{keyword} , hover:aspect-{keyword}          | active aspect ratio auto, focus aspect ratio auto, hover aspect ratio auto                                               |
| active:sm:aspect-{keyword} , focus:sm:aspect-{keyword} , hover:sm:aspect-{keyword} | active small screens aspect ratio auto, focus small screens aspect ratio auto, hover small screens aspect ratio auto,    |
| active:md:aspect-{keyword} , focus:md:aspect-{keyword} , hover:md:aspect-{keyword} | active medium screens aspect ratio auto, focus medium screens aspect ratio auto, hover medium screens aspect ratio auto, |
| active:lg:aspect-{keyword} , focus:lg:aspect-{keyword} , hover:lg:aspect-{keyword} | active large screens aspect ratio auto, focus large screens aspect ratio auto, hover large screens aspect ratio auto,    |

## Sources

- [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
