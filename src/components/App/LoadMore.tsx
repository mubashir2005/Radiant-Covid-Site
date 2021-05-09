import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import Spinner from "../Spinner/Spinner";
import queryState from "../../atoms/query";
import useSearchTweets from "../../hooks/useSearchTweets";
import tweetsState from "../../atoms/tweets";
import { KeyboardArrowDown } from "@material-ui/icons";

/*
 *   load more should not appear when the initial  things are loading i.e when there ain't any tweets.
 *   load more should appear when there are tweets
 *   it should show a load more spinner if there are tweets but it is still loading
 *   load more should not appear when the tweets card is loading
 *   it should not appear when there are no more tweets for a particular query.
 * */

const LoadMoreButton = styled.button`
  width: 200px;
  border-radius: 1000px;
  margin: 30px auto;
  outline-width: 0;

  :focus {
    outline-width: 0;
  }

  :hover {
    filter: brightness(95%);
  }
`;

interface Props {
  loading: boolean;
}

const DownIcon = styled(KeyboardArrowDown)`
  margin-top: -2px;
`;

function LoadMore({ loading }: Props) {
  const [query] = useRecoilState(queryState);
  const [tweets] = useRecoilState(tweetsState);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showButton, setShowButton] = useState(!loading);

  const { searchTweets, data, error, loading: loadingMore } = useSearchTweets(
    query,
    true,
    1000
  );

  const toggle = (showButton: boolean) => {
    if (showButton) {
      setShowButton(true);
      setShowSpinner(false);
      return;
    }

    setShowSpinner(true);
    setShowButton(false);
  };

  useEffect(() => {
    if (loadingMore) toggle(false);

    if (error) toggle(true);

    if (data?.tweets) toggle(data?.tweets?.length != 0);
  }, [data, error, loadingMore]);

  useEffect(() => {
    if (loading && tweets.tweets.length && loadingMore) toggle(false);
    else if (loading) {
      setShowButton(false);
      setShowSpinner(false);
    }
    // don't show if it is loading more
    else if (tweets.tweets.length) toggle(true); // show if there are tweets and not loading
  }, [loading]);

  const fetchMoreTweets = () => {
    searchTweets();
  };

  return (
    <div className={"flex flex-col justify-center items-center"}>
      {showSpinner && <Spinner />}

      {showButton && (
        <LoadMoreButton
          className={"bg-blue-500 text-white py-1"}
          onClick={fetchMoreTweets}
        >
          Load More <DownIcon />
        </LoadMoreButton>
      )}
    </div>
  );
}

export default LoadMore;
