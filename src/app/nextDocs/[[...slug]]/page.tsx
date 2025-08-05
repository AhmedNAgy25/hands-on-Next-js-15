import { notFound } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  //* slug is array of sequence params url like 11/34/2352/fsa/42/af
  const slug = (await params).slug ?? [];
  console.log(slug);
  if (parseInt(slug[1]) > 100 || parseInt(slug[0]) > 100) {
    notFound();
  }
  if (slug?.length === 2) {
    return (
      <h1>
        view docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>view docs for feature{slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
}
