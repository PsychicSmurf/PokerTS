import express from 'express'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

export default app
