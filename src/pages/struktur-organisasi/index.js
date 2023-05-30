import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

export default function StrukturOrganisasi() {
  return (
    <Layout>
      <Head>
        <title> Struktur Organisasi - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="min-h-screen flex justify-center items-center">
        Struktur Organisasi
      </div>
    </Layout>
  );
}
