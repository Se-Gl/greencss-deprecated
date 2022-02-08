# inView Hook

Detect if an element is in the viewport using a [React
Hook](https://reactjs.org/docs/hooks-intro.html). Utilizes the [Intersection
Observer API], so check for
[compatibility](https://caniuse.com/#feat=intersectionobserver).
[Idea from](https://github.com/bitmap/react-hook-inview)

## `useInView`

The hook in its most basic form returns a ref and a boolean.

```js
const [ref, inView] = useInView()
```

That's all you need to get started, but it does [a lot more](#api).

## Example

In this example, the boolean is used to toggle some text on and off when the
element is fully in the viewport. Conditional rendering is required, be carefull by setting classNames. It may result in a flickering effect - if wrong classes were applied.

```js
import React from 'react'
import useInView from '../hooks/InView/scrollView'

const Demo = () => {
  const [ref, isVisible] = useInView({
    threshold: 0.5
  })
  const [refTwo, isVisibleTwo] = useInView({
    threshold: 0.1,
    unobserveOnEnter: true
  })

  return (
    <>
      <div
        ref={refTwo}
        className={isVisibleTwo ? 'fade h-40v' : 'h-40v'}
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)' }}></div>
      <div className='flex h-100v' style={{ background: 'black' }}>
        <div className='m-auto' ref={ref}>
          <h1 className={isVisible ? 'slide-top m-auto t-center' : 'none'} style={{ color: 'white' }}>
            it worked!
          </h1>
        </div>
      </div>
    </>
  )
}
```

## API

The hook returns a tuple with four items:

- A `ref` callback, used to set observer on an element.
- A `boolean` when the element is in the viewport.
- The `IntersectionObserverEntry`
- The `IntersectionObserver` itself

```js
const [ref, inView, entry, observer] = useInView(options, [...state])
```

## Options

These are the default options.

```ts
{
  root?: RefObject<Element> | null, // Optional, must be a parent of your ref
  rootMargin?: string,              // '0px' or '0px 0px 0px 0px', also accepts '%' unit
  threshold?: number | number[],    // 0.5 or [0, 0.5, 1]
  unobserveOnEnter?: boolean,       // Set 'true' to run only once
  onEnter?: (entry?, observer?) => void, // See below
  onLeave?: (entry?, observer?) => void, // See below
  target?: RefObject<Element> | null,    // *DEPRECATED* Supply your own ref object
}
```

**NOTE**: If you supply an array with multiple values to `threshold`, `onEnter`
will be called each time the element intersects with the top _and_ bottom of
the viewport. `onLeave` will on trigger once the element has left the viewport
at the first threshold specified.

### Accessing external state in callbacks

For performance reasons, the hook is only triggered once on mount. However,
this means you can't access updated state in the `onEnter/onLeave` callbacks.
An optional second argument will retrigger the hook to mitigate this.

```js
// Some other state
const [state, setState] = useState(false)

const [ref, inView] = useInView(
  {
    onEnter: () => console.log(state)
  },
  [state]
) // <- Will update callback
```

This will remount the intersection observer, and may have unintended side
effects. Use this feature with caution.

## License

[MIT](https://github.com/bitmap/react-hook-inview/blob/master/LICENSE)

[intersection observer api]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
