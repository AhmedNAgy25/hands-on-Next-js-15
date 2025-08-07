import React from "react";

export default async function page({
  params,
}: {
  params: { blogId: string; commentId: string };
}) {
  const { blogId, commentId } = await params;
  if(Math.floor(Math.random()*2)===1){
    throw Error("Error which i make to test this next feature.")//this error make by me not worry
  }
  return (
    <div>
      <h1>
        the comment from blog id :{blogId} || with id :{commentId}
      </h1>
    </div>
  );
}
