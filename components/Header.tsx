import Link from 'next/link'
import { CONFIG } from '@/site.config'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import NavBar from './NavBar'

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <div className='z-30 sticky top-0 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] bg-background'>
      <div
        className={cn(
          'flex justify-between items-center w-full max-w-[1120px] h-12 mx-auto my-0 px-4',
          fullWidth && 'sm:pl-24 sm:pr-24'
        )}
      >
        <Link href='/' aria-label={CONFIG.blog.title}>
          {CONFIG.blog.title}
        </Link>
        <div className='flex gap-3 items-center'>
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
