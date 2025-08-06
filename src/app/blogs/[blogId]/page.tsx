import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type props = {
  params: Promise<{ blogId: string }>;
};
//work only on server side components
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).blogId;
  return { title: `blog ${id}` };
};

export default async function page({ params }: props) {
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
