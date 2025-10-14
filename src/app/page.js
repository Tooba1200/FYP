import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App 🚀</h1>
      <p className="text-gray-600 mb-8">
        Click below to start your registration process.
      </p>

      {/* ✅ Button to go to /register */}
      <Link
        href="/register"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Yaha Aysha wala Paste ho ga code Ap please yaha click kr k next jaye
      </Link>
    </div>
  );
}
