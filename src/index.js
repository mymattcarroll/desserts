// @flow

import * as React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootContainer = document.getElementById('root')

if (rootContainer) {
  ReactDOM.render(<App />, rootContainer)
  registerServiceWorker()
}
