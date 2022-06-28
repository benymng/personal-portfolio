import React from "react";
import { AddTestimonialForm } from "../components/AddTestimonialForm";
import { ReactSession } from "react-client-session";
import { OnlyForAdmin } from "../components/OnlyForAdmin";

export const AddTestimonial = () => {
  const admin = ReactSession.get("admin");
  if (admin !== "LoggedIn") {
    return (
      <div>
        <OnlyForAdmin />
      </div>
    );
  }
  return (
    <div>
      <AddTestimonialForm />
    </div>
  );
};
