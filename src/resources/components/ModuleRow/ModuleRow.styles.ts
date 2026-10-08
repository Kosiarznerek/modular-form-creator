import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Row = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(160px, 1fr) 130px 150px;
  align-items: center;
  gap: 16px;
  min-height: 91px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &[data-locked='true'] {
    opacity: 0.68;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 32px minmax(140px, 1fr) 105px 140px;
    gap: 12px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 28px minmax(0, 1fr) auto;
    gap: 10px;
    padding: 14px 0;
  }
`

export const Number = styled.span`
  color: #9ca99f;
  font: 500 13px ${({ theme }) => theme.typography.heading};
`

export const Copy = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.inkStrong};
    font: 600 16px ${({ theme }) => theme.typography.heading};
  }

  p {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 12px;
  }

  @media (max-width: 760px) {
    p {
      max-width: 260px;
    }
  }
`

export const State = styled.span`
  color: #8a7851;
  font-size: 11px;
  font-weight: 700;

  &[data-complete='true'] {
    color: #39714f;
  }

  @media (max-width: 760px) {
    grid-column: 2;
  }
`

export const ActionLink = styled(Link)`
  justify-self: end;
  padding: 5px 7px;
  color: ${({ theme }) => theme.colors.primaryStrong};
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #bd583c;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
`

export const LockedHint = styled.span`
  color: #8f9991;
  font-size: 11px;
  text-align: right;

  @media (max-width: 760px) {
    grid-column: 3;
    grid-row: 1 / span 2;
    max-width: 100px;
  }
`
