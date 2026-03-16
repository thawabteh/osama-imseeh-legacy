const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-primary/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-lg text-foreground">Osama Imseeh</p>
        <div className="flex items-center gap-8">
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <a key={s} href="#" className="nav-link link-underline">{s}</a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
