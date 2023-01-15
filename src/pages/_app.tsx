import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@layouts/Layout";
import "normalize.css";
import Head from "next/head";
import { BreakpointContextProvider } from "../contexts/Breakpoints";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="SPA made for recruitment task in DS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreakpointContextProvider>
        <Component {...pageProps} />
      </BreakpointContextProvider>
    </>
  );
}
