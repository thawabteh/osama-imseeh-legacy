const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-6">
        <p
          className="text-foreground text-3xl md:text-4xl"
          style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
        >
          أسامة إمسيح
        </p>
        <div className="flex items-center gap-8">
          {[
            { label: "لينكدإن", href: "https://www.facebook.com/osama.imseeh.1/" },
            { label: "انستاقرام", href: "https://www.facebook.com/osama.imseeh.1/" },
            { label: "فيسبوك", href: "https://www.facebook.com/osama.imseeh.1/" },
          ].map((s) => (
            <a
              key={s.label}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-lg md:text-xl"
              href={s.href}
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              {s.label}
            </a>
          ))}
        </div>
        <p
          className="text-foreground/50 text-lg md:text-xl"
          style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
        >
          © {new Date().getFullYear()} .جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
