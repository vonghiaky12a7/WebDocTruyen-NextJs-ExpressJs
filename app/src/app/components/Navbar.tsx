"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import RightNav from "@/app/components/RightNav";
import ImageHero from "./Image";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả lập trạng thái đăng nhập

  return (
    <nav className="w-full"> {/* Make navbar full width */}
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-20">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <ImageHero />
        </Link>

        {/* Avatar hoặc Đăng ký */}
        <div className="flex items-center space-x-5 md:order-2">
          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* User Avatar Component */}
          <RightNav isLoggedIn={isLoggedIn} />
        </div>

        {/* Navigation Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-2 md:p-0 mt-3 border border-gray-100 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
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
