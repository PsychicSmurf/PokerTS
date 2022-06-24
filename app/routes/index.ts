import { Request, Response } from 'express'

const express = require('express')
const router = express.Router()

router.get('/user', function (req: Request, res: Response) {
  const data = {
    name: 'john',
    completed: true
  }
  res.status(200).json(data);
})

module.exports = router
