import React from "react";
import sum from "./sum";
export default function page() {
  const secretData = sum(5, 6);
  return <div>secret page with secret data : {secretData}</div>;
}
