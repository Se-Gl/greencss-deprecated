---
isBlog: false
title: 'Scroll Padding'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll padding.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll padding, scroll padding inline, scroll padding block, scroll padding and snap'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step scroll-p-1px scroll-p-100px scroll-padding: 100px; -100px 100px +1px scroll-p-30rem scroll-p-30rem scroll-padding: 30rem; -30rem 30rem +1rem scroll-px-1px scroll-px-100px scroll-padding-inline: 100px; -100px 100px +1px scroll-px-30rem scroll-px-30rem scroll-padding-inline: 30rem; -30rem 30rem +1rem scroll-py-1px scroll-py-100px scroll-padding-block: 100px; -100px 100px +1px scroll-py-30rem scroll-py-30rem scroll-padding-block: 30rem; -30rem 30rem +1rem scroll-pt-1px scroll-pt-100px scroll-padding-top: 100px; -100px 100px +1px scroll-pt-30rem scroll-pt-30rem scroll-padding-top: 30rem; -30rem 30rem +1rem scroll-pr-1px scroll-pr-100px scroll-padding-right: 100px; -100px 100px +1px scroll-pr-30rem scroll-pr-30rem scroll-padding-right: 30rem; -30rem 30rem +1rem scroll-pb-1px scroll-pb-100px scroll-padding-bottom: 100px; -100px 100px +1px scroll-pb-30rem scroll-pb-30rem scroll-padding-bottom: 30rem; -30rem 30rem +1rem scroll-pl-1px scroll-pl-100px scroll-padding-left: 100px; -100px 100px +1px scroll-pl-30rem scroll-pl-30rem scroll-padding-left: 30rem; -30rem 30rem +1rem custom sizing variables control the scroll offset class to set the scroll padding around items within a snap container use the following structure to generate your scroll padding `scroll keyword number unit ` ranging from -100px to 100px with a step of +1px p e `scroll-p-100px` or -30rem to +30rem with a step of +1rem p e `scroll-p-30rem`  negative scroll padding values all classes above have a negative scroll padding value `scroll keyword -neg number unit ` p e `scroll-p-neg-100px` active focus and hover states greencss css class example active:scroll keyword number unit active :scroll-p-100px:active scroll-padding: 100px; focus:scroll keyword number unit focus :scroll-p-100px:focus scroll-padding: 100px; hover:scroll keyword number unit hover :scroll-p-100px:focus scroll-padding: 100px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scroll-p-100px` to only apply the scroll-p-100px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scroll-p-100px md: 480px 768px md:scroll-p-100px lg: 768px 1080px lg:scroll-p-100px greencss media queries can also be combined with active focus and hover states for example use `sm:scroll-p-100px` to apply the `scroll-p-100px` utility at only small screen sizes at or below 480px or `active:md:scroll-p-100px` to apply the `scroll-p-100px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scroll keyword number unit ` p e `active:md:scroll-p-100px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scroll-p-100px focus:scroll-p-100px hover:scroll-p-100px active scroll padding focus scroll padding hover scroll padding active:sm:scroll-p-100px focus:sm:scroll-p-100px hover:sm:scroll-p-100px active small screens scroll padding focus small screens scroll padding hover small screens scroll padding active:md:scroll-p-100px focus:md:scroll-p-100px hover:md:scroll-p-100px active medium screens scroll padding focus medium screens scroll padding hover medium screens scroll padding active:lg:scroll-p-100px focus:lg:scroll-p-100px hover:lg:scroll-p-100px active large screens scroll padding focus large screens scroll padding hover large screens scroll padding sources scroll-padding https: developer mozilla org en-us docs web css scroll-padding '
---

| _greenCSS_      | CSS class example                                  | minimum Value | maximum Value | Step  |
| --------------- | -------------------------------------------------- | ------------- | ------------- | ----- |
| scroll-p-1px    | .scroll-p-100px { scroll-padding: 100px; }         | -100px        | 100px         | +1px  |
| scroll-p-30rem  | .scroll-p-30rem { scroll-padding: 30rem; }         | -30rem        | 30rem         | +1rem |
| scroll-px-1px   | .scroll-px-100px { scroll-padding-inline: 100px; } | -100px        | 100px         | +1px  |
| scroll-px-30rem | .scroll-px-30rem { scroll-padding-inline: 30rem; } | -30rem        | 30rem         | +1rem |
| scroll-py-1px   | .scroll-py-100px { scroll-padding-block: 100px; }  | -100px        | 100px         | +1px  |
| scroll-py-30rem | .scroll-py-30rem { scroll-padding-block: 30rem; }  | -30rem        | 30rem         | +1rem |
| scroll-pt-1px   | .scroll-pt-100px { scroll-padding-top: 100px; }    | -100px        | 100px         | +1px  |
| scroll-pt-30rem | .scroll-pt-30rem { scroll-padding-top: 30rem; }    | -30rem        | 30rem         | +1rem |
| scroll-pr-1px   | .scroll-pr-100px { scroll-padding-right: 100px; }  | -100px        | 100px         | +1px  |
| scroll-pr-30rem | .scroll-pr-30rem { scroll-padding-right: 30rem; }  | -30rem        | 30rem         | +1rem |
| scroll-pb-1px   | .scroll-pb-100px { scroll-padding-bottom: 100px; } | -100px        | 100px         | +1px  |
| scroll-pb-30rem | .scroll-pb-30rem { scroll-padding-bottom: 30rem; } | -30rem        | 30rem         | +1rem |
| scroll-pl-1px   | .scroll-pl-100px { scroll-padding-left: 100px; }   | -100px        | 100px         | +1px  |
| scroll-pl-30rem | .scroll-pl-30rem { scroll-padding-left: 30rem; }   | -30rem        | 30rem         | +1rem |

## Custom Sizing Variables

Control the scroll offset class to set the scroll padding around items within a snap container. Use the following structure to generate your scroll padding `scroll-{keyword}-{number}-{unit}` - ranging from -100px to 100px with a step of +1px p.e. `scroll-p-100px` or -30rem to +30rem with a step of +1rem p.e. `scroll-p-30rem`.

```html
<div class="scroll-snap-x">{title}</d>
<div class="scroll-pl-5rem snap-start">{children}</div>
```

### Negative scroll padding Values

All classes above have a negative scroll padding value. `scroll-{keyword}-neg-{number}-{unit}` p.e. `scroll-p-neg-100px`

## Active, focus, and hover states

| _greenCSS_                              | CSS class example                                         |
| --------------------------------------- | --------------------------------------------------------- |
| active:scroll-{keyword}-{number}-{unit} | .active\:scroll-p-100px:active { scroll-padding: 100px; } |
| focus:scroll-{keyword}-{number}-{unit}  | .focus\:scroll-p-100px:focus { scroll-padding: 100px; }   |
| hover:scroll-{keyword}-{number}-{unit}  | .hover\:scroll-p-100px:focus { scroll-padding: 100px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scroll-p-100px` to only apply the scroll-p-100px utility class on hover.

```html
<div class="scroll-snap-x">{title}</d>
<div class="scroll-pl-100px hover:scroll-pl-100px snap-start">{children}</div>

```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:scroll-p-100px |
| md:         | 480px - 768px  | .md:scroll-p-100px |
| lg:         | 768px - 1080px | .lg:scroll-p-100px |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scroll-p-100px` to apply the `scroll-p-100px` utility at only small screen sizes at or below 480px. Or `active:md:scroll-p-100px` to apply the `scroll-p-100px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scroll-{keyword}-{number}-{unit}` p.e. `active:md:scroll-p-100px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                         | spoken example                                                                                                  |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| active:scroll-p-100px , focus:scroll-p-100px , hover:scroll-p-100px          | active scroll padding, focus scroll padding, hover scroll padding                                               |
| active:sm:scroll-p-100px , focus:sm:scroll-p-100px , hover:sm:scroll-p-100px | active small screens scroll padding, focus small screens scroll padding, hover small screens scroll padding,    |
| active:md:scroll-p-100px , focus:md:scroll-p-100px , hover:md:scroll-p-100px | active medium screens scroll padding, focus medium screens scroll padding, hover medium screens scroll padding, |
| active:lg:scroll-p-100px , focus:lg:scroll-p-100px , hover:lg:scroll-p-100px | active large screens scroll padding, focus large screens scroll padding, hover large screens scroll padding,    |

## Sources

- [scroll-padding](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)
