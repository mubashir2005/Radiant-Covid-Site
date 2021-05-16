import Header from "../components/Header/Header";
import App from "../components/App/App";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import queryState from "../atoms/query";
import filtersState from "../atoms/filters";
import useSearchTweets from "../hooks/useSearchTweets";
import resolvers from "../server/resolvers/resolvers";
import { COVID_19_INDIA } from "../constants";
import { GetTweet } from "../server/typeDefs/typescript-types";
import tweetsState from "../atoms/tweets";

interface Props {
  tweets: GetTweet[];
}

export default function Home({ tweets }: Props) {
  const [query] = useRecoilState(queryState);
  const [filters] = useRecoilState(filtersState);
  const { searchTweets } = useSearchTweets(query);
  const [_tweets, setTweets] = useRecoilState(tweetsState);

  useEffect(() => {
    if (query === COVID_19_INDIA && !filters.length && tweets.length) {
      console.log("original");
      setTweets({
        tweets: tweets,
        loading: false,
        error: null,
      });
      return;
    }

    console.log("not original");
    searchTweets();
  }, [query, filters]);

  return (
    <>
      <Header />
      <main>
        <App />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const revalidationTime: number = 1; // 1 second

  try {
    const tweets = await resolvers.Query.tweets(undefined, {
      input: {
        query: COVID_19_INDIA,
      },
    });

    const tweetsId: GetTweet[] = tweets.map((tweet) => ({
      id: tweet.id,
    }));

    return {
      props: {
        tweets: tweetsId,
      },
      revalidate: revalidationTime,
    };
  } catch (e) {
    console.log("error while getting tweets", e);
  }

  return {
    props: {
      tweets: [],
    },
  };
}
