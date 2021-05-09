import Twit from "twit";

const Twitter = new Twit({
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  consumer_key: process.env.CONSUMER_KEY || "",
  consumer_secret: process.env.CONSUMER_SECRET_KEY || "",
  timeout_ms: 60 * 1000, // 1 minute
  strictSSL: process.env.NODE_ENV === "production", // use ssl only in production
});

export default Twitter;
