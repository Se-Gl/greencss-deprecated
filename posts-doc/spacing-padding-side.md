---
isBlog: false
title: 'Padding Side'
date: 'Mar 20. 2022'
excerpt: 'Utility classes for controlling an element`s padding to its sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'padding, negative padding, spacing, padding-top, padding-right, padding-bottom, padding-left'
classNames: ''
plainText: ' omencss css class example rminimum value maximum value step - p t r b l - size pt-1px padding-top: 1px; pt-0px pt-100px 1px p t r b l -neg- size pt-neg-1px padding-top: -1px; pt-neg-100px pt-neg-1px 1px p t r b l - size pt-1rem padding-top: 0rem; pt-0rem pt-30rem 1rem p t r b l -neg- size pt-neg-30rem padding-top: -30rem; pt-neg-30rem pt-neg-1rem 1rem add padding to specific side control the padding on a specific side such as top right bottom or left padding-top padding-right padding-bottom padding-left use the p t r b l - size utility the padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g pt-0px pt-1px pt-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g pt-0rem pt-1rem pt-30rem html div class=pt-50px pt-50px div div class=pr-50px pr-50px div div class=pb-50px pb-50px div div class=pl-50px pl-50px div 💡 how to use symmetrical padding on every side? have a closer look at padding docs spacing-padding active focus and hover states omencss css class example range active:pt- size active :pt-1px:active padding-top: 1px; active:pt-neg-100px to active:pt-100px focus:pt- size focus :pt-1px:focus padding-top: 1px; focus:pt-neg-100px to focus:pt-100px hover:pt- size hover :pt-1px:focus padding-top: 1px; hover:pt-neg-100px to hover:pt-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:pt-10px to only apply the pt-10px utility on hover html div class=pt-50px hover:pt-20px p-50px div div class=pr-50px hover:pr-20px p-50px div div class=pb-50px hover:pb-20px p-50px div div class=pl-50px hover:pl-20px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:pt-10px md: 480px - 768px md:pt-10px lg: 768px - 1080px lg:pt-10px omencss media queries can also be combined with active focus and hover states for example use sm:pt-10px to apply the pt-10px utility at only small screen sizes at or below 480px or active:md:pt-10px to apply the pt-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :p t r b l - size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omenCSS class names spoken example active:pt- active:pr- active:pb- active:pl- active padding top active padding right active padding bottom active padding left focus:pt- focus:pr- focus:pb- focus:pl- focus padding top focus padding right focus padding bottom focus padding left hover:pt- hover:pr- hover:pb- hover:pl- hover padding top hover padding right hover padding bottom hover padding left '
---

| _omenCSS_                | CSS class example                      | minimum Value | maximum Value | Step |
| ------------------------ | -------------------------------------- | ------------- | ------------- | ---- |
| p{t\|r\|b\|l}-{size}     | .pt-1px { padding-top: 1px; }          | pt-0px        | pt-100px      | 1px  |
| p{t\|r\|b\|l}-neg-{size} | .pt-neg-1px { padding-top: -1px; }     | pt-neg-100px  | pt-neg-1px    | 1px  |
| p{t\|r\|b\|l}-{size}     | .pt-1rem { padding-top: 0rem; }        | pt-0rem       | pt-30rem      | 1rem |
| p{t\|r\|b\|l}-neg-{size} | .pt-neg-30rem { padding-top: -30rem; } | pt-neg-30rem  | pt-neg-1rem   | 1rem |

## Add padding to specific side

Control the padding on a specific side such as top, right, bottom or left [padding-top, padding-right, padding-bottom, padding-left]. Use the p{t\|r\|b\|l}-{size} utility. The padding class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `pt-0px, pt-1px,... pt-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem padding class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `pt-0rem, pt-1rem,... pt-30rem`

```html
<div class="pt-50px">pt-50px</div>
<div class="pr-50px">pr-50px</div>
<div class="pb-50px">pb-50px</div>
<div class="pl-50px">pl-50px</div>
```

💡 How to use symmetrical padding on every side? Have a closer look at [padding](/docs/spacing-padding).

## Active, focus, and hover states

| _omenCSS_        | CSS class example                            | Range                                  |
| ---------------- | -------------------------------------------- | -------------------------------------- |
| active:pt-{size} | .active\:pt-1px:active { padding-top: 1px; } | active:pt-neg-100px to active:pt-100px |
| focus:pt-{size}  | .focus\:pt-1px:focus { padding-top: 1px; }   | focus:pt-neg-100px to focus:pt-100px   |
| hover:pt-{size}  | .hover\:pt-1px:focus { padding-top: 1px; }   | hover:pt-neg-100px to hover:pt-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:pt-10px` to only apply the pt-10px utility on hover.

```html
<div class="pt-50px hover:pt-20px">p-50px</div>
<div class="pr-50px hover:pr-20px">p-50px</div>
<div class="pb-50px hover:pb-20px">p-50px</div>
<div class="pl-50px hover:pl-20px">p-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:pt-10px     |
| md:         | 480px - 768px  | .md:pt-10px     |
| lg:         | 768px - 1080px | .lg:pt-10px     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:pt-10px` to apply the pt-10px utility at only small screen sizes at or below 480px. Or `active:md:pt-10px` to apply the pt-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:p{t\|r\|b\|l}-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                            | spoken example                                                                       |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:pt-, active:pr-, active:pb-, active:pl- | active padding top, active padding right, active padding bottom, active padding left |
| focus:pt-, focus:pr-, focus:pb-, focus:pl-     | focus padding top, focus padding right, focus padding bottom, focus padding left     |
| hover:pt-, hover:pr-, hover:pb-, hover:pl-     | hover padding top, hover padding right, hover padding bottom, hover padding left     |

## Sources

- [padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
- [padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
- [padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
- [padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
