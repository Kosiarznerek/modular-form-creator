import type { ProjectDetails } from '../types/ProjectDetails'

export function isProjectDetailsComplete(value: ProjectDetails) {
  return Boolean(
    value.projectName.trim() &&
    value.budget.trim() &&
    value.category.trim() &&
    value.options.length,
  )
}
