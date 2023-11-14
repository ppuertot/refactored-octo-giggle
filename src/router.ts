import express, { Request, Response, Router } from "express";

export const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + Router");
});
