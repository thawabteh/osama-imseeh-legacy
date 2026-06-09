import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { Send, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  ar: {
    tag: "تواصل",
    headA: "ابدأ ",
    headB: "الحوار",
    desc: "للاستفسارات المتعلقة بالمشاركات التحدثية، أو الشراكات الاستثمارية، أو الطلبات الإعلامية، يُرجى التواصل عبر النموذج أو القنوات أدناه.",
    socials: [
      { label: "لينكدإن", href: "https://www.linkedin.com/in/osama-imseeh-a56a4b35/" },
      { label: "انستاقرام", href: "https://www.instagram.com/osamaimseeh/" },
      { label: "فيسبوك", href: "https://www.facebook.com/osama.imseeh.1/" },
    ],
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    submit: "إرسال الرسالة",
  },
  en: {
    tag: "Get in Touch",
    headA: "Start the ",
    headB: "Conversation",
    desc: "For speaking engagements, investment partnerships, or media inquiries, please reach out via the form or the channels below.",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/osama-imseeh-a56a4b35/" },
      { label: "Instagram", href: "https://www.instagram.com/osamaimseeh/" },
      { label: "Facebook", href: "https://www.facebook.com/osama.imseeh.1/" },
    ],
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const ContactSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info - reading-start side */}
          <div className="text-start order-2 lg:order-1">
            <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-start">
              <Send className="w-5 h-5 text-primary" />
              <p className="text-primary text-xl md:text-2xl" style={arFont}>
                {t.tag}
              </p>
            </motion.div>

            <motion.h2
              {...fadeInUp}
              transition={withDelay(0.1)}
              style={{ ...arFont, fontWeight: 700 }}
            >
              <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">{t.headA}</span>
              <span className="text-primary text-5xl md:text-6xl lg:text-7xl">{t.headB}</span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.2 }}
              className="w-20 h-px bg-primary/40 mt-6 mb-8 origin-right ltr:origin-left me-auto"
            />

            <motion.p
              {...fadeInUp}
              transition={withDelay(0.2)}
              className="text-foreground/60 text-lg md:text-xl leading-[2] max-w-md"
              style={arFont}
            >
              {t.desc}
            </motion.p>

            <motion.div {...fadeInUp} transition={withDelay(0.3)} className="mt-12 space-y-3">
              {t.socials.map((platform, i) => (
                <motion.a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: quinticEase, delay: 0.4 + 0.1 * i }}
                  className="group flex items-center gap-3 w-fit py-2 text-foreground/70 transition-colors duration-300 hover:text-primary me-auto"
                  style={{ ...arFont, fontWeight: 700 }}
                >
                  <div className="h-px flex-1 min-w-[40px] bg-foreground/10 group-hover:bg-primary/30 transition-colors duration-300" />
                  <span className="text-xl md:text-2xl">{platform.label}</span>
                  <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Form - reading-end side */}
          <motion.form
            {...fadeInUp}
            transition={withDelay(0.2)}
            onSubmit={handleSubmit}
            className="space-y-8 text-start order-1 lg:order-2"
          >
            {[
              { name: "name" as const, label: t.name, type: "text" },
              { name: "email" as const, label: t.email, type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label
                  className={`block text-lg mb-2 transition-colors duration-300 ${
                    focused === field.name ? "text-primary" : "text-foreground/50"
                  }`}
                  style={arFont}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-foreground/15 py-3 text-foreground text-lg focus:border-primary focus:outline-none transition-all duration-500"
                  style={arFont}
                  required
                />
              </div>
            ))}
            <div className="relative">
              <label
                className={`block text-lg mb-2 transition-colors duration-300 ${
                  focused === "message" ? "text-primary" : "text-foreground/50"
                }`}
                style={arFont}
              >
                {t.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={4}
                className="w-full bg-transparent border-b border-foreground/15 py-3 text-foreground text-lg focus:border-primary focus:outline-none transition-all duration-500 resize-none"
                style={arFont}
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-xl text-primary-foreground gold-gradient px-12 py-4 mt-6 transition-all duration-500"
              style={{ ...arFont, fontWeight: 700 }}
            >
              <span className="relative z-10 flex items-center gap-3 text-xl">
                {t.submit}
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
