"use client";
import Link from "next/link";
import Image from "next/image";
import { useRegFormContext } from "@/app/usestate";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();


  const { RegPersonalForm, RegAuthPassword } = useRegFormContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Debugging logs
    console.log("Input Email:", email);
    console.log("Input Password:", password);
    console.log("Context Email:", RegPersonalForm.email);
    console.log("Context Password:", RegAuthPassword.password);

    if (
      email === RegPersonalForm.email &&
      password === RegAuthPassword.password
    ) {
      setError("");
      alert("✅ Login successful!");
      router.push("/sellerside");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100dvh] w-[100%] ">

      <form onSubmit={handleLogin}>
        <div className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] border px-2 py-5 border-gray-200 rounded-lg">
          <Image
            src="/logo.png"
            alt="IndusLink Logo"
            width={100}
            height={100}
            className="m-auto mb-5"
          />
          <h2 className="text-[16px] font-semibold text-center mb-6">
            Login
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="@gmail.com"
              className="w-[260px] text-[12px] border border-gray-300 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-medium mb-1 text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className=" w-[260px] text-[12px] border border-gray-300 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          </div>
          <div className="text-[12px] text-left mb-4">
            <Link href="#" className="text-blue-700 hover:underline underline">
              Forgot Password?
            </Link>
          </div>
          <button onClick={() => router.push('/sellerside')} className="w-full my-3 bg-[rgb(50,69,75)] text-white py-2 rounded-md hover:bg-gray-900 transition">
            Login
          </button>
          <p className="text-center mt-4 text-sm">
            Create Account?{" "}
            <Link href="#" className="text-blue-700 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form >
    </div>
  );
}
