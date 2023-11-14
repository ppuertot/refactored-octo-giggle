import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import { router } from "./src/router";

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server.");
});

app.use("/router", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
