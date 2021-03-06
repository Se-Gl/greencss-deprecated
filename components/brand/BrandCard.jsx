import Link from 'next/link'
import { LinkButton } from '@/components/reusable/Button'

export default function BrandCard({ title, link }) {
  return (
    <>
      <div className='min-h-25rem w-100per rounded-10px bg-cover bg-no-repeat bg-center border-1px border-solid border-black'>
        <div className='flex h-25rem min-h-50per'>
          <Link href={link} passHref>
            <div className='relative m-auto max-w-75per w-75per min-h-80per bg-black cursor-pointer'>
              <div className='p-20px'>
                <h3 className='text-left text-25px text-white'>{title}</h3>
                <LinkButton className='absolute bottom-10per text-white' href={link} id={`brand-redirect-${title}`}>
                  Read more
                </LinkButton>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
