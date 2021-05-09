import { ApolloError } from "@apollo/client";
import { TweetsState } from "../atoms/tweets";

const updateTweets = (
  setTweets: (arg: any) => void,
  data: any,
  error: ApolloError | undefined,
  loading: boolean,
  tweets?: TweetsState
) => {
  if (tweets) {
    if (loading)
      setTweets({
        tweets: tweets.tweets,
        loading: loading,
        error: null,
      });

    if (error)
      setTweets({
        tweets: tweets.tweets,
        loading: false,
        error: error,
      });

    if (data?.tweets)
      setTweets({
        tweets: [...tweets.tweets, ...data?.tweets],
        loading: false,
        error: null,
      });

    return;
  }

  if (loading)
    setTweets({
      tweets: [],
      loading: loading,
      error: null,
    });

  if (error) {
    setTweets({
      tweets: [],
      loading: false,
      // @ts-ignore
      error: error,
    });
  }

  if (data?.tweets)
    setTweets({
      tweets: data.tweets,
      loading: false,
      error: null,
    });
};

export default updateTweets;
