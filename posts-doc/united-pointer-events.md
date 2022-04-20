---
isBlog: false
title: 'Pointer Events'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the pointer events.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'pointer events, '
classNames: ''
plainText: ' greencss css class example pointer-events-none pointer-events-none pointer-events: none; pointer-events-auto pointer-events-auto pointer-events: auto; pointer-events-visiblepainted pointer-events-visiblepainted pointer-events: visiblepainted; pointer-events-visiblefill pointer-events-visiblefill pointer-events: visiblefill; pointer-events-visiblestroke pointer-events-visiblestroke pointer-events: visiblestroke; pointer-events-visible pointer-events-visible pointer-events: visible; pointer-events-painted pointer-events-painted pointer-events: painted; pointer-events-fill pointer-events-fill pointer-events: fill; pointer-events-stroke pointer-events-stroke pointer-events: stroke; pointer-events-all pointer-events-all pointer-events: all; custom sizing variables control and reset the default pointer events on every html element by using the greencss classes shown above use the following structure to generate your pointer events class `pointer-events keyword ` and apply the default css classes like `pointer-events-auto`  active focus and hover states greencss css class example active:pointer-events keyword active :pointer-events-none:active pointer-events: none; focus:pointer-events keyword focus :pointer-events-none:focus pointer-events: none; hover:pointer-events keyword hover :pointer-events-none:focus pointer-events: none; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:pointer-events-none` to only apply the pointer-events-none utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:pointer-events-none md: 480px 768px md:pointer-events-none lg: 768px 1080px lg:pointer-events-none greencss media queries can also be combined with active focus and hover states for example use `sm:pointer-events-none` to apply the `pointer-events-none` utility at only small screen sizes at or below 480px or `active:md:pointer-events-none` to apply the `pointer-events-none` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :pointer-events keyword ` p e `active:md:pointer-events-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:pointer-events-none focus:pointer-events-none hover:pointer-events-none active pointer events focus pointer events hover pointer events active:sm:pointer-events-none focus:sm:pointer-events-none hover:sm:pointer-events-none active small screens pointer events focus small screens pointer events hover small screens pointer events active:md:pointer-events-none focus:md:pointer-events-none hover:md:pointer-events-none active medium screens pointer events focus medium screens pointer events hover medium screens pointer events active:lg:pointer-events-none focus:lg:pointer-events-none hover:lg:pointer-events-none active large screens pointer events focus large screens pointer events hover large screens pointer events sources pointer-events https: developer mozilla org en-us docs web css pointer-events '
---

| _greenCSS_                    | CSS class example                                                  |
| ----------------------------- | ------------------------------------------------------------------ |
| pointer-events-none           | .pointer-events-none { pointer-events: none; }                     |
| pointer-events-auto           | .pointer-events-auto { pointer-events: auto; }                     |
| pointer-events-visiblePainted | .pointer-events-visiblePainted { pointer-events: visiblePainted; } |
| pointer-events-visibleFill    | .pointer-events-visibleFill { pointer-events: visibleFill; }       |
| pointer-events-visibleStroke  | .pointer-events-visibleStroke { pointer-events: visibleStroke; }   |
| pointer-events-visible        | .pointer-events-visible { pointer-events: visible; }               |
| pointer-events-painted        | .pointer-events-painted { pointer-events: painted; }               |
| pointer-events-fill           | .pointer-events-fill { pointer-events: fill; }                     |
| pointer-events-stroke         | .pointer-events-stroke { pointer-events: stroke; }                 |
| pointer-events-all            | .pointer-events-all { pointer-events: all; }                       |

## Custom Sizing Variables

Control and reset the default pointer events on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your pointer events class `pointer-events-{keyword}` and apply the default CSS classes like `pointer-events-auto`.

```html
<div class="relative flex min-h-20px">
  <div class="absolute pointer-events-auto flex h-100per">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="my-auto">
      <path
        d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill="#0D0D0D" />
    </svg>
  </div>
  <input type="text" placeholder="dummy placeholder" class="pl-25px" />
</div>
```

## Active, focus, and hover states

| _greenCSS_                      | CSS class example                                             |
| ------------------------------- | ------------------------------------------------------------- |
| active:pointer-events-{keyword} | .active\:pointer-events-none:active { pointer-events: none; } |
| focus:pointer-events-{keyword}  | .focus\:pointer-events-none:focus { pointer-events: none; }   |
| hover:pointer-events-{keyword}  | .hover\:pointer-events-none:focus { pointer-events: none; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:pointer-events-none` to only apply the pointer-events-none utility class on hover.

```html
<div class="relative flex min-h-20px">
  <div class="pointer-events-auto hover:pointer-events-none absolute flex h-100per">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="my-auto">
      <path
        d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill="#0D0D0D" />
    </svg>
  </div>
  <input type="text" placeholder="dummy placeholder" class="pl-25px" />
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example        |
| ----------- | -------------- | ----------------------- |
| sm:         | 0px - 480px    | .sm:pointer-events-none |
| md:         | 480px - 768px  | .md:pointer-events-none |
| lg:         | 768px - 1080px | .lg:pointer-events-none |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:pointer-events-none` to apply the `pointer-events-none` utility at only small screen sizes at or below 480px. Or `active:md:pointer-events-none` to apply the `pointer-events-none` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:pointer-events-{keyword}` p.e. `active:md:pointer-events-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                        | spoken example                                                                                                  |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:pointer-events-none , focus:pointer-events-none , hover:pointer-events-none          | active pointer events, focus pointer events, hover pointer events                                               |
| active:sm:pointer-events-none , focus:sm:pointer-events-none , hover:sm:pointer-events-none | active small screens pointer events, focus small screens pointer events, hover small screens pointer events,    |
| active:md:pointer-events-none , focus:md:pointer-events-none , hover:md:pointer-events-none | active medium screens pointer events, focus medium screens pointer events, hover medium screens pointer events, |
| active:lg:pointer-events-none , focus:lg:pointer-events-none , hover:lg:pointer-events-none | active large screens pointer events, focus large screens pointer events, hover large screens pointer events,    |

## Sources

- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
