import { gql } from "@apollo/client/core";

export const GET_TWEETS = gql`
  query getTweets($tweet: TweetsInput!) {
    tweets(input: $tweet) {
      id
    }
  }
`;
