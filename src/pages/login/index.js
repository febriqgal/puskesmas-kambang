import React from "react";
import Head from "next/head";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

export default function Login() {
  const route = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Berhasil");
        route.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`Gagal ${errorMessage} == ${errorCode}`);
        // ..
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Login - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
