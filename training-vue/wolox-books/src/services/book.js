import { api } from '@/config/api'

import { localStorageService } from './localStorage'

const RESOURCE_ENDPOINT = '/books'

export const bookService = { list: () =>
  api.get(RESOURCE_ENDPOINT, null, {
    headers: { Authorization: localStorageService.getToken() }
  }) }
