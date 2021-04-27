import React from 'react'
import { render } from 'react-dom'
import './style.css'
import ThemeProvider from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import Content from './Content'

const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}
const App = () => (
  <ThemeProvider>
    <main style={mainStyle}>
      <ThemeSwitcher />
      <Content />
    </main>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
