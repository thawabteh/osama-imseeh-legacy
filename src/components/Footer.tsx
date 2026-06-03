import { useLang } from "@/lib/i18n";

const COPY = {
  ar: {
    name: "أسامة إمسيح",
    socials: [
      { label: "لينكدإن", href: "https://www.facebook.com/osama.imseeh.1/" },
      { label: "انستاقرام", href: "https://www.facebook.com/osama.imseeh.1/" },
      { label: "فيسبوك", href: "https://www.facebook.com/osama.imseeh.1/" },
    ],
    rights: "جميع الحقوق محفوظة.",
  },
  en: {
    name: "Osama Imseeh",
    socials: [
      { label: "LinkedIn", href: "https://www.facebook.com/osama.imseeh.1/" },
      { label: "Instagram", href: "https://www.facebook.com/osama.imseeh.1/" },
      { label: "Facebook", href: "https://www.facebook.com/osama.imseeh.1/" },
    ],
    rights: "All rights reserved.",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const Footer = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <footer className="py-8 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-foreground text-3xl md:text-4xl" style={{ ...arFont, fontWeight: 700 }}>
          {t.name}
        </p>
        <div className="flex items-center gap-8">
          {t.socials.map((s) => (
            <a
              key={s.label}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-lg md:text-xl"
              href={s.href}
              style={arFont}
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-foreground/50 text-lg md:text-xl" style={arFont}>
          © {new Date().getFullYear()} {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
