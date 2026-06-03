// Renders page 1 of each book PDF to a PNG cover in src/assets,
// using pdf.js inside real Chromium (via Playwright) for reliability.
// Run with: node scripts/render-covers.mjs
import { chromium } from "playwright";
import http from "node:http";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const jobs = [
  { pdf: "/public/books/milestones-on-lifes-paths.pdf", out: "src/assets/cover-milestones.png" },
  { pdf: "/public/books/life-taught-me.pdf", out: "src/assets/cover-life-taught-me.png" },
];

const MIME = {
  ".mjs": "text/javascript",
  ".js": "text/javascript",
  ".pdf": "application/pdf",
  ".html": "text/html",
  ".bcmap": "application/octet-stream",
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("not found");
    return;
  }
  res.setHeader("Content-Type", MIME[path.extname(filePath)] || "application/octet-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  fs.createReadStream(filePath).pipe(res);
});

await new Promise((r) => server.listen(0, r));
const port = server.address().port;
const base = `http://localhost:${port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
page.on("console", (m) => console.log("  [page]", m.text()));

const TARGET_W = 1500;

for (const job of jobs) {
  await page.setContent(`<!doctype html><html><body><canvas id="c"></canvas></body></html>`);
  const dataUrl = await page.evaluate(
    async ({ base, pdf, w }) => {
      const pdfjs = await import(`${base}/node_modules/pdfjs-dist/build/pdf.mjs`);
      pdfjs.GlobalWorkerOptions.workerSrc = `${base}/node_modules/pdfjs-dist/build/pdf.worker.mjs`;
      const doc = await pdfjs.getDocument({
        url: `${base}${pdf}`,
        standardFontDataUrl: `${base}/node_modules/pdfjs-dist/standard_fonts/`,
      }).promise;
      const pg = await doc.getPage(1);
      const vp0 = pg.getViewport({ scale: 1 });
      const vp = pg.getViewport({ scale: w / vp0.width });
      const c = document.getElementById("c");
      c.width = Math.ceil(vp.width);
      c.height = Math.ceil(vp.height);
      await pg.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      return c.toDataURL("image/png");
    },
    { base, pdf: job.pdf, w: TARGET_W }
  );
  const b64 = dataUrl.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync(path.join(root, job.out), Buffer.from(b64, "base64"));
  console.log(`wrote ${job.out} (${(Buffer.from(b64, "base64").length / 1024).toFixed(0)} KB)`);
}

await browser.close();
server.close();
console.log("done");
