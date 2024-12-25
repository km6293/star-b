import PostContainer from './features/PostContainer'
import SearchForm from '@components/layout/SearchForm'
import { Metadata } from 'next'
import Pagenation from '@components/layout/Pagenation'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getSearchResult } from '@libs/actions'

type SearchParams = {
  searchParams: Promise<{
    contains?: string
    page?: string
  }>
}

export async function generateMetadata({ searchParams }: SearchParams): Promise<Metadata> {
  const { contains } = await searchParams
  return {
    title: `${contains ? contains + ' - ' : ''} STARLAWBLOG`,
    description: `${contains ? contains + ' - ' : ''} 검색 결과를 확인하세요.`
  }
}

export default async function Page({ searchParams }: SearchParams) {
  const queryClient = new QueryClient()
  const query = await searchParams
  const { contains, page } = query

  await queryClient.prefetchQuery({
    queryKey: ['posts', ''],
    queryFn: getSearchResult
  })

  return (
    <div className="flex flex-col gap-20 px-10 pt-10">
      <SearchForm
        contains={contains}
        page={page}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostContainer />
      </HydrationBoundary>
      <Pagenation contains={contains} />
    </div>
  )
}
