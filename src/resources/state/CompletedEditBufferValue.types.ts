import type { ResourcePayload } from '../types/ResourcePayload'

export type CompletedEditBufferValue = {
  edits: Record<string, ResourcePayload>
  stage: (resourceId: string, payload: ResourcePayload) => void
  clear: (resourceId: string) => void
}
