"use client";

import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // Không dùng layout chung, chỉ render nội dung của trang con
}
