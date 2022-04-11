---
isBlog: false
title: 'Transition Delay'
date: 'Apr 11. 2022'
excerpt: 'Create stunning transition delays. Utility classes to control the transition delay.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Animation'
author: 'Severin Glaser'
keywords: 'Transition Delay, transition-delay, transition'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step transition-delay number ms transition-delay-500ms transition-delay: 500ms; 100 10000 +100ms how to work transition delay use the `transition-delay number ms` utilities to set the delay of a transition class  active focus and hover states omencss css class example active:transition-delay number ms active :transition-delay-500ms:active transition-delay: 500ms; focus:transition-delay number ms focus :transition-delay-500ms:focus transition-delay: 500ms; hover:transition-delay number ms hover :transition-delay-500ms:hover transition-delay: 500ms; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:transition-delay-500ms` to only apply the transition-delay-500ms utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:transition-delay-500ms md: 480px 768px md:transition-delay-500ms lg: 768px 1080px lg:transition-delay-500ms omencss media queries can also be combined with active focus and hover states for example use `sm:transition-delay-500ms` to apply the transition-delay-500ms utility at only small screen sizes at or below 480px or `active:md:transition-delay-500ms` to apply the transition-delay-500ms utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :transition-delay-500ms` p e `active:md:transition-delay-500ms` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:transition-delay-500ms focus:transition-delay-500ms hover:transition-delay-500ms active transition delay focus transition delay hover transition delay active:sm:transition-delay-500ms focus:sm:transition-delay-500ms hover:sm:transition-delay-500ms active small screens transition delay focus small screens transition delay hover small screens transition delay active:md:transition-delay-500ms focus:md:transition-delay-500ms hover:md:transition-delay-500ms active medium screens transition delay focus medium screens transition delay hover medium screens transition delay active:lg:transition-delay-500ms focus:lg:transition-delay-500ms hover:lg:transition-delay-500ms active large screens transition delay focus large screens transition delay hover large screens transition delay sources transition-delay https: developer mozilla org en-us docs web css transition-delay '
---

| _omenCSS_                   | CSS class example                                    | minimum Value | maximum Value | Step   |
| --------------------------- | ---------------------------------------------------- | ------------- | ------------- | ------ |
| transition-delay-{number}ms | .transition-delay-500ms { transition-delay: 500ms; } | 100           | 10000         | +100ms |

## How to work transition delay

Use the `transition-delay-{number}ms` utilities to set the delay of a transition class.

```html
<button
  class="transition-delay-500ms transition-all transition-duration-500ms outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px">
  Get in touch
</button>
```

## Active, focus, and hover states

| _omenCSS_                          | CSS class example                                                   |
| ---------------------------------- | ------------------------------------------------------------------- |
| active:transition-delay-{number}ms | .active\:transition-delay-500ms:active { transition-delay: 500ms; } |
| focus:transition-delay-{number}ms  | .focus\:transition-delay-500ms:focus { transition-delay: 500ms; }   |
| hover:transition-delay-{number}ms  | .hover\:transition-delay-500ms:hover { transition-delay: 500ms; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:transition-delay-500ms` to only apply the transition-delay-500ms utility class on hover.

```html
<div class="hover:transition-delay-500ms ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example            |
| ----------- | -------------- | -------------------------- |
| sm:         | 0px - 480px    | .sm:transition-delay-500ms |
| md:         | 480px - 768px  | .md:transition-delay-500ms |
| lg:         | 768px - 1080px | .lg:transition-delay-500ms |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:transition-delay-500ms` to apply the transition-delay-500ms utility at only small screen sizes at or below 480px. Or `active:md:transition-delay-500ms` to apply the transition-delay-500ms utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:transition-delay-500ms` p.e. `active:md:transition-delay-500ms`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                                  | spoken example                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:transition-delay-500ms , focus:transition-delay-500ms , hover:transition-delay-500ms          | active transition delay, focus transition delay, hover transition delay                                               |
| active:sm:transition-delay-500ms , focus:sm:transition-delay-500ms , hover:sm:transition-delay-500ms | active small screens transition delay, focus small screens transition delay, hover small screens transition delay,    |
| active:md:transition-delay-500ms , focus:md:transition-delay-500ms , hover:md:transition-delay-500ms | active medium screens transition delay, focus medium screens transition delay, hover medium screens transition delay, |
| active:lg:transition-delay-500ms , focus:lg:transition-delay-500ms , hover:lg:transition-delay-500ms | active large screens transition delay, focus large screens transition delay, hover large screens transition delay,    |

## Sources

- [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
