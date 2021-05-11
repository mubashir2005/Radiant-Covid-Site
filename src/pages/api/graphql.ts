import { ApolloServer } from "apollo-server-micro";
import resolvers from "../../server/resolvers/resolvers";
import typeDefs from "../../server/typeDefs/typeDefs";
import { createRateLimitDirective } from "graphql-rate-limit";

const rateLimitDirective = createRateLimitDirective({
  identifyContext: (ctx) => ctx.id,
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    rateLimit: rateLimitDirective,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
