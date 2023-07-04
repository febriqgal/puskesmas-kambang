/* eslint-disable @next/next/no-img-element */
import CarouselBerita from "@/components/beritaC";
import Layout from "@/components/layout";
import Image from "next/image";
import React, { useRef } from "react";
import { A11y, Pagination, Scrollbar, Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import Populer from "../../public/populer.svg";
export default function ComCarouselHeader() {
  const ref = useRef(null);

  return (
    <Layout>
      <Head>
        <title>Puskesmas Kambang</title>

        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Swiper
        className="md:h-96"
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect={EffectCube}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        pagination={{
          clickable: true,
          type: "custom",
        }}
        scrollbar={{ draggable: true, hide: true }}
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={
              "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
            }
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80"
            }
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={
              "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
            }
            alt="#"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={
              "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
            }
            alt="#"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center pt-10">
        <Image src={Populer} alt="#" />
        <h1 className="ml-2">Berita Populer</h1>
      </div>
      <div className="px-20 pt-5 pb-10">
        <CarouselBerita />
      </div>
    </Layout>
  );
}
