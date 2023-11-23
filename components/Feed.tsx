'use client'

import { useState } from 'react'
import TagList from './TagList'
import MobileProfileCard from './MobileProfileCard'
import SearchInput from './SearchInput'
import FeedHeader from './FeedHeader'
import PostList from './PostLIst'
import Footer from './Footer'
import ProfileCard from './ProfileCard'
import ServiceCard from './ServiceCard'
import ContactCard from './ContactCard'

type Props = {}

const Feed: React.FC<Props> = () => {
  const [q, setQ] = useState('')
  return (
    <div className='grid-cols-12 grid gap-6 px-0 py-8'>
      <div className='hidden md:block md:overflow-scroll md:sticky md:col-span-2 md:top-16 md:scrollbar-hidden h-[calc(100vh-73px)]'>
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
  )
}

export default Feed
