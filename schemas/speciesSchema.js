import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    speciess: [Species]
  }

  type Species {
    id: ID
    speciesName: String
    category: Category
  }
`;
