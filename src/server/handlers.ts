// import { delay } from '@libs/utils'
import { mockedLawCases } from '@mocks/lawcases'
import { mockedSearch } from '@mocks/search'
import { http, HttpResponse } from 'msw'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const getLawCaseList = () => {
  return HttpResponse.json(mockedLawCases)
}

const getSearchResult = async () => {
  // await delay(2000)
  return HttpResponse.json(mockedSearch)
}

const getLawCaseDetail = ({ params }: { params: { id: string } }) => {
  const lawCase = mockedLawCases.find(lawCase => lawCase.id === params.id)

  if (!lawCase) {
    return HttpResponse.json(null, {
      status: 404
    })
  }

  return HttpResponse.json(lawCase)
}

export const handlers = [
  http.get(`${baseUrl}/api/posts`, getLawCaseList),
  http.get(`${baseUrl}/api/posts/:id`, getLawCaseDetail),
  http.get(`${baseUrl}/api/`, getSearchResult)
]
