'use client'

import { ArrowUpSvg } from '@components/svgs/ArrowUpSvg'
import { useEffect, useMemo, useState } from 'react'

const THROTTLE_WAIT = 300

function throttle(func: () => void, wait: number) {
  let timer: NodeJS.Timeout | null = null
  return () => {
    if (timer) return
    timer = setTimeout(() => {
      func()
      timer = null
    }, wait)
  }
}

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const handleIsVisible = useMemo(
    () =>
      throttle(() => {
        const { scrollY, innerHeight } = window
        setIsVisible(scrollY > innerHeight / 2)
      }, THROTTLE_WAIT),
    []
  )

  const onClick = () => {
    const scrollStep = -window.scrollY / 20
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
        return
      }
      clearInterval(scrollInterval)
    }, 15)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleIsVisible)
    return () => {
      window.removeEventListener('scroll', handleIsVisible)
    }
  }, [handleIsVisible])

  return (
    <div>
      {isVisible && (
        <button
          type="button"
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-content-neutral-primary shadow-lg"
          aria-label="최상단 이동"
          onClick={onClick}>
          <ArrowUpSvg />
        </button>
      )}
    </div>
  )
}
