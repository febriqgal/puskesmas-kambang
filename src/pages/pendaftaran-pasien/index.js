import Layout from "@/components/layout";
import { Input } from "@nextui-org/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import { useEffect, useState, useRef } from "react";
import { Loading } from "@nextui-org/react";
import { addDoc, collection, query, getDocs } from "firebase/firestore";
import { db } from "@/server/db";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
export default function PendaftaranPasien() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const { register, handleSubmit, control, reset } = useForm();
  const [isLoading, setIsloading] = useState(true);
  const snapshot = useRef(null);
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
      await addDoc(collection(db, "pendaftaran_pasien"), {
        nama: data.nama,
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
      <Layout>
        <Toaster />
        <div className="flex items-center justify-center min-h-screen">
          <form
            onSubmit={handleSubmit(addDatafromDBFirestore)}
            className="flex flex-col -mt-32"
          >
            <Input
              label="Nama"
              placeholder="Masukkan Nama"
              {...register("nama", { required: true })}
            />
            <label className="px-1 mt-4 text-sm">Pilih Dokter</label>
            <select
              {...register("nmdokter")}
              className="mt-1.5  border-2 rounded-xl px-2 py-3 bg-gray-100 w-full  border-gray-300 text-gray-400 sm:text-sm"
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
              className="w-full mt-4 px-3 py-1 mb-2 duration-1000 rounded-lg shadow-lg hover:bg-[#014E00] hover:text-white hover:cursor-pointer"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}
