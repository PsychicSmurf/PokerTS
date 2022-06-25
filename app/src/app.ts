// import { Request, Response } from 'express'

// import dotenv = require('dotenv')
// import * as dotenv from 'dotenv'
// import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
// dotenv.config({ path: path.join(process.cwd(), '.env') })
// const port = parseInt(process.env.PORT ?? '3000', 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
// })

export default app
