import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Head from "next/head";
import { Button } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/server/db";
import { AnimationOnScroll } from "react-animation-on-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex justify-center items-center min-h-screen mx-20 my-10">
        Beranda
      </div>
    </Layout>
  );
}
