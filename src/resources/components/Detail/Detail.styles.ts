import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e7e1;

  &[data-wide='true'] {
    grid-column: 1 / -1;

    @media (max-width: 500px) {
      grid-column: auto;
    }
  }
`

export const Label = styled.span`
  color: #7c8a81;
  font-size: 11px;
`

export const Value = styled.strong`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.inkStrong};
  font-size: 13px;
  font-weight: 600;
  white-space: pre-wrap;
`
