import React from "react";
import { Tweet as TweetWidget } from "react-twitter-widgets";

interface Props {
  tweetId: string;
  onLoad: () => void;
}

const tweetOptions = {
  theme: "dark",
};

function Tweet({ tweetId, onLoad }: Props) {
  return (
    <>
      <div>
        <TweetWidget
          tweetId={tweetId}
          onLoad={() => {
            onLoad();
          }}
          options={tweetOptions}
        />
      </div>
    </>
  );
}

export default Tweet;
