import service from '../utils/request'

export function testAPI (data) {
  return service({
    url: '/test',
    method: 'get',
    data: data
  })
}
