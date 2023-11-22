import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import React from 'react'
// import { COLOR_SET } from './constants'
// import { colors } from 'src/styles'

// export const getColorClassByName = (name: string): string => {
//   try {
//     let sum = 0
//     name.split('').forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
//     const colorKey = sum.toString(16)?.[sum.toString(16).length - 1].toUpperCase()
//     return COLOR_SET[colorKey]
//   } catch {
//     return COLOR_SET[0]
//   }
// }

type Props = {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  // const router = useRouter()

  // const handleClick = (value: string) => {
  //   if (readOnly) return
  //   router.push(`/?category=${value}`)
  // }
  return (
    <div
      className={cn(
        'w-fit text-sm opacity-90 text-black bg-sky-200 px-2 py-1 rounded-full',
        readOnly ? 'cursor-default' : 'cursor-pointer'
      )} // eslint-disable-line
      // onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Category
