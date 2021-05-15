import Header from "../components/Header/Header";
import App from "../components/App/App";
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

export default function Home() {
  const [query] = useRecoilState(queryState);
  const [filters] = useRecoilState(filtersState);
  const { searchTweets } = useSearchTweets(query);

  useEffect(() => {
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

