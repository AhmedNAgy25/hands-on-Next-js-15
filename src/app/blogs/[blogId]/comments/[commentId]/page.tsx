import React from "react";

export default function page({
  params,
}: {
  params: { blogId: string; commentId: string };
}) {
  const { blogId, commentId } = params;
  return (
    <div>
      <h1>
        the comment from blog id :{blogId} || with id :{commentId}
      </h1>
    </div>
  );
}
