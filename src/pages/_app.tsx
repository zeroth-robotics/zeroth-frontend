import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import ReactLenis from "lenis/dist/lenis-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <Head>
        <title>K-Scale Labs</title>
        <meta name="description" content="Buy, sell and build androids online" />
        <meta
          name="keywords"
          content="K-Scale Labs, Robot, Robots, Humanoid Robots, Droids, Androids, "
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Layout children={pageProps} />
    </ReactLenis>
  );
}
