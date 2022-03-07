// import '@/styles/globals.scss'
if (process.env.NODE_ENV == 'production') {
  require('@/css/omen.css')
} else {
  require('@/styles/omencss.css')
}
require('@/styles/globals.scss')

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
