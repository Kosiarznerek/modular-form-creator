import styled from 'styled-components'

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 20px;
  padding: 0 22px 23px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding-right: 15px;
    padding-left: 15px;
  }
`

export const FullWidthField = styled.div`
  grid-column: 1 / -1;

  @media (max-width: 500px) {
    grid-column: auto;
  }
`

export const FullWidthFieldSet = styled.fieldset`
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  grid-column: 1 / -1;

  @media (max-width: 500px) {
    grid-column: auto;
  }
`

export const FormActions = styled.div`
  display: flex;
  grid-column: 1 / -1;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
  padding-top: 17px;
  border-top: 1px solid #e7ebe6;

  @media (max-width: 500px) {
    flex-wrap: wrap;

    & > * {
      flex: 1;
    }
  }
`
