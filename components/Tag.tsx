import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  // const router = useRouter()

  // const handleClick = (value: string) => {
  //   router.push(`/?tag=${value}`)
  // }
  return (
    <div
      className='text-xs leading-4 font-normal cursor-pointer px-2 py-1 rounded-[50px] text-[rgb(126,126,126)] bg-[rgb(46,46,46)]'
      // onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Tag
