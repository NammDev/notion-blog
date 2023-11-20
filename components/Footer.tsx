import { CONFIG } from '@/site.config'
import Link from 'next/link'
import React from 'react'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <Link
        className='text-sm leading-5 text-[rgb(126,126,126)] mt-3'
        href={`https://github.com/${CONFIG.profile.github}`}
        target='_blank'
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </Link>
    </div>
  )
}

export default Footer
