import "@/styles/globals.css";
import "animate.css/animate.min.css";
import * as React from "react";
import NextNProgress from "nextjs-progressbar";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextNProgress color="#014E00" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
