import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin-template/controller/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-admin-template/controller/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-admin-template/controller/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-admin-template/controller/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-admin-template/controller/update',
    method: 'post',
    data
  })
}
