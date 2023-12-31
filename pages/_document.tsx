/* import Document, { Html, Head, Main, NextScript } from 'next/document';
// Importing the Google Analytics Measurement ID from the environment variable
const isProd = process.env.NODE_ENV === "production";
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
export default class MyDocument extends Document {
    render() {
    return (
      <Html>
        <Head>
            {isProd && (
                <>
                    <script async src={gtag} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                                  page_path: window.location.pathname
                                });
                            `,
                        }}
                    />
                </>
            )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    ) 
  }
}*/