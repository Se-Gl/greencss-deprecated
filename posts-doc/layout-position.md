---
isBlog: false
title: 'Position'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to determine the layout position.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Position, layout, absolute, fixed, relative, static, sticky'
classNames: ''
plainText: ' omencss css class example absolute absolute position: absolute; fixed fixed position: fixed; relative relative position: relative; static static position: static; sticky sticky position: sticky; how to work with position 1 use the ` keyword ` to control determine and set the position of an element in the dom position absolute using `absolute` the element is deleted from the normal document structure no space is created for the element in the page layout it is placed relative to its closest positioned parent if available otherwise it is placed relative to the initial block its final position is determined by the values of `top number per` `right number per` `bottom number per` and `left number per`  position fixed using `fixed` the element is deleted from the normal document structure no space is created for the element in the page layout it is placed relative to its initial positioned block which is established by the viewport  position relative use `relative` whereby is positioned according to the normal flow of the document the offset will not affect the location of other elements therefore the amount of space for the element in the page layout will be the same as a static position  position sticky a `sticky` positioned element is an element whose computed position value is sticky it is considered to be a relatively positioned item until its containing block exceeds a certain threshold e g setting top to a value other than auto inside its container or flow root at that point it is treated as frozen until it hits the opposite edge of its containing block  active focus and hover states omencss css class example active: keyword active :absolute:active position: absolute; focus: keyword focus :absolute:focus position: absolute; hover: keyword hover :absolute:hover position: absolute; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:fixed` to only apply the absolute utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:absolute md: 480px 768px md:absolute lg: 768px 1080px lg:absolute omencss media queries can also be combined with active focus and hover states for example use `sm:absolute` to apply the absolute utility at only small screen sizes at or below 480px or `active:md:absolute` to apply the absolute utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : keyword ` p e `active:md:absolute` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active: keyword focus: keyword hover: keyword active position absolute focus position absolute hover position absolute active:sm: keyword focus:sm: keyword hover:sm: keyword active small screens position absolute focus small screens position absolute hover small screens position absolute active:md: keyword focus:md: keyword hover:md: keyword active medium screens position absolute focus medium screens position absolute hover medium screens position absolute active:lg: keyword focus:lg: keyword hover:lg: keyword active large screens position absolute focus large screens position absolute hover large screens position absolute sources position https: developer mozilla org en-us docs web css position '
---

| _omenCSS_ | CSS class example                 |
| --------- | --------------------------------- |
| absolute  | .absolute { position: absolute; } |
| fixed     | .fixed { position: fixed; }       |
| relative  | .relative { position: relative; } |
| static    | .static { position: static; }     |
| sticky    | .sticky { position: sticky; }     |

## How to work with position

1. Use the `{keyword}` to control, determine and set the position of an element in the DOM.

### Position Absolute

Using `absolute`, the element is deleted from the normal document structure. No space is created for the element in the page layout. It is placed relative to its closest positioned parent, if available, otherwise, it is placed relative to the initial block. Its final position is determined by the values of `top-{number}per`, `right-{number}per`, `bottom-{number}per` and `left-{number}per`.

```html
<div class="absolute top-50per left-50per">{children}</div>
```

### Position Fixed

Using `fixed`, the element is deleted from the normal document structure. No space is created for the element in the page layout. It is placed relative to its initial positioned block, which is established by the viewport.

```html
<div class="fixed">{children}</div>
```

### Position Relative

Use `relative` whereby is positioned according to the normal flow of the document. The offset will not affect the location of other elements, therefore, the amount of space for the element in the page layout will be the same as a static position.

```html
<div class="relative">{children}</div>
```

### Position Sticky

A `sticky` positioned element is an element whose computed position value is sticky. It is considered to be a relatively positioned item until its containing block exceeds a certain threshold (e.g. setting top to a value other than auto) inside its container or flow root. At that point, it is treated as "frozen" until it hits the opposite edge of its containing block.

```html
<div class="sticky">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_        | CSS class example                                |
| ---------------- | ------------------------------------------------ |
| active:{keyword} | .active\:absolute:active { position: absolute; } |
| focus:{keyword}  | .focus\:absolute:focus { position: absolute; }   |
| hover:{keyword}  | .hover\:absolute:hover { position: absolute; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:fixed` to only apply the absolute utility class on hover.

```html
<div class="relative hover:fixed">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:absolute    |
| md:         | 480px - 768px  | .md:absolute    |
| lg:         | 768px - 1080px | .lg:absolute    |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:absolute` to apply the absolute utility at only small screen sizes at or below 480px. Or `active:md:absolute` to apply the absolute utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{keyword}` p.e. `active:md:absolute`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                           | spoken example                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| active:{keyword} , focus:{keyword} , hover:{keyword}          | active position absolute, focus position absolute, hover position absolute                                               |
| active:sm:{keyword} , focus:sm:{keyword} , hover:sm:{keyword} | active small screens position absolute, focus small screens position absolute, hover small screens position absolute,    |
| active:md:{keyword} , focus:md:{keyword} , hover:md:{keyword} | active medium screens position absolute, focus medium screens position absolute, hover medium screens position absolute, |
| active:lg:{keyword} , focus:lg:{keyword} , hover:lg:{keyword} | active large screens position absolute, focus large screens position absolute, hover large screens position absolute,    |

## Sources

- [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
