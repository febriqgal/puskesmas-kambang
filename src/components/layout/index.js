/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Logo from "../../../public/logo.jpg";
import Profile from "../../../public/person.svg";
import FooterC from "../footerC";
import { Poppins } from "next/font/google";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
const navigation = [
  { name: "Berita", href: "/berita" },
  { name: "Jadwal Dokter", href: "/jadwal-dokter" },
  { name: "Visi & Misi", href: "/visi-misi" },
  { name: "Struktur Organisasi", href: "/struktur-organisasi" },
  { name: "Pendaftaran Pasien", href: "/pendaftaran-pasien" },
];
const poppins = Poppins({
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const route = useRouter();
  const user = getAuth().currentUser;

  const auth = getAuth();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className={poppins.className}>
          <div className="px-5 lg:px-20">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#014E00] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <Link
                  title="Beranda Puskesmas Kambang"
                  href={"/"}
                  className="flex items-center flex-shrink-0"
                >
                  <Image
                    className="block w-auto h-8 lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden w-auto h-8 lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          route.pathname != item.href
                            ? "text-slate-950 hover:bg-[#014E00] duration-700 transition-all hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            : "bg-[#014E00] text-white rounded-md px-3 py-2 text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="w-8 h-8 rounded-full"
                        src={Profile}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-[#014E00] ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <h1 className={"font-bold block px-4 py-2 text-sm"}>
                          {user?.displayName}
                        </h1>
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) =>
                          user ? (
                            <Link
                              href="/admin/kelola-data-pasien"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Dashboard
                            </Link>
                          ) : (
                            <></>
                          )
                        }
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) =>
                          user ? (
                            <h1
                              onClick={async () => {
                                await signOut(auth);
                                route.replace("/");
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                              )}
                            >
                              Keluar
                            </h1>
                          ) : (
                            <Link
                              href="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                              )}
                            >
                              Login
                            </Link>
                          )
                        }
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    route.pathname != item.href
                      ? "text-slate-950 hover:bg-[#014E00] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      : "bg-[#014E00] text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
          <main>{children}</main>
          <FooterC />
        </div>
      )}
    </Disclosure>
  );
}
