import "@/styles/globals.css";
import "animate.css/animate.min.css";
import * as React from "react";
import NextNProgress from "nextjs-progressbar";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "@/context/user";
import AuthStateChangeProvider from "@/context/auth";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <AuthStateChangeProvider>
        <NextUIProvider>
          <NextNProgress color="#014E00" options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </NextUIProvider>
      </AuthStateChangeProvider>
    </UserProvider>
  );
}
