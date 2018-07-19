// @flow

import * as db from './db.js'

describe('get()', () => {
  it('should return all 12 desserts', () => {
    const desserts = db.get()

    expect(desserts).toBeDefined()
    expect(desserts.length).toBe(12)
  })
})

describe('find()', () => {
  it('should return cookies for type search', () => {
    const desserts = db.find('type', /COOKIE/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBeGreaterThan(0)
    desserts.forEach(dessert => expect(dessert.type === 'COOKIE'))
  })

  it('should return ice creams for type search', () => {
    const desserts = db.find('type', /ICE_CREAM/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBeGreaterThan(0)
    desserts.forEach(dessert => expect(dessert.type === 'ICE_CREAM'))
  })

  it('should return cake for type search', () => {
    const desserts = db.find('type', /CAKE/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBeGreaterThan(0)
    desserts.forEach(dessert => expect(dessert.type === 'CAKE'))
  })

  it('should return 0 for bad type search', () => {
    const desserts = db.find('type', /blah blah/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBe(0)
  })

  it('should return all gluten free desserts', () => {
    const desserts = db.find('isGlutenFree', /true/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBeGreaterThan(0)
    desserts.forEach(dessert => expect(dessert.isGlutenFree))
  })

  it('should return no gluten free desserts', () => {
    const desserts = db.find('isGlutenFree', /false/)

    expect(desserts).toBeDefined()
    expect(desserts.length).toBeGreaterThan(0)
    desserts.forEach(dessert => expect(dessert.isGlutenFree))
  })
})
