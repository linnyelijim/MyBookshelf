/* import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps){
  const router = useRouter();
  const isProd = process.env.NODE_ENV === "production";
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      if(isProd){
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <>
    </>
  );
} */
import React from "react";
import type { AppProps } from "next/app";
import Layout from "./layout"; // Path to your layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
