import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'http://210.46.141.35:8888', // api 的 base_url
  timeout: 30000,
  headers: {
    'Content-type': 'application/json;charset=UTF-8'
  }
})

export default service
