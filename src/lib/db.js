// @flow

import desserts from './desserts.json'

export function save(dessert: RequestReturnObject) {
  // Do nothing for now...
}

//
// STEP 6
// create some json data either in a .json file, mongodb or firestore and use the apis you developed above to pull data from the database/file
//

export function get(): RequestReturnObject[] {
  // Do nothing for now...
  return desserts
}

export function find(
  attr: RequestReturnObjectProperty,
  what: RegExp
): RequestReturnObject[] {
  // Do nothing for now...
  return desserts.filter(desert => desert[attr].toString().match(what))
}
