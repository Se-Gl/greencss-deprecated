---
isBlog: false
title: 'Scroll Margin'
date: 'Apr 20. 2022'
excerpt: 'Utility classes for controlling the scroll margin.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'United'
author: 'Severin Glaser'
keywords: 'scroll margin, scroll margin inline, scroll margin block, scroll margin and snap'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step scroll-m-1px scroll-m-100px scroll-margin: 100px; -100px 100px +1px scroll-m-30rem scroll-m-30rem scroll-margin: 30rem; -30rem 30rem +1rem scroll-mx-1px scroll-mx-100px scroll-margin-inline: 100px; -100px 100px +1px scroll-mx-30rem scroll-mx-30rem scroll-margin-inline: 30rem; -30rem 30rem +1rem scroll-my-1px scroll-my-100px scroll-margin-block: 100px; -100px 100px +1px scroll-my-30rem scroll-my-30rem scroll-margin-block: 30rem; -30rem 30rem +1rem scroll-mt-1px scroll-mt-100px scroll-margin-top: 100px; -100px 100px +1px scroll-mt-30rem scroll-mt-30rem scroll-margin-top: 30rem; -30rem 30rem +1rem scroll-mr-1px scroll-mr-100px scroll-margin-right: 100px; -100px 100px +1px scroll-mr-30rem scroll-mr-30rem scroll-margin-right: 30rem; -30rem 30rem +1rem scroll-mb-1px scroll-mb-100px scroll-margin-bottom: 100px; -100px 100px +1px scroll-mb-30rem scroll-mb-30rem scroll-margin-bottom: 30rem; -30rem 30rem +1rem scroll-ml-1px scroll-ml-100px scroll-margin-left: 100px; -100px 100px +1px scroll-ml-30rem scroll-ml-30rem scroll-margin-left: 30rem; -30rem 30rem +1rem custom sizing variables control the scroll offset class to set the scroll margin around items within a snap container use the following structure to generate your scroll margin `scroll keyword number unit ` ranging from -100px to 100px with a step of +1px p e `scroll-m-100px` or -30rem to +30rem with a step of +1rem p e `scroll-m-30rem`  negative scroll margin values all classes above have a negative scroll margin value `scroll keyword -neg number unit ` p e `scroll-m-neg-100px` active focus and hover states greencss css class example active:scroll keyword number unit active :scroll-m-100px:active scroll-margin: 100px; focus:scroll keyword number unit focus :scroll-m-100px:focus scroll-margin: 100px; hover:scroll keyword number unit hover :scroll-m-100px:focus scroll-margin: 100px; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scroll-m-100px` to only apply the scroll-m-100px utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scroll-m-100px md: 480px 768px md:scroll-m-100px lg: 768px 1080px lg:scroll-m-100px greencss media queries can also be combined with active focus and hover states for example use `sm:scroll-m-100px` to apply the `scroll-m-100px` utility at only small screen sizes at or below 480px or `active:md:scroll-m-100px` to apply the `scroll-m-100px` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scroll keyword number unit ` p e `active:md:scroll-m-100px` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scroll-m-100px focus:scroll-m-100px hover:scroll-m-100px active scroll margin focus scroll margin hover scroll margin active:sm:scroll-m-100px focus:sm:scroll-m-100px hover:sm:scroll-m-100px active small screens scroll margin focus small screens scroll margin hover small screens scroll margin active:md:scroll-m-100px focus:md:scroll-m-100px hover:md:scroll-m-100px active medium screens scroll margin focus medium screens scroll margin hover medium screens scroll margin active:lg:scroll-m-100px focus:lg:scroll-m-100px hover:lg:scroll-m-100px active large screens scroll margin focus large screens scroll margin hover large screens scroll margin sources scroll-margin https: developer mozilla org en-us docs web css scroll-margin '
---

| _greenCSS_      | CSS class example                                 | minimum Value | maximum Value | Step  |
| --------------- | ------------------------------------------------- | ------------- | ------------- | ----- |
| scroll-m-1px    | .scroll-m-100px { scroll-margin: 100px; }         | -100px        | 100px         | +1px  |
| scroll-m-30rem  | .scroll-m-30rem { scroll-margin: 30rem; }         | -30rem        | 30rem         | +1rem |
| scroll-mx-1px   | .scroll-mx-100px { scroll-margin-inline: 100px; } | -100px        | 100px         | +1px  |
| scroll-mx-30rem | .scroll-mx-30rem { scroll-margin-inline: 30rem; } | -30rem        | 30rem         | +1rem |
| scroll-my-1px   | .scroll-my-100px { scroll-margin-block: 100px; }  | -100px        | 100px         | +1px  |
| scroll-my-30rem | .scroll-my-30rem { scroll-margin-block: 30rem; }  | -30rem        | 30rem         | +1rem |
| scroll-mt-1px   | .scroll-mt-100px { scroll-margin-top: 100px; }    | -100px        | 100px         | +1px  |
| scroll-mt-30rem | .scroll-mt-30rem { scroll-margin-top: 30rem; }    | -30rem        | 30rem         | +1rem |
| scroll-mr-1px   | .scroll-mr-100px { scroll-margin-right: 100px; }  | -100px        | 100px         | +1px  |
| scroll-mr-30rem | .scroll-mr-30rem { scroll-margin-right: 30rem; }  | -30rem        | 30rem         | +1rem |
| scroll-mb-1px   | .scroll-mb-100px { scroll-margin-bottom: 100px; } | -100px        | 100px         | +1px  |
| scroll-mb-30rem | .scroll-mb-30rem { scroll-margin-bottom: 30rem; } | -30rem        | 30rem         | +1rem |
| scroll-ml-1px   | .scroll-ml-100px { scroll-margin-left: 100px; }   | -100px        | 100px         | +1px  |
| scroll-ml-30rem | .scroll-ml-30rem { scroll-margin-left: 30rem; }   | -30rem        | 30rem         | +1rem |

## Custom Sizing Variables

Control the scroll offset class to set the scroll margin around items within a snap container. Use the following structure to generate your scroll margin `scroll-{keyword}-{number}-{unit}` - ranging from -100px to 100px with a step of +1px p.e. `scroll-m-100px` or -30rem to +30rem with a step of +1rem p.e. `scroll-m-30rem`.

```html
<div class="scroll-snap-x">{title}</d>
<div class="scroll-ml-5rem snap-start">{children}</div>
```

### Negative Scroll Margin Values

All classes above have a negative scroll margin value. `scroll-{keyword}-neg-{number}-{unit}` p.e. `scroll-m-neg-100px`

## Active, focus, and hover states

| _greenCSS_                              | CSS class example                                        |
| --------------------------------------- | -------------------------------------------------------- |
| active:scroll-{keyword}-{number}-{unit} | .active\:scroll-m-100px:active { scroll-margin: 100px; } |
| focus:scroll-{keyword}-{number}-{unit}  | .focus\:scroll-m-100px:focus { scroll-margin: 100px; }   |
| hover:scroll-{keyword}-{number}-{unit}  | .hover\:scroll-m-100px:focus { scroll-margin: 100px; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scroll-m-100px` to only apply the scroll-m-100px utility class on hover.

```html
<div class="scroll-snap-x">{title}</d>
<div class="scroll-ml-100px hover:scroll-ml-100px snap-start">{children}</div>

```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:scroll-m-100px |
| md:         | 480px - 768px  | .md:scroll-m-100px |
| lg:         | 768px - 1080px | .lg:scroll-m-100px |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scroll-m-100px` to apply the `scroll-m-100px` utility at only small screen sizes at or below 480px. Or `active:md:scroll-m-100px` to apply the `scroll-m-100px` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scroll-{keyword}-{number}-{unit}` p.e. `active:md:scroll-m-100px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                         | spoken example                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| active:scroll-m-100px , focus:scroll-m-100px , hover:scroll-m-100px          | active scroll margin, focus scroll margin, hover scroll margin                                               |
| active:sm:scroll-m-100px , focus:sm:scroll-m-100px , hover:sm:scroll-m-100px | active small screens scroll margin, focus small screens scroll margin, hover small screens scroll margin,    |
| active:md:scroll-m-100px , focus:md:scroll-m-100px , hover:md:scroll-m-100px | active medium screens scroll margin, focus medium screens scroll margin, hover medium screens scroll margin, |
| active:lg:scroll-m-100px , focus:lg:scroll-m-100px , hover:lg:scroll-m-100px | active large screens scroll margin, focus large screens scroll margin, hover large screens scroll margin,    |

## Sources

- [scroll-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin)
