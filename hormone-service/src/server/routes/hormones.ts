import { Router, Request, Response, NextFunction } from "express";
import prisma from "../../../prisma/connection";

const router = Router();

router.get("/", async (req, res) => {
  console.log(req);
  try {
    const k = await prisma.hormones.findMany({
      include: {
        HormoneTrans: true,
      },
    });
    res.json(k);
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
