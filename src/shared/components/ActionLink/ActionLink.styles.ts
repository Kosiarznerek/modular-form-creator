import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ActionLinkRoot = styled(Link)`
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.inkMuted};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    border-color: #aab9ad;
    background: #f8faf7;
  }
`
