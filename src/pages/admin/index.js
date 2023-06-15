import LayoutAdmin from "@/components/layout-admin";
import protectAdmin from "@/protect/protect-admin";
import Head from "next/head";
import React from "react";

const Admin = () => {
  return (
    <LayoutAdmin>
      <Head>
        <title>Admin - Puskesmas Kambang</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className=" ">Admin</div>
      </div>
    </LayoutAdmin>
  );
};
export default protectAdmin(Admin);
