'use client'
import React, { useState } from 'react'
import { Emoji } from './Emoji'

const ThemeToggle = () => {
  const [scheme, setScheme] = useState('dark')

  return (
    <div className='cursor-pointer'>
      <Emoji>{scheme === 'light' ? '☀️' : '🌙'}</Emoji>
    </div>
  )
}

export default ThemeToggle
