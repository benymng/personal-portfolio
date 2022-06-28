import React from "react";
import { Testimonials } from "../components/Testimonials";
import { Testimonials2 } from "../components/Testimonials2";
import { TestimonialCard } from "../components/TestimonialCard";
import { withGlobalState } from "react-globally";
import { ReactSession } from "react-client-session";
const TestimonialsPage = (props) => {
  const name = ReactSession.get("admin");
  return (
    <div>
      {/* <Testimonials /> */}
      <Testimonials2 />
      {/* {props.globalState.admin} */}
    </div>
  );
};

export default withGlobalState(TestimonialsPage);
