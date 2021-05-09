import { atom } from "recoil";
import { GetTweet } from "../server/typeDefs/typescript-types";

const tweetsState = atom<{
  tweets: GetTweet[];
  loading: boolean;
  error: Error | null;
}>({
  key: "tweets",
  default: {
    tweets: [],
    loading: false,
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
