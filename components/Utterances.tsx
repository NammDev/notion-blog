'use client'
import { createRef, useEffect } from 'react'
import { CONFIG } from '@/site.config'
import { useTheme } from 'next-themes'

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  const { theme } = useTheme()
  const utterancesRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const gTheme = theme === 'light' ? 'github-light' : 'github-dark'
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.async = true
    scriptElement.defer = true
    scriptElement.setAttribute('crossorigin', 'annonymous')
    scriptElement.setAttribute('repo', CONFIG.utterances.config.repo)
    scriptElement.setAttribute('label', CONFIG.utterances.config.label)
    scriptElement.setAttribute('issue-term', issueTerm)
    scriptElement.setAttribute('theme', gTheme)

    scriptElement.onload = () => {
      const comments = document.getElementById('comments-container')
      if (comments && comments?.children?.length > 1) {
        for (let i = 0; i < comments?.children.length - 1; i++) {
          //@ts-ignore
          comments.children[i].style.display = 'none'
        }
      }
    }

    utterancesRef.current?.appendChild(scriptElement)
  }, [utterancesRef, theme, issueTerm])

  return (
    <>
      <div ref={utterancesRef} className='md:ml-[-4rem] mt-4' id='comments-container'></div>
    </>
  )
}

export default Utterances
