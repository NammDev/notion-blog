'use client'

import ContactCard from '@/components/ContactCard'
import FeedHeader from '@/components/FeedHeader'
import Footer from '@/components/Footer'
import MobileProfileCard from '@/components/MobileProfileCard'
import PostList from '@/components/PostLIst'
import ProfileCard from '@/components/ProfileCard'
import SearchInput from '@/components/SearchInput'
import ServiceCard from '@/components/ServiceCard'
import TagList from '@/components/TagList'
import { useState } from 'react'

export default function Home() {
  const [q, setQ] = useState('')
  return (
    <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>
      <div className='grid-cols-12 grid gap-6 px-0 py-8'>
        <div className='hidden md:block md:overflow-scroll md:sticky md:col-span-2 md:top-16 md:scrollbar-hidden h-[calc(100vh-73px)'>
          <TagList />
        </div>
        <div className='col-span-12 lg:col-span-7 leading-[normal]'>
          <MobileProfileCard />
          <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
          <div className='block lg:hidden'>
            <TagList />
          </div>
          <FeedHeader />
          <PostList q={q} />
          <div className='pt-4 lg:hidden'>
            <Footer />
          </div>
        </div>
        <div className='scrollbar-hidden hidden lg:block overflow-scroll sticky lg:col-span-3 top-[63px] scrollbar-none h-[calc(100vh-73px)]'>
          <ProfileCard />
          <ServiceCard />
          <ContactCard />
          <div className='pt-4'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
