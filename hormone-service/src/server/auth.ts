import express, { Request, Response, NextFunction } from "express";
import jwt from "express-jwt";
import jwks from "jwks-rsa";

export default jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-40zn7o28.eu.auth0.com/.well-known/jwks.json",
  }),
  issuer: "https://dev-40zn7o28.eu.auth0.com/",
  algorithms: ["RS256"],
});
