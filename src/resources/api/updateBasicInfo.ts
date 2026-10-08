import type { BasicInfo } from '../types/BasicInfo'
import type { Resource } from '../types/Resource'
import { request } from './request'

export function updateBasicInfo(id: string, value: BasicInfo) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}/basic-info`, {
    method: 'PATCH',
    body: JSON.stringify(value),
  })
}
