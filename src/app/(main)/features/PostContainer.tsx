'use client'
import { useEffect } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { PostType } from '@libs/internalTypes'
import Post from '@components/layout/Post'
import Pagenation from '@components/layout/Pagenation'
import { getSearchResult } from '@libs/actions'
import useDataFetchContext from '@/hooks/useDataFetchContext'

export default function PostContainer() {
  const { updateTotal } = useDataFetchContext()
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  const { data } = useSuspenseQuery<PostType, Error, PostType, ['getSearchResult', string]>({
    queryKey: ['getSearchResult', queryString],
    queryFn: getSearchResult
  })

  useEffect(() => {
    if (data) {
      updateTotal(data.meta.pagination.total)
    }
  }, [data, updateTotal])

  return (
    <section className="mx-auto w-full justify-items-center">
      <div className="grid max-w-layout grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {data.data.map(lawCase => (
          <Post
            key={lawCase.id}
            lawCase={lawCase}
          />
        ))}
      </div>
      {data.data.length === 0 ? '결과값이 없습니다' : <Pagenation />}
    </section>
  )
}
