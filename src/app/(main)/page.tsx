import { Suspense } from 'react'
import PostContainer from './features/PostContainer'
import { Metadata } from 'next'

type Props = {
  searchParams: Promise<Record<string, string | string[]>>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams
  const query = params['filters[similarQuestion][$contains]'] || ''
  const queryString = Array.isArray(query) ? query[0] : query

  return {
    title: `${queryString ? queryString + ' - ' : ''} STARLAWBLOG`,
    description: `${queryString ? queryString + ' - ' : ''} 검색 결과를 확인하세요.`
  }
}

export default async function Page() {
  return (
    <Suspense fallback={<p>데이터를 불러오고 있습니다...</p>}>
      <PostContainer />
    </Suspense>
  )
}
