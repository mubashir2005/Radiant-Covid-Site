import Header from "../components/Header/Header";
import App from "../components/App/App";
import resolvers from "../server/resolvers/resolvers";
import { COVID_19_INDIA } from "../constants";
import { useRouter } from "next/router";
import { GetTweet } from "../server/typeDefs/typescript-types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import originalTweetsState from "../atoms/originalTweets";

interface Props {
  tweets: GetTweet[];
}

export default function Home({ tweets }: Props) {
  const { isFallback } = useRouter();
  const [_originalTweets, setOriginalTweets] = useRecoilState(
    originalTweetsState
  );

  useEffect(() => {
    setOriginalTweets(tweets);
    console.log("original ones tweets", tweets);
  }, [tweets]);

  if (isFallback) return <></>;

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
  const revalidationTime: number = 60 * 60; // 1 hour in seconds

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
  } catch (e) {}

  return {
    props: {
      tweets: [],
    },
    revalidate: revalidationTime,
  };
}
