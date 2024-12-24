import type { FetcherParams } from '@libs/internalTypes'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const fetcher = async <T>({ method, url, customOptions }: FetcherParams): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const headers = {
    ...defaultHeaders,
    ...customOptions?.headers
  }

  const options: RequestInit = {
    method,
    headers: { ...headers },
    body: customOptions?.body ? JSON.stringify(customOptions.body) : undefined,
    next: customOptions?.next,
    cache: customOptions?.cache
  }

  const response = await fetch(baseUrl + url, options)
  if (!response.ok) {
    throw new Error('error')
  }

  const fetchResult = await response.json()

  return fetchResult
}

export default fetcher
