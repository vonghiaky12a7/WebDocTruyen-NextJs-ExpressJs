"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import RightNav from "@/app/components/RightNav";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Giả lập trạng thái đăng nhập

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={100} height={80} />
        </Link>


        {/* Avatar hoặc Đăng ký */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* User Avatar Component */}
          <RightNav isLoggedIn={isLoggedIn} />
        </div>

        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-2 md:p-0 mt-3 border border-gray-100 rounded-lg bg-gray-50 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="py-1 px-1 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link
                href="/danh-muc"
                className="py-1 px-1 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Danh Mục
              </Link>
            </li>
            <li>
              <Link
                href="/top-truyen"
                className="py-1 px-1 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Top Truyện
              </Link>
            </li>
            <li>
              <Link
                href="/lien-he"
                className="py-1 px-1 text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
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
