/** Some opinionated style resets for Zendesk products. Optional. */
import '@zendeskgarden/css-bedrock'

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { Chrome } from './components/chrome'

function App() {
  return (
    <ThemeProvider>
      <Chrome>Hello Worlds</Chrome>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
