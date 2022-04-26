export default function RangeSlider({ unit, max, step, value, setValue }) {
  return (
    <div className='relative' id={`range-slider-${unit}`}>
      <div className='absolute bg-black-5 rounded-5px' style={{ right: '-30px' }}>
        <span className='text-center font-bold text-15px text-white p-5px float-right'>
          {value}
          {unit}
        </span>
      </div>
      <input
        className='bg-transparent'
        type='range'
        value={value}
        step={step}
        min='0'
        max={max}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
