// @flow

import * as request from './request.js'
import * as db from './db.js'
import storeDesserts from './store-desserts.js'

it('should call request.get() and db.save() 4 times each', () => {
  const requestGetSpy = jest.spyOn(request, 'get')
  const dbSaveSpy = jest.spyOn(db, 'save')
  const consoleLogSpy = jest.spyOn(console, 'log')

  storeDesserts()

  expect(requestGetSpy.mock.calls.length).toBe(4)
  expect(dbSaveSpy.mock.calls.length).toBe(4)
  expect(consoleLogSpy.mock.calls.length).toBe(1)
})
