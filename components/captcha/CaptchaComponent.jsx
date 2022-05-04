import Captcha from './Captcha'

export default function CaptchaComponent({ verifyCaptcha, setverifyCaptcha, captcha, setCaptcha }) {
  return (
    <div className='flex mt-25px min-h-50px'>
      <Captcha setWord={setCaptcha} />
      <div className='display-block w-100per min-w-50px'>
        <label htmlFor='captcha' className='font-600 mt-25px mb-5px text-15px'>
          Captcha<span className='text-red-2'>*</span>
        </label>
        <input
          required
          maxLength='30'
          type='password'
          id='password'
          className='border-none text-15px bg-greencss text-white py-10px'
          value={verifyCaptcha}
          onChange={(e) => {
            setverifyCaptcha(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
