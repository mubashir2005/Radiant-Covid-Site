import { debounce, DebouncedFunc } from "lodash";
import { useCallback, useEffect } from "react";
import { ApolloError, useLazyQuery } from "@apollo/client";
import { GET_TWEETS } from "../apollo-client/queries";
import updateTweets from "../utils/update-tweets";
import { useRecoilState } from "recoil";
import tweetsState from "../atoms/tweets";

interface Output {
  searchTweets: DebouncedFunc<() => void>;
  data: any;
  error: ApolloError | undefined;
  loading: boolean;
}

const useSearchTweets = (
  query: string,
  lastTweet?: boolean,
  wait?: number
): Output => {
  const [getTweets, { data, error, loading }] = useLazyQuery(GET_TWEETS);
  const [tweets, setTweets] = useRecoilState(tweetsState);

  const searchTweets = useCallback(
    debounce(() => {
      const lastTweetId = tweets.tweets.length
        ? tweets.tweets[tweets.tweets.length - 1].id
        : undefined;
      console.log("lmao", lastTweetId);

      getTweets({
        variables: {
          tweet: {
            query,
            lastTweet: lastTweet ? lastTweetId : undefined,
          },
        },
      });
    }, wait || 200),
    [query, lastTweet, tweets]
  );

  useEffect(() => {
    const usePreviousTweets = lastTweet ? tweets : undefined;
    updateTweets(setTweets, data, error, loading, usePreviousTweets);
  }, [data, error, loading]);

  return {
    searchTweets,
    data,
    error,
    loading,
  };
};

export default useSearchTweets;
