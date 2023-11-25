import React, { InputHTMLAttributes, ReactNode } from 'react'
import { Emoji } from './Emoji'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className='mb-4 md:mb-8'>
      <div className='mb-3 p-1'>
        <Emoji>🔎</Emoji> Search
      </div>
      <input
        className='w-full px-5 py-2 rounded-2xl bg-muted text-muted-foreground'
        type='text'
        placeholder='Search Keyword...'
        {...props}
      />
    </div>
  )
}

export default SearchInput
