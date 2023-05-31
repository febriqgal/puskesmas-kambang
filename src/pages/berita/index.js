import Layout from "@/components/layout";
import React from "react";
import Head from "next/head";
export default function Berita() {
  return (
    <Layout>
      <Head>
        <title>Berita - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        Berita
      </div>
    </Layout>
  );
}
