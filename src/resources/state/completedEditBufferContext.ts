import { createContext } from 'react'
import type { CompletedEditBufferValue } from './CompletedEditBufferValue.types'

export const CompletedEditBufferContext = createContext<CompletedEditBufferValue | null>(
  null,
)
