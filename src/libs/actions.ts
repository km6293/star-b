import type { PostType } from '@libs/internalTypes'
import fetcher from '@libs/fetcher'
import { QueryFunction } from '@tanstack/react-query'
import { POST_LIMIT } from './constants'

export const getSearchResult: QueryFunction<PostType, ['posts', string]> = async ({ queryKey }) => {
  const [, query] = queryKey

  const urlSearchParams = new URLSearchParams(query)

  if (!urlSearchParams.has('pagination[pageSize]')) {
    urlSearchParams.set('pagination[pageSize]', POST_LIMIT.toString())
  }

  if (!urlSearchParams.has('pagination[page]')) {
    urlSearchParams.set('pagination[page]', '1')
  }
  const result = await fetcher<PostType>({
    method: 'GET',
    url: `/api/posts?${urlSearchParams}`,
    customOptions: {
      next: {
        tags: ['posts', urlSearchParams.toString()]
      },
      cache: 'force-cache'
    }
  })

  return result
}
