import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const path = require("path")
dotenv.config({ path: path.join(process.cwd(), ".env") })

const app: Express = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
