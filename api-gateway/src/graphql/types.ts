import { gql } from "apollo-server-express";
import hormoneTypes from "./hormones/types";

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

export default [root, hormoneTypes];
