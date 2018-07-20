// @flow

import * as React from 'react'

import * as db from '../lib/db.js'
import DessertsTable from './DessertsTable.js'
import DessertsSearch from './DessertsSearch.js'

type State = {
  desserts: RequestReturnObject[]
}

class App extends React.Component<{}, State> {
  state = {
    desserts: []
  }

  handleSearchChange = (search: string) => {
    const desserts = db.find('name', new RegExp(search, 'i'))
    this.setState({
      desserts
    })
  }

  render() {
    return [
      <DessertsSearch key="search" onChange={this.handleSearchChange} />,
      <DessertsTable key="table" desserts={this.state.desserts} />
    ]
  }
}

export default App
