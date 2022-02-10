import { usePalette } from 'react-palette'
import Loader from '../logo/Loader'
import tinycolor from 'tinycolor2'
import { LinkButton } from '../reusable/Button'

export default function BlogCard() {
  let IMAGE_URL = 'https://source.unsplash.com/random'
  const { data, loading } = usePalette(IMAGE_URL)
  const vibrantColor = data.vibrant
  const color = tinycolor(`${vibrantColor}`)
  const isDark = color.isDark()

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`min-h-50rem w-100per rounded-10px bg-cover bg-no-repeat bg-center${
            !isDark && 'border-1px border-solid border-dark'
          }`}
          style={{ backgroundImage: `url(${IMAGE_URL})` }}
          id='bg-image'>
          <div className='flex h-50rem min-h-50per'>
            <div
              className={`relative m-auto max-w-75per w-75per min-h-80per ${isDark && 'bg-light text-dark'} ${
                !isDark && 'bg-dark text-light'
              }
              `}>
              <h1 className='text-50px font-bold leading-100per'>This is a Header</h1>
              <p className='text-25px font-normal mt-25px'>with a subheader</p>
              <LinkButton className={`absolute bottom-0 mt-50px ${isDark && 'text-dark'} ${!isDark && 'text-light'}`}>
                Check more
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
