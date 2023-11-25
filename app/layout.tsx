import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { pretendard } from '@/public/fonts'
import Providers from '@/lib/provider'
import Scripts from '@/components/layout/Script'
import useGtagEffect from '@/hooks/useGtagEffect'
import { cn } from '@/lib/utils'
import { CONFIG } from '@/site.config'

export const metadata: Metadata = {
  title: CONFIG.blog.title,
  description: CONFIG.blog.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // useGtagEffect()
  return (
    <html lang='en'>
      <body className={cn('bg-background', pretendard.className)}>
        <Providers>
          <Scripts />
          <Header fullWidth={false} />
          <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
