import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    categories: [Category]
  }

  type Category {
    id: ID
    categoryName: String
  }
`;
