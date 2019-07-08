import service from '../utils/request'

export default function queryOne (params) {
  return service({
    url: '/news/one',
    method: 'get',
    params: params
  })
}
