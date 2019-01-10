import { create } from 'apisauce'

const API_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1'

export const api = create({
  baseURL: API_URL
})
