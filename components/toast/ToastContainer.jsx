import Toast from './Toast'
import { useToastStateContext } from './context/ToastContext'

export default function ToastContainer() {
  const { toasts } = useToastStateContext()
  return (
    <div className='fixed top-10per left-25per sm:left-0per md:left-0per w-100per' style={{ zIndex: 9999 }}>
      <div className='max-w-40rem mx-auto'>
        {toasts &&
          toasts.map((toast) => <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} />)}
      </div>
    </div>
  )
}
