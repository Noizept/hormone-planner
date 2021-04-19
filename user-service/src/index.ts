import { initConnection } from "./database/connection";
import startServer from "./server";

initConnection().then(() => {
  console.log("Database Connected");
  startServer();
});
