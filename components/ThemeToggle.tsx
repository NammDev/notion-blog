'use client'

import React, { useEffect, useState } from 'react'
import { Emoji } from './Emoji'
import { useTheme } from 'next-themes'

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className='cursor-pointer' onClick={handleClick}>
      <Emoji>{theme === 'light' ? '☀️' : '🌙'}</Emoji>
    </div>
  )
}

export default ThemeToggle
