import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

export default function JadwalDokter() {
  return (
    <Layout>
      <Head>
        <title>Jadwal Dokter - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="min-h-screen flex justify-center items-center">
        Jadwal Dokter
      </div>
    </Layout>
  );
}
