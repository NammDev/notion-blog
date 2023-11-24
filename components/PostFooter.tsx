'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className='flex justify-between font-medium text-card-foreground'>
      <a className='cursor-pointer mt-2 hover:text-foreground' onClick={() => router.push('/')}>
        ← Back
      </a>
      <a
        className='cursor-pointer mt-2 hover:text-foreground'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Top
      </a>
    </div>
  )
}

export default Footer
