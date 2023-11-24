import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentTag = searchParams.get('tag') || undefined

  const handleClick = (value: any) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    current.set('tag', value)
    // cast to string
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }
  return (
    <div
      className='text-xs leading-4 font-normal cursor-pointer px-2 py-1 rounded-[50px] bg-card text-card-foreground'
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Tag
