import { CONFIG } from '@/site.config'
import Image from 'next/image'
import React from 'react'
import { Emoji } from './Emoji'

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <div>
      <div className='title mb-3 p-1'>
        <Emoji>💻</Emoji> Profile
      </div>
      <div className='bg-[rgb(40,40,40)] w-full mb-9 rounded-2xl sm:p-4 lg:p-4'>
        <div className='selection:relative w-full aspect-w-1 aspect-h-1'>
          <Image src={CONFIG.profile.image} alt='' width={222} height={222} />
        </div>
        <div className='flex flex-col items-center p-2'>
          <div className='text-xl leading-7 italic font-bold'>{CONFIG.profile.name}</div>
          <div className='text-sm leading-5 text-[rgb(160,160,160)] mb-4'>
            {CONFIG.profile.role}
          </div>
          <div className='text-base'>{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
