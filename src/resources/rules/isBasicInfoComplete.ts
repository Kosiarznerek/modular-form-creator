import type { BasicInfo } from '../types/BasicInfo'

export function isBasicInfoComplete(value: BasicInfo) {
  return Boolean(
    value.resourceName.trim() &&
    value.owner.trim() &&
    value.email.trim() &&
    value.description.trim() &&
    value.priority.trim(),
  )
}
