import axios from 'axios'

export const key = 'a9114596a0a136a3c3695d5b0cd31e897b4d0b9b'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    Authorization: `Bearer ${key}`,
  },
})

export default api

//  my token a9114596a0a136a3c3695d5b0cd31e897b4d0b9b
