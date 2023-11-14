import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import logger from "morgan";
import { router as router1 } from "./src/router";

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server.");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/router", router1);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
