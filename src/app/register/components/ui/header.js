// components/Header.js
"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-start pt-6">
      <Image
        src="/logo.png"
        alt="IndusLink Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
