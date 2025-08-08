import Link from "next/link";
import React from "react";

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div className="flex gap-3">
        <Link href={"/f1/f2"}> F2</Link>
        <Link href={"/f3"}> F3</Link>
      </div>
    </>
  ); //here we make inner page that appear after reload or copy link to another user
}
