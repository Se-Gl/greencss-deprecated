import { useToastDispatchContext } from './context/ToastContext'
import ToastContent from './ToastContent'

export default function Toast({ type, message, id }) {
  const dispatch = useToastDispatchContext()
  return (
    <>
      {type == 'success' && (
        <ToastContent
          fillColor='#066ef9'
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
          fillColor='#f90606'
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
          fillColor='#f9cf06'
          backgroundColor='bg-yellow-5'
          textColor='text-black'
          triangleColor='warn'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
    </>
  )
}
