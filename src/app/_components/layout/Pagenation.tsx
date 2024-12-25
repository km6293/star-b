'use client'

import { POST_LIMIT } from '@libs/constants'
import useDataFetchContext from '@hooks/useDataFetchContext'
import clsx from 'clsx'
import Form from 'next/form'

type Props = {
  contains?: string
}

export default function Pagenation({ contains }: Props) {
  const { total, page, updatePage } = useDataFetchContext()
  const totalPage = Math.ceil(total / POST_LIMIT)

  const handleChangePage = (newPage: number) => {
    updatePage(newPage)
  }
  if (total === 0) return <div className="self-center">검색 결과가 없습니다</div>
  return (
    <Form
      action=""
      className="star-medium20 flex gap-2 self-center p-10">
      <button
        type="submit"
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
            type="submit"
            onClick={() => handleChangePage(i)}
            className={clsx(
              'rounded-md px-3 py-1',
              page === i
                ? 'pointer-events-none text-content-neutral-primary'
                : 'bg-transparent hover:bg-surface-neutral-base'
            )}>
            {i}
          </button>
        ))}
      <button
        type="submit"
        className="rounded-md bg-transparent px-2 py-1 text-content-neutral-primary hover:bg-surface-neutral-base"
        onClick={() => page < totalPage && handleChangePage(page + 1)}>
        다음
      </button>

      <input
        type="hidden"
        name="filters[similarQuestion][$contains]"
        defaultValue={contains}
      />
      <input
        type="hidden"
        name="pagination[page]"
        defaultValue={page.toString()}
      />
      <input
        type="hidden"
        name="pagination[pageSize]"
        defaultValue="10"
      />
    </Form>
  )
}