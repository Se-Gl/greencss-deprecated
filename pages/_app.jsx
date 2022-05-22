if (process.env.NODE_ENV == 'production') {
  require('@/css/green.css')
} else {
  require('@/styles/greencss.css')
}
require('@/styles/globals.scss')

import Progress from '@/components/progress/Progress'
import { ToastProvider } from '@/components/toast/context/ToastContext'
import ToastContainer from '@/components/toast/ToastContainer'
import Google from '@/components/analytics/Google'
import { NavProvider } from '@/utils/NavContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && <Google />}
      <NavProvider>
        <Progress />
        <ToastProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </ToastProvider>
      </NavProvider>
    </>
  )
}

export default MyApp
