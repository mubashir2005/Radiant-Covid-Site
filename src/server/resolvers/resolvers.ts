import Twitter from "../../twitter";
import GraphQLJSON from "graphql-type-json";
import { Tweet, TweetsInput } from "../typeDefs/typescript-types";


interface ResponseTweet extends Tweet {
  id_str: string;
}

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    hi: () => "Hello world.",
    tweets: async (_req: any, { input }: { input: TweetsInput }) => {
      const { query, lastTweet } = input;

      interface Response {
        data: {
          statuses: ResponseTweet[];
        };
      }

      try {
        const {
          data: { statuses: tweets },
        }: Response = (await Twitter.get("/search/tweets", {
          q: query,
          count: 20,
          since_id: lastTweet || undefined,
        })) as Response;

        return tweets.map((tweet) => ({ ...tweet, id: tweet.id_str }));
      } catch (error) {
        console.log(error);
        throw new Error("We encountered an error while getting tweets.");
      }
    },
  },
};

export default resolvers;
