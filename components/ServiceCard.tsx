import { CONFIG } from '@/site.config'
import React from 'react'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { Emoji } from './Emoji'

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className='mb-3 p-1'>
        <Emoji>🌟</Emoji> Service
      </div>
      <div className='flex flex-col mb-9 p-1 rounded-2xl bg-[rgb(40,40,40)]'>
        {CONFIG.projects.map((project, idx) => (
          <a
            className='flex gap-3 items-center cursor-pointer p-3 rounded-2xl text-[rgb(160,160,160)] hover:text-[rgb(237,237,237)] hover:bg-[rgb(46,46,46)]'
            key={idx}
            href={`${project.href}`}
            rel='noreferrer'
            target='_blank'
          >
            <AiFillCodeSandboxCircle className='text-2xl leading-8' />
            <div className='text-sm leading-5'>{CONFIG.projects[0].name}</div>
          </a>
        ))}
      </div>
    </>
  )
}

export default ServiceCard

// const StyledWrapper = styled.div`
//   background-color: ${({ theme }) => (theme.scheme === 'light' ? 'white' : theme.colors.gray4)};

//   }
// `
