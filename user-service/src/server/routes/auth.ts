import express, { NextFunction, Request, Response } from "express";
import connection from "../../database/connection";
import { User } from "../../database/entities/User";

let router = express.Router();

router.get("/me", async (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "worked" });
});

export default router;
