'use client'

import { useCallback, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import useDataFetchContext from '@hooks/useDataFetchContext'
import clsx from 'clsx'
import useInternalRouter from '@hooks/useInternalRouter'
import useDebounce from '@/hooks/useDebounce'

export default function Search() {
  const { updateSearch, search } = useDataFetchContext()
  const [searchInput, setSearchInput] = useState(search)
  const pathname = usePathname()
  const { replace } = useInternalRouter()
  const searchParams = useSearchParams()

  const updateUrl = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    if (searchInput) {
      params.set('filters[similarQuestion][$contains]', searchInput)
    } else {
      params.delete('filters[similarQuestion][$contains]')
    }

    params.delete('pagination[page]')

    if (pathname.startsWith('/posts')) {
      replace(pathname)
    } else {
      replace(pathname + '?' + params.toString())
    }

    updateSearch(searchInput)
  }, [searchInput, replace, searchParams, pathname, updateSearch])

  useDebounce(() => updateUrl(), 500, [searchInput])

  return (
    <div className="h-8 content-center rounded-full border border-solid border-border-neutral-base focus-within:border-content-neutral-primary">
      <div className="w-full">
        <div className={clsx('flex w-full items-center', 'pl-3.5 pr-2')}>
          <input
            name="query"
            className="inline-block w-full bg-transparent text-content-neutral-primary outline-none star-medium14 placeholder:text-content-neutral-base"
            placeholder="검색"
            autoComplete="off"
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput}
            maxLength={100}
            minLength={1}
          />
        </div>
      </div>
    </div>
  )
}
