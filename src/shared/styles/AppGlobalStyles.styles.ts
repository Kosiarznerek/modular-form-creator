import { createGlobalStyle } from 'styled-components'

export const AppGlobalStyles = createGlobalStyle`
  :root {
    font: 15px/1.5 'Source Sans 3', 'Segoe UI', sans-serif;
    color: #1d302b;
    color-scheme: light;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --ink: #1d302b;
    --ink-soft: #53625c;
    --muted: #78847e;
    --line: #dce3dc;
    --surface: #ffffff;
    --surface-muted: #f5f7f3;
    --forest: #19483e;
    --forest-deep: #12362f;
    --lime: #c9e49b;
    --rust: #bd583c;
    --amber: #f0c56c;
    --shadow: 0 18px 50px -38px rgba(20, 50, 42, 0.38);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--ink);
    background: #f1f4ef;
    font-family: 'Source Sans 3', 'Segoe UI', sans-serif;
    font-size: 15px;
  }

  #root {
    min-height: 100vh;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    color: inherit;
  }

  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid rgba(189, 88, 60, 0.48);
    outline-offset: 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`
