import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

function Notification() {
  return (
    <Card>
      <div>Notifications</div>
      <br />
      <Link href="/dashboard/archived" className="text-blue-600 bg-amber-200"> == go to archived</Link>
    </Card>
  );
}

export default Notification;
