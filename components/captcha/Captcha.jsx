import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

/* eslint-disable */
const Captcha = forwardRef(
  ({ setWord, numberOfCharacters = 4, backgroundColor = '#101010', fontColor = '#f0eef5' }, ref) => {
    const canvas = useRef(null)
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let length = parseInt(numberOfCharacters)

    const initializeCaptcha = () => {
      let retVal = ''
      let captcha = ''
      for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
      }

      captcha = retVal

      setWord(captcha)

      const canvasEl = canvas.current
      const ctx = canvasEl.getContext('2d')
      let text = captcha
      let lineheight = 30

      let lines = text.split('\n')
      ctx.canvas.width = parseInt(length) * 30
      ctx.canvas.height = lines.length * lineheight

      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)

      ctx.textBaseline = 'middle'
      ctx.font = 'italic 20px Arial'
      ctx.fillStyle = fontColor

      let num = 0
      for (let i = 0; i < parseInt(length); i++) {
        num = parseInt(num) + 1
        let heigt_num = 20 * num
        ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (20 - 15) + 13))
      }
    }

    useImperativeHandle(ref, () => ({
      initializeCaptcha
    }))

    useEffect(() => {
      initializeCaptcha()
    }, [])

    return (
      <div className='mt-auto mr-25px'>
        <canvas
          ref={canvas}
          className='cursor-pointer h-45px'
          width={100}
          height={100}
          onClick={initializeCaptcha}></canvas>
      </div>
    )
  }
)

export default Captcha
/* eslint-enable */
