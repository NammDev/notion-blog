'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Emoji } from './Emoji'
import { useTagsQuery } from '@/hooks/useTagsQuery'
import { cn } from '@/lib/utils'

const TagList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTag = searchParams.get("tag") || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (currentTag === value) {
      current.delete("tag");
    } else {
      current.set("tag", value);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
}

  return (
    <div>
      <div className='top hidden md:block p-1 mb-3 h-[27px]'>
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className='list flex flex-wrap gap-1 md:block mb-6 overflow-x-auto scrollbar-none'>
        {Object.keys(data).map((key) => (
          <a
            className={cn('block text-sm leading-5 text-[rgb(126,126,126)] shrink-0 cursor-pointer my-1 px-4 py-1 rounded-xl hover:bg-[rgb(40,40,40)]', currentTag === key && 'text-[rgb(237,237,237)] bg-[rgb(40,40,40)]' )}
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
