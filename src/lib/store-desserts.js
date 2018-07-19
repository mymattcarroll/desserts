// @flow

import * as request from './request.js'
import * as db from './db.js'

//
// STEP 2
// Write a script/class that given 4 urls, it will send a request to each one of them and store the result in the database
//

// Im assuming from the way this step is worded that I am
// suppose to hard code the urls in this file.

const urls = [
  'http://site1.com/path',
  'http://site2.com/path',
  'http://site3.com/path',
  'http://test.com/path'
]

export default function storeDesserts() {
  urls.forEach(url => {
    const dessert = request.get(url)

    // Validate the result before saving in the database
    if (dessert) {
      db.save(dessert)

      //
      // STEP 3
      // Now, if a given url is in the `test.com` domain, also print the results to `stdout`. Eg:
      //
      if (url.includes('test.com')) {
        console.log(`Result from "${url}"`, dessert)
      }
    }
  })
}
