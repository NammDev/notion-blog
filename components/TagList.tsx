'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Emoji } from './Emoji'

const TagList = () => {
  const router = useRouter()
  const currentTag = router || undefined
  const data = {
    Docs: 1,
    Morethanlog: 1,
    SEO: 1,
    Blog: 1,
    'Next.js': 4,
    GraphQL: 3,
    Apollo: 2,
    Rest: 1,
    GA: 1,
    'Open Source': 1,
    Github: 1,
  }

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      //   router.push({
      //     query: {
      //       ...router.query,
      //       tag: undefined,
      //     },
      //   })
    }
    // add
    else {
      //   router.push({
      //     query: {
      //       ...router.query,
      //       tag: value,
      //     },
      //   })
    }
  }
  return (
    <div>
      <div className='top hidden md:block p-1 mb-3 h-[27px]'>
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className='list flex flex-wrap gap-1 md:block mb-6 overflow-x-auto scrollbar-none'>
        {Object.keys(data).map((key) => (
          <a
            className='block text-sm leading-5 text-[rgb(126,126,126)] shrink-0 cursor-pointer my-1 px-4 py-1 rounded-xl hover:bg-[rgb(40,40,40)]'
            key={key}
            // data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TagList
