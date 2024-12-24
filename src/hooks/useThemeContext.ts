import { ThemeContext } from '@app/_providers/ThemeProvider'
import { useContext } from 'react'

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('컨텍스트가 초기화되지 않았습니다.')
  }

  return context
}

export default useTheme
