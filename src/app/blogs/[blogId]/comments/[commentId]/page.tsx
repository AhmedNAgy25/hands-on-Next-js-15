import React from "react";

export default async function page({
  params,
}: {
  params: { blogId: string; commentId: string };
}) {
  const { blogId, commentId } = await params;
  return (
    <div>
      <h1>
        the comment from blog id :{blogId} || with id :{commentId}
      </h1>
    </div>
  );
}
