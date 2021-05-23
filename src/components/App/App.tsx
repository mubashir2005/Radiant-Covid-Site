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
import Error from "../Error/Error";
import { GetTweet } from "../../server/typeDefs/typescript-types";
import queryState from "../../atoms/query";

function App() {
    const [tweets] = useRecoilState(tweetsState);
    const [loading, setLoading] = useState<boolean>(true);
    const [_query, setQuery] = useRecoilState(queryState);

    useEffect(() => {
        if (tweets.loading) setLoading(true);
    }, [tweets.loading, loading]);

    const ShowSpinner = () => {
        // no tweets were found
        if (!tweets.loading && !tweets.tweets.length) return <></>;

        if (tweets.error) return <></>;

        if (loading) return <Spinner />;

        return <></>;
    };

    const handleMedicalResourcesChange = (_query: string) => {
        setQuery(_query);
    };

    return (
        <div className={"flex justify-center flex-col pb-4"}>
            <div className={"flex flex-row justify-center"} style={{ marginTop: 30 }}>
                <VisualPicker
                    id="visual-picker-component-1"
                    multiple
                    value={filters}
                    onChange={(value) => handleMedicalResourcesChange(value as string[])}
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
            <ShowSpinner/>
            {tweets.tweets.map((tweet: GetTweet) => (
                <Tweet
                    tweetId={tweet.id}
                    key={tweet.id}
                    onLoad={() => setLoading(false)}
                />
            ))}

            <Error
                errorMessage={tweets.error ? "We went into a bug. Try searching with searchbar" : "No tweets found. Please use the searchbar"}
                // if tweets loading is false and number of tweets is 0 or there is an error
                show={(!tweets.loading && !tweets.tweets.length) || !!tweets.error}
            />
            <LoadMore loading={loading} />
        </div>
    );
}

export default App;
