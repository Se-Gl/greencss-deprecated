---
isBlog: false
title: 'Margin'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s margin.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'margin, negative margin, spacing, css class, responsive'
classNames: ''
plainText: ' omencss css class example range - m- size m-1px margin: 1px; m-0px to m-100px m-neg- size m-neg-1px margin: -1px; m-neg-100px to m-neg-1px m- size m-1rem margin: 0rem; m-0rem to m-30rem m-neg- size m-neg-30rem margin: -30rem; m-neg-30rem to m-neg-1rem add margin to all sides control the margin on all sides of an html element by using the m- size utility the pixel margin class range is from negative -100 to positive 100 and uses the px postfix the steps are + - 1px e g m-0px m-1px m-100px additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g m-0rem m-1rem m-30rem html div class=m-50px m-50px div ! is equal to: div class=pt-50px pr-50px pb-50px pl-50px pt-50px pr-50px pb-50px pl-50px div ⚠️ how to use margin on a specific side? have a closer look at margin top right bottom and left docs spacing-margin-side active focus and hover states omencss css class example range - active:m- size active :m-1px:active margin: 1px; active:m-neg-100px to active:m-100px focus:m- size focus :m-1px:focus margin: 1px; focus:m-neg-100px to focus:m-100px hover:m- size hover :m-1px:focus margin: 1px; hover:m-neg-100px to hover:m-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:m-10px to only apply the m-10px utility on hover html div class=m-50px hover:m-20px m-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:m-10px md: 480px - 768px md:m-10px lg: 768px - 1080px lg:m-10px omencss media queries can also be combined with active focus and hover states for example use sm:m-10px to apply the m-10px utility at only small screen sizes at or below 480px or active:md:m-10px to apply the m-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :m- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - active:m- size focus:m- size hover:m- size active margin focus margin hover margin active:sm:m- size focus:sm:m- size hover:sm:m- size active small screens margin focus small screens margin hover small screens margin active:md:m- size focus:md:m- size hover:md:m- size active medium screens margin focus medium screens margin hover medium screens margin active:lg:m- size focus:lg:m- size hover:lg:m- size active large screens margin focus large screens margin hover large screens margin '
---

| _omenCSS_    | CSS class example                | Range                     |
| ------------ | -------------------------------- | ------------------------- |
| m-{size}     | .m-1px { margin: 1px; }          | m-0px to m-100px          |
| m-neg-{size} | .m-neg-1px { margin: -1px; }     | m-neg-100px to m-neg-1px  |
| m-{size}     | .m-1rem { margin: 0rem; }        | m-0rem to m-30rem         |
| m-neg-{size} | .m-neg-30rem { margin: -30rem; } | m-neg-30rem to m-neg-1rem |

## Add margin to all sides

Control the margin on all sides of an HTML element by using the m-{size} utility. The pixel margin class range is from negative -100 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `m-0px, m-1px,... m-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem margin class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `m-0rem, m-1rem,... m-30rem`

```html
<div class="m-50px">m-50px</div>
<!-- is equal to: -->
<div class="pt-50px pr-50px pb-50px pl-50px">pt-50px pr-50px pb-50px pl-50px</div>
```

⚠️ How to use margin on a specific side? Have a closer look at [margin top, right, bottom and left](/docs/spacing-margin-side).

## Active, focus, and hover states

| _omenCSS_       | CSS class example                      | Range                                |
| --------------- | -------------------------------------- | ------------------------------------ |
| active:m-{size} | .active\:m-1px:active { margin: 1px; } | active:m-neg-100px to active:m-100px |
| focus:m-{size}  | .focus\:m-1px:focus { margin: 1px; }   | focus:m-neg-100px to focus:m-100px   |
| hover:m-{size}  | .hover\:m-1px:focus { margin: 1px; }   | hover:m-neg-100px to hover:m-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:m-10px` to only apply the m-10px utility on hover.

```html
<div class="m-50px hover:m-20px">m-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:m-10px      |
| md:         | 480px - 768px  | .md:m-10px      |
| lg:         | 768px - 1080px | .lg:m-10px      |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:m-10px` to apply the m-10px utility at only small screen sizes at or below 480px. Or `active:md:m-10px` to apply the m-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:m-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS states                                             | spoken example                                                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:m-{size} , focus:m-{size} , hover:m-{size}          | active margin, focus margin, hover margin                                               |
| active:sm:m-{size} , focus:sm:m-{size} , hover:sm:m-{size} | active small screens margin, focus small screens margin, hover small screens margin,    |
| active:md:m-{size} , focus:md:m-{size} , hover:md:m-{size} | active medium screens margin, focus medium screens margin, hover medium screens margin, |
| active:lg:m-{size} , focus:lg:m-{size} , hover:lg:m-{size} | active large screens margin, focus large screens margin, hover large screens margin,    |
