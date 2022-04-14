---
isBlog: false
title: 'Transition Duration'
date: 'Apr 11. 2022'
excerpt: 'Create stunning transition durations. Utility classes to control the transition duration.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Animation'
author: 'Severin Glaser'
keywords: 'Transition Duration, transition-duration, transition'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step transition-duration number ms transition-duration-500ms transition-duration: 500ms; 100 10000 +100ms how to work transition duration use the `transition number ms` utilities to set the duration of a transition class  active focus and hover states greenCSS css class example active:transition number ms active :transition-duration-500ms:active transition-duration: 500ms; focus:transition number ms focus :transition-duration-500ms:focus transition-duration: 500ms; hover:transition number ms hover :transition-duration-500ms:hover transition-duration: 500ms; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:transition-duration-500ms` to only apply the transition-duration-500ms utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:transition-duration-500ms md: 480px 768px md:transition-duration-500ms lg: 768px 1080px lg:transition-duration-500ms greenCSS media queries can also be combined with active focus and hover states for example use `sm:transition-duration-500ms` to apply the transition-duration-500ms utility at only small screen sizes at or below 480px or `active:md:transition-duration-500ms` to apply the transition-duration-500ms utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :transition-duration-500ms` p e `active:md:transition-duration-500ms` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:transition-duration-500ms focus:transition-duration-500ms hover:transition-duration-500ms active transition duration focus transition duration hover transition duration active:sm:transition-duration-500ms focus:sm:transition-duration-500ms hover:sm:transition-duration-500ms active small screens transition duration focus small screens transition duration hover small screens transition duration active:md:transition-duration-500ms focus:md:transition-duration-500ms hover:md:transition-duration-500ms active medium screens transition duration focus medium screens transition duration hover medium screens transition duration active:lg:transition-duration-500ms focus:lg:transition-duration-500ms hover:lg:transition-duration-500ms active large screens transition duration focus large screens transition duration hover large screens transition duration sources transition-duration https: developer mozilla org en-us docs web css transition-duration '
---

| _greenCSS_                     | CSS class example                                          | minimum Value | maximum Value | Step   |
| ------------------------------ | ---------------------------------------------------------- | ------------- | ------------- | ------ |
| transition-duration-{number}ms | .transition-duration-500ms { transition-duration: 500ms; } | 100           | 10000         | +100ms |

## How to work transition duration

Use the `transition-{number}ms` utilities to set the duration of a transition class.

```html
<button
  class="outline-none bg-blue hover:bg-blue-5 active:bg-blue-3 focus:bg-blue-7 py-20px px-40px text-white text-15px font-900 rounded-50px transition-all transition-duration-500ms">
  Get in touch
</button>
```

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                                         |
| ---------------------------- | ------------------------------------------------------------------------- |
| active:transition-{number}ms | .active\:transition-duration-500ms:active { transition-duration: 500ms; } |
| focus:transition-{number}ms  | .focus\:transition-duration-500ms:focus { transition-duration: 500ms; }   |
| hover:transition-{number}ms  | .hover\:transition-duration-500ms:hover { transition-duration: 500ms; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:transition-duration-500ms` to only apply the transition-duration-500ms utility class on hover.

```html
<div class="hover:transition-duration-500ms">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example              |
| ----------- | -------------- | ----------------------------- |
| sm:         | 0px - 480px    | .sm:transition-duration-500ms |
| md:         | 480px - 768px  | .md:transition-duration-500ms |
| lg:         | 768px - 1080px | .lg:transition-duration-500ms |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:transition-duration-500ms` to apply the transition-duration-500ms utility at only small screen sizes at or below 480px. Or `active:md:transition-duration-500ms` to apply the transition-duration-500ms utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:transition-duration-500ms` p.e. `active:md:transition-duration-500ms`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                                          | spoken example                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| active:transition-duration-500ms , focus:transition-duration-500ms , hover:transition-duration-500ms          | active transition duration , focus transition duration , hover transition duration                                                |
| active:sm:transition-duration-500ms , focus:sm:transition-duration-500ms , hover:sm:transition-duration-500ms | active small screens transition duration , focus small screens transition duration , hover small screens transition duration ,    |
| active:md:transition-duration-500ms , focus:md:transition-duration-500ms , hover:md:transition-duration-500ms | active medium screens transition duration , focus medium screens transition duration , hover medium screens transition duration , |
| active:lg:transition-duration-500ms , focus:lg:transition-duration-500ms , hover:lg:transition-duration-500ms | active large screens transition duration , focus large screens transition duration , hover large screens transition duration ,    |

## Sources

- [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
