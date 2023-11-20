import { CONFIG } from '@/site.config'
import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const ContactCard: React.FC = () => {
  return (
    <>
      <div className='mb-3 p-1'>💬 Contact</div>
      <div className='flex flex-col p-1 rounded-2xl bg-[rgb(40,40,40)]'>
        {CONFIG.profile.github && (
          <a
            className='text-[rgb(160,160,160)] flex gap-3 items-center cursor-pointer p-3 rounded-2xl hover:text-[rgb(237,237,237)] hover:bg-[rgb(46,46,46)]'
            href={`https://github.com/${CONFIG.profile.github}`}
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineGithub className='text-2xl leading-8' />
            <div className='text-sm leading-5'>github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            className='text-[rgb(160,160,160)] flex gap-3 items-center cursor-pointer p-3 rounded-2xl hover:text-[rgb(237,237,237)] hover:bg-[rgb(46,46,46)]'
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineInstagram className='text-2xl leading-8' />
            <div className='text-sm leading-5'>instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            className='text-[rgb(160,160,160)] overflow-hidden flex gap-3 items-center cursor-pointer p-3 rounded-2xl hover:text-[rgb(237,237,237)] hover:bg-[rgb(46,46,46)]'
            href={`mailto:${CONFIG.profile.email}`}
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineMail className='text-2xl leading-8' />
            <div className='text-sm leading-5'>email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            className='text-[rgb(160,160,160)] overflow-hidden flex gap-3 items-center cursor-pointer p-3 rounded-2xl hover:text-[rgb(237,237,237)] hover:bg-[rgb(46,46,46)]'
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel='noreferrer'
            target='_blank'
          >
            <AiFillLinkedin className='text-2xl leading-8' />
            <div className='text-sm leading-5'>linkedin</div>
          </a>
        )}
      </div>
    </>
  )
}

export default ContactCard
