import React, { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import { ReactSession } from "react-client-session";

const Admin = (props) => {
  const admin = ReactSession.get("admin");
  console.log(admin);

  if (admin != "LoggedIn") {
    return <AdminLogin />;
  }

  return <div>admin</div>;
};

export default Admin;
