import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ycy88.com/apis',
  timeout: 1000
})

export const fetchHotListData = async () => {
  const response = await api.get('/hot/all')
  console.log('🚀 ~ fetchHotListData ~ response:', response)
  return response.data
}

// export const fetchData = async () => {
//   const response = await api.get('/api/index/weather')
//   return response.data
// }
