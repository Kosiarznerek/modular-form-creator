import type { ModuleFormFrameProps } from './ModuleFormFrame.types'
import { StatusTag } from '../StatusTag/StatusTag'
import { Frame, Meta, ModuleTitle, ResourceName, Title } from './ModuleFormFrame.styles'

export function ModuleFormFrame({
  resource,
  module,
  step,
  children,
}: ModuleFormFrameProps) {
  return (
    <Frame>
      <Meta>
        <span>{step}</span>
        <span>
          <StatusTag status={resource.status} />
        </span>
      </Meta>
      <ModuleTitle>
        <Title>{module}</Title>
        <ResourceName>Resource: {resource.name}</ResourceName>
      </ModuleTitle>
      {children}
    </Frame>
  )
}
