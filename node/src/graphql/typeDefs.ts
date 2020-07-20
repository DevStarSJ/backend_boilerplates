import {gql} from 'apollo-server';

const typeDefs = gql`
  type Query { users: [User] }
  type User { id: ID, username: String, password: String, createdAt: String, updatedAt: String }
`;

export default typeDefs;
