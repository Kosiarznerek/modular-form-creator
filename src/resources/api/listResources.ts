import type { ResourceListResponse } from '../types/ResourceListResponse'
import type { ResourceListParams } from '../types/ResourceListParams'
import { request } from './request'

export function listResources(params: ResourceListParams) {
  const search = new URLSearchParams({
    page: String(params.page),
    pageSize: String(params.pageSize),
    sortOrder: 'desc',
  })
  if (params.status) {
    search.set('status', params.status)
  }
  if (params.name) {
    search.set('name', params.name)
  }
  return request<ResourceListResponse>(`/resources?${search}`)
}
