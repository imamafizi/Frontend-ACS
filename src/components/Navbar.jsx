import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center  ">
            <Image
              src="/acs.png"
              width={100}
              height={20}
              alt="Picture of the author"
            ></Image>
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-red-900 ">
              Asrindo Citraseni Satria
            </span>
          </a>
          <div class="flex items-center space-x-6 ">
            <Link href="/register" className="text-gray-500">
              Register
            </Link>
            <Link href="/login" className="text-gray-500">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8  text-sm">
              <li>
                <a href="#" class="text-gray-900 " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 ">
                  Company
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 ">
                  Team
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-900 ">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
