import type { Resource } from './Resource'

export type ResourceListResponse = {
  items: Resource[]
  pagination: { page: number; pageSize: number; totalItems: number; totalPages: number }
}
