// @flow

//
// STEP 1
// Define a minimal set of properties available in the `RequestReturnObject`. Eg: if we had to define the minimal properties in a `carObject` they could look like this:
//

// Not really 100% sure on what this test/challenge is expecting
// this type to be, first thought was some sort of HTTP response
// type data with status code etc. Then thought it would be more
// fun to do desserts, and easier to cater for the "cookie" requirement.
// Hope I still get the job... :)

declare type RequestReturnObject = {
  id: number,
  type: 'COOKIE' | 'ICE_CREAM' | 'CAKE',
  name: string,
  isGlutenFree: boolean,
  numberOfIngredients: number
}

declare type RequestReturnObjectProperty =
  | 'id'
  | 'type'
  | 'name'
  | 'isGlutenFree'
  | 'numberOfIngredients'
