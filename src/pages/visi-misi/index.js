import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

export default function VisiMisi() {
  return (
    <Layout>
      <Head>
        <title>Sejarah - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex justify-center items-center min-h-screen p-10 mb-10 mx-20 animate__animated animate__fadeInUpBig bg-gray-200 border-2 border-green-950 rounded-xl shadow-2xl">
        <div>
          <div className="mb-5">
            <h1 className="font-bold">1. Visi</h1>
            <h1 className="list-disc ml-10">
              Visi UPT Puskesmas Kambang Adalah “ Puskesmas dengan pelayanan
              prima menuju masyarakat Lengayang Sehat Mandiri”.
            </h1>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">2. Misi</h1>
            <ul className="list-disc ml-10">
              <li>
                Memberikan pelayanan secara Prima dan meningkatkan kualitas
                sumber daya manusia.
              </li>
              <li>
                Mengembangkan sarana dan prasarana yang mengutamakan kualitas
                pelayanan.
              </li>
              <li>
                Meningkatkan akses dan keterjangkauan masyarakat terhadap
                pelayanan Kesehatan.
              </li>
              <li>
                Meningkatkan peran serta aktif masyarakat terhadap Kesehatan.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">3. STRATEGI</h1>
            <ul class="list-disc ml-10">
              <li>
                Mengembangkan dan menetapkan pendekatan wilayah yang mantap
                ditingkat kecamatan dalam pembangunan disegala bidang.
              </li>
              <li>
                Mengembangkan dan menerapkan kemitraan dengan lintas sektor dan
                Lembaga Swadaya Masyarakat (LSM).
              </li>
              <li>
                meningkatkan profesionalisme petugas agar dapat diwujudkan
                pelayanan yang efektif, efisien dan berkualitas
              </li>
              <li>
                mengambangkan kemandirian puskesmas sesuai dengan kewenangan
                yang diberikan Dinas Kesehatan Kabupaten Pesisir Selatan.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">4. MOTO</h1>
            <ul class="list-disc ml-10">
              <li>
                Untuk mencapai Visi dan Misi Puskesmas dan memberikan pelayanan
                yang terbaik kepada segenap masyarakat Lengayang, puskesmas
                kambang memiliki motto “Cepat, Tepat, Tulus dan Ikhlas”
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">5. TATA NILAI</h1>
            <h1 className="ml-10">
              Dalam melaksanakan pelayanan kesehatan bagi masyarakat, puskesmas
              memiliki tata nilai PRIMA, dimana PRIMA sendiri memiliki arti:
            </h1>
            <ul class="list-disc ml-10 ">
              <li>
                Profesional : Memiliki kompetensi dan kemampuan dalam memberikan
                pelayanan kesehatan yang terbaik.
              </li>
              <li>
                Ramah :Memiliki sikap yang sopan dan santun kepada seluruh
                masyarakat dan rekan kerja.
              </li>
              <li>
                Inovatif :Memiliki kemampuan untuk bekerja mandiri dengan
                ide-ide kreatif serta memberikan terobosan bagi peningkatan
                pelayanan kesehatan.
              </li>
              <li>
                Malu :Memiliki budaya malu bila tidak melaksanakan tugas dengan
                sebaik-baiknya.
              </li>
              <li>
                Akuntabel : Memberikan pelayanan kesehatan sesuai pedoman dan
                standar pelayanan yang ditetapkan, dapat diukur dan
                dipertanggung jawabkan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
