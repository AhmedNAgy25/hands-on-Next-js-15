"use client";
import Link from "next/link";
import React, { use } from "react";

function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "ar" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>news articel {articleId}</h1>
      <p>reading in {lang}</p>
      <div className="flex gap-4 text-green-500 bg-fuchsia-950">
        <Link href={`/article/${articleId}?lang=en`}>English</Link>
        <Link href={`/article/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/article/${articleId}?lang=ar`}>Arabic</Link>
      </div>
    </>
  );
}

export default NewsArticle;
