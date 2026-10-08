import { isBasicInfoComplete } from '../../rules/isBasicInfoComplete'
import { isProjectDetailsComplete } from '../../rules/isProjectDetailsComplete'
import type { ModuleProgressProps } from './ModuleProgress.types'
import { Copy, Progress, Segment } from './ModuleProgress.styles'

export function ModuleProgress({ resource }: ModuleProgressProps) {
  const basicComplete = isBasicInfoComplete(resource.basicInfo)
  const projectComplete = isProjectDetailsComplete(resource.projectDetails)
  const completeCount = Number(basicComplete) + Number(projectComplete)
  return (
    <Progress aria-label={`${completeCount} of 2 modules complete`}>
      <Segment data-complete={basicComplete} />
      <Segment data-complete={projectComplete} />
      <Copy>{completeCount}/2 modules</Copy>
    </Progress>
  )
}
