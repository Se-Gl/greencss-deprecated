import { useToast } from '@/components/toast/hooks/useToast'

function CopyIcon({ width = '24', height = '24', className, copy }) {
  const toast = useToast()

  const copyContent = JSON.stringify(copy).replace(/\"/g, '')

  const handleToast = () => {
    toast('success', `🚀 ${copyContent.slice(0, 20)}... has been copied to clipboard`)
    navigator.clipboard.writeText(copyContent)
  }

  return (
    <svg
      id='copy-animation-to-clipboard'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 24 24'
      onClick={handleToast}>
      <path
        className={className}
        d='M12 2a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1zM5 17a1 1 0 011 1v2h12v-2a1 1 0 112 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a1 1 0 011-1z'></path>
    </svg>
  )
}

export default CopyIcon
