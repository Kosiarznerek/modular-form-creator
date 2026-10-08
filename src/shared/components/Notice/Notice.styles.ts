import styled from 'styled-components'
import type { NoticeStyleProps } from './NoticeStyleProps.types'

export const NoticeContainer = styled.div<NoticeStyleProps>`
  margin: 0 0 19px;
  padding: 12px 14px;
  border-left: 3px solid ${({ $kind }) => ($kind === 'success' ? '#5a9475' : '#bd583c')};
  color: ${({ $kind }) => ($kind === 'success' ? '#315c43' : '#733e31')};
  background: ${({ $kind }) => ($kind === 'success' ? '#eaf3e9' : '#fbede8')};
  font-size: 13px;
`
