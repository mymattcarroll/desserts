// @flow

//
// STEP 5
// using Create React App build a react application and update the UI using bootstrap
//

import * as React from 'react'
import { Grid, Navbar } from 'react-bootstrap'

import DessertsTableContainer from './components/DessertsTableContainer.js'

class App extends React.Component<{}> {
  render() {
    return [
      <Navbar key="navbar" inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Desserts!</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>,
      <Grid key="content" fluid={false}>
        <DessertsTableContainer />
      </Grid>
    ]
  }
}

export default App
