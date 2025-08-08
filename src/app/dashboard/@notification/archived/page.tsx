import { Card } from "@/components/card";
import Link from "next/link";

function ArchivedNotification() {
  return (
    <Card>
      <div>ArchivedNotification</div>
      <br />
      <Link href="/dashboard/" className="text-blue-600 bg-amber-200"> == go to default</Link>
    </Card>
  );
}

export default ArchivedNotification;
