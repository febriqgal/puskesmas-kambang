import React from "react";
import Head from "next/head";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import app from "@/server/db";
export default function Login() {
  const route = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const auth = getAuth(app);

  const login = async (data) => {
    const push = async () => {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setTimeout(() => {
        route.replace("/");
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil login</b>,
      error: (error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Password Salah!");
        } else if (error.code === "auth/user-not-found") {
          toast.error("Email tidak terdaftar!");
        } else {
          toast.error(
            "Tidak bisa login! karena banyak upaya login yang gagal, cobalah beberapa saat lagi!"
          );
        }
      },
    });
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster />
      <Head>
        <title>Login - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <form
        onSubmit={handleSubmit(login)}
        className="bg-[#014E00] p-10 flex flex-col gap-2 rounded-xl shadow-2xl"
      >
        <h1 className="text-center text-slate-50 pb-10">Login</h1>
        <Input
          {...register("email")}
          className="rounded-lg "
          placeholder="Email"
        />
        <Input.Password
          {...register("password")}
          className="rounded-lg "
          type="password"
          placeholder="Password"
        />
        <Button type="submit" className="bg-slate-50 text-slate-950 rounded-lg">
          Login
        </Button>
      </form>
    </div>
  );
}
