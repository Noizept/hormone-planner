import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import verifyJwt from "./auth";
import formatErrors from "./formatGraphErrors";
import resolvers from "../graphql/resolvers";
import defs from "../graphql/types";

const startServer = () => {
  const app: Express = express();
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    context: (a) => a,
    formatError: formatErrors,
    resolvers: resolvers,
    typeDefs: defs,
  });

  // app.use(verifyJwt);

  // app.use((error: any, req: any, res: any, next: any) => {
  //   return res.status(500).json({ error: error.toString() });
  // });

  apolloServer.applyMiddleware({
    app,
    cors: false,
    path: "/graphql",
  });

  app.listen(7000, () => {
    console.log("Aki");
  });
};

export default startServer;
