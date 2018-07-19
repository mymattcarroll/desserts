// @flow

import * as db from './db.js'

//
// STEP 4
// Write a function that will find all urls in the database that tried to set a cookie when requested. Eg: back to the `carsObject` example, if we had to find all cars that are not `awd` we could do:
//

export function findAllCookies() {
  return db.find('type', /COOKIE/)
}
