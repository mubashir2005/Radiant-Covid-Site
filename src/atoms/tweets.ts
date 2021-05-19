import { atom } from "recoil";
import { GetTweet } from "../server/typeDefs/typescript-types";

const initialTweets = [] as GetTweet[];

const tweetsState = atom<TweetsState>({
  key: "medical resources",
  default: {
    tweets: initialTweets,
    loading: true,
    error: null,
  },
});

interface TweetsState {
  tweets: GetTweet[];
  loading: boolean;
  error: Error | null;
}

export type { TweetsState };

export default tweetsState;
