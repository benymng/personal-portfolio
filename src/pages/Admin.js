import React, { useState } from "react";
import { AdminLogin } from "../components/AdminLogin";

export const Admin = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <AdminLogin setToken={setToken} />;
  }

  return <div>Admin</div>;
};
