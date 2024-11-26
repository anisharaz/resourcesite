"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PracticeQuiz } from "@/components/PracticeQuizToggle";

const PdfViewer = ({ url }: { url: string }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      className="w-full"
      style={{
        height: "calc(100vh - 114px)",
      }}
    >
      <Worker workerUrl="/worker.js">
        <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
      <PracticeQuiz />
    </div>
  );
};
export default PdfViewer;
