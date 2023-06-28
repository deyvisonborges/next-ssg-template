import { createGlobalStyle } from 'styled-components'

export const NormalizeStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body, #root {
    height: 100%;
    min-height: -webkit-fill-available; 
  }

  body {
    max-height: 100vh;

    /* Safari iOS bugfix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      max-height: -webkit-fill-available;
    }
  }
`
