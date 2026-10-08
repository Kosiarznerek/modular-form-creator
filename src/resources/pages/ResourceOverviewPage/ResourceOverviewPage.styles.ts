import styled from 'styled-components'

export const ResourceOverviewRoot = styled.div`
  .overview-summary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: -5px 0 42px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    background: rgb(255 255 255 / 55%);
  }

  .overview-summary > div {
    display: flex;
    min-height: 76px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }

  .overview-summary > div:last-child {
    border-right: 0;
  }

  .summary-label {
    color: #7a8980;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.1px;
  }

  .overview-summary strong {
    color: ${({ theme }) => theme.colors.inkStrong};
    font: 600 14px ${({ theme }) => theme.typography.heading};
  }

  .summary-muted {
    color: #94a098;
    font-weight: 400;
  }

  .section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 13px;
  }

  .section-heading h2 {
    margin-top: 5px;
    font: 600 20px ${({ theme }) => theme.typography.heading};
  }

  .section-caption {
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 12px;
  }

  .module-list {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  .provision-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 37px;
    padding: 22px 24px;
    border: 1px solid #e2e6df;
    border-left: 4px solid #c4cdc4;
    background: #f9faf7;

    &.is-ready {
      border-left-color: #c9e49b;
      background: #f7faef;
    }
  }

  .provision-copy h2 {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.inkStrong};
    font: 600 17px ${({ theme }) => theme.typography.heading};
  }

  .provision-copy p {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 12px;
  }

  .completed-stamp {
    color: #33704e;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.2px;
  }

  @media (max-width: 760px) {
    .overview-summary {
      grid-template-columns: 1fr;
      margin-bottom: 31px;
    }

    .overview-summary > div {
      min-height: 58px;
      border-right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    .overview-summary > div:last-child {
      border-bottom: 0;
    }

    .provision-panel {
      align-items: flex-start;
      flex-direction: column;
      padding: 19px;
    }

    .section-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 5px;
    }
  }
`
