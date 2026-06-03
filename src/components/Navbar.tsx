import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  ar: {
    name: "أسامة كرم امسيح",
    items: [
      { label: "الرؤية", href: "#about" },
      { label: "المكتبة", href: "#books" },
      { label: "تأملات", href: "#blog" },
      { label: "محطات", href: "#gallery" },
      { label: "تواصل", href: "#contact" },
    ],
    switchTo: "EN",
  },
  en: {
    name: "Osama Karam Imseeh",
    items: [
      { label: "Vision", href: "#about" },
      { label: "Library", href: "#books" },
      { label: "Reflections", href: "#blog" },
      { label: "Highlights", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    switchTo: "ع",
  },
} as const;

const Navbar = () => {
  const { lang, toggle } = useLang();
  const t = COPY[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fontStyle =
    lang === "ar"
      ? { fontFamily: "'Montserrat Arabic', sans-serif" }
      : { fontFamily: "'Montserrat', 'Montserrat Arabic', sans-serif" };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="text-foreground text-2xl md:text-3xl font-normal" style={fontStyle}>
          {t.name}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {t.items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-6">
              <a href={item.href} className="nav-link link-underline text-base" style={fontStyle}>
                {item.label}
              </a>
              {i < t.items.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
          ))}
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-foreground/20 px-3 py-1.5 text-foreground/80 transition-all hover:border-primary/50 hover:text-primary"
            style={fontStyle}
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-bold">{t.switchTo}</span>
          </button>
        </div>

        <button
          className="md:hidden text-foreground flex items-center gap-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={lang === "ar" ? "القائمة" : "Menu"}
        >
          <span
            onClick={(e) => { e.stopPropagation(); toggle(); }}
            className="flex items-center gap-1 rounded-full border border-foreground/20 px-2.5 py-1 text-foreground/80 text-sm font-bold"
            style={fontStyle}
            role="button"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            {t.switchTo}
          </span>
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/10 px-6 pb-6"
        >
          {t.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 nav-link"
              style={fontStyle}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
