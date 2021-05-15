import React, { useEffect, useState } from "react";
import tweetsState from "../../atoms/tweets";
import Spinner from "../Spinner/Spinner";
import LoadMore from "./LoadMore";
import { VisualPicker } from "react-rainbow-components";
import ResourceOption from "../ResourceOption/ResourceOption";
import useSearchTweets from "../../hooks/useSearchTweets";
import queryState from "../../atoms/query";
import filtersState from "../../atoms/filters";
import medicalResources from "../../data/medicalResources";
import { useRecoilState } from "recoil";
import Tweet from "../Tweet/Tweet";
import originalTweetsState from "../../atoms/originalTweets";
import { COVID_19_INDIA } from "../../constants";

function App() {
  const [tweets, setTweets] = useRecoilState(tweetsState);
  const [query] = useRecoilState(queryState);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useRecoilState(filtersState);
  const [originalTweets] = useRecoilState(originalTweetsState);

  const { searchTweets } = useSearchTweets(query);

  useEffect(() => {
    console.log(query, filters.length, originalTweets.length);
    if (query === COVID_19_INDIA && !filters.length && originalTweets.length) {
      console.log("original");

      setTweets({
        tweets: originalTweets,
        loading: false,
        error: null,
      });
      return;
    }

    searchTweets();
  }, [query, filters, originalTweets]);

  useEffect(() => {
    console.log("Tweets", tweets);
  }, [tweets]);

  useEffect(() => {
    if (tweets.loading) setLoading(true);
  }, [tweets.loading, loading]);

  const handleMedicalResourcesChange = (filter: any) => {
    setFilters(filter);
  };

  return (
    <div className={"flex justify-center flex-col pb-4"}>
      <div className={"flex flex-row justify-center"} style={{ marginTop: 30 }}>
        <VisualPicker
          id="visual-picker-component-1"
          multiple
          value={filters}
          onChange={handleMedicalResourcesChange}
        >
          {medicalResources.map((resource, index) => (
            <ResourceOption
              key={index}
              name={resource.name}
              imageUrl={resource.imageUrl}
            />
          ))}
        </VisualPicker>
      </div>
      {loading && <Spinner />}
      {tweets.tweets.map((tweet) => (
        <Tweet
          tweetId={tweet.id}
          key={tweet.id}
          onLoad={() => setLoading(false)}
        />
      ))}

      <LoadMore loading={loading} />
    </div>
  );
}

export default App;
