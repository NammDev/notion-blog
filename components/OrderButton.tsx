import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

type TOrder = 'asc' | 'desc'

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()

  const currentOrder = 'desc' as TOrder

  //   const currentOrder = `${router.query.order || ``}` || ('desc' as TOrder)

  //   const handleClickOrderBy = (value: TOrder) => {
  //     router.push({
  //       query: {
  //         ...router.query,
  //         order: value,
  //       },
  //     })
  //   }
  return (
    <div className='flex gap-2 text-sm leading-5'>
      <a
        className={cn(
          'cursor-pointer text-[rgb(126,126,126)]',
          currentOrder === 'desc' && 'font-bold text-[rgb(237,237,237)]'
        )}
        // onClick={() => handleClickOrderBy('desc')}
      >
        Desc
      </a>
      <a
        className={cn(
          'cursor-pointer text-[rgb(126,126,126)]',
          currentOrder === 'asc' && 'font-bold text-[rgb(237,237,237)]'
        )}
        // onClick={() => handleClickOrderBy('asc')}
      >
        Asc
      </a>
    </div>
  )
}

export default OrderButtons
