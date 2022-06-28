import React from "react";
import { PostForm } from "../components/PostForm";
import { ReactSession } from "react-client-session";
import { OnlyForAdmin } from "../components/OnlyForAdmin";

export const AddBlog = () => {
  const admin = ReactSession.get("admin");
  if (admin !== "LoggedIn") {
    return <OnlyForAdmin />;
  }
  return (
    <div>
      <PostForm />
    </div>
  );
};
