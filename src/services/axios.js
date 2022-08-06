import axios from 'axios'
import { API_URL, BASE_URL } from 'config'

export const mlapi = axios.create({
  baseURL: API_URL || 'https://api.mercadolibre.com/'
})

export const api = axios.create({
  baseURL: BASE_URL || 'http://localhost:3000/api/'
})
