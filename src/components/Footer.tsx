const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-primary/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-foreground text-5xl" style={{ fontFamily: "'Lateef', serif" }}>أسامة إمسيح</p>
        <div className="flex items-center gap-8">
          {["لينكدإن", "تويتر", "إنستغرام"].map((s) =>
          <a key={s} className="nav-link link-underline text-2xl" href="https://www.facebook.com/osama.imseeh.1/">{s}</a>
          )}
        </div>
        <p className="text-muted-foreground text-2xl">
          © {new Date().getFullYear()} جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>);

};

export default Footer;