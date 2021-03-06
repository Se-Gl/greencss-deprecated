---
isBlog: false
title: 'Maximum Width'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s maximum width.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, maximum width, max-w-'
classNames: ''
plainText: ' greenCSS css class example maximum value maximum value step max-w size max-w-1px width: 1px; max-w-0px max-w-100px 1px max-w size max-w-11rem width: 1rem; max-w-11rem max-w-100rem 1rem max-w size max-w-1% width: 1%; max-w-0per max-w-100per 1% max-w size max-w-1vw width: 1vw; max-w-0vw max-w-100vw 1vw fixed maximum widths control the width on every html element by using the max-w size utility with a postfix variable like ` -px -rem -vw ` 1 the pixel width class range is from 0 to positive 100 and uses the px postfix the steps are + 1px e g `max-w-0px max-w-1px max-w-100px` 2 the rem width class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + 1rem e g `max-w-11rem max-w-12rem max-w-100rem` ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport width class range is from 0vw to positive 100vw and uses the vw postfix the steps are + 1vw e g `max-w-0vw max-w-1vw max-w-100vw` use max-w-100vw to make an element span the entire width of the viewport  percentage widths control the percentage width on every html element by using the max-w size utility with the postfix variable ` -per ` 1 the percentage width class range is from 0 to positive 100 and uses the per postfix the steps are + 1% e g `max-w-0per max-w-1per max-w-100per`  reset the maximum width the ` max-w-auto ` utility can be useful if you need to remove an element’s assigned width under a specific condition like at a particular breakpoint blog responsive-greenCSS-breakpoints :  💡 click how to use the default width docs sizing-width or minimum width docs sizing-minimum-width active focus and hover states greenCSS css class example range active:max-w size active :max-w-1px:active width: 1px; active:max-w-0px to active:max-w-100px focus:max-w size focus :max-w-1px:focus width: 1px; focus:max-w-0px to focus:max-w-100px hover:max-w size hover :max-w-1px:focus width: 1px; hover:max-w-0px to hover:max-w-100px greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:max-w-10px` to only apply the max-w-10px utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:max-w-10px md: 480px 768px md:max-w-10px lg: 768px 1080px lg:max-w-10px greenCSS media queries can also be combined with active focus and hover states for example use `sm:max-w-10px` to apply the max-w-10px utility at only small screen sizes at or below 480px or `active:md:max-w-10px` to apply the max-w-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : classname size ` p e `active:md:m-10px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:max-w size focus:max-w size hover:max-w size active maximum width focus maximum width hover maximum width active:sm:max-w size focus:sm:max-w size hover:sm:max-w size active small screens maximum width focus small screens maximum width hover small screens maximum width active:md:max-w size focus:md:max-w size hover:md:max-w size active medium screens maximum width focus medium screens maximum width hover medium screens maximum width active:lg:max-w size focus:lg:max-w size hover:lg:max-w size active large screens maximum width focus large screens maximum width hover large screens maximum width sources max-width https: developer mozilla org en-us docs web css max-width '
---

| _greenCSS_   | CSS class example             | minimum Value | maximum Value | Step |
| ------------ | ----------------------------- | ------------- | ------------- | ---- |
| max-w-{size} | .max-w-1px { width: 1px; }    | max-w-0px     | max-w-100px   | 1px  |
| max-w-{size} | .max-w-11rem { width: 1rem; } | max-w-11rem   | max-w-100rem  | 1rem |
| max-w-{size} | .max-w-1% { width: 1%; }      | max-w-0per    | max-w-100per  | 1%   |
| max-w-{size} | .max-w-1vw { width: 1vw; }    | max-w-0vw     | max-w-100vw   | 1vw  |

## Fixed maximum widths

Control the width on every HTML element by using the max-w-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel width class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `max-w-0px, max-w-1px,... max-w-100px`

2. The rem width class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `max-w-11rem, max-w-12rem,... max-w-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport width class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `max-w-0vw, max-w-1vw,... max-w-100vw`. Use max-w-100vw to make an element span the entire width of the viewport.

```html
<div class="max-w-50px">max-w-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="max-w-50rem">max-w-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="max-w-50per">max-w-50per</div>
<!-- 50vw is equal to: viewport width of 50 -->
<div class="max-w-50vw">max-w-50vw</div>
```

## Percentage widths

Control the percentage width on every HTML element by using the max-w-{size} utility with the postfix variable `{-per}`.

1. The percentage width class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `max-w-0per, max-w-1per,... max-w-100per`

```html
<div class="max-w-50per">max-w-50per</div>
```

## Reset the maximum width

The `{max-w-auto}` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular [breakpoint](/blog/responsive-greenCSS-breakpoints):

```html
<div class="max-w-full sm:max-w-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [width](/docs/sizing-width) or [minimum width](/docs/sizing-minimum-width).

## Active, focus, and hover states

| _greenCSS_          | CSS class example                         | Range                                  |
| ------------------- | ----------------------------------------- | -------------------------------------- |
| active:max-w-{size} | .active\:max-w-1px:active { width: 1px; } | active:max-w-0px to active:max-w-100px |
| focus:max-w-{size}  | .focus\:max-w-1px:focus { width: 1px; }   | focus:max-w-0px to focus:max-w-100px   |
| hover:max-w-{size}  | .hover\:max-w-1px:focus { width: 1px; }   | hover:max-w-0px to hover:max-w-100px   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:max-w-10px` to only apply the max-w-10px utility on hover.

```html
<div class="max-w-50px hover:max-w-20px">max-w-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:max-w-10px   |
| md:         | 480px - 768px  | .md:max-w-10px   |
| lg:         | 768px - 1080px | .lg:max-w-10px   |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:max-w-10px` to apply the max-w-10px utility at only small screen sizes at or below 480px. Or `active:md:max-w-10px` to apply the max-w-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                   | spoken example                                                                                               |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:max-w-{size} , focus:max-w-{size} , hover:max-w-{size}          | active maximum width, focus maximum width, hover maximum width                                               |
| active:sm:max-w-{size} , focus:sm:max-w-{size} , hover:sm:max-w-{size} | active small screens maximum width, focus small screens maximum width, hover small screens maximum width,    |
| active:md:max-w-{size} , focus:md:max-w-{size} , hover:md:max-w-{size} | active medium screens maximum width, focus medium screens maximum width, hover medium screens maximum width, |
| active:lg:max-w-{size} , focus:lg:max-w-{size} , hover:lg:max-w-{size} | active large screens maximum width, focus large screens maximum width, hover large screens maximum width,    |

## Sources

- [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
