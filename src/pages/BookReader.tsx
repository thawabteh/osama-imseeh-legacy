import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { books } from "@/lib/books-data";
import { useLang } from "@/lib/i18n";
import "@/lib/pdf";

const COPY = {
  ar: {
    back: "عودة",
    download: "تحميل",
    loading: "جارٍ تحميل الكتاب…",
    errorLoad: "تعذّر تحميل الكتاب. حاول مرة أخرى لاحقاً.",
    errorDownload: "تحميل الملف بدلاً من ذلك",
    notAvailable: "هذا الكتاب غير متاح للقراءة أونلاين",
    backLib: "العودة للمكتبة",
    prev: "السابق",
    next: "التالي",
    prevAria: "الصفحة السابقة",
    nextAria: "الصفحة التالية",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
  },
  en: {
    back: "Back",
    download: "Download",
    loading: "Loading the book…",
    errorLoad: "The book could not be loaded. Please try again later.",
    errorDownload: "Download the file instead",
    notAvailable: "This book is not available to read online",
    backLib: "Back to library",
    prev: "Previous",
    next: "Next",
    prevAria: "Previous page",
    nextAria: "Next page",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const BookReader = () => {
  const { slug } = useParams();
  const { lang, dir } = useLang();
  const t = COPY[lang];
  const book = books.find((b) => b.slug === slug);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pageWidth = useMemo(() => Math.min(containerWidth, 860) * zoom, [containerWidth, zoom]);

  // Safety net: if the custom renderer hasn't loaded any page within 12s
  // (e.g. the pdf.js worker failed silently), fall back to the native viewer.
  useEffect(() => {
    if (numPages > 0 || loadError) return;
    const id = window.setTimeout(() => setLoadError(true), 12000);
    return () => window.clearTimeout(id);
  }, [numPages, loadError]);

  const goPrev = useCallback(() => setPageNumber((p) => Math.max(1, p - 1)), []);
  const goNext = useCallback(() => setPageNumber((p) => Math.min(numPages || p, p + 1)), [numPages]);

  // Keyboard navigation, aware of reading direction.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const forward = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const backward = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
      if (e.key === forward) goNext();
      else if (e.key === backward) goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, dir]);

  if (!book || !book.pdf) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-foreground text-2xl" style={arFont}>
          {t.notAvailable}
        </p>
        <Link to="/#books" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all" style={{ ...arFont, fontWeight: 700 }}>
          <ArrowRight className="w-5 h-5 ltr:rotate-180" />
          <span className="text-lg">{t.backLib}</span>
        </Link>
      </div>
    );
  }

  // Icons point toward the page they navigate to, per reading direction.
  const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <Link to={`/book/${book.slug}`} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all shrink-0" style={{ ...arFont, fontWeight: 700 }}>
            <ArrowRight className="w-5 h-5 ltr:rotate-180" />
            <span className="text-base md:text-lg hidden sm:inline">{t.back}</span>
          </Link>

          <h1 className="text-foreground/90 text-base md:text-xl truncate text-center flex-1" style={{ ...arFont, fontWeight: 700 }}>
            {book.title[lang]}
          </h1>

          <a href={book.pdf} download className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors shrink-0" style={arFont}>
            <Download className="w-5 h-5" />
            <span className="text-base hidden md:inline">{t.download}</span>
          </a>
        </div>
      </header>

      {/* Reader area */}
      <div ref={containerRef} className="flex-1 w-full max-w-5xl mx-auto px-2 md:px-6 py-6 md:py-10">
        {loadError ? (
          /* Fallback: the browser's built-in PDF viewer. Always works without the pdf.js worker. */
          <div className="flex flex-col gap-4">
            <object data={book.pdf} type="application/pdf" className="w-full rounded-xl border border-foreground/10 bg-white" style={{ height: "82vh" }}>
              <iframe src={book.pdf} title={book.title[lang]} className="w-full rounded-xl border border-foreground/10 bg-white" style={{ height: "82vh" }} />
            </object>
            <a href={book.pdf} download className="text-primary text-lg text-center" style={{ ...arFont, fontWeight: 700 }}>
              {t.errorDownload}
            </a>
          </div>
        ) : (
          <Document
            file={book.pdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={() => setLoadError(true)}
            loading={
              <div className="flex flex-col items-center justify-center gap-4 py-32 text-foreground/60">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <span style={arFont}>{t.loading}</span>
              </div>
            }
          >
            <div className="relative flex justify-center">
              {numPages > 0 && (
                <>
                  <button
                    onClick={goPrev}
                    disabled={pageNumber <= 1}
                    aria-label={t.prevAria}
                    className="absolute start-0 md:start-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-background/80 border border-foreground/15 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-background disabled:opacity-25 disabled:pointer-events-none"
                  >
                    <PrevIcon className="w-6 h-6 md:w-7 md:h-7" />
                  </button>
                  <button
                    onClick={goNext}
                    disabled={pageNumber >= numPages}
                    aria-label={t.nextAria}
                    className="absolute end-0 md:end-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-background/80 border border-foreground/15 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-background disabled:opacity-25 disabled:pointer-events-none"
                  >
                    <NextIcon className="w-6 h-6 md:w-7 md:h-7" />
                  </button>
                </>
              )}

              <motion.div
                key={pageNumber}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex justify-center"
              >
                <div className="overflow-hidden rounded-xl shadow-2xl border border-foreground/10 bg-white">
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderAnnotationLayer
                    renderTextLayer
                    loading={
                      <div className="flex items-center justify-center bg-white" style={{ width: pageWidth, height: pageWidth * 1.4 }}>
                        <Loader2 className="w-7 h-7 animate-spin text-primary/60" />
                      </div>
                    }
                  />
                </div>
              </motion.div>
            </div>
          </Document>
        )}
      </div>

      {/* Bottom control bar */}
      {!loadError && numPages > 0 && (
        <div className="sticky bottom-0 z-30 border-t border-foreground/10 bg-background/85 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-center gap-3 md:gap-6">
            <button
              onClick={goPrev}
              disabled={pageNumber <= 1}
              className="inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-foreground/5 disabled:opacity-30 disabled:pointer-events-none transition-all"
              style={{ ...arFont, fontWeight: 700 }}
              aria-label={t.prevAria}
            >
              <PrevIcon className="w-5 h-5" />
              <span className="hidden sm:inline">{t.prev}</span>
            </button>

            <div className="flex items-center gap-1">
              <button onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.15).toFixed(2)))} className="p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-foreground/5 transition-all" aria-label={t.zoomOut}>
                <ZoomOut className="w-5 h-5" />
              </button>
              <button onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.15).toFixed(2)))} className="p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-foreground/5 transition-all" aria-label={t.zoomIn}>
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            <span className="text-foreground/70 text-sm md:text-base tabular-nums select-none" style={arFont}>
              {pageNumber} / {numPages}
            </span>

            <button
              onClick={goNext}
              disabled={pageNumber >= numPages}
              className="inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-foreground/5 disabled:opacity-30 disabled:pointer-events-none transition-all"
              style={{ ...arFont, fontWeight: 700 }}
              aria-label={t.nextAria}
            >
              <span className="hidden sm:inline">{t.next}</span>
              <NextIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookReader;
