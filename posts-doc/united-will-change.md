---
isBlog: false
title: 'Will Change'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the will change.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'will change, will change scroll, will change contents, will change transform, will change opacity'
classNames: ''
plainText: ' greencss css class example will-change-auto will-change-auto will-change: auto; will-change-contents will-change-contents will-change: contents; will-change-scroll will-change-scroll will-change: scroll-position; will-change-transform will-change-transform will-change: transform; will-change-opacity will-change-opacity will-change: opacity; custom sizing variables ⚠️ warning: `will-change keyword ` is intended to be used as a last resort in order to try to deal with existing performance problems it should not be used to anticipate performance problems check the resources sources for more details the will-change css property hints to browsers how an element is expected to change this may improve responsiveness use the following structure to generate your will change class `will-change keyword ` and apply the default css classes like `will-change-auto`  it might be beneficial to apply these utility classes just before an element changes and remove it shortly after it finishes by re-setting it to `will-change-auto` active focus and hover states greencss css class example active:will-change keyword active :will-change-auto:active will-change: auto; focus:will-change keyword focus :will-change-auto:focus will-change: auto; hover:will-change keyword hover :will-change-auto:focus will-change: auto; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:will-change-auto` to only apply the will-change-auto utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:will-change-auto md: 480px 768px md:will-change-auto lg: 768px 1080px lg:will-change-auto greencss media queries can also be combined with active focus and hover states for example use `sm:will-change-auto` to apply the `will-change-auto` utility at only small screen sizes at or below 480px or `active:md:will-change-auto` to apply the `will-change-auto` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :will-change keyword ` p e `active:md:will-change-auto` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:will-change-auto focus:will-change-auto hover:will-change-auto active will change focus will change hover will change active:sm:will-change-auto focus:sm:will-change-auto hover:sm:will-change-auto active small screens will change focus small screens will change hover small screens will change active:md:will-change-auto focus:md:will-change-auto hover:md:will-change-auto active medium screens will change focus medium screens will change hover medium screens will change active:lg:will-change-auto focus:lg:will-change-auto hover:lg:will-change-auto active large screens will change focus large screens will change hover large screens will change sources will-change https: developer mozilla org en-us docs web css will-change '
---

| _greenCSS_            | CSS class example                                     |
| --------------------- | ----------------------------------------------------- |
| will-change-auto      | .will-change-auto { will-change: auto; }              |
| will-change-contents  | .will-change-contents { will-change: contents; }      |
| will-change-scroll    | .will-change-scroll { will-change: scroll-position; } |
| will-change-transform | .will-change-transform { will-change: transform; }    |
| will-change-opacity   | .will-change-opacity { will-change: opacity; }        |

## Custom Sizing Variables

⚠️ Warning: `will-change-{keyword}` is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems. Check the [resources](#sources) for more details.

The will-change CSS property hints to browsers how an element is expected to change. This may improve responsiveness. Use the following structure to generate your "will change" class `will-change-{keyword}` and apply the default CSS classes like `will-change-auto`.

```html
<div class="overflow-auto will-change-scroll">
  <p class="text-15px">{children}</p>
</div>
```

It might be beneficial to apply these utility classes just before an element changes, and remove it shortly after it finishes by re-setting it to `will-change-auto`.

## Active, focus, and hover states

| _greenCSS_                   | CSS class example                                       |
| ---------------------------- | ------------------------------------------------------- |
| active:will-change-{keyword} | .active\:will-change-auto:active { will-change: auto; } |
| focus:will-change-{keyword}  | .focus\:will-change-auto:focus { will-change: auto; }   |
| hover:will-change-{keyword}  | .hover\:will-change-auto:focus { will-change: auto; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:will-change-auto` to only apply the will-change-auto utility class on hover.

```html
<div class="will-change-contents hover:will-change-auto">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example     |
| ----------- | -------------- | -------------------- |
| sm:         | 0px - 480px    | .sm:will-change-auto |
| md:         | 480px - 768px  | .md:will-change-auto |
| lg:         | 768px - 1080px | .lg:will-change-auto |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:will-change-auto` to apply the `will-change-auto` utility at only small screen sizes at or below 480px. Or `active:md:will-change-auto` to apply the `will-change-auto` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:will-change-{keyword}` p.e. `active:md:will-change-auto`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                               | spoken example                                                                                         |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| active:will-change-auto , focus:will-change-auto , hover:will-change-auto          | active will change, focus will change, hover will change                                               |
| active:sm:will-change-auto , focus:sm:will-change-auto , hover:sm:will-change-auto | active small screens will change, focus small screens will change, hover small screens will change,    |
| active:md:will-change-auto , focus:md:will-change-auto , hover:md:will-change-auto | active medium screens will change, focus medium screens will change, hover medium screens will change, |
| active:lg:will-change-auto , focus:lg:will-change-auto , hover:lg:will-change-auto | active large screens will change, focus large screens will change, hover large screens will change,    |

## Sources

- [will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
