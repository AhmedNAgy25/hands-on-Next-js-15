import React from "react";

function Dashboard({
  children,
  analysis,
  notification,
  revenue,
  login,
}: {
  children: React.ReactNode;
  analysis: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const auth:boolean = true;
  return auth ? ( //conditional route depend on auth 
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex-col flex">
          <div>{analysis}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1/2">{notification}</div>
      </div>
    </div>
  ) : (
    login //if auth is false route login slot
  );
}

export default Dashboard;
