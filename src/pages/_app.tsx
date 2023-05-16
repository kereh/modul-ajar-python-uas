import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Modul Ajar Python - Ronaldo Kereh</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
