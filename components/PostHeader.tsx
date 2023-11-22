import { CONFIG } from '@/site.config'
import Image from 'next/image'
import React from 'react'
import { TPost } from '@/types'
import { formatDate } from '@/lib/utils'
import Tag from './Tag'

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className='text-3xl leading-9 font-bold'>{data.title}</h1>
      {data.type[0] !== 'Paper' && (
        <nav className='mt-6 text-[rgb(160,160,160)]'>
          <div className='flex gap-3 items-center mb-3'>
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className='flex gap-2 items-center'>
                  <Image
                    className='rounded-[50%]'
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt='profile_photo'
                    width={24}
                    height={24}
                  />
                  <div className=''>{data.author[0].name}</div>
                </div>
                <div className='self-stretch w-px bg-[rgb(126,126,126)] my-1'></div>
              </>
            )}
            <div className='mr-2 md:ml-0'>
              {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
            </div>
          </div>
          <div className='flex items-center mb-4'>
            {data.tags && (
              <div className='flex overflow-x-auto flex-nowrap gap-2 max-w-full'>
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && (
            <div className='overflow-hidden relative w-full mb-7 pb-[66%] rounded-3xl lg:pb-[50%]'>
              <Image src={data.thumbnail} className='object-cover' fill alt={data.title} />
            </div>
          )}
        </nav>
      )}
    </div>
  )
}

export default PostHeader
