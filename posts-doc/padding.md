---
isBlog: false
title: 'Padding'
date: 'Mar 18. 2022'
excerpt: 'Utility classes for controlling an element`s padding.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'padding, negative padding, spacing, css class, responsive'
classNames: ''
plainText: ' omencss css class example range - - p- size p-1px padding: 1px; p-0px to p-100px p-neg- size p-neg-1px padding: -1px; p-neg-100px to p-neg-1px p- size p-1rem padding: 0rem; p-0rem to p-30rem p-neg- size p-neg-30rem padding: -30rem; p-neg-30rem to p-neg-1rem add padding to all sides control the padding on all sides of an html element by using the p- size utility the pixel padding class range is from negative -100 to positive 100 and uses the px postfix the steps are + - 1px e g p-0px p-1px p-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g p-0rem p-1rem p-30rem html div class=p-50px p-50px div active focus and hover states omencss css class example range - - active:p- size active :p-1px:active padding: 1px; active:p-neg-100px to active:p-100px focus:p- size focus :p-1px:focus padding: 1px; focus:p-neg-100px to focus:p-100px hover:p- size hover :p-1px:focus padding: 1px; hover:p-neg-100px to hover:p-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:p-10px to only apply the p-10px utility on hover html div class=p-50px hover:p-20px p-50px div '
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
