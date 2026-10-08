import styled from 'styled-components'

export const ResourcesPageRoot = styled.div`
  .create-panel {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    align-items: end;
    gap: 16px;
    margin: -12px 0 24px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 3px solid #bd583c;
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.card};

    & > div:first-child {
      min-width: 0;
    }
  }

  .field-error {
    grid-column: 1 / -1;
    margin: 0;
    color: #a5412e;
    font-size: 12px;
  }

  .list-toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 13px;
  }

  .search-field {
    position: relative;
    display: flex;
    flex: 1;
    min-width: 190px;
    align-items: center;

    & > div {
      flex: 1;
      min-width: 0;
    }

    input {
      width: 100%;
      height: 40px;
      padding: 0 12px 0 36px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.inkStrong};
      background: ${({ theme }) => theme.colors.surface};
    }
  }

  .search-glyph {
    position: absolute;
    top: 4px;
    left: 12px;
    color: #87958c;
    font-size: 23px;
  }

  .filter-field select {
    width: auto;
    min-width: 150px;
    height: 40px;
    padding: 0 32px 0 11px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.inkStrong};
    background: ${({ theme }) => theme.colors.surface};
  }

  .results-count {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 12px;
    white-space: nowrap;
  }

  .table-wrap {
    overflow-x: auto;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  thead {
    background: #f6f8f5;
  }

  th {
    height: 42px;
    padding: 0 17px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    color: #718077;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  td {
    height: 72px;
    padding: 10px 17px;
    border-bottom: 1px solid #edf0ec;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 13px;
    white-space: nowrap;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  tbody tr:hover:not(:has(.empty-cell, .loading-cell)) {
    background: #fbfcfa;
  }

  .resource-link {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    color: inherit;
    text-decoration: none;
  }

  .resource-avatar {
    display: grid;
    width: 35px;
    height: 35px;
    flex: none;
    place-items: center;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primaryStrong};
    background: #e7efdf;
    font: 600 14px ${({ theme }) => theme.typography.heading};
  }

  .resource-link strong {
    display: block;
    max-width: 230px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.inkStrong};
    font-weight: 700;
    text-overflow: ellipsis;
  }

  .resource-link small {
    display: block;
    margin-top: 3px;
    color: #87928b;
    font-size: 10px;
    letter-spacing: 0.4px;
  }

  .date-cell {
    color: #718077;
  }

  .row-actions {
    text-align: right;
  }

  .delete-action {
    margin-left: 4px;
    padding: 5px 7px;
    border: 0;
    color: #8b6258;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;

    &:disabled {
      cursor: wait;
      opacity: 0.55;
    }
  }

  .table-action {
    padding: 5px 7px;
    color: ${({ theme }) => theme.colors.primaryStrong};
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: #bd583c;
      text-decoration: underline;
    }
  }

  .empty-cell,
  .loading-cell {
    height: 150px;
    text-align: center;
    white-space: normal;
  }

  .empty-cell strong,
  .empty-cell span {
    display: block;
  }

  .empty-cell strong {
    color: ${({ theme }) => theme.colors.inkStrong};
    font: 600 16px ${({ theme }) => theme.typography.heading};
  }

  .empty-cell span {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.inkMuted};
  }

  .loading-cell {
    color: ${({ theme }) => theme.colors.inkMuted};
  }

  .pagination-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.inkMuted};
    font-size: 12px;
  }

  .pagination-actions {
    display: flex;
    gap: 7px;
  }

  @media (max-width: 760px) {
    table {
      table-layout: fixed;
    }

    .create-panel {
      grid-template-columns: 1fr;
    }

    .list-toolbar {
      flex-wrap: wrap;
    }

    .search-field {
      flex-basis: 100%;
    }

    .filter-field select {
      width: 100%;
    }

    .results-count {
      margin-left: auto;
    }

    thead th:nth-child(1),
    tbody td:nth-child(1) {
      width: 36%;
    }

    thead th:nth-child(2),
    tbody td:nth-child(2) {
      width: 25%;
    }

    thead th:nth-child(3),
    tbody td:nth-child(3) {
      display: none;
    }

    thead th:nth-child(4),
    tbody td:nth-child(4) {
      width: 20%;
    }

    thead th:nth-child(5),
    tbody td:nth-child(5) {
      width: 19%;
    }

    th,
    td {
      overflow: hidden;
      padding: 6px;
      text-overflow: ellipsis;
    }

    .row-actions {
      min-width: 0;
      white-space: normal;
    }

    .row-actions .table-action,
    .row-actions .delete-action {
      display: block;
      margin: 0;
      padding: 3px 2px;
    }

    tbody td:nth-child(2) > div {
      min-width: 0;
    }

    tbody td:nth-child(2) > div > span:last-child {
      display: none;
    }

    tbody td:nth-child(2) > div > span:first-child,
    tbody td:nth-child(2) > div > span:nth-child(2) {
      width: 18px;
    }

    tbody td:nth-child(4) > span {
      padding: 2px 5px;
      font-size: 9px;
    }

    .empty-cell strong,
    .empty-cell span {
      max-width: 100%;
      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 500px) {
    .pagination-row {
      gap: 12px;
    }
  }
`
