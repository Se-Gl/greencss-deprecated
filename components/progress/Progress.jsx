// idea from: https://sidneyliebrand.io/blog/building-a-next-js-page-load-progress-bar
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Progress() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressTime
    function start() {
      setProgress(1)
      incrementValue()
    }

    function incrementValue() {
      const timeout = Math.round(Math.random() * 300)

      setProgress((progressCalc) => {
        const percent = Math.round(Math.random() * 10)
        const next = Math.min(progressCalc + percent, 80)

        if (next < 80) {
          progressTime = setTimeout(incrementValue, timeout)
          return next
        }
        return 80
      })
    }

    function checkComplete() {
      clearTimeout(progressTime)
      setProgress(100)
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', checkComplete)
    router.events.on('routeChangeError', checkComplete)

    return () => {
      clearTimeout(progressTime)
      router.events.off('routeChangeStart')
      router.events.off('routeChangeComplete')
      router.events.off('routeChangeError')
    }
  }, [])

  return (
    <div
      className='fixed top-0per left-0per z-99 h-5px w-100per'
      id='progress-loader'
      style={{ display: progress > 0 && progress < 100 ? 'block' : 'none' }}>
      <div
        className='bg-green absolute top-0per right-0per bottom-0per left-0per w-0px transition-all transition-duration-500ms'
        style={{
          width: `${progress}%`,
          opacity: progress > 0 && progress < 100 ? 1 : 0
        }}
      />
    </div>
  )
}
