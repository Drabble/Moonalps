import React from 'react';
import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/rubik/variable-full.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
