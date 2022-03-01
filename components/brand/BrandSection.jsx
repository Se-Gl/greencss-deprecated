export default function BrandSection({
  title,
  description,
  children,
  isLight = false,
  className = 'm-auto max-w-60rem py-100px'
}) {
  return (
    <div className={`${isLight ? 'bg-light' : 'bg-dark'}`} id={`${!isLight ? 'dark-section' : 'light-section'}`}>
      <div className={`${className} ${isLight ? 'text-black' : 'text-white'}`}>
        {title != null && <h2>{title}</h2>}
        {description != null && (
          <p className={`mt-25px mb-0px ${isLight ? 'text-black' : 'text-white'}`}>{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}
