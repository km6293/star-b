'use client'

import { DataFetchContext } from '@providers/DataFetchProvider'
import { useContext } from 'react'

const useDataFetchContext = () => {
  const context = useContext(DataFetchContext)

  if (!context) {
    throw new Error('컨텍스트가 초기화되지 않았어요.')
  }

  return context
}

export default useDataFetchContext
