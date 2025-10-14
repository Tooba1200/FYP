// components/Header.js
"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-start pt-3">
      <Image
        src="/logo.png"
        alt="IndusLink Logo"
        width={160}
        height={60}
        className="object-contain"
      />
    </div>
  );
}
