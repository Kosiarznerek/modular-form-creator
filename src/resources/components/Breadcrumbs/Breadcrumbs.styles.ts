import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Trail = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: -10px 0 21px;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 12px;
`

export const Item = styled.span`
  display: inline-flex;
  gap: 9px;
`

export const Separator = styled.span`
  color: #b5beb7;
`

export const CrumbLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.primaryStrong};
    text-decoration: underline;
  }
`

export const CurrentItem = styled.span``
