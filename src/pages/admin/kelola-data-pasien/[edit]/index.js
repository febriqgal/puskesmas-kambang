/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Loading } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { db } from "@/server/db";
import styles from "../../../../styles/Home.module.css";
export default function detail() {
  const { register, handleSubmit, control } = useForm();
  const [isLoading, setIsloading] = useState(true);
  const route = useRouter();
  const { edit } = route.query;
  const snapshot = useRef(null);
  const [isDisable, setIsDisble] = useState(false);
  dayjs.locale("edit");
  dayjs.extend(relativeTime);

  const dataBerita = async () => {
    const docRef = doc(db, "Pasien", `${edit}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setIsloading(false);
  };
  const updateDataa = async (data) => {
    const push = async () => {
      const docRef = doc(db, "Pasien", `${edit}`);
      await updateDoc(docRef, {
        nama: data.nama,
      });
    };
    toast.promise(push(), {
      loading: "Menyimpan...",
      success: <b>Berhasil edit berita</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi!</b>,
    });
    setIsDisble(true);
  };

  useEffect(() => {
    dataBerita();
  });
  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;
    console.log();
    return (
      <div className={styles.main}>
        <Toaster />
        <form
          className="flex flex-col text-slate-900 w-full px-5 sm:w-[500px]"
          onSubmit={handleSubmit(updateDataa)}
        >
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.nik : ""}
            {...register("nik", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.nama : ""}
            {...register("nama", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.umur : ""}
            {...register("umur", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.tgl_lahir : ""}
            {...register("tgl_lahir", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.alamat : ""}
            {...register("alamat", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.keluhan : ""}
            {...register("keluhan", { required: true })}
          />{" "}
          <input
            className="w-full px-3 py-2 mb-2 mr-2 border-2 rounded-lg"
            placeholder="Masukan judul*"
            control={control}
            disabled={isDisable}
            defaultValue={post ? post.nmdokter : ""}
            {...register("nmdokter", { required: true })}
          />
          <Button
            onPress={async () => {
              const docRef = doc(db, "pendaftaran_pasien", `${edit}`);
              await deleteDoc(docRef);
              route.back();
            }}
            color={"error"}
            className="w-full px-3 py-1 mb-2 duration-1000 bg-red-700 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white hover:cursor-pointer"
          >
            Hapus
          </Button>
          <Button
            disabled={isDisable}
            className="w-full px-3 py-1 mb-2 duration-1000 border rounded-lg shadow-lg text-slate-950 hover:bg-gray-900 hover:text-white hover:cursor-pointer"
            type="submit"
          >
            Kirim
          </Button>
        </form>
      </div>
    );
  }
}
