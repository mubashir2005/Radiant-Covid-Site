import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${typeof window !== "undefined" && window.location.origin}/api/graphql`,
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

export default client;
