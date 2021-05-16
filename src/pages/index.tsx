import Header from "../components/Header/Header";
import App from "../components/App/App";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import queryState from "../atoms/query";
import filtersState from "../atoms/filters";
import useSearchTweets from "../hooks/useSearchTweets";
import tweetsState from "../atoms/tweets";


export default function Home(){
  const [query] = useRecoilState(queryState);
  const [filters] = useRecoilState(filtersState);
  const { searchTweets } = useSearchTweets(query);
  // @ts-ignore
    const [tweets, setTweets] = useRecoilState(tweetsState);
  useEffect(() => {
    searchTweets();
  }, [query, filters,tweets]);


  return (
    <>
      <Header />
      <main>
        <App />
      </main>
    </>
  );
}

