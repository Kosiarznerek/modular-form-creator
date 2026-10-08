import type { Resource } from '../types/Resource'
import type { ResourcePayload } from '../types/ResourcePayload'
import { request } from './request'

export function replaceResource(id: string, value: ResourcePayload) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify(value),
  })
}
