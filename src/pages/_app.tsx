import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Zeroth Bot</title>
        <meta
          name="description"
          content="Developing the world's most accessible platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone. We're from Tesla AI, Google, Meta FAIR, Stanford, and Xiaomi building opportunities for robots to be more than workers."
        />
        <meta
          name="keywords"
          content="K-Scale Labs, Robot, Robots, Humanoid Robots, robotics, humanoid robotics, humanoids, Droids, droid, Androids, android, AI, Embodied intelligence, Embodied AI, Artificial intelligence, embodied artificial intelligence, AI robots, AI robotics, open source, open-source, open source robot, open-source robotics, open source AI, open-source AI, open source artificial intelligence, open-source artificial intelligence, open source humanoid, open-source humanoid, k scale, kscale, kscale labs, k scale labs, k-scale, kscale ai, k-scale ai, k-scale labs ai"
        />
        <meta property="og:title" content="Zeroth Bot" />
        <meta
          property="og:description"
          content="Developing the world's most accessible platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone. We're from Tesla AI, Google, Meta FAIR, Stanford, and Xiaomi building opportunities for robots to be more than workers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zerothbot.com" />
        <meta property="og:site_name" content="Zeroth Bot" />
        <meta name="og:image" content="/meta/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zeroth Bot" />
        <meta
          name="twitter:description"
          content="Zeroth Bot is a platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone. We're from Tesla AI, Google, Meta FAIR, Stanford, and Xiaomi building opportunities for robots to be more than workers."
        />
        <meta name="twitter:image" content="/meta/twitter-image.png" />
      </Head>

      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>

      <Analytics />
    </>
  );
}
