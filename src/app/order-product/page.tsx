"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleCheckOut = () => {
    console.log("checking your order");
    router.push("/");
  };
  return (
    <div>
      <h1>check out the order</h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleCheckOut}
      >
        Check Out
      </button>
    </div>
  );
}
