---
isBlog: false
title: 'Padding'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s padding.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'padding, negative padding, spacing, css class, responsive'
classNames: ''
plainText: ' omencss css class example range - - p- size p-1px padding: 1px; p-0px to p-100px p-neg- size p-neg-1px padding: -1px; p-neg-100px to p-neg-1px p- size p-1rem padding: 0rem; p-0rem to p-30rem p-neg- size p-neg-30rem padding: -30rem; p-neg-30rem to p-neg-1rem add padding to all sides control the padding on all sides of an html element by using the p- size utility the pixel padding class range is from negative -100 to positive 100 and uses the px postfix the steps are + - 1px e g p-0px p-1px p-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g p-0rem p-1rem p-30rem html div class=p-50px p-50px div 💡 how to use padding on a specific side? have a closer look at padding top right bottom and left docs spacing-padding-side active focus and hover states omencss css class example range - - active:p- size active :p-1px:active padding: 1px; active:p-neg-100px to active:p-100px focus:p- size focus :p-1px:focus padding: 1px; focus:p-neg-100px to focus:p-100px hover:p- size hover :p-1px:focus padding: 1px; hover:p-neg-100px to hover:p-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:p-10px to only apply the p-10px utility on hover html div class=p-50px hover:p-20px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:p-10px md: 480px - 768px md:p-10px lg: 768px - 1080px lg:p-10px omencss media queries can also be combined with active focus and hover states for example use sm:p-10px to apply the p-10px utility at only small screen sizes at or below 480px or active:md:p-10px to apply the p-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :p- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example active:p- size focus:p- size hover:p- size active padding focus padding hover padding active:sm:p- size focus:sm:p- size hover:sm:p- size active small screens padding focus small screens padding hover small screens padding active:md:p- size focus:md:p- size hover:md:p- size active medium screens padding focus medium screens padding hover medium screens padding active:lg:p- size focus:lg:p- size hover:lg:p- size active large screens padding focus large screens padding hover large screens padding '
---

| _omenCSS_    | CSS class example                 | Range                     |
| ------------ | --------------------------------- | ------------------------- |
| p-{size}     | .p-1px { padding: 1px; }          | p-0px to p-100px          |
| p-neg-{size} | .p-neg-1px { padding: -1px; }     | p-neg-100px to p-neg-1px  |
| p-{size}     | .p-1rem { padding: 0rem; }        | p-0rem to p-30rem         |
| p-neg-{size} | .p-neg-30rem { padding: -30rem; } | p-neg-30rem to p-neg-1rem |

## Add padding to all sides

Control the padding on all sides of an HTML element by using the p-{size} utility. The pixel padding class range is from negative -100 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `p-0px, p-1px,... p-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem padding class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `p-0rem, p-1rem,... p-30rem`

```html
<div class="p-50px">p-50px</div>
```

💡 How to use padding on a specific side? Have a closer look at [padding top, right, bottom and left](/docs/spacing-padding-side).

## Active, focus, and hover states

| _omenCSS_       | CSS class example                       | Range                                |
| --------------- | --------------------------------------- | ------------------------------------ |
| active:p-{size} | .active\:p-1px:active { padding: 1px; } | active:p-neg-100px to active:p-100px |
| focus:p-{size}  | .focus\:p-1px:focus { padding: 1px; }   | focus:p-neg-100px to focus:p-100px   |
| hover:p-{size}  | .hover\:p-1px:focus { padding: 1px; }   | hover:p-neg-100px to hover:p-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:p-10px` to only apply the p-10px utility on hover.

```html
<div class="p-50px hover:p-20px">p-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:p-10px      |
| md:         | 480px - 768px  | .md:p-10px      |
| lg:         | 768px - 1080px | .lg:p-10px      |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:p-10px` to apply the p-10px utility at only small screen sizes at or below 480px. Or `active:md:p-10px` to apply the p-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:p-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS states                                             | spoken example                                                                             |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| active:p-{size} , focus:p-{size} , hover:p-{size}          | active padding, focus padding, hover padding                                               |
| active:sm:p-{size} , focus:sm:p-{size} , hover:sm:p-{size} | active small screens padding, focus small screens padding, hover small screens padding,    |
| active:md:p-{size} , focus:md:p-{size} , hover:md:p-{size} | active medium screens padding, focus medium screens padding, hover medium screens padding, |
| active:lg:p-{size} , focus:lg:p-{size} , hover:lg:p-{size} | active large screens padding, focus large screens padding, hover large screens padding,    |
