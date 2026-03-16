const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-primary/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-2xl text-foreground" style={{ fontFamily: "'Lateef', serif" }}>أسامة إمسيح</p>
        <div className="flex items-center gap-8">
          {["لينكدإن", "تويتر", "إنستغرام"].map((s) => (
            <a key={s} href="#" className="nav-link link-underline">{s}</a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
