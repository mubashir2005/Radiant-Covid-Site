import React, { useEffect, useState } from "react";
import tweetsState from "../../atoms/tweets";
import Spinner from "../Spinner/Spinner";
import LoadMore from "./LoadMore";
import { VisualPicker } from "react-rainbow-components";
import ResourceOption from "../ResourceOption/ResourceOption";
import filtersState from "../../atoms/filters";
import medicalResources from "../../data/medicalResources";
import { useRecoilState } from "recoil";
import Tweet from "../Tweet/Tweet";
import queryState from "../../atoms/query";

// ts-nocheck

function App() {
  const [tweets] = useRecoilState(tweetsState);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters] = useRecoilState(filtersState);
  const [_query, setQuery] = useRecoilState(queryState);

  useEffect(() => {
    if (tweets.loading) setLoading(true);
  }, [tweets.loading, loading]);

  const handleMedicalResourcesChange = (filter: any) => {
    setQuery(filter);
  };


  // @ts-ignore
  return (
    <div className={"flex justify-center flex-col pb-4"}>
      <div className={"flex flex-row justify-center"} style={{ marginTop: 30 }}>
        <VisualPicker
          id="visual-picker-component-1"
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
      {loading && <Spinner/>}
      {tweets.tweets.map((tweet:any) => (

            <Tweet
                tweetId={tweet.id}
                key={tweet.id}
                onLoad={()=> setLoading(false)}
            />
        ))}
      <LoadMore loading={loading} />
    </div>
  );
}

export default App;
