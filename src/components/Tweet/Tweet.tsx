import React from "react";
import {TwitterTweetEmbed } from 'react-twitter-embed';

interface Props {
  tweetId: string;
  onLoad: () => void;
}

const tweetOptions = {
  theme: "dark",
  conversation: "none",
  cards: "hidden",
  dnt: "true",
};

function Tweet({ tweetId, onLoad }: Props) {
  return (
    <>
      <div>
        <TwitterTweetEmbed
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
