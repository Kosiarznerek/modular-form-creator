import styled from 'styled-components'

export const Progress = styled.div`
  display: flex;
  min-width: 130px;
  align-items: center;
  gap: 4px;
`

export const Segment = styled.span`
  width: 28px;
  height: 5px;
  border-radius: 3px;
  background: #e3e8e2;

  &[data-complete='true'] {
    background: #5a9475;
  }
`

export const Copy = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 11px;
`
