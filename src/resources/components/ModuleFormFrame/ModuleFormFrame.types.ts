import type { ReactNode } from 'react'
import type { Resource } from '../../types/Resource'

export type ModuleFormFrameProps = {
  resource: Resource
  module: string
  step: string
  children: ReactNode
}
