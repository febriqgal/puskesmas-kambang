/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
export default function Footer() {
  const Year = new Date().getFullYear();
  const navigation = {
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/puskesmas.kambang/?locale=ms_MY",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "https://www.twitter.com/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },

      {
        name: "WhatsApp",
        href: "https://wa.me/082288610290",
        icon: (props) => (
          <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2517_3285)">
              <path
                d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.91501 12.541 9.31801 11.568 9.14501 11.27C8.97201 10.973 9.12701 10.812 9.27501 10.664C9.40901 10.531 9.57301 10.317 9.72101 10.144C9.87001 9.97004 9.91901 9.84604 10.019 9.64704C10.118 9.44904 10.069 9.27604 9.99401 9.12704C9.91901 8.97804 9.32501 7.51504 9.07801 6.92004C8.83601 6.34104 8.59101 6.42004 8.40901 6.41004C8.23601 6.40204 8.03801 6.40004 7.83901 6.40004C7.64101 6.40004 7.31901 6.47404 7.04701 6.77204C6.77501 7.06904 6.00701 7.78804 6.00701 9.25104C6.00701 10.713 7.07201 12.126 7.22001 12.325C7.36901 12.523 9.31601 15.525 12.297 16.812C13.006 17.118 13.559 17.301 13.991 17.437C14.703 17.664 15.351 17.632 15.862 17.555C16.433 17.47 17.62 16.836 17.868 16.142C18.116 15.448 18.116 14.853 18.041 14.729C17.967 14.605 17.77 14.531 17.472 14.382ZM12.05 21.785H12.046C10.2758 21.7852 8.53809 21.3092 7.01501 20.407L6.65401 20.193L2.91301 21.175L3.91101 17.527L3.67601 17.153C2.68645 15.5773 2.16295 13.7537 2.16601 11.893C2.16701 6.44304 6.60201 2.00904 12.054 2.00904C14.694 2.00904 17.176 3.03904 19.042 4.90704C19.9627 5.82366 20.6924 6.91377 21.189 8.11428C21.6856 9.3148 21.9392 10.6019 21.935 11.901C21.932 17.351 17.498 21.785 12.05 21.785ZM20.463 3.48804C19.3612 2.37896 18.0502 1.49958 16.6061 0.900841C15.162 0.302105 13.6133 -0.00407625 12.05 4.09775e-05C5.49501 4.09775e-05 0.160007 5.33504 0.157007 11.892C0.157007 13.988 0.704007 16.034 1.74501 17.837L0.0570068 24L6.36201 22.346C8.1056 23.296 10.0594 23.7938 12.045 23.794H12.05C18.604 23.794 23.94 18.459 23.943 11.901C23.9478 10.3383 23.6428 8.79014 23.0454 7.34607C22.4481 5.90201 21.5704 4.59071 20.463 3.48804Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2517_3285">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  };
  return (
    <footer className="w-full ">
      <div className="bg-[#014E00] bottom-0">
        <div className="flex flex-col justify-between px-5 py-10 md:flex-row lg:px-20">
          <div className="space-y-8 xl:col-span-1 mr-10 mb-10 md:mb-0  w-[320px]">
            <h1 className="text-slate-50">
              Puskesmas Kambang, Pesisir Selatan, Sumatera Barat.
            </h1>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Tooltip placement={"top"} key={item.name} content={item.name}>
                  <Link
                    target="#"
                    href={item.href}
                    className="text-slate-50 hover:text-slate-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                  </Link>
                </Tooltip>
              ))}
            </div>
            <h1 className="text-slate-50">© {Year} - Puskesmas Kambang</h1>
          </div>
          <div className="rounded-lg lg:w-[600px]">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0794582181456!2d100.70592017382769!3d-1.6916457362011081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2cd3d63824f1bf%3A0xf2be8cbf4b003033!2sPuskesmas%20Kambang!5e0!3m2!1sid!2sid!4v1685497567436!5m2!1sid!2sid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
