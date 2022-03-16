import Toast from './Toast'
import { useToastStateContext } from './context/ToastContext'

export default function ToastContainer() {
  const { toasts } = useToastStateContext()
  return (
    <div
      className='fixed top-11per right-20per sm:left-0per md:left-0per fade-in animate animation-forwards animation-delay-800ms'
      style={{ zIndex: 9999 }}>
      <div className='max-w-40rem mx-auto'>
        {toasts &&
          toasts.map((toast) => <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} />)}
      </div>
    </div>
  )
}
