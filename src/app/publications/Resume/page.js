import React from "react";
import resumePDF from "/Resume.pdf";

export default function PDFViewer() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <iframe
        src={resumePDF}
        title="Resume"
        className="w-full max-w-4xl h-[80vh] border rounded shadow"
        style={{ minHeight: 600 }}
      />
    </div>
  );
}
