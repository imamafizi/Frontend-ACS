"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/redux/slices/userSlices";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("login");
    router.push("/login");
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src="/acs.png" width={100} height={20} alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-900">
              Asrindo Citraseni Satria
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            {user.id ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-900 text-2xl"
                >
                  Hey, {user.username}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/register" className="text-gray-500">
                  Register
                </Link>
                <Link href="/login" className="text-gray-500">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 text-sm">
              <li>
                <Link href="/" className="text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-900">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-900">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-900">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
