import type { ResourcePayload } from './ResourcePayload'
import type { ResourceStatus } from './ResourceStatus'

export type Resource = ResourcePayload & {
  _id?: string
  resourceId: number
  status: ResourceStatus
  createdAt?: string
  updatedAt?: string
}
