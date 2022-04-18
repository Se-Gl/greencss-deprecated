---
isBlog: false
title: 'Background Clip'
date: 'Apr 18. 2022'
excerpt: 'Utility classes for controlling the background clip.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Background'
author: 'Severin Glaser'
keywords: 'background clip, '
classNames: ''
plainText: ' greencss css class example bg-clip-border bg-clip-border background-clip: border; bg-clip-padding-box bg-clip-padding-box background-clip: padding-box; bg-clip-content bg-clip-content background-clip: content-box; bg-clip-text bg-clip-text background-clip: text; custom sizing variables control the background clip on every html element by using the greencss classes shown above use the following structure to generate your background clip class `bg-clip keyword ` and apply the default css classes like `bg-clip-padding-box`  text gradient if you want to add a text gradient color to your element you need to set: 1 the background gradient direction p e `gradient-to-right` 2 the background from and to colours p e `from-green to-blue` 3 the text colour needs to be transparent p e `text-transparent` 4 the background clip text class needs to be set p e `bg-clip-text`  active focus and hover states greencss css class example active:bg-clip keyword active :bg-clip-border:active background-clip: border; focus:bg-clip keyword focus :bg-clip-border:focus background-clip: border; hover:bg-clip keyword hover :bg-clip-border:focus background-clip: border; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:bg-clip-border` to only apply the bg-clip-border utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-clip-border md: 480px 768px md:bg-clip-border lg: 768px 1080px lg:bg-clip-border greencss media queries can also be combined with active focus and hover states for example use `sm:bg-clip-border` to apply the `bg-clip-border` utility at only small screen sizes at or below 480px or `active:md:bg-clip-border` to apply the `bg-clip-border` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :bg-clip keyword ` p e `active:md:bg-clip-border` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-clip-border focus:bg-clip-border hover:bg-clip-border active background clip focus background clip hover background clip active:sm:bg-clip-border focus:sm:bg-clip-border hover:sm:bg-clip-border active small screens background clip focus small screens background clip hover small screens background clip active:md:bg-clip-border focus:md:bg-clip-border hover:md:bg-clip-border active medium screens background clip focus medium screens background clip hover medium screens background clip active:lg:bg-clip-border focus:lg:bg-clip-border hover:lg:bg-clip-border active large screens background clip focus large screens background clip hover large screens background clip sources background-clip https: developer mozilla org en-us docs web css background-clip '
---

| _greenCSS_          | CSS class example                                      |
| ------------------- | ------------------------------------------------------ |
| bg-clip-border      | .bg-clip-border { background-clip: border; }           |
| bg-clip-padding-box | .bg-clip-padding-box { background-clip: padding-box; } |
| bg-clip-content     | .bg-clip-content { background-clip: content-box; }     |
| bg-clip-text        | .bg-clip-text { background-clip: text; }               |

## Custom Sizing variables

Control the background clip on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your background clip class `bg-clip-{keyword}` and apply the default CSS classes like `bg-clip-padding-box`.

```html
<div class="bg-clip-border p-10px bg-green border-2px border-dotted border-green-5">{title}</div>
```

### Text Gradient

If you want to add a text gradient color to your element, you need to set:

1. The background gradient direction p.e. `gradient-to-right`
2. The background from and to colours p.e. `from-green to-blue`
3. The text colour needs to be transparent p.e. `text-transparent`
4. The Background Clip Text class needs to be set p.e. `bg-clip-text`

```html
<h1 class="text-60px font-900 gradient-to-right from-green to-blue text-transparent bg-clip-text">
  Hello green world!
</h1>
```

## Active, focus, and hover states

| _greenCSS_               | CSS class example                                           |
| ------------------------ | ----------------------------------------------------------- |
| active:bg-clip-{keyword} | .active\:bg-clip-border:active { background-clip: border; } |
| focus:bg-clip-{keyword}  | .focus\:bg-clip-border:focus { background-clip: border; }   |
| hover:bg-clip-{keyword}  | .hover\:bg-clip-border:focus { background-clip: border; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:bg-clip-border` to only apply the bg-clip-border utility class on hover.

```html
<div class="bg-clip-padding-box hover:bg-clip-border">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:bg-clip-border |
| md:         | 480px - 768px  | .md:bg-clip-border |
| lg:         | 768px - 1080px | .lg:bg-clip-border |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:bg-clip-border` to apply the `bg-clip-border` utility at only small screen sizes at or below 480px. Or `active:md:bg-clip-border` to apply the `bg-clip-border` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:bg-clip-{keyword}` p.e. `active:md:bg-clip-border`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                         | spoken example                                                                                                     |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| active:bg-clip-border , focus:bg-clip-border , hover:bg-clip-border          | active background clip, focus background clip, hover background clip                                               |
| active:sm:bg-clip-border , focus:sm:bg-clip-border , hover:sm:bg-clip-border | active small screens background clip, focus small screens background clip, hover small screens background clip,    |
| active:md:bg-clip-border , focus:md:bg-clip-border , hover:md:bg-clip-border | active medium screens background clip, focus medium screens background clip, hover medium screens background clip, |
| active:lg:bg-clip-border , focus:lg:bg-clip-border , hover:lg:bg-clip-border | active large screens background clip, focus large screens background clip, hover large screens background clip,    |

## Sources

- [background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
