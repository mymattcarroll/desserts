// @flow

//
// STEP 8
// now write a search component that allows a user to search for records in the db/file.
//

import * as React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

type Props = {
  onChange: (string) => void
}

function DessertsSearch({ onChange }: Props) {
  return (
    <FormGroup controlId="dessertsSearch">
      <FormControl
        type="text"
        placeholder="Search for desserts based on Name"
        onChange={e => onChange(e.target.value)}
      />
    </FormGroup>
  )
}

export default DessertsSearch
