---
isBlog: false
title: 'Opacity'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the opacity.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Effects'
author: 'Severin Glaser'
keywords: 'opacity, visible, hidden'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step opacity number per opacity-100per opacity: 100per; 0per 100per +1% custom sizing variables control the opacity on every html element by using the greencss classes shown above use the following structure to generate your opacity `opacity number per` ranging from 0% to 100% with a step of +1% p e `opacity-10per`  active focus and hover states greencss css class example active:opacity number per active :opacity-100per:active opacity: 100per; focus:opacity number per focus :opacity-100per:focus opacity: 100per; hover:opacity number per hover :opacity-100per:focus opacity: 100per; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:opacity-100per` to only apply the opacity-100per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:opacity-100per md: 480px 768px md:opacity-100per lg: 768px 1080px lg:opacity-100per greencss media queries can also be combined with active focus and hover states for example use `sm:opacity-100per` to apply the `opacity-100per` utility at only small screen sizes at or below 480px or `active:md:opacity-100per` to apply the `opacity-100per` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :opacity number per` p e `active:md:opacity-100per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:opacity-100per focus:opacity-100per hover:opacity-100per active opacity focus opacity hover opacity active:sm:opacity-100per focus:sm:opacity-100per hover:sm:opacity-100per active small screens opacity focus small screens opacity hover small screens opacity active:md:opacity-100per focus:md:opacity-100per hover:md:opacity-100per active medium screens opacity focus medium screens opacity hover medium screens opacity active:lg:opacity-100per focus:lg:opacity-100per hover:lg:opacity-100per active large screens opacity focus large screens opacity hover large screens opacity sources opacity https: developer mozilla org en-us docs web css opacity '
---

| _greenCSS_          | CSS class example                    | minimum Value | maximum Value | Step |
| ------------------- | ------------------------------------ | ------------- | ------------- | ---- |
| opacity-{number}per | .opacity-100per { opacity: 100per; } | 0per          | 100per        | +1%  |

## Custom Sizing Variables

Control the opacity on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your opacity `opacity-{number}per` - ranging from 0% to 100% with a step of +1% p.e. `opacity-10per`.

```html
<div class="opacity-50per bg-green">{children}</div>
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                   |
| -------------------------- | --------------------------------------------------- |
| active:opacity-{number}per | .active\:opacity-100per:active { opacity: 100per; } |
| focus:opacity-{number}per  | .focus\:opacity-100per:focus { opacity: 100per; }   |
| hover:opacity-{number}per  | .hover\:opacity-100per:focus { opacity: 100per; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:opacity-100per` to only apply the opacity-100per utility class on hover.

```html
<div class="opacity-100per hover:opacity-0per">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:opacity-100per |
| md:         | 480px - 768px  | .md:opacity-100per |
| lg:         | 768px - 1080px | .lg:opacity-100per |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:opacity-100per` to apply the `opacity-100per` utility at only small screen sizes at or below 480px. Or `active:md:opacity-100per` to apply the `opacity-100per` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:opacity-{number}per` p.e. `active:md:opacity-100per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                         | spoken example                                                                             |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| active:opacity-100per , focus:opacity-100per , hover:opacity-100per          | active opacity, focus opacity, hover opacity                                               |
| active:sm:opacity-100per , focus:sm:opacity-100per , hover:sm:opacity-100per | active small screens opacity, focus small screens opacity, hover small screens opacity,    |
| active:md:opacity-100per , focus:md:opacity-100per , hover:md:opacity-100per | active medium screens opacity, focus medium screens opacity, hover medium screens opacity, |
| active:lg:opacity-100per , focus:lg:opacity-100per , hover:lg:opacity-100per | active large screens opacity, focus large screens opacity, hover large screens opacity,    |

## Sources

- [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
