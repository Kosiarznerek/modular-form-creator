import type { BasicInfo } from './BasicInfo'
import type { ProjectDetails } from './ProjectDetails'

export type ResourcePayload = {
  name: string
  basicInfo: BasicInfo
  projectDetails: ProjectDetails
}
