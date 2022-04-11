---
isBlog: false
title: 'Transition Timing Function'
date: 'Apr 12. 2022'
excerpt: 'Utility classes to control the transition timing function.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Animation'
author: 'Severin Glaser'
keywords: 'Transition Timing Function, transition-timing-function, linear, ease'
classNames: ''
plainText: ' omencss css class example ease-linear ease-linear transition-timing-function: linear; ease ease transition-timing-function: ease; ease-in ease-in transition-timing-function: ease-in; ease-out ease-out transition-timing-function: ease-out; ease-in-out ease-in-out transition-timing-function: ease-in-out; cubic cubic transition-timing-function: cubic-bezier 0 75 0 25 0 75 0 25 ; how to work transition timing function use the `ease keyword ` utilities to set easing of your transitions by using linear ease ease-in ease-out ease-in-out or cubic keywords  active focus and hover states omencss css class example active: ease keyword active :ease-in:active transition-timing-function: 500ms; focus: ease keyword focus :ease-in:focus transition-timing-function: 500ms; hover: ease keyword hover :ease-in:hover transition-timing-function: 500ms; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:ease-in` to only apply the ease-in utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:ease-in md: 480px 768px md:ease-in lg: 768px 1080px lg:ease-in omencss media queries can also be combined with active focus and hover states for example use `sm:ease-in` to apply the ease-in utility at only small screen sizes at or below 480px or `active:md:ease-in` to apply the ease-in utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for auto classes is as follows: ` conditional state : media query :ease-in` p e `active:md:ease-in` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:ease-in focus:ease-in hover:ease-in active transition timing function focus transition timing function hover transition timing function active:sm:ease-in focus:sm:ease-in hover:sm:ease-in active small screens transition timing function focus small screens transition timing function hover small screens transition timing function active:md:ease-in focus:md:ease-in hover:md:ease-in active medium screens transition timing function focus medium screens transition timing function hover medium screens transition timing function active:lg:ease-in focus:lg:ease-in hover:lg:ease-in active large screens transition timing function focus large screens transition timing function hover large screens transition timing function sources transition-duration https: developer mozilla org en-us docs web css transition-duration '
---

| _omenCSS_   | CSS class example                                                            |
| ----------- | ---------------------------------------------------------------------------- |
| ease-linear | .ease-linear { transition-timing-function: linear; }                         |
| ease        | .ease { transition-timing-function: ease; }                                  |
| ease-in     | .ease-in { transition-timing-function: ease-in; }                            |
| ease-out    | .ease-out { transition-timing-function: ease-out; }                          |
| ease-in-out | .ease-in-out { transition-timing-function: ease-in-out; }                    |
| cubic       | .cubic { transition-timing-function: cubic-bezier(0.75, 0.25, 0.75, 0.25); } |

## How to work transition timing function

Use the `ease-{keyword}` utilities to set easing of your transitions by using linear, ease, ease-in, ease-out, ease-in-out or cubic keywords.

```html
<button
  class="cubic transition-duration-800ms px-40px py-20px font-800 text-15px bg-blue hover:bg-blue-2 active:bg-blue-5 text-white rounded-10px shadow-blue-3 hover:scale-11">
  Get in touch
</button>
```

## Active, focus, and hover states

| _omenCSS_              | CSS class example                                              |
| ---------------------- | -------------------------------------------------------------- |
| active: ease-{keyword} | .active\:ease-in:active { transition-timing-function: 500ms; } |
| focus: ease-{keyword}  | .focus\:ease-in:focus { transition-timing-function: 500ms; }   |
| hover: ease-{keyword}  | .hover\:ease-in:hover { transition-timing-function: 500ms; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:ease-in` to only apply the ease-in utility class on hover.

```html
<div class="cubic hover:ease-in">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:ease-in     |
| md:         | 480px - 768px  | .md:ease-in     |
| lg:         | 768px - 1080px | .lg:ease-in     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:ease-in` to apply the ease-in utility at only small screen sizes at or below 480px. Or `active:md:ease-in` to apply the ease-in utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:ease-in` p.e. `active:md:ease-in`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                     | spoken example                                                                                                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| active:ease-in , focus:ease-in , hover:ease-in          | active transition timing function, focus transition timing function, hover transition timing function                                               |
| active:sm:ease-in , focus:sm:ease-in , hover:sm:ease-in | active small screens transition timing function, focus small screens transition timing function, hover small screens transition timing function,    |
| active:md:ease-in , focus:md:ease-in , hover:md:ease-in | active medium screens transition timing function, focus medium screens transition timing function, hover medium screens transition timing function, |
| active:lg:ease-in , focus:lg:ease-in , hover:lg:ease-in | active large screens transition timing function, focus large screens transition timing function, hover large screens transition timing function,    |

## Sources

- [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
