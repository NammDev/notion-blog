import { CONFIG } from '@/site.config'
import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className='block lg:hidden'>
      <div className='mb-3 p-1'>💻 Profile</div>
      <div className='bg-muted mb-4 p-2 rounded-2xl'>
        <div className='flex gap-2 items-center'>
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            className='relative'
            alt='profile_image'
          />
          <div className='h-fit'>
            <div className='text-xl leading-7 italic font-bold'>{CONFIG.profile.name}</div>
            <div className='text-sm leading-5 mb-2'>{CONFIG.profile.role}</div>
            <div className='text-sm leading-5'>{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileProfileCard
