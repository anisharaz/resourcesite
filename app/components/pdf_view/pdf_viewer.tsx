"use client";

const PdfViewer = ({ url }: { url: string }) => {
  
  return (
      <div className="h-screen w-full">
          <iframe id="pdf-js-viewer" src={url} width="100%" height="100%" title="webviewer"></iframe>
      </div>
  );
};
export default PdfViewer;
