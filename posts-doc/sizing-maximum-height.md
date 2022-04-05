---
isBlog: false
title: 'Maximum Height'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s maximum height.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, maximum height, max-h-'
classNames: ''
plainText: ' omencss css class example maximum value maximum value step max-h size max-h-1px height: 1px; max-h-0px max-h-100px 1px max-h size max-h-11rem height: 1rem; max-h-11rem max-h-100rem 1rem max-h size max-h-1% height: 1%; max-h-0per max-h-100per 1% max-h size max-h-1vw height: 1vw; max-h-0vw max-h-100vw 1vw fixed maximum heights control the height on every html element by using the max-h size utility with a postfix variable like ` -px -rem -vw ` 1 the pixel height class range is from 0 to positive 100 and uses the px postfix the steps are + 1px e g `max-h-0px max-h-1px max-h-100px` 2 the rem height class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + 1rem e g `max-h-11rem max-h-12rem max-h-100rem` ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport height class range is from 0vw to positive 100vw and uses the vw postfix the steps are + 1vw e g `max-h-0vw max-h-1vw max-h-100vw` use max-h-100vw to make an element span the entire height of the viewport  maximum percentage heights control the percentage height on every html element by using the max-h size utility with the postfix variable ` -per ` 1 the percentage height class range is from 0 to positive 100 and uses the per postfix the steps are + 1% e g `max-h-0per max-h-1per max-h-100per`  reset the maximum height the ` max-h-auto ` utility can be useful if you need to remove an element’s assigned height under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints :  💡 click how to use the default height docs sizing-height or minimum height docs sizing-minimum-height active focus and hover states omencss css class example range active:max-h size active :max-h-1px:active height: 1px; active:max-h-0px to active:max-h-100px focus:max-h size focus :max-h-1px:focus height: 1px; focus:max-h-0px to focus:max-h-100px hover:max-h size hover :max-h-1px:focus height: 1px; hover:max-h-0px to hover:max-h-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:max-h-10px` to only apply the max-h-10px utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:max-h-10px md: 480px 768px md:max-h-10px lg: 768px 1080px lg:max-h-10px omencss media queries can also be combined with active focus and hover states for example use `sm:max-h-10px` to apply the max-h-10px utility at only small screen sizes at or below 480px or `active:md:max-h-10px` to apply the max-h-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : classname size ` p e `active:md:m-10px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:max-h size focus:max-h size hover:max-h size active maximum height focus maximum height hover maximum height active:sm:max-h size focus:sm:max-h size hover:sm:max-h size active small screens maximum height focus small screens maximum height hover small screens maximum height active:md:max-h size focus:md:max-h size hover:md:max-h size active medium screens maximum height focus medium screens maximum height hover medium screens maximum height active:lg:max-h size focus:lg:max-h size hover:lg:max-h size active large screens maximum height focus large screens maximum height hover large screens maximum height sources max-height https: developer mozilla org en-us docs web css max-height '
---

| _omenCSS_    | CSS class example              | maximum Value | maximum Value | Step |
| ------------ | ------------------------------ | ------------- | ------------- | ---- |
| max-h-{size} | .max-h-1px { height: 1px; }    | max-h-0px     | max-h-100px   | 1px  |
| max-h-{size} | .max-h-11rem { height: 1rem; } | max-h-11rem   | max-h-100rem  | 1rem |
| max-h-{size} | .max-h-1% { height: 1%; }      | max-h-0per    | max-h-100per  | 1%   |
| max-h-{size} | .max-h-1vw { height: 1vw; }    | max-h-0vw     | max-h-100vw   | 1vw  |

## Fixed maximum heights

Control the height on every HTML element by using the max-h-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel height class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `max-h-0px, max-h-1px,... max-h-100px`

2. The rem height class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `max-h-11rem, max-h-12rem,... max-h-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport height class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `max-h-0vw, max-h-1vw,... max-h-100vw`. Use max-h-100vw to make an element span the entire height of the viewport.

```html
<div class="max-h-50px">max-h-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="max-h-50rem">max-h-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="max-h-50per">max-h-50per</div>
<!-- 50vw is equal to: viewport height of 50 -->
<div class="max-h-50vw">max-h-50vw</div>
```

## Maximum percentage heights

Control the percentage height on every HTML element by using the max-h-{size} utility with the postfix variable `{-per}`.

1. The percentage height class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `max-h-0per, max-h-1per,... max-h-100per`

```html
<div class="max-h-50per">max-h-50per</div>
```

## Reset the maximum height

The `{max-h-auto}` utility can be useful if you need to remove an element’s assigned height under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="max-h-full sm:max-h-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [height](/docs/sizing-height) or [minimum height](/docs/sizing-minimum-height).

## Active, focus, and hover states

| _omenCSS_           | CSS class example                          | Range                                  |
| ------------------- | ------------------------------------------ | -------------------------------------- |
| active:max-h-{size} | .active\:max-h-1px:active { height: 1px; } | active:max-h-0px to active:max-h-100px |
| focus:max-h-{size}  | .focus\:max-h-1px:focus { height: 1px; }   | focus:max-h-0px to focus:max-h-100px   |
| hover:max-h-{size}  | .hover\:max-h-1px:focus { height: 1px; }   | hover:max-h-0px to hover:max-h-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:max-h-10px` to only apply the max-h-10px utility on hover.

```html
<div class="max-h-50px hover:max-h-20px">max-h-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:max-h-10px  |
| md:         | 480px - 768px  | .md:max-h-10px  |
| lg:         | 768px - 1080px | .lg:max-h-10px  |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:max-h-10px` to apply the max-h-10px utility at only small screen sizes at or below 480px. Or `active:md:max-h-10px` to apply the max-h-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                                                  |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:max-h-{size} , focus:max-h-{size} , hover:max-h-{size}          | active maximum height, focus maximum height, hover maximum height                                               |
| active:sm:max-h-{size} , focus:sm:max-h-{size} , hover:sm:max-h-{size} | active small screens maximum height, focus small screens maximum height, hover small screens maximum height,    |
| active:md:max-h-{size} , focus:md:max-h-{size} , hover:md:max-h-{size} | active medium screens maximum height, focus medium screens maximum height, hover medium screens maximum height, |
| active:lg:max-h-{size} , focus:lg:max-h-{size} , hover:lg:max-h-{size} | active large screens maximum height, focus large screens maximum height, hover large screens maximum height,    |

## Sources

- [max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
