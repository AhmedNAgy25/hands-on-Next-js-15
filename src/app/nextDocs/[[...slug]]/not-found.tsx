"use client";
import {  usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  console.log(`=======${pathName}`);

  const featureId = pathName.split("/")[2];
  const conceptId = pathName.split("/")[4];
  return (
    <div>
      <h1>
        feature id : {featureId} or concept id :{conceptId} did not found
      </h1>
    </div>
  );
}
