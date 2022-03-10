// import '@/styles/globals.scss'
if (process.env.NODE_ENV == 'production') {
  require('@/css/omen.css')
} else {
  require('@/styles/omencss.css')
}
require('@/styles/globals.scss')

import Progress from '@/components/progress/Progress'
import { ToastProvider } from '@/components/toast/context/ToastContext'
import ToastContainer from '@/components/toast/ToastContainer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </>
  )
}

export default MyApp
