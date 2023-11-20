'use client'
import React, { useState } from 'react'

const ThemeToggle = () => {
  const [scheme, setScheme] = useState('dark')

  return (
    <div className='cursor-pointer'>
      <span>{scheme === 'light' ? '☀️' : '🌙'}</span>
    </div>
  )
}

export default ThemeToggle
