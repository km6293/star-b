'use client'

import { createContext, useCallback, useState, type PropsWithChildren } from 'react'

type DataFetchContextType = {
  search: string
  page: number
  total: number
  updateSearch: (input: string) => void
  updatePage: (page: number) => void
  updateTotal: (total: number) => void
}

export const DataFetchContext = createContext<DataFetchContextType>({
  search: '',
  page: 1,
  total: 0,
  updateSearch: () => {},
  updatePage: () => {},
  updateTotal: () => {}
})

type Props = PropsWithChildren

const DataFetchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotalPost] = useState(0)

  const updateSearch = useCallback((input: string) => {
    setSearch(input)
  }, [])

  const updatePage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  const updateTotal = useCallback((newTotal: number) => {
    setTotalPost(newTotal)
  }, [])

  return (
    <DataFetchContext.Provider value={{ search, page, total, updateSearch, updatePage, updateTotal }}>
      {children}
    </DataFetchContext.Provider>
  )
}

export default DataFetchProvider
