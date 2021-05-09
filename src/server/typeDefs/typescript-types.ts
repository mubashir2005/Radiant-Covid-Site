export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  __typename?: "Query";
  hi: Scalars["String"];
  tweets: Array<Maybe<Tweet>>;
};

export type QueryTweetsArgs = {
  input: TweetsInput;
};

export type Url = {
  __typename?: "Url";
  url: Scalars["String"];
  expanded_url?: Maybe<Scalars["String"]>;
  display_url?: Maybe<Scalars["String"]>;
  indices: Array<Maybe<Scalars["Int"]>>;
};

export type Entities = {
  __typename?: "Entities";
  hashtags: Array<Maybe<Scalars["String"]>>;
  symbols: Array<Maybe<Scalars["String"]>>;
  user_mentions: Array<Maybe<Scalars["String"]>>;
  urls: Array<Maybe<Url>>;
};

export type User = {
  __typename?: "User";
  name: Scalars["String"];
  screen_name: Scalars["String"];
  profile_image_url: Scalars["String"];
};

export type Tweet = {
  __typename?: "Tweet";
  created_at: Scalars["String"];
  id: Scalars["ID"];
  text: Scalars["String"];
  truncated: Scalars["Boolean"];
  entities?: Maybe<Entities>;
  favorite_count: Scalars["Int"];
  retweet_count: Scalars["Int"];
  user: User;
};

export type TweetsInput = {
  query: Scalars["String"];
  lastTweet?: Maybe<Scalars["ID"]>;
};

export type GetTweet = {
  id: Scalars["ID"];
};
