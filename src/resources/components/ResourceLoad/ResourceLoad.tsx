import { Notice } from '../../../shared/components/Notice/Notice'
import type { ResourceLoadProps } from './ResourceLoad.types'
import { LoadingState } from './ResourceLoad.styles'

export function ResourceLoad({ loading, error }: ResourceLoadProps) {
  if (loading) {
    return <LoadingState>Loading resource…</LoadingState>
  }
  if (error) {
    return <Notice>{error}</Notice>
  }
  return null
}
