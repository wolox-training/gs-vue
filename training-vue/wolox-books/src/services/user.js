import { api } from '@/config/api'

const RESOURCE_ENDPOINT = '/users'

export const userService = {
  create: user => api.post(RESOURCE_ENDPOINT, user)
}
