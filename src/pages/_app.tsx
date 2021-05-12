import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Radiant Covid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
