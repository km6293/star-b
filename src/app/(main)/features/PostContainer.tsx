'use client'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import Post from '@components/layout/Post'
import { getSearchResult } from '@libs/actions'
import useDataFetchContext from '@/hooks/useDataFetchContext'
import Skeleton from '@components/layout/Skeleton'
import { useSearchParams } from 'next/navigation'

export default function PostContainer() {
  const { updateTotal } = useDataFetchContext()
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  const { data, isLoading } = useQuery({
    queryKey: ['posts', queryString],
    queryFn: getSearchResult
  })

  useEffect(() => {
    if (data) {
      updateTotal(data.meta.pagination.total)
    }
  }, [data, updateTotal])

  if (isLoading) {
    return <Skeleton />
  }

  if (!data) {
    return
  }

  return (
    <section className="mx-auto w-full justify-items-center">
      <Suspense fallback={<p>데이터를 불러오고 있습니다.</p>}>
        <div className="grid max-w-layout grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {data.data.map(lawCase => (
            <Post
              key={lawCase.id}
              lawCase={lawCase}
            />
          ))}
        </div>
      </Suspense>
    </section>
  )
}
