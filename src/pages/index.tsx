import Header from "../components/Header/Header";
import App from "../components/App/App";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import queryState from "../atoms/query";
import filtersState from "../atoms/filters";
import tweetsState from "../atoms/tweets";
import useSearchTweets from "../hooks/useSearchTweets";


export default function Home(){
  const [query] = useRecoilState(queryState);
  const [filters] = useRecoilState(filtersState);
  const [_tweets, setTweets] = useRecoilState(tweetsState);
  const { searchTweets } = useSearchTweets(query);

  useEffect(() => {
    searchTweets();
  }, [query, filters, _tweets]);


  return (
    <>
      <Header />
      <main>
        <App />
      </main>
    </>
  );
}

