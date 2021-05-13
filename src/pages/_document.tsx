import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={"en-IN"}>
        <Head>
          <meta name='application-name' content='Radiant Covid' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Radiant Covid' />
          <meta name='description' content='Made to help you during the pandemic' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />


                  <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
                  <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
                  <link rel='manifest' href='/static/manifest.json' />
                  <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
                  <link rel='shortcut icon' href='/favicon.ico' />
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />

                  <meta name='twitter:card' content='summary' />
                  <meta name='twitter:url' content='https://radiant-covid.vercel.app' />
                  <meta name='twitter:title' content='Radiant Covid' />
                  <meta name='twitter:description' content='Made to help you during the pandemic' />
                  <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
                  <meta name='twitter:creator' content='@rispatna' />
                  <meta property='og:type' content='website' />
                  <meta property='og:title' content='Covid 19 Site of RIS' />
                  <meta property='og:description' content='Made to help you during the pandemic' />
                  <meta property='og:site_name' content='Radiant Covid' />
                  <meta property='og:url' content='https://radiant-covid.vercel.app/' />
                  <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
