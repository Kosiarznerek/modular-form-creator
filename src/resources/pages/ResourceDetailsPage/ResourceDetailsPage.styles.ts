import styled from 'styled-components'

export const Identity = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  margin: -4px 0 35px;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const IdentityPrimary = styled.div`
  display: flex;
  grid-column: 1 / -1;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;

  @media (min-width: 761px) {
    grid-column: auto;
  }
`

export const IdentityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`

export const SummaryLabel = styled.span`
  color: #7a8980;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.1px;
`

export const ResourceName = styled.h2`
  color: ${({ theme }) => theme.colors.inkStrong};
  font: 600 19px ${({ theme }) => theme.typography.heading};
`

export const ResourceId = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 11px;
`

export const DateValue = styled.strong`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 13px;
`

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;

  @media (max-width: 1000px) {
    gap: 28px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`
