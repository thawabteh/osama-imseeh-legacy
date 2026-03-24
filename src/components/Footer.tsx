const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-foreground text-5xl" style={{ fontFamily: "'Lateef', serif" }}>أسامة إمسيح</p>
        <div className="flex items-center gap-8">
          {[
            { label: "لينكدإن", href: "https://www.facebook.com/osama.imseeh.1/" },
            { label: "انستاقرام", href: "https://www.facebook.com/osama.imseeh.1/" },
            { label: "فيسبوك", href: "https://www.facebook.com/osama.imseeh.1/" },
          ].map((s) => (
            <a key={s.label} className="nav-link link-underline text-2xl" href={s.href}>
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-2xl">
          © {new Date().getFullYear()} جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
