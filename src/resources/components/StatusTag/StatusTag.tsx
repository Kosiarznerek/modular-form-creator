import type { StatusTagProps } from './StatusTag.types'
import { Badge } from '../../../design-system/components/Badge'

export function StatusTag({ status }: StatusTagProps) {
  return <Badge variant={status === 'completed' ? 'success' : 'warning'}>{status}</Badge>
}
