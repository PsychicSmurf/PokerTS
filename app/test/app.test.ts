import { Request, Response } from 'express'
// const assert = require('assert');
// let express = require('express');
const request = require('supertest')
let server = require('../app')

afterEach(async () => {
  await server.close()
})

afterAll(async () => {
  // await new Promise(resolve => setTimeout(() => resolve(0), 5000)); // avoid jest open handle error
})

beforeEach(() => {
  server = require('../app')
})

describe('GET /user', () => {
  jest.setTimeout(5000)
  test('responds with json', async () => {
    const result = await request(server).get('/user')

    expect(result.statusCode).toEqual(200)
    expect(result.headers['content-type']).toEqual('application/json; charset=utf-8')
    expect(result.body.name).toEqual('john')
    expect(result.body.completed).toEqual(true)
  })
})
