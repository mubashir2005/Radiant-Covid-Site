import { ApolloServer } from "apollo-server-micro";
import resolvers from "../../server/resolvers/resolvers";
import typeDefs from "../../server/typeDefs/typeDefs";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
