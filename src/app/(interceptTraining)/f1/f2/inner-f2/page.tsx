import Link from "next/link";
import React from "react";

export default function innerF2() {
  return (
    <>
      <h1>InnerF2</h1>
      <Link href={"/f5"}> go to f5</Link>
    </>
  );
}
