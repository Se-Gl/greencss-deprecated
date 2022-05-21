export default function VisualChart({
  data,
  descriptionClassName = 'mb-0px text-black-10 text-15px',
  percentClassName = 'mb-0px text-white text-center',
  isHero = false
}) {
  // initial values
  const a = Math.round(71.7)
  const b = Math.round(286.7)
  let c = Math.round(data)
  let result = a + b + c
  // percent values
  const percenta = (a * 100) / result
  const percentb = (b * 100) / result
  const percentc = (c * 100) / result

  const averageFootprint = [
    {
      description: 'Your footprint per year',
      bgColor: 'bg-blue',
      percent: percentc
    },
    {
      description: 'Footprint of an average person',
      bgColor: 'bg-green',
      percent: percenta
    },
    {
      description: 'Footprint of an average developer',
      bgColor: 'bg-orange',
      percent: percentb
    }
  ]

  return (
    <div className={`${isHero && 'flex'}`}>
      <div
        id='footprint-chart'
        className={`w-100px min-w-100px h-100px rounded-50per bg-white block mx-auto ${isHero && 'opacity-50per'}`}
        style={{
          background: `${
            percentc <= percenta
              ? `conic-gradient(#066ef9 ${percentc}%, #f99106 ${percentc}% ${percentb}%, #80f906 ${percentb}% ${percenta}%)`
              : `conic-gradient(#80f906 ${percenta}%, #f99106 ${percenta}% ${percentb}%, #066ef9 ${percentb}% ${percentc}%)`
          }`
        }}></div>

      <div className={`w-100per ${!isHero && 'flex'}`}>
        {averageFootprint.map((average, index) => (
          <div key={index}>
            <div className={`${!isHero ? 'flex mt-25px' : 'ml-10px'}`}>
              <div
                className={`${isHero ? 'h-10px w-10px' : 'h-15px w-15px'} rounded-50per justify-center mt-7px mr-10px ${
                  average.bgColor
                }`}></div>
              <p className={descriptionClassName}>
                {average.description} {isHero && Math.round(average.percent) + '%'}
              </p>
            </div>
            {!isHero && <p className={percentClassName}>{Math.round(average.percent)}%</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
