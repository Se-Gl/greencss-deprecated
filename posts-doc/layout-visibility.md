---
isBlog: false
title: 'Visibility'
date: 'Apr 09. 2022'
excerpt: 'Utility classes to set the visibility of elements.'
visible*image: '/images/blog/visible/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Visibility, layout, visible, hidden'
classNames: ''
plainText: ' omencss css class example visible visible visibility: visible; hidden hidden visibility: hidden; collapse collapse visibility: collapse; how to work with visibility 1 use the ` keyword ` to control determine and set the visibility  the keyword collapse has various effects on different elements: for ` table ` rows columns column groups and row groups the row s or column s are hidden and the available space is removed as if display: none were applied to the column row of the table nevertheless the dimensions of the other rows and columns are still calculated as if the cells were present in the hidden row s or column s collapsed flex elements and ruby annotations are hidden and the space they would have occupied is removed for other elements `collapse` is treated in the same way as hiding an element active focus and hover states omencss css class example active: keyword active :visible:active visibility: visible; focus: keyword focus :visible:focus visibility: visible; hover: keyword hover :visible:hover visibility: visible; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:hidden` to only apply the visible utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0px 480px sm:visible md: 480px 768px md:visible lg: 768px 1080px lg:visible omencss media queries can also be combined with active focus and hover states for example use `sm:visible` to apply the visible utility at only small screen sizes at or below 480px or `active:md:visible` to apply the visible utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure for the utility classes is as follows: ` conditional state : media query : keyword ` p e `active:md:visible` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active: keyword focus: keyword hover: keyword active visible focus visible hover visible active:sm: keyword focus:sm: keyword hover:sm: keyword active small screens visible focus small screens visible hover small screens visible active:md: keyword focus:md: keyword hover:md: keyword active medium screens visible focus medium screens visible hover medium screens visible active:lg: keyword focus:lg: keyword hover:lg: keyword active large screens visible focus large screens visible hover large screens visible sources visibility https: developer mozilla org en-us docs web css visibility '
---

| _omenCSS_ | CSS class example                   |
| --------- | ----------------------------------- |
| visible   | .visible { visibility: visible; }   |
| hidden    | .hidden { visibility: hidden; }     |
| collapse  | .collapse { visibility: collapse; } |

## How to work with visibility

1. Use the `{keyword}` above to control, determine and set the visibility.

```html
<!-- visible -->
<div class="visible">
  <p>visible content</p>
</div>
<!-- hidden -->
<div class="hidden">
  <p>hidden content</p>
</div>
```

The keyword collapse has various effects on different elements: For `<table>` rows, columns, column groups and row groups, the row(s) or column(s) are hidden and the available space is removed (as if display: none were applied to the column/row of the table). Nevertheless, the dimensions of the other rows and columns are still calculated as if the cells were present in the hidden row(s) or column(s). Collapsed Flex elements and Ruby annotations are hidden and the space they would have occupied is removed. For other elements, `collapse` is treated in the same way as hiding an element.

## Active, focus, and hover states

| _omenCSS_        | CSS class example                                |
| ---------------- | ------------------------------------------------ |
| active:{keyword} | .active\:visible:active { visibility: visible; } |
| focus:{keyword}  | .focus\:visible:focus { visibility: visible; }   |
| hover:{keyword}  | .hover\:visible:hover { visibility: visible; }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:hidden` to only apply the visible utility class on hover.

```html
<div class="visible hover:hidden">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:visible     |
| md:         | 480px - 768px  | .md:visible     |
| lg:         | 768px - 1080px | .lg:visible     |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:visible` to apply the visible utility at only small screen sizes at or below 480px. Or `active:md:visible` to apply the visible utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure for the utility classes is as follows: `{conditional state}:{media query}:{keyword}` p.e. `active:md:visible`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                           | spoken example                                                                             |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| active:{keyword} , focus:{keyword} , hover:{keyword}          | active visible, focus visible, hover visible                                               |
| active:sm:{keyword} , focus:sm:{keyword} , hover:sm:{keyword} | active small screens visible, focus small screens visible, hover small screens visible,    |
| active:md:{keyword} , focus:md:{keyword} , hover:md:{keyword} | active medium screens visible, focus medium screens visible, hover medium screens visible, |
| active:lg:{keyword} , focus:lg:{keyword} , hover:lg:{keyword} | active large screens visible, focus large screens visible, hover large screens visible,    |

## Sources

- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
