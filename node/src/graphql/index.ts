import {ApolloServer} from 'apollo-server-express';

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export {
  resolvers,
  typeDefs,
  apolloServer
}
