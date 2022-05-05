export default function NutshellCard({ data }) {
  return (
    <>
      {data.sort().map((card, index) => (
        <div
          key={index}
          className={`transition-all transition-duration-500ms p-20px col-1 rounded-10px col-span-1 p-20px sm:mt-25px w-100per border-black min-h-30rem hover:bg-greencss hover:text-white`}
          id={`${card.title.toLowerCase()}`}>
          {card.icon}
          <div className='mt-25px'>
            <h2 className='text-30px sm:text-25px pb-10px mb-0px'>{card.title}</h2>
            <span className='text-15px mb-0px'>{card.description}</span>
          </div>
        </div>
      ))}
    </>
  )
}
