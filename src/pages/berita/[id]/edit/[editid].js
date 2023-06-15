/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Loading } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import app, { db } from "../../../../server/firebaseSDK";
import styles from "../../../../styles/Home.module.css";
export default function detail() {
  const { register, handleSubmit, control } = useForm();
  const [isLoading, setIsloading] = useState(true);
  const route = useRouter();
  const { id } = route.query;
  const snapshot = useRef(null);
  const [isDisable, setIsDisble] = useState(false);
  dayjs.locale("id");
  dayjs.extend(relativeTime);

  const dataBerita = async () => {
    const docRef = doc(db, "berita", `${id}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setIsloading(false);
  };
  const updateDataa = async (data) => {
    const push = async () => {
      const docRef = doc(db, "berita", `${id}`);
      await updateDoc(docRef, {
        judul: data.judul,
        isi: data.isi,
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

    return (
      <div className={styles.main}>
        <Toaster />
        <form
          className="flex flex-col text-slate-900 w-full px-5 sm:w-[500px]"
          onSubmit={handleSubmit(updateDataa)}
        >
          <label className="text-center mb-2">
            Judul
            <textarea
              className="mb-2  py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan judul*"
              control={control}
              disabled={isDisable}
              defaultValue={post ? post.judul : ""}
              {...register("judul", { required: true })}
            />
          </label>
          <label className="text-center mb-2">
            Isi Berita
            <textarea
              rows={"10"}
              className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan isi*"
              control={control}
              disabled={isDisable}
              defaultValue={post ? post.isi : ""}
              {...register("isi")}
            />
          </label>
          <button
            onClick={async () => {
              const docRef = doc(db, "berita", `${id}`);
              const storage = getStorage(app);
              const desertRef = ref(storage, `image/berita/${post.gambar}`);
              await deleteObject(desertRef);
              await deleteDoc(docRef);
              route.replace("/");
            }}
            className="bg-red-500 rounded-lg py-1 px-3 text-white mb-2"
          >
            Hapus
          </button>
          <button
            disabled={isDisable}
            className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          >Kirim</button>
        </form>
      </div>
    );
  }
}
