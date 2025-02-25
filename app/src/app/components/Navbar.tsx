"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Logo" width={150} height={200} />
        </Link>

        {/* Search Bar - Hiển thị trên màn hình lớn */}
        <div className="relative hidden md:block w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tìm kiếm truyện..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Avatar + Dropdown */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Search button for mobile */}
          <button
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
            title="Tìm kiếm"
            aria-label="Mở thanh tìm kiếm"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* User Avatar */}
        </div>

        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link
                href="/danh-muc"
                className="py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Danh Mục
              </Link>
            </li>
            <li>
              <Link
                href="/top-truyen"
                className="py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Top Truyện
              </Link>
            </li>
            <li>
              <Link
                href="/lien-he"
                className="py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
