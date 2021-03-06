import { api } from '@/config/api'

const RESOURCE_ENDPOINT = '/books'

export const bookService = {
  list: () => api.get(RESOURCE_ENDPOINT),
  getById: id => api.get(`${RESOURCE_ENDPOINT}/${id}`)
}
