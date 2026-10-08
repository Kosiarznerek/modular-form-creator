import { useContext } from 'react'
import { CompletedEditBufferContext } from '../state/completedEditBufferContext'

export function useCompletedEditBuffer() {
  const value = useContext(CompletedEditBufferContext)
  if (!value) {
    throw new Error('CompletedEditBufferProvider is missing')
  }
  return value
}
