import styled from 'styled-components'
import { Card } from '../../../design-system/components/Card'

export const Frame = styled(Card).attrs({ as: 'section' })`
  gap: 0;
  padding: 0;
  border-radius: 0;
  box-shadow: ${({ theme }) => theme.shadows.card};

  & > [role='status'] {
    margin: 0 22px 18px;
  }
`

export const Meta = styled.div`
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border-bottom: 1px solid #e7ebe6;
  color: #7b8a80;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`

export const ModuleTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 23px 22px 19px;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  @media (max-width: 500px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.inkStrong};
  font: 600 18px ${({ theme }) => theme.typography.heading};
`

export const ResourceName = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 12px;
`
