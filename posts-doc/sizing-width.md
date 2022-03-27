---
isBlog: false
title: 'Width'
date: 'Mar 27. 2022'
excerpt: 'Utility classes for controlling an element`s width.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, width, w-, max-w, min-w'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - - w- size w-1px width: 1px; w-0px w-100px 1px w- size w-11rem width: 1rem; w-11rem w-100rem 1rem w- size w-1% width: 1%; w-0per w-100per 1% w- size w-1vw width: 1vw; w-0vw w-100vw 1vw fixed widths control the width on every html element by using the w- size utility with a postfix variable - like -px -rem -vw 1 the pixel width class range is from 0 to positive 100 and uses the px postfix the steps are + - 1px e g w-0px w-1px w-100px 2 the rem width class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + - 1rem e g w-11rem w-12rem w-100rem ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport width class range is from 0vw to positive 100vw and uses the vw postfix the steps are + - 1vw e g w-0vw w-1vw w-100vw use w-100vw to make an element span the entire width of the viewport html div class=w-50px w-50px div ! 50rem is equal to: 500px div class=w-50rem w-50rem div ! 50per is equal to: 50% div class=w-50per w-50per div ! 50vw is equal to: viewport width of 50 div class=w-50vw w-50vw div percentage widths control the percentage width on every html element by using the w- size utility with the postfix variable -per 1 the percentage width class range is from 0 to positive 100 and uses the per postfix the steps are + - 1% e g w-0per w-1per w-100per html div class=w-50per w-50per div reset width the w-auto utility can be useful if you need to remove an element’s assigned width under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints : html div class=w-full sm:w-auto ! div active focus and hover states omencss css class example range - - active:w- size active :w-1px:active width: 1px; active:w-0px to active:w-100px focus:w- size focus :w-1px:focus width: 1px; focus:w-0px to focus:w-100px hover:w- size hover :w-1px:focus width: 1px; hover:w-0px to hover:w-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:w-10px to only apply the w-10px utility on hover html div class=w-50px hover:w-20px w-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:w-10px md: 480px - 768px md:w-10px lg: 768px - 1080px lg:w-10px omencss media queries can also be combined with active focus and hover states for example use sm:w-10px to apply the w-10px utility at only small screen sizes at or below 480px or active:md:w-10px to apply the w-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditionally state : media query : classname size p e active:md:m-10px executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omenCSS class names spoken example active:w- size focus:w- size hover:w- size active width focus width hover width active:sm:w- size focus:sm:w- size hover:sm:w- size active small screens width focus small screens width hover small screens width active:md:w- size focus:md:w- size hover:md:w- size active medium screens width focus medium screens width hover medium screens width active:lg:w- size focus:lg:w- size hover:lg:w- size active large screens width focus large screens width hover large screens width '
---

| _omenCSS_ | CSS class example         | minimum Value | maximum Value | Step |
| --------- | ------------------------- | ------------- | ------------- | ---- |
| w-{size}  | .w-1px { width: 1px; }    | w-0px         | w-100px       | 1px  |
| w-{size}  | .w-11rem { width: 1rem; } | w-11rem       | w-100rem      | 1rem |
| w-{size}  | .w-1% { width: 1%; }      | w-0per        | w-100per      | 1%   |
| w-{size}  | .w-1vw { width: 1vw; }    | w-0vw         | w-100vw       | 1vw  |

## Fixed widths

Control the width on every HTML element by using the w-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel width class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `w-0px, w-1px,... w-100px`

2. The rem width class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `w-11rem, w-12rem,... w-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport width class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `w-0vw, w-1vw,... w-100vw`. Use w-100vw to make an element span the entire width of the viewport.

```html
<div class="w-50px">w-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="w-50rem">w-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="w-50per">w-50per</div>
<!-- 50vw is equal to: viewport width of 50 -->
<div class="w-50vw">w-50vw</div>
```

## Percentage widths

Control the percentage width on every HTML element by using the w-{size} utility with the postfix variable `{-per}`.

1. The percentage width class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `w-0per, w-1per,... w-100per`

```html
<div class="w-50per">w-50per</div>
```

## Reset width

The `{w-auto}` utility can be useful if you need to remove an element’s assigned width under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="w-full sm:w-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [minimum width](/docs/sizing-minimum-width) or [maximum width](/docs/sizing-maximum-width).

## Active, focus, and hover states

| _omenCSS_       | CSS class example                     | Range                          |
| --------------- | ------------------------------------- | ------------------------------ |
| active:w-{size} | .active\:w-1px:active { width: 1px; } | active:w-0px to active:w-100px |
| focus:w-{size}  | .focus\:w-1px:focus { width: 1px; }   | focus:w-0px to focus:w-100px   |
| hover:w-{size}  | .hover\:w-1px:focus { width: 1px; }   | hover:w-0px to hover:w-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:w-10px` to only apply the w-10px utility on hover.

```html
<div class="w-50px hover:w-20px">w-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:w-10px      |
| md:         | 480px - 768px  | .md:w-10px      |
| lg:         | 768px - 1080px | .lg:w-10px      |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:w-10px` to apply the w-10px utility at only small screen sizes at or below 480px. Or `active:md:w-10px` to apply the w-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditionally state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                        | spoken example                                                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:w-{size} , focus:w-{size} , hover:w-{size}          | active width, focus width, hover width                                               |
| active:sm:w-{size} , focus:sm:w-{size} , hover:sm:w-{size} | active small screens width, focus small screens width, hover small screens width,    |
| active:md:w-{size} , focus:md:w-{size} , hover:md:w-{size} | active medium screens width, focus medium screens width, hover medium screens width, |
| active:lg:w-{size} , focus:lg:w-{size} , hover:lg:w-{size} | active large screens width, focus large screens width, hover large screens width,    |
