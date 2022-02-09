# Text Color Check

Detect which textcolor should be applied, based on a color. This can be, for example, the mean colour value of a blog post image.
[Stackoverflow](https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color)
[Get average image colour](https://github.com/fast-average-color/fast-average-color/blob/HEAD/docs/examples.md#from-unloaded-image)

## Example

In this example, the boolean is used to toggle some text on and off when the
element is fully in the viewport. Conditional rendering is required, be carefull by setting classNames. It may result in a flickering effect - if wrong classes were applied.

```js
import React from 'react'
import { TextColorCheck } from '../hooks/TextColorCheck/TextColorCheck'

const Demo = () => {
  // add average colour hex code of the image
  let color = 'black'
  TextColorCheck(color, 'white', 'black')

  return <>...</>
}
```
