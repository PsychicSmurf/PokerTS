import { Request, Response, NextFunction } from 'express';

const dotenv = require('dotenv');
const path = require("path")
dotenv.config({ path: path.join(process.cwd(), ".env") })
const port = parseInt(process.env.PORT, 10) || 3000;

const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
