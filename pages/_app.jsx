if (process.env.NODE_ENV == 'production') {
  require('@/css/omen.css')
} else {
  require('@/styles/greenCSS.css')
}
require('@/styles/globals.scss')

import Progress from '@/components/progress/Progress'
import { ToastProvider } from '@/components/toast/context/ToastContext'
import ToastContainer from '@/components/toast/ToastContainer'
import Google from '@/components/analytics/Google'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && <Google />}
      <Progress />
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </>
  )
}

export default MyApp
