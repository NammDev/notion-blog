import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type TOrder = 'asc' | 'desc'

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentOrder = searchParams.get('order') || ('desc' as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form
    current.set('order', value)

    const search = current.toString()
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  return (
    <div className='flex gap-2 text-sm leading-5'>
      <a
        className={cn(
          'cursor-pointer text-card-foreground',
          currentOrder === 'desc' && 'font-bold text-popover-foreground'
        )}
        onClick={() => handleClickOrderBy('desc')}
      >
        Desc
      </a>
      <a
        className={cn(
          'cursor-pointer text-card-foreground',
          currentOrder === 'asc' && 'font-bold text-popover-foreground'
        )}
        onClick={() => handleClickOrderBy('asc')}
      >
        Asc
      </a>
    </div>
  )
}

export default OrderButtons
