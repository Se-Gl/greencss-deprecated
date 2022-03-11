import { useToastDispatchContext } from './context/ToastContext'
import ToastContent from './ToastContent'

export default function Toast({ type, message, id }) {
  const dispatch = useToastDispatchContext()
  return (
    <>
      {type == 'success' && (
        <ToastContent
          fillColor='#147df5'
          backgroundColor='bg-blue-5'
          textColor='text-blue'
          triangleColor='success'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
      {type == 'error' && (
        <ToastContent
          fillColor='#ce1f1a'
          backgroundColor='bg-red-5'
          textColor='text-red'
          triangleColor='error'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
      {type == 'warning' && (
        <ToastContent
          fillColor='#deff0a'
          backgroundColor='bg-yellow-5'
          textColor='text-black'
          triangleColor='warn'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
      {type == 'cookie' && (
        <ToastContent
          fillColor='#be0aff'
          backgroundColor='bg-purple-5'
          textColor='text-purple'
          triangleColor='cookie'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
    </>
  )
}
