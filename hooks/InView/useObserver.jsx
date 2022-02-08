import { useRef, useCallback } from 'react'

const useObserver = (callback, { root, rootMargin, threshold } = {}, externalState = []) => {
  const target = useRef(null)
  const observer = useRef(null)

  const setTarget = useCallback(
    (node) => {
      if (target.current && observer.current) {
        observer.current.unobserve(target.current)
        observer.current.disconnect()
        observer.current = null
      }

      if (node) {
        observer.current = new IntersectionObserver(callback, { root, rootMargin, threshold })
        observer.current.observe(node)
        target.current = node
      }
    },
    [target, root, rootMargin, threshold, ...externalState]
  )

  return setTarget
}

export default useObserver
