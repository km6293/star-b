'use client'
import { Suspense } from 'react'
import Link from 'next/link'
import ThemeController from './ThemeController'
import Search from './Search'
import ScrollProgressBar from './ScrollProgressBar'
import useDataFetchContext from '@hooks/useDataFetchContext'

export default function Header() {
  const { updateSearch } = useDataFetchContext()

  const handleHome = () => {
    updateSearch('')
  }
  return (
    <header className="fixed left-0 top-0 z-[999] h-header w-full content-center justify-items-center border-b border-b-surface-neutral-base bg-bg-base text-content-neutral-primary">
      <div className="flex w-full max-w-layout items-center justify-between">
        <Link
          className="star-medium18"
          onClick={() => handleHome()}
          href={'/'}>
          STARLAWBLOG
        </Link>

        <div className="flex items-center gap-2">
          <Suspense>
            <Search />
          </Suspense>
          <ThemeController />
        </div>
      </div>
      <ScrollProgressBar />
    </header>
  )
}
