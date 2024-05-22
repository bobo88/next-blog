import axios from 'axios'

const api = axios.create({
  baseURL: '',
  timeout: 1000
})

export const fetchData = async () => {
  const response = await api.get('/api/index/weather')
  return response.data
}
