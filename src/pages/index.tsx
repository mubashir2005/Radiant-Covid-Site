import Header from "../components/Header/Header";
import App from "../components/App/App";
import { COVID_19_INDIA } from "../constants";
import { GetTweet } from "../server/typeDefs/typescript-types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import queryState from "../atoms/query";
import filtersState from "../atoms/filters";
import tweetsState from "../atoms/tweets";
import useSearchTweets from "../hooks/useSearchTweets";

interface Props {
  tweets: GetTweet[];
}

export default function Home({ tweets }: Props) {
  const [query] = useRecoilState(queryState);
  const [filters] = useRecoilState(filtersState);
  const [_tweets, setTweets] = useRecoilState(tweetsState);
  const { searchTweets } = useSearchTweets(query);

  useEffect(() => {
    if (query === COVID_19_INDIA && !filters.length && tweets.length) {
      setTweets({
        tweets: tweets,
        loading: false,
        error: null,
      });
      return;
    }

    searchTweets();
  }, [query, filters, tweets]);


  return (
    <>
      <Header />
      <main>
        <App />
      </main>
    </>
  );
}

