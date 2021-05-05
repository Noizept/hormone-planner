import express, { Express } from "express";
import cors from "cors";
import hormones from "./routes/hormones";
import verifyJwt from "./auth";

const startServer = () => {
  const app: Express = express();
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  // app.use(verifyJwt);
  app.use("/hormones", hormones);

  app.use((error: any, req: any, res: any, next: any) => {
    return res.status(500).json({ error: error.toString() });
  });

  app.listen(7101, () => {
    console.log("up");
  });
};

export default startServer;
