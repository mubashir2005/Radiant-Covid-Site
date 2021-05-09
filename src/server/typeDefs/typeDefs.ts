import { gql } from "apollo-server-micro";

const typeDefs = gql`
  scalar JSON

  type Query {
    hi: String!
    tweets(input: TweetsInput!): [Tweet]!
  }

  type Url {
    url: String!
    expanded_url: String
    display_url: String
    indices: [Int]!
  }

  type Entities {
    hashtags: [String]!
    symbols: [String]!
    user_mentions: [String]!
    urls: [Url]!
  }

  type User {
    name: String!
    screen_name: String!
    profile_image_url: String!
  }

  type Tweet {
    created_at: String!
    id: ID!
    text: String!
    truncated: Boolean!
    entities: Entities
    favorite_count: Int!
    retweet_count: Int!
    user: User
  }

  input TweetsInput {
    query: String!
    lastTweet: ID
  }
`;

export default typeDefs;
