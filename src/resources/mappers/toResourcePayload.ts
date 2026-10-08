import type { Resource } from '../types/Resource'
import type { ResourcePayload } from '../types/ResourcePayload'

export function toResourcePayload(resource: Resource): ResourcePayload {
  return {
    name: resource.name,
    basicInfo: resource.basicInfo,
    projectDetails: resource.projectDetails,
  }
}
