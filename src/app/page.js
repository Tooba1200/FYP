"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage()
 {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900">
      <div className="bg-white py-5 px-2 shadow-[0_0_8px_rgba(0,0,0,0.3)] mb-3 rounded-lg">
        <Image
          src="/PHOTO-2025-09-30-21-49-13.jpg"
          alt="IndusLink Logo"
          width={100}
          height={100}
          className="m-auto mb-10"
          priority
        />
        <p className="text-[20px] font-semibold mb-8 self-start">
          Register as a ?
        </p>

        <div className="flex flex-col gap-6">
          <button
            onClick={() => router.push("/register")}
            className="bg-[#2f4f4f] hover:bg-[#1f3838] text-white text-lg font-medium py-3 px-30 rounded-lg shadow-md transition-all duration-300"
          >
            Seller
          </button>
          <button
            onClick={() => router.push("/register/buyer")}
            className="bg-[#2f4f4f] hover:bg-[#1f3838] text-white text-lg font-medium py-3 px-30 rounded-lg shadow-md transition-all duration-300"
          >
            Buyer
          </button>
        </div>
      </div>
    </div>
  );
}