import type { ReactNode } from 'react'

export type NoticeProps = {
  children: ReactNode
  kind?: 'error' | 'success'
}
