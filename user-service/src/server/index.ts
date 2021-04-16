import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import Routes from "./routes";

const PORT = 7101;

const startServer = () => {
  const app = express();
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
    res.status(500).json({ message: err.message })
  );
  app.use(Routes);

  app.listen(PORT, "0.0.0.0", () => {
    console.log("Server Started");
  });
};
export default startServer;
