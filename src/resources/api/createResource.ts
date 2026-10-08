import type { Resource } from '../types/Resource'
import { request } from './request'

export function createResource(resourceName: string) {
  return request<Resource>('/resources', {
    method: 'POST',
    body: JSON.stringify({ resourceName }),
  })
}
