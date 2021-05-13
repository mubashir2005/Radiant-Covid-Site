import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client/client";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={"Radiant covid"}
        description={
          "A website to help covid patients and let them find relevant information about condition."
        }
        openGraph={{
          title: "#COVID19India",
          locale: "en-IN",
          description: "We are here to help.",
        }}
        twitter={{
          handle: "@rispatna",
          site: "http://radiantpatna.com",
          cardType: "summary_large_image",
        }}
      />
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
