import LayoutAdmin from "@/components/layout-admin";
import app, { db } from "@/server/db";
import { Input, Textarea } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const { register, handleSubmit, control, reset } = useForm();
  const uid = uuidv4();
  const auth = getAuth();
  const user = auth.currentUser;
  const [imageUpload, setImageUpload] = useState();
  const storage = getStorage(app);
  const storageRef = ref(storage, `image/berita/${uid}`);

  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      if (imageUpload == null) return;
      await uploadBytes(storageRef, imageUpload);
      await addDoc(collection(db, "berita"), {
        judul: data.judul,
        isi: data.isi,
        penulis: user.displayName,
        tanggal_berita: dayjs().format("ddd, MMM D, YYYY HH:mm"),
        tanggal: dayjs().format(),
        dilihat: 0,
        gambar: storageRef.name,
      });
      reset();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan berita</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };
  return (
    <LayoutAdmin>
      <Head>
        <title>Tambah Berita - Puskesmas Kambang</title>
      </Head>
      <Toaster />
      <form
        className="flex flex-col w-full md:w-[500px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <Input
          bordered
          label="Judul Berita"
          placeholder="Masukan judul berita"
          control={control}
          {...register("judul", { required: true })}
        />
        <div className="mt-4">
          <label>Pilih Foto:</label>
          <input
            className="ml-4"
            type="file"
            {...register("gambar")}
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <Textarea
          bordered
          label="Isi Berita"
          placeholder="Masukan isi berita"
          control={control}
          {...register("isi", { required: true })}
        />
        <button
          className="w-full px-3 py-1 mt-4 mb-2 duration-1000 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </LayoutAdmin>
  );
}
