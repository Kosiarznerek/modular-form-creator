import type { ProjectDetails } from '../types/ProjectDetails'
import type { Resource } from '../types/Resource'
import { request } from './request'

export function updateProjectDetails(id: string, value: ProjectDetails) {
  return request<Resource>(`/resources/${encodeURIComponent(id)}/project-details`, {
    method: 'PATCH',
    body: JSON.stringify(value),
  })
}
