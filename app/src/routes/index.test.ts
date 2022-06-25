import { jest, describe, expect, test } from '@jest/globals'
import request from 'supertest'
import app from '../app'

describe('GET /user', () => {
  jest.setTimeout(5000)
  test('responds with json', async () => {
    const result = await request(app).get('/user')

    expect(result.statusCode).toEqual(200)
    expect(result.headers['content-type']).toEqual('application/json; charset=utf-8')
    expect(result.body.name).toEqual('john')
    expect(result.body.completed).toEqual(true)
  })
})

export { }
