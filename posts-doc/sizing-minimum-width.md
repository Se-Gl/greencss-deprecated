---
isBlog: false
title: 'Minimum Width'
date: 'Mar 27. 2022'
excerpt: 'Utility classes for controlling an element`s width.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, minimum width, min-w-'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - min-w- size min-w-1px width: 1px; min-w-0px min-w-100px 1px min-w- size min-w-11rem width: 1rem; min-w-11rem min-w-100rem 1rem min-w- size min-w-1% width: 1%; min-w-0per min-w-100per 1% min-w- size min-w-1vw width: 1vw; min-w-0vw min-w-100vw 1vw fixed minimum widths control the width on every html element by using the min-w- size utility with a postfix variable - like -px -rem -vw 1 the pixel width class range is from 0 to positive 100 and uses the px postfix the steps are + - 1px e g min-w-0px min-w-1px min-w-100px 2 the rem width class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + - 1rem e g min-w-11rem min-w-12rem min-w-100rem ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport width class range is from 0vw to positive 100vw and uses the vw postfix the steps are + - 1vw e g min-w-0vw min-w-1vw min-w-100vw use min-w-100vw to make an element span the entire width of the viewport html div class=min-w-50px min-w-50px div ! 50rem is equal to: 500px div class=min-w-50rem min-w-50rem div ! 50per is equal to: 50% div class=min-w-50per min-w-50per div ! 50vw is equal to: viewport width of 50 div class=min-w-50vw min-w-50vw div percentage widths control the percentage width on every html element by using the min-w- size utility with the postfix variable -per 1 the percentage width class range is from 0 to positive 100 and uses the per postfix the steps are + - 1% e g min-w-0per min-w-1per min-w-100per html div class=min-w-50per min-w-50per div reset the minimum width the min-w-auto utility can be useful if you need to remove an element’s assigned width under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints : html div class=min-w-full sm:min-w-auto ! div active focus and hover states omencss css class example range - - active:min-w- size active :min-w-1px:active width: 1px; active:min-w-0px to active:min-w-100px focus:min-w- size focus :min-w-1px:focus width: 1px; focus:min-w-0px to focus:min-w-100px hover:min-w- size hover :min-w-1px:focus width: 1px; hover:min-w-0px to hover:min-w-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:min-w-10px to only apply the min-w-10px utility on hover html div class=min-w-50px hover:min-w-20px min-w-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:min-w-10px md: 480px - 768px md:min-w-10px lg: 768px - 1080px lg:min-w-10px omencss media queries can also be combined with active focus and hover states for example use sm:min-w-10px to apply the min-w-10px utility at only small screen sizes at or below 480px or active:md:min-w-10px to apply the min-w-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query : classname size p e active:md:m-10px executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:min-w- size focus:min-w- size hover:min-w- size active minimum width focus minimum width hover minimum width active:sm:min-w- size focus:sm:min-w- size hover:sm:min-w- size active small screens minimum width focus small screens minimum width hover small screens minimum width active:md:min-w- size focus:md:min-w- size hover:md:min-w- size active medium screens minimum width focus medium screens minimum width hover medium screens minimum width active:lg:min-w- size focus:lg:min-w- size hover:lg:min-w- size active large screens minimum width focus large screens minimum width hover large screens minimum width '
---

| _omenCSS_    | CSS class example             | minimum Value | maximum Value | Step |
| ------------ | ----------------------------- | ------------- | ------------- | ---- |
| min-w-{size} | .min-w-1px { width: 1px; }    | min-w-0px     | min-w-100px   | 1px  |
| min-w-{size} | .min-w-11rem { width: 1rem; } | min-w-11rem   | min-w-100rem  | 1rem |
| min-w-{size} | .min-w-1% { width: 1%; }      | min-w-0per    | min-w-100per  | 1%   |
| min-w-{size} | .min-w-1vw { width: 1vw; }    | min-w-0vw     | min-w-100vw   | 1vw  |

## Fixed minimum widths

Control the width on every HTML element by using the min-w-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel width class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `min-w-0px, min-w-1px,... min-w-100px`

2. The rem width class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `min-w-11rem, min-w-12rem,... min-w-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport width class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `min-w-0vw, min-w-1vw,... min-w-100vw`. Use min-w-100vw to make an element span the entire width of the viewport.

```html
<div class="min-w-50px">min-w-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="min-w-50rem">min-w-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="min-w-50per">min-w-50per</div>
<!-- 50vw is equal to: viewport width of 50 -->
<div class="min-w-50vw">min-w-50vw</div>
```

## Percentage widths

Control the percentage width on every HTML element by using the min-w-{size} utility with the postfix variable `{-per}`.

1. The percentage width class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `min-w-0per, min-w-1per,... min-w-100per`

```html
<div class="min-w-50per">min-w-50per</div>
```

## Reset the minimum width

The `{min-w-auto}` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="min-w-full sm:min-w-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [width](/docs/sizing-width) or [maximum width](/docs/sizing-maximum-width).

## Active, focus, and hover states

| _omenCSS_           | CSS class example                         | Range                                  |
| ------------------- | ----------------------------------------- | -------------------------------------- |
| active:min-w-{size} | .active\:min-w-1px:active { width: 1px; } | active:min-w-0px to active:min-w-100px |
| focus:min-w-{size}  | .focus\:min-w-1px:focus { width: 1px; }   | focus:min-w-0px to focus:min-w-100px   |
| hover:min-w-{size}  | .hover\:min-w-1px:focus { width: 1px; }   | hover:min-w-0px to hover:min-w-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:min-w-10px` to only apply the min-w-10px utility on hover.

```html
<div class="min-w-50px hover:min-w-20px">min-w-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:min-w-10px  |
| md:         | 480px - 768px  | .md:min-w-10px  |
| lg:         | 768px - 1080px | .lg:min-w-10px  |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:min-w-10px` to apply the min-w-10px utility at only small screen sizes at or below 480px. Or `active:md:min-w-10px` to apply the min-w-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                    | spoken example                                                                                               |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:min-w-{size} , focus:min-w-{size} , hover:min-w-{size}          | active minimum width, focus minimum width, hover minimum width                                               |
| active:sm:min-w-{size} , focus:sm:min-w-{size} , hover:sm:min-w-{size} | active small screens minimum width, focus small screens minimum width, hover small screens minimum width,    |
| active:md:min-w-{size} , focus:md:min-w-{size} , hover:md:min-w-{size} | active medium screens minimum width, focus medium screens minimum width, hover medium screens minimum width, |
| active:lg:min-w-{size} , focus:lg:min-w-{size} , hover:lg:min-w-{size} | active large screens minimum width, focus large screens minimum width, hover large screens minimum width,    |
