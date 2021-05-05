import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import "./src/index";

process.on("SIGTERM", () => process.exit());
