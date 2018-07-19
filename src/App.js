// @flow

//
// STEP 5
// using Create React App build a react application and update the UI using bootstrap
//

import * as React from 'react'
import { Button, Grid, Jumbotron, Navbar } from 'react-bootstrap'

class App extends React.Component<{}> {
  render() {
    return [
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Home</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>,
      <Grid fluid={false}>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Grid>
    ]
  }
}

export default App
