import type { LawCase } from '@libs/internalTypes'
import fetcher from '@libs/fetcher'

export const getLawCaseList = async (page: number): Promise<LawCase[]> => {
  const result = await fetcher<LawCase[]>({
    method: 'GET',
    url: `/api/posts?page=${page}`
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
