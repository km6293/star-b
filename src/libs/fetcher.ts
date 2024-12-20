import type { FetcherParams } from '@libs/internalTypes'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const fetcher = async <T>({ method, url, customOptions }: FetcherParams): Promise<T> => {
  const headers = {
    ...defaultHeaders,
    ...customOptions?.headers
  }

  const options: RequestInit = {
    method,
    headers: { ...headers },
    body: customOptions?.body ? JSON.stringify(customOptions.body) : undefined
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('error')
  }

  const fetchResult = await response.json()

  return fetchResult
}

export default fetcher
