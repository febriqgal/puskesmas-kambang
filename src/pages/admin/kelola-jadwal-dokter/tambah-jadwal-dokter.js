import LayoutAdmin from "@/components/layout-admin";
import { db } from "@/server/db";
import { Input } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { addDoc, collection } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import homeroute from "../../../../public/homeroute.svg";

export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const { register, handleSubmit, control, reset } = useForm();

  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      await addDoc(collection(db, "jadwal_dokter"), {
        nama: data.nama,
        poli: data.poli,
        tanggal_jadwal: "-",
        status: "-",
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
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Kelola Berita / Tambah Berita</h1>
      </div>
      <Toaster />
      <form
        className="flex flex-col w-full md:w-[500px] justify-center m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <Input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Nama Dokter"
          control={control}
          {...register("nama", { required: true })}
        />
        <Input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Poli"
          control={control}
          {...register("poli", { required: true })}
        />

        <button
          className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </LayoutAdmin>
  );
}
