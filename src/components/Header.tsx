'use client';

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 w-full h-auto md:h-28 bg-[#055085]">
      {/* Header Section */}
      <div className="flex items-center justify-between px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Sindh Government Logo"
            width={90}
            height={113}
            className="relative top-10 w-[60px] h-auto md:w-[90px]"
          />
        </div>

        {/* Title Section */}
        <div className="text-center text-sm">
          <h1 className="hidden text-[14px] font-extrabold text-[#b9d8f3] text_shadow lg:block xl-lg:text-xl xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text-[1.125rem] font-extrabold text-[#b9d8f3] text_shadow lg:hidden">
            Tuition Free Program
          </h1>
        </div>

        {/* Navigation Section */}
        <nav className="hidden items-center gap-5 text-[#FAF9F6] md:flex lg:gap-10">
          {["Home", "Apply", "Jobs", "Result", "Courses"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold hover:text-gray-300 lg:text-md xl:text-lg"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Sidebar Toggle Button */}
        <button
          className="text-2xl text-[#FAF9F6] focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-[#055085] text-[#FAF9F6] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="p-4 text-xl focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
          ✖
        </button>
        <nav className="flex flex-col gap-5 px-6 mt-10">
          {["Home", "Apply", "Jobs", "Result", "Courses"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold hover:text-gray-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
