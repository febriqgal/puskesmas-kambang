import React from "react";
import Head from "next/head";
export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Login - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <form className="bg-green-700 p-16 flex flex-col gap-2 rounded-lg">
        <h1 className="text-center text-slate-50">Login</h1>
        <input className="rounded-lg px-2" placeholder="Email" />
        <input className="rounded-lg px-2" placeholder="Password" />
        <input
          className="bg-slate-50 text-slate-950 rounded-lg"
          type="submit"
        />
      </form>
    </div>
  );
}
