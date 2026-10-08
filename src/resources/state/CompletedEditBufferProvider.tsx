import { useState } from 'react'
import { CompletedEditBufferContext } from './completedEditBufferContext'
import type { ResourcePayload } from '../types/ResourcePayload'
import type { CompletedEditBufferProviderProps } from './CompletedEditBufferProviderProps.types'

export function CompletedEditBufferProvider({
  children,
}: CompletedEditBufferProviderProps) {
  const [edits, setEdits] = useState<Record<string, ResourcePayload>>({})
  const stage = (resourceId: string, payload: ResourcePayload) =>
    setEdits((current) => ({ ...current, [resourceId]: payload }))
  const clear = (resourceId: string) =>
    setEdits((current) => {
      const next = { ...current }
      delete next[resourceId]
      return next
    })

  return (
    <CompletedEditBufferContext.Provider value={{ edits, stage, clear }}>
      {children}
    </CompletedEditBufferContext.Provider>
  )
}
