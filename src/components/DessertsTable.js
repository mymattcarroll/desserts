// @flow

//
// STEP 7
// create a view in react that now displays data
//

import * as React from 'react'
import { Table } from 'react-bootstrap'

type Props = {
  desserts: RequestReturnObject[]
}

function DessertsTable({ desserts }: Props) {
  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Number of Ingredients</th>
          <th>Gluten Free</th>
        </tr>
      </thead>
      <tbody>
        {desserts.map((dessert, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{dessert.name}</td>
            <td>{dessert.numberOfIngredients}</td>
            <td>{dessert.isGlutenFree ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DessertsTable
