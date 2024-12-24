import type { LawCase, PostType } from '@libs/internalTypes'
import fetcher from '@libs/fetcher'
import { QueryFunction } from '@tanstack/react-query'
import { POST_LIMIT } from './constants'

export const getSearchResult: QueryFunction<PostType, ['getSearchResult', string]> = async ({ queryKey }) => {
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
        tags: ['getSearchResult', query]
      }
    }
  })

  return result
}

export const getLawCaseDetail = async (id: number): Promise<LawCase[]> => {
  const result = await fetcher<LawCase[]>({
    method: 'GET',
    url: `/api/posts/${id}`
  })
  return result
}
