import type { Resource } from '../types/Resource'
import { request } from './request'

export function getResource(id: string) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}`)
}
