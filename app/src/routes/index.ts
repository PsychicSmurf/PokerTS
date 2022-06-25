import express, { Request, Response } from 'express'
// import express from 'express'
const router = express.Router()

router.get('/user', function (req: Request, res: Response) {
  const data = {
    name: 'john',
    completed: true
  }
  res.status(200).json(data);

})

export default router
