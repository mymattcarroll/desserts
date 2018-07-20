// @flow

//
// STEP 8
// now write a search component that allows a user to search for records in the db/file.
//

import * as React from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

import withValidation from './withValidation.js'

type Props = {
  onChange: string => void,
  validationState: 'error' | 'warning' | 'success' | null
}

function DessertsSearch({ onChange, validationState }: Props) {
  return (
    <FormGroup controlId="dessertsSearch" validationState={validationState}>
      <ControlLabel>Enter search below to display desserts</ControlLabel>
      <FormControl
        type="text"
        placeholder="Search for desserts based on Name"
        onChange={e => onChange(e.target.value)}
      />
      <FormControl.Feedback />
      {validationState === 'warning' || validationState === 'error' ? (
        <HelpBlock>Please enter more characters.</HelpBlock>
      ) : null}
    </FormGroup>
  )
}

export default withValidation(DessertsSearch)
