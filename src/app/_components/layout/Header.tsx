'use client'
import Link from 'next/link'
import ThemeController from './ThemeController'
import ScrollProgressBar from './ScrollProgressBar'
import useDataFetchContext from '@hooks/useDataFetchContext'

export default function Header() {
  const { updateSearch, updatePage } = useDataFetchContext()

  const handleHome = () => {
    updateSearch('')
    updatePage(1)
  }
  return (
    <header className="fixed left-0 top-0 z-[999] h-header w-full content-center justify-items-center border-b border-b-surface-neutral-base bg-bg-base text-content-neutral-primary">
      <div className="flex w-full max-w-layout items-center justify-between px-10">
        <Link
          className="star-medium18"
          onClick={() => handleHome()}
          href={'/'}>
          STARLAWBLOG
        </Link>

        <ThemeController />
      </div>
      <ScrollProgressBar />
    </header>
  )
}
