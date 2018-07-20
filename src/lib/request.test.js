// @flow

import * as request from './request.js'

describe('get()', () => {
  it('should return a valid dessert', () => {
    const href = 'http://desserts.com/cookies/1'
    const chocChipCookie = request.get(href)
    expect(chocChipCookie).toEqual({
      id: 1,
      type: 'COOKIE',
      name: 'Choc-Chip Cookie',
      isGlutenFree: false,
      numberOfIngredients: 5
    })
  })
})
