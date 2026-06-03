// Central pdf.js configuration for react-pdf.
// The worker is imported via Vite's `?worker` so it is bundled and instantiated
// directly (no reliance on the host serving .mjs with the correct MIME type),
// which makes the reader work the same in dev, preview, production, and static hosts.
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";

pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker();

export { pdfjs };
