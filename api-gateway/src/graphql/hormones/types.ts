import { gql } from "apollo-server-express";

export default gql`
  enum HormoneType {
    ANABOLIC
    SARMS
    PEPTIDES
    HORMONE
  }
  enum Form {
    INJECTABLE
    ORAL
  }

  type HormoneTransl {
    id: ID!
    locale: String!
    hormonesId: String!
    title: String!
    description: String!
    doses: String
    sideEffects: String
    counterMedicine: String
  }

  type Hormone {
    id: ID!
    pictureUrl: String
    halfLife: Int!
    kind: HormoneType!
    form: Form!
    translation: [HormoneTransl]
  }
  extend type Query {
    allHormones: [Hormone]
    localeHormones(locale: String): [Hormone]
  }
`;
