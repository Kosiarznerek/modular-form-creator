import type { Resource } from '../types/Resource'
import { request } from './request'

export function deleteResource(id: string) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  })
}
