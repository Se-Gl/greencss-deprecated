if (process.env.NODE_ENV == 'production') {
  require('@/css/omen.css')
} else {
  require('@/styles/omencss.css')
}
import '@/styles/globals.scss'

import Progress from '@/components/progress/Progress'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
