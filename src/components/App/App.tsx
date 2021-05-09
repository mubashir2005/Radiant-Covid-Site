import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import tweetsState from "../../atoms/tweets";
import Spinner from "../Spinner/Spinner";
import LoadMore from "./LoadMore";
import { Tweet } from "react-twitter-widgets";


function App() {

  const [tweets] = useRecoilState(tweetsState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (tweets.loading) setLoading(true);
  }, [tweets.loading, loading]);

  useEffect(() => {
    console.log("Tweets", tweets);
  }, [tweets]);

  const tweetOptions = {
    theme: "dark",
  };


  return (
    <div className={"flex justify-center flex-col pb-4"}>

      {loading && <Spinner />}
      {tweets.tweets.map((tweet:any) => (
        <Tweet
          tweetId={tweet.id}
          key={tweet.id}
          options={tweetOptions}
          onLoad={() => setLoading(false)}
        />
      ))}

      <LoadMore loading={loading} />
    </div>
  );
}

export default App;
