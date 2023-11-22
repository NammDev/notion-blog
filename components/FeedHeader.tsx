import React from 'react'
import CategorySelect from './CategorySelect'
import OrderButtons from './OrderButton'

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className='flex justify-between items-center mb-4 border-b-[rgb(52,52,52)] border-b border-solid'>
      <CategorySelect />
      <OrderButtons />
    </div>
  )
}

export default FeedHeader
