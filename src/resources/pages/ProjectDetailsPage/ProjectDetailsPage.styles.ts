import styled from 'styled-components'

export const LockedPanel = styled.section`
  max-width: 620px;
  margin: 45px auto;
  padding: 30px;
  border-top: 3px solid #f0c56c;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
`

export const LockedNumber = styled.span`
  color: #b2bfaa;
  font: 600 12px ${({ theme }) => theme.typography.heading};
`

export const LockedTitle = styled.h2`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.inkStrong};
  font: 600 20px ${({ theme }) => theme.typography.heading};
`

export const LockedDescription = styled.p`
  margin: 8px 0 20px;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 13px;
`
