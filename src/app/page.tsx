import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>hellow Aaa </h1>
      <Link href="/about">about</Link>
      <Link href="/blogs">blogs</Link>
      <Link href="/articles/breaking-news-12?lang=en">read in english</Link>
      <Link href="/articles/breaking-news-12?lang=ar">read in arabic</Link>
    </div>
  );
}
