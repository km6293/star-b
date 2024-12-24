'use client'

import useInternalRouter from '@hooks/useInternalRouter'
import { POST_LIMIT } from '@libs/constants'
import useDataFetchContext from '@hooks/useDataFetchContext'
import clsx from 'clsx'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagenation() {
  const { page, total, updatePage } = useDataFetchContext()
  const totalPage = Math.ceil(total / POST_LIMIT)

  const { replace } = useInternalRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const handleChangePage = (newPage: number) => {
    if (page === newPage) return
    params.set('pagination[page]', newPage.toString())
    updatePage(newPage)
    replace(pathname + '?' + params.toString())
  }

  return (
    <div className="star-medium20 flex gap-2 self-center p-10">
      <button
        className="rounded-md bg-transparent px-2 py-1 text-content-neutral-primary hover:bg-surface-neutral-base"
        onClick={() => page > 1 && handleChangePage(page - 1)}>
        이전
      </button>
      {Array.from(new Array(totalPage), (_, i) => i + 1)
        .filter(i => {
          if (page < 3) {
            return i < 6
          } else if (page > totalPage - 3) {
            return i >= totalPage - 4
          }
          return i >= page - 2 && i <= page + 2
        })
        .map(i => (
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            className={clsx(
              'rounded-md px-3 py-1',
              page === i
                ? 'pointer-events-none text-content-neutral-primary'
                : 'bg-transparent" hover:bg-surface-neutral-base'
            )}>
            {i}
          </button>
        ))}
      <button
        className="rounded-md bg-transparent px-2 py-1 text-content-neutral-primary hover:bg-surface-neutral-base"
        onClick={() => page < totalPage && handleChangePage(page + 1)}>
        다음
      </button>
    </div>
  )
}
