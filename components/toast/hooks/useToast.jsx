import { useToastDispatchContext } from '../context/ToastContext'

export function useToast() {
  const dispatch = useToastDispatchContext()

  function toast(type, message, time = 10000) {
    const id = Math.random().toString(36).slice(2, 9)
    dispatch({ type: 'ADD_TOAST', toast: { type, message, time, id } })

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id: id })
    }, time)
  }

  return toast
}
