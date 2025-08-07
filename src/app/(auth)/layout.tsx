"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {children}
      <div className="flex justify-center gap-3 ">
        <Link className="bg-amber-300" href={"/login"}>login</Link>
        <Link className="bg-amber-300" href={"/register"}>register</Link>
      </div>
    </>
  );
}
