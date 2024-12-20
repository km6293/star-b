import { HTTP_METHOD, APP_THEME } from '@libs/constants'

export type LawCase = {
  id: string
  legalCategory: string
  similarQuestion: string
  similarAnswer: string
  keyLaws: string
  caseLaw: string
  date: string
  imageUrl: string
}

export type HttpMethod = keyof typeof HTTP_METHOD

export type FetcherParams = {
  method: HttpMethod
  url: `/${string}`
  customOptions?: RequestInit
}

export type AppTheme = keyof typeof APP_THEME

export type SvgComponentProps = {
  svgTitle?: string
  svgDescription?: string
}
