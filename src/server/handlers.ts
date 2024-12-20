import { mockedLawCases } from '@mocks/lawcases'
import { http, HttpResponse } from 'msw'

const getLawCaseList = () => {
  return HttpResponse.json(mockedLawCases)
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

export const handlers = [http.get('/api/posts', getLawCaseList), http.get(`/api/posts/$:id`, getLawCaseDetail)]
