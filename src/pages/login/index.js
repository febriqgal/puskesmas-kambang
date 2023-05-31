import React from "react";
import Head from "next/head";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
export default function Login() {
  const route = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Login - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <form className="bg-[#014E00] p-10 flex flex-col gap-2 rounded-xl shadow-2xl">
        <h1 className="text-center text-slate-50 pb-10">Login</h1>
        <Input className="rounded-lg " placeholder="Email" />
        <Input.Password
          className="rounded-lg "
          type="password"
          placeholder="Password"
        />
        <Button
          onPress={() => {
            route.push("/");
          }}
          className="bg-slate-50 text-slate-950 rounded-lg"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
