import { Request, Response } from 'express'

const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.join(process.cwd(), '.env') })
const port = parseInt(process.env.PORT, 10) || 3000

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

module.exports = server
