import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/pages/App/App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './components/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
