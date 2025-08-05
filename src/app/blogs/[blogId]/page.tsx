import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { blogId: string } }) {
  const blogId = (await params).blogId;
  if (parseInt(blogId) > 1001) {
    notFound();
  }
  return (
    <div>
      <h1>blog details for blog id number :{blogId}</h1>
    </div>
  );
}
