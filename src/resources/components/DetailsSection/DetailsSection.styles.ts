import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  min-width: 0;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inkStrong};
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.inkStrong};
  font: 600 17px ${({ theme }) => theme.typography.heading};
`

export const EditLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryStrong};
  font-size: 12px;
  font-weight: 700;

  &:hover {
    color: #bd583c;
    text-decoration: underline;
  }
`

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 22px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
