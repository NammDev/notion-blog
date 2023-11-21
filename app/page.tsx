import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'
import MobileProfileCard from '@/components/MobileProfileCard'
import ProfileCard from '@/components/ProfileCard'
import ServiceCard from '@/components/ServiceCard'
import TagList from '@/components/TagList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full max-w-[1120px] mx-auto my-0 px-4 py-0'>
      <div className='grid-cols-12 grid gap-6 px-0 py-8 md:px-0 md:py-2'>
        <div className='hidden md:block md:overflow-scroll md:sticky md:grid-col-span-2 md:top-16 md:scrollbar-hidden h-[calc(100vh-73px)'>
          <TagList />
        </div>
        <div className='col-span-12 lg:col-span-7'>
          <MobileProfileCard />
          {/* <SearchInput value={q} onChange={(e) => setQ(e.target.value)} /> */}
          <div className='block lg:hidden'>
            <TagList />
          </div>
          {/* <FeedHeader />
          <PostList q={q} /> */}
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
