/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { db } from "@/server/db";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Loading } from "@nextui-org/react";
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
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import styles from "../../../styles/Home.module.css";
import LayoutAdmin from "@/components/layout-admin";
import { Button } from "@nextui-org/react";
export default function LayouUser() {
  const route = useRouter();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "jadwal_dokter"),
      orderBy("nama", "asc")
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

        <div className="p-5 overflow-x-auto">
          <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right bg-[#014E00] text-white">
              <tr>
                <th className="px-4 py-2 font-medium text-left">No.</th>
                <th className="px-4 py-2 font-medium text-left">Nama</th>
                <th className="px-4 py-2 font-medium text-left">Poli</th>
                <th className="px-4 py-2 font-medium text-left">Jadwal</th>
                <th className="px-4 py-2 font-medium"> </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((e, i) => {
                const Data = e.data();
                return (
                  <tr
                    key={i}
                    className=" bg-gray-50 hover:bg-[#014E00] hover:text-white rounded-lg hover:rounded-lg"
                  >
                    <td className="px-4 py-2 font-medium">{i + 1}.</td>
                    <td className="px-4 py-2 font-medium">{Data.nama}</td>
                    <td className="px-4 py-2">{Data.poli}</td>
                    <td className="px-4 py-2">{Data.tanggal_jadwal}</td>

                    <td className="px-4 py-2">
                      {" "}
                      <Button
                        onPress={() => {
                          route.push(`/admin/kelola-jadwal-dokter/${e.id}`);
                        }}
                        size={"xs"}
                        className="bg-red-700"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </LayoutAdmin>
    );
  }
}
