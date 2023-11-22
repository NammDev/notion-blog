'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className='flex justify-between font-medium text-[rgb(126,126,126)]'>
      <a
        className='cursor-pointer mt-2 hover:text-[rgb(237,237,237)]'
        onClick={() => router.push('/')}
      >
        ← Back
      </a>
      <a
        className='cursor-pointer mt-2 hover:text-[rgb(237,237,237)]'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Top
      </a>
    </div>
  )
}

export default Footer
