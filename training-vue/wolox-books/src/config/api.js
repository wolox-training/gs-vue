import { create } from 'apisauce'
import { localStorageService } from '@/services/localStorage'

const API_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1'

const HEADER_CONTENT_TYPE = 'Content-Type'
const HEADER_AUTHORIZATION = 'Authorization'

const headers = {
  [HEADER_CONTENT_TYPE]: 'application/json',
  [HEADER_AUTHORIZATION]: localStorageService.getToken()
}

export const setAuthHeader = token =>
  api.setHeaders({
    ...headers,
    [HEADER_AUTHORIZATION]: token
  })

export const removeAuthHeader = () => api.deleteHeader(HEADER_AUTHORIZATION)

export const api = create({ baseURL: API_URL, headers })
