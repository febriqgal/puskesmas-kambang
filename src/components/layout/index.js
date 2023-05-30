import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari", "latin", "latin-ext"],
});
const navigation = [
  { title: "Beranda", href: "/" },
  { title: "Jadwal Dokter", href: "/jadwal-dokter" },
  { title: "Sejarah", href: "/sejarah" },
  { title: "Struktur Organisasi", href: "/struktur-organisasi" },
];
export default function Layout({ children }) {
  const route = useRouter();
  return (
    <div className={poppins.className}>
      <div className="flex justify-between items-center mx-20">
        <h1 className="text-lg font-bold">Puskesmas Kambang</h1>
        <nav className="flex justify-center items-center gap-4 py-4">
          {navigation.map((e, i) => {
            return (
              <Link
                className={
                  route.pathname != e.href ? "" : "underline underline-offset-4"
                }
                key={i}
                href={e.href}
              >
                {e.title}
              </Link>
            );
          })}
          <Link
            className="bg-green-700 text-slate-50 rounded-lg px-4"
            href={"/login"}
          >
            Login
          </Link>
        </nav>
      </div>
      <main>{children}</main>
      <footer className="text-center my-4">2023 - Puskesmas Kambang</footer>
    </div>
  );
}
