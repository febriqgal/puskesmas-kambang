/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonKeluar from "./button-keluar";
import { getAuth } from "firebase/auth";
import Profile from "../../public/person.svg";
import Image from "next/image";
export default function CardProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="flex-shrink-0 flex shadow-xl border-x-1 p-4 m-4 rounded-lg">
      <div className="flex items-center">
        <Image height={200} src={Profile} alt="#" />

        <div className="ml-3">
          <h1 className="text-sm font-bold">{user.displayName ?? "-"}</h1>
          <h1 className="text-xs  italic">{user.email ?? "-"}</h1>
          <ButtonKeluar />
        </div>
      </div>
    </div>
  );
}
