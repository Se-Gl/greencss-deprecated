---
isBlog: false
title: 'Isolation'
date: 'Apr 08. 2022'
excerpt: 'Utility classes to control the isolation of an element.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Isolation, layout, isolate'
classNames: ''
plainText: ' omencss css class example isolation isolation isolation: isolate; isolation-auto isolation-auto isolation: auto; how to work with isolation use the keyword in order to apply the isolation class properties this will create a new sequence context isolation use the `isolation` or `isolation-auto` utility class whether an element must create a new stacking context  active focus and hover states omencss css class example active:isolation keyword active :isolation:active isolation: clone; focus:isolation keyword focus :isolation:focus isolation: clone; hover:isolation keyword hover :isolation:hover isolation: clone; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:isolation` to only apply the isolation utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:isolation md: 480px 768px md:isolation lg: 768px 1080px lg:isolation omencss media queries can also be combined with active focus and hover states for example use `sm:isolation` to apply the isolation utility at only small screen sizes at or below 480px or `active:md:isolation` to apply the isolation utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :isolation keyword ` p e `active:md:isolation` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:isolation keyword focus:isolation keyword hover:isolation keyword active isolate focus isolate hover isolate active:sm:isolation keyword focus:sm:isolation keyword hover:sm:isolation keyword active small screens isolate focus small screens isolate hover small screens isolate active:md:isolation keyword focus:md:isolation keyword hover:md:isolation keyword active medium screens isolate focus medium screens isolate hover medium screens isolate active:lg:isolation keyword focus:lg:isolation keyword hover:lg:isolation keyword active large screens isolate focus large screens isolate hover large screens isolate sources isolation https: developer mozilla org en-us docs web css isolation '
---

| _omenCSS_      | CSS class example                    |
| -------------- | ------------------------------------ |
| isolation      | .isolation { isolation: isolate; }   |
| isolation-auto | .isolation-auto { isolation: auto; } |

## How to work with isolation

Use the keyword in order to apply the isolation class properties, this will create a new sequence context.

### Isolation

Use the `isolation` or `isolation-auto` utility class whether an element must create a new stacking context.

```html
<div class="isolate ...">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                  | CSS class example                               |
| -------------------------- | ----------------------------------------------- |
| active:isolation-{keyword} | .active\:isolation:active { isolation: clone; } |
| focus:isolation-{keyword}  | .focus\:isolation:focus { isolation: clone; }   |
| hover:isolation-{keyword}  | .hover\:isolation:hover { isolation: clone; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:isolation` to only apply the isolation utility class on hover.

```html
<div class="isolation-auto hover:isolation">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:isolation   |
| md:         | 480px - 768px  | .md:isolation   |
| lg:         | 768px - 1080px | .lg:isolation   |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:isolation` to apply the isolation utility at only small screen sizes at or below 480px. Or `active:md:isolation` to apply the isolation utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:isolation-{keyword}` p.e. `active:md:isolation`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                                         | spoken example                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| active:isolation-{keyword} , focus:isolation-{keyword} , hover:isolation-{keyword}          | active isolate, focus isolate, hover isolate                                               |
| active:sm:isolation-{keyword} , focus:sm:isolation-{keyword} , hover:sm:isolation-{keyword} | active small screens isolate, focus small screens isolate, hover small screens isolate,    |
| active:md:isolation-{keyword} , focus:md:isolation-{keyword} , hover:md:isolation-{keyword} | active medium screens isolate, focus medium screens isolate, hover medium screens isolate, |
| active:lg:isolation-{keyword} , focus:lg:isolation-{keyword} , hover:lg:isolation-{keyword} | active large screens isolate, focus large screens isolate, hover large screens isolate,    |

## Sources

- [isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
