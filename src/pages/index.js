import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">Home</div>
    </Layout>
  );
}
