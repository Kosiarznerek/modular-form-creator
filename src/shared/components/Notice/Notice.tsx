import type { NoticeProps } from './Notice.types'
import { NoticeContainer } from './Notice.styles'

export function Notice({ children, kind = 'error' }: NoticeProps) {
  return (
    <NoticeContainer $kind={kind} role="status">
      {children}
    </NoticeContainer>
  )
}
