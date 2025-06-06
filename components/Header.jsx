"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="shadow-md h-[10vh]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 px-3 py-1">
          Ali's Job Portal
        </h1>
        <div className="flex space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600 px-3 py-1 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 px-3 py-1 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 px-3 py-1 transition"
          >
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-indigo-600 text-white px-3 py-1 rounded-[2px] border-none"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
