import LayoutAdmin from "@/components/layout-admin";
import { db } from "@/server/db";
import { Input } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { addDoc, collection, query, getDocs } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import homeroute from "../../../../../public/homeroute.svg";
import { useEffect, useRef, useState } from "react";
import { Loading } from "@nextui-org/react";
export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const { register, handleSubmit, control, reset } = useForm();
  const getDBFromFirestore = async () => {
    const querySnapshot = query(collection(db, "jadwal_dokter"));
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      await addDoc(collection(db, "Pasien"), {
        nik: data.nik,
        nama: data.nama,
        umur: data.umur,
        tgl_lahir: data.tgl_lahir,
        alamat: data.alamat,
        keluhan: data.keluhan,
        nmdokter: data.nmdokter,
        tanggal: dayjs().format("ddd, MMM D, YYYY HH:mm"),
      });
      reset();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan berita</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };
  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);

    return (
      <LayoutAdmin>
        <Head>
          <title>Tambah Berita - Puskesmas Kambang</title>
          <link rel="icon" href="/logo.jpg" />
        </Head>

        <Toaster />
        <form
          className="flex space-y-3 flex-col w-full md:w-[500px] justify-center m-auto pt-10 px-5"
          onSubmit={handleSubmit(addDatafromDBFirestore)}
        >
          <Input
            placeholder="Masukkan NIK"
            bordered
            label="NIK"
            type="number"
            control={control}
            {...register("nik", { required: true })}
          />
          <Input
            placeholder="Masukkan Nama Pasien"
            bordered
            label="Nama Pasien"
            control={control}
            {...register("nama", { required: true })}
          />
          <Input
            bordered
            label="Umur"
            type="number"
            placeholder="Masukan Umur"
            control={control}
            {...register("umur", { required: true })}
          />
          <Input
            bordered
            label="Tanggal Lahir"
            type="date"
            placeholder="Masukan Tanggal Lahir"
            control={control}
            {...register("tgl_lahir", { required: true })}
          />
          <Input
            bordered
            label="Alamat"
            placeholder="Masukan Alamat"
            control={control}
            {...register("alamat", { required: true })}
          />
          <Input
            bordered
            label="Keluhan"
            placeholder="Masukan Keluhan"
            control={control}
            {...register("keluhan", { required: true })}
          />
          <label className="px-1 text-sm">Pilih Dokter</label>
          <select
            {...register("nmdokter")}
            className="mt-1.5 border-2 rounded-xl px-2 py-3 bg-gray-100 w-full  border-gray-300 text-gray-400 sm:text-sm"
          >
            <option value="">Pilih Nama Dokter</option>
            {data.map((e, i) => {
              const Data = e.data();
              return (
                <option key={i} value={Data.nama}>
                  {Data.nama}
                </option>
              );
            })}
          </select>

          <button
            className="w-full px-3 py-1 mb-2 duration-1000 rounded-lg shadow-lg hover:bg-[#014E00] hover:text-white hover:cursor-pointer"
            type="submit"
          >
            Kirim
          </button>
        </form>
      </LayoutAdmin>
    );
  }
}
