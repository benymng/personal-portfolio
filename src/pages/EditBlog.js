import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { EditForm } from "../components/EditForm";
import { Test } from "../components/Test";

export const EditBlog = () => {
  return (
    <div>
      <EditForm />
    </div>
  );
};
