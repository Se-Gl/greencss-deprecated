import Toast from './Toast'
import { useToastStateContext } from './context/ToastContext'

export default function ToastContainer() {
  const { toasts } = useToastStateContext()
  return (
    <div
      className='fixed bottom-0per left-50per fade-in animate animation-forwards animation-delay-800ms'
      style={{ zIndex: 9999, transform: 'translateX(-50%)' }}>
      <div className='max-w-40rem mx-auto'>
        {toasts &&
          toasts.map((toast) => <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} />)}
      </div>
    </div>
  )
}
