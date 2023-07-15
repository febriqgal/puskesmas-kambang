/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from "@/components/layout-admin";
import { db } from "@/server/db";
import { Loading, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import dibuat from "../../../../public/dibuat.svg";
import penulis from "../../../../public/penulis.svg";
import styles from "../../../styles/Home.module.css";
import Tambah from "../../../../public/add.svg";
import Link from "next/link";
export default function LayouUser() {
  const route = useRouter();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);
    return (
      <LayoutAdmin>
        <Head>
          <title>Berita - Puskesmas Kambang</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.jpg" />
        </Head>
        <Link
          href={"/admin/kelola-berita/tambah-berita"}
          className="flex items-center justify-center py-10"
        >
          <Image height={30} src={Tambah} alt="#" />
          <h1>Tambah Berita</h1>
        </Link>
        <div className="grid grid-cols-1 gap-5 px-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-20">
          {data.map((e, i) => {
            const Data = e.data();
            return (
              <div
                key={i}
                className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-xl"
              >
                <div className="rounded-t-lg shadow-xl overflow-clip rounded-br-3xl">
                  <img
                    onClick={async () => {
                      route.push(`/berita/${e.id}`);
                      const frankDocRef = doc(db, "berita", `${e.id}`);
                      await updateDoc(frankDocRef, {
                        dilihat: Data.dilihat + 1,
                      });
                    }}
                    className="object-cover w-full h-48 duration-1000 hover:scale-110 hover:cursor-pointer"
                    src={`https://firebasestorage.googleapis.com/v0/b/puskesmas-kambang.appspot.com/o/image%2Fberita%2F${Data.gambar}?alt=media&token=549902c0-3558-425e-a12b-f6c1542f4fd3`}
                    alt={"#"}
                  />
                </div>
                <div className="px-5 py-5">
                  <div className="justify-between mb-4">
                    <h5 className="text-xl font-bold text-gray-900">
                      <div className={styles.truncate2}>{Data.judul}</div>
                    </h5>
                    <div className="flex justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <Image src={penulis} width={20} alt={"#"} />
                        <h5 className="text-xs font-medium text-gray-900 ">
                          {Data.penulis}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={dibuat} width={20} alt={"#"} />
                        <Tooltip shadow={true} content={Data.tanggal_berita}>
                          <h5 className="text-xs font-medium text-gray-900 ">
                            {dayjs(Data.tanggal).fromNow()}
                          </h5>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 text-base text-gray-700">
                    <h1 className={styles.truncate3}>{Data.isi}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </LayoutAdmin>
    );
  }
}
