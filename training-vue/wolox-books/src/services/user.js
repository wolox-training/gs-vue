import { api } from '@/config/api'

const RESOURCE_ENDPOINT = '/users'
const SESSIONS_ENDPOINT = '/sessions'

export const userService = {
  create: user => api.post(RESOURCE_ENDPOINT, user),
  sessions: {
    create: session => api.post(`${RESOURCE_ENDPOINT}${SESSIONS_ENDPOINT}`, session)
  }
}
