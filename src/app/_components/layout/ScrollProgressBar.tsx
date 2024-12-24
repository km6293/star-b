'use client'

import { useEffect, useState } from 'react'

const ScrollProgressBar = () => {
  const [mounted, setMounted] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-0 z-20 h-[1.5px] w-full">
      <div
        className="bg-content-neutral-primary h-[1.5px]"
        style={{ width: `${scrollTop}%` }}></div>
    </div>
  )
}

export default ScrollProgressBar
