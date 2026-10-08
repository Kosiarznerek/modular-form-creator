import styled from 'styled-components'

export const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 26px;
  }
`

export const Copy = styled.div``

export const Eyebrow = styled.div`
  color: #75877c;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.45px;
`

export const Title = styled.h1`
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.inkStrong};
  font: 600 32px/1.18 ${({ theme }) => theme.typography.heading};
  letter-spacing: 0;

  @media (max-width: 760px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 25px;
  }
`

export const Description = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 14px;
`

export const Action = styled.div`
  display: flex;
  flex: none;
  gap: 8px;

  @media (max-width: 760px) {
    width: 100%;
  }
`
