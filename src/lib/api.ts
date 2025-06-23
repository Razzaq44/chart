import axios from 'axios'

const url = 'https://api.coingecko.com/api/v3/coins'

const api = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
  },
})

export default api
