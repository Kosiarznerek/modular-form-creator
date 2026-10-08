import type { Resource } from '../types/Resource'
import { request } from './request'

export function provisionResource(id: string) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}/provisioning`, {
    method: 'PATCH',
  })
}
