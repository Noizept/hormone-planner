import express, { Request, Response } from "express";
import passport from "passport";

let router = express.Router();

router.get("/facebook", (req: Request, res: Response) => {
  res.json({ message: "fdfddf" });
});

export default router;
