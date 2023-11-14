import express, { Request, Response, Router } from "express";
import { test01 } from "./database";

export const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const rows = await test01();
  res.json(rows);
});
