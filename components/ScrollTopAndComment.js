import { useEffect, useState } from 'react'
import { ClapButton } from '@lyket/react'
import ScrollTop from '@/components/ScrollTop'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed right-8 bottom-9 hidden flex-col gap-6 ${show ? 'md:flex' : 'md:hidden'}`}
      >
        <button className="mb-16">
          <ClapButton id="diy-fish-holder" namespace="post" hideCounterIfLessThan={1} />
        </button>
      </div>
      <ScrollTop />
    </>
  )
}

export default ScrollTopAndComment
