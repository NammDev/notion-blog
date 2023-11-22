import Image from 'next/image'
import Link from 'next/link'

import { CONFIG } from '@/site.config'
import { cn, formatDate } from '@/lib/utils'

import Tag from './Tag'
import Category from './Category'
import { TPost } from '@/types'

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <Link href={`/${data.slug}`}>
      <article className='bg-[rgb(40,40,40)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] overflow-hidden relative transition-shadow ease-in-out duration-300 mb-6 rounded-2xl md:mb-8'>
        {category && (
          <div className='absolute z-10 left-4 top-4'>
            <Category>{category}</Category>
          </div>
        )}
        {data.thumbnail && (
          <div className='relative w-full pb-[66%] lg:pb-[50%] bg-[rgb(28,28,28)]'>
            <Image src={data.thumbnail} fill alt={data.title} className='object-cover' />
          </div>
        )}
        <div className={cn('p-4', !data.thumbnail && 'pt-14')}>
          <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
            <h2 className='text-lg leading-7 font-medium cursor-pointer mb-2 md:text-xl md:leading-7'>
              {data.title}
            </h2>
          </header>
          <div className='flex gap-2 items-center mb-4'>
            <div className='text-sm leading-5 md:ml-0 text-[rgb(126,126,126)]'>
              {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
            </div>
          </div>
          <div className='mb-4'>
            <p className='hidden leading-8 md:block text-[rgb(160,160,160)]'>{data.summary}</p>
          </div>
          <div className='flex gap-2'>
            {data.tags && data.tags.map((tag: string, idx: number) => <Tag key={idx}>{tag}</Tag>)}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
