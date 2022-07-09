import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../assets/Resume.pdf";

export const Resume = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
