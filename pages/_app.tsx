import React from 'react';
import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@fontsource/rubik/variable-full.css';

declare global {
  interface Window {
    // TODO: replace this with a more specific type based on usage
    dataLayer: any[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      {/*Google tag (gtag.js)*/}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
