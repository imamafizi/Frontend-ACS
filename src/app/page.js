"use client";

import AuthGuard from "@/hoc/AuthGuard";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute w-[2000px] inset-0 -z-10 ">
        <Image
          src="/Hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          className="w-full h-full object-cover brightness-50 ml-[-25px]" // Adjust brightness as needed
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-blur-md"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Transportation, Drilling, Work Over and Heavy Duty
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Comprehensive Provision of Drilling Services, Work Service Rigs,
          Transportation Solutions, and Heavy Equipment Expertise
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-800 hover:bg-red-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthGuard(Home);
