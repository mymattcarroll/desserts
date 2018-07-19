// @flow

import * as React from 'react'

import * as db from '../lib/db.js'
import DessertsTable from './DessertsTable.js'

type State = {
  desserts: RequestReturnObject[]
}

class App extends React.Component<{}, State> {
  state = {
    desserts: db.get()
  }

  render() {
    return <DessertsTable desserts={this.state.desserts} />
  }
}

export default App
