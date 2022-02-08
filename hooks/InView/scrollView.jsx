// idea from (MIT): https://github.com/bitmap/react-hook-inview
import { useEffect, useState, useCallback } from 'react'
import useObserver from './useObserver'

const useInView = (
  { root, rootMargin, threshold, unobserveOnEnter, target, onEnter, onLeave } = {},
  externalState = []
) => {
  const [state, setState] = useState({
    inView: false,
    entry: null,
    observer: null
  })

  const callback = useCallback(
    ([entry], observer) => {
      const inThreshold = observer.thresholds.some((t) => entry.intersectionRatio >= t)
      const inView = inThreshold && entry.isIntersecting

      setState({
        inView,
        entry,
        observer
      })

      // unobserveOnEnter
      if (inView && unobserveOnEnter) {
        observer.unobserve(entry.target)
        observer.disconnect()
      }

      // Legacy callbacks
      if (inView) {
        onEnter?.(entry, observer)
      } else {
        onLeave?.(entry, observer)
      }
    },
    [onEnter, onLeave, unobserveOnEnter]
  )

  const setTarget = useObserver(callback, { root, rootMargin, threshold }, [unobserveOnEnter, ...externalState])

  // Legacy 'target' option
  useEffect(() => {
    if (target?.current) setTarget(target.current)
  }, [target, setTarget])

  return [setTarget, state.inView, state.entry, state.observer]
}

export default useInView
