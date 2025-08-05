import React from "react";

export default async function page({ params }:{params:{blogId:string}}) {
  const blogId= params.blogId;
  return (
    <div>
      <h1>blog details for blog id number :{blogId}</h1>
    </div>
  );
}
