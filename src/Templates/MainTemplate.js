import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import theme from '../mainTheme.js'

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
)
export default MainTemplate