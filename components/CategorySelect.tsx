import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import { DEFAULT_CATEGORY } from '@/constants'
import useDropdown from '@/hooks/useDropdown'
import { useCategoriesQuery } from '@/hooks/useCategoriesQuery'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {}

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const data = useCategoriesQuery()
  const [dropdownRef, opened, handleOpen] = useDropdown()

  const currentCategory = searchParams.get("category") || DEFAULT_CATEGORY

  const handleOptionClick = (category: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set("category", category);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return (
    <div className='relative'>
      <div
        ref={dropdownRef}
        className='flex gap-1 items-center text-xl leading-7 font-bold cursor-pointer my-2'
        onClick={handleOpen}
      >
        {currentCategory} Posts <MdExpandMore />
      </div>
      {opened && (
        <div className='bg-[rgb(28,28,28)] text-[rgb(126,126,126)] absolute z-40 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-1 rounded-xl'>
          {Object.keys(data).map((key, idx) => (
            <div
              className='hover:bg-[rgb(40,40,40)] text-sm leading-5 whitespace-nowrap cursor-pointer px-2 p-1 rounded-xl'
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {`${key} (${data[key]})`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategorySelect
