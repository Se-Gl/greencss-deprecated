export default function BrandSection({ title, description, children, isLight = false }) {
  return (
    <div className={`${isLight ? 'bg-light' : 'bg-dark'}`} id={`${!isLight ? 'dark-section' : 'light-section'}`}>
      <div className={`m-auto max-w-60rem py-50px ${isLight ? 'text-black' : 'text-white'}`}>
        <h2>{title}</h2>
        <p className={`mt-25px ${isLight ? 'text-black' : 'text-white'}`}>{description}</p>
        {children}
      </div>
    </div>
  )
}
