"use client";

import React, { useEffect, useRef } from "react";

const PDF: React.FC<{ module_pdf_path: string }> = ({ module_pdf_path }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && typeof window !== "undefined") {
      import("pspdfkit").then((PSPDFKit) => {
        if (PSPDFKit && PSPDFKit.default) {
          // Access the default export of PSPDFKit
          const pspdfKitInstance = PSPDFKit.default;

          // Check if the unload method is available before calling it
          if (pspdfKitInstance.unload) {
            pspdfKitInstance.unload(container);
          }

          pspdfKitInstance.load({
            container,
            document: "/doc.pdf",
            baseUrl: `${window.location.protocol}//${window.location.host}/`,
          });
        }
      });
    }
  }, []);

  return <div ref={containerRef} style={{ height: "100vh" }} />;
};

export default PDF;
