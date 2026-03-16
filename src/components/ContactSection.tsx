import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, withDelay } from "@/lib/animations";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.p {...fadeInUp} className="label-caps text-primary mb-4">تواصل</motion.p>
            <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-md">
              ابدأ <span className="text-primary">الحوار</span>
            </motion.h2>
            <motion.p {...fadeInUp} transition={withDelay(0.2)} className="text-muted-foreground text-2xl leading-relaxed max-w-md mt-6">
              للاستفسارات المتعلقة بالمشاركات التحدثية، أو الشراكات الاستثمارية، 
              أو الطلبات الإعلامية، يُرجى التواصل عبر النموذج أو القنوات أدناه.
            </motion.p>
            <motion.div {...fadeInUp} transition={withDelay(0.3)} className="mt-12 space-y-4">
              {[
                { label: "لينكدإن", href: "#" },
                { label: "تويتر", href: "#" },
                { label: "البريد الإلكتروني", href: "#" },
              ].map((platform) => (
                <a key={platform.label} href={platform.href} className="block nav-link link-underline w-fit">
                  {platform.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.form {...fadeInUp} transition={withDelay(0.2)} onSubmit={handleSubmit} className="space-y-6">
            {([
              { name: "name" as const, label: "الاسم", type: "text" },
              { name: "email" as const, label: "البريد الإلكتروني", type: "email" },
            ]).map((field) => (
              <div key={field.name}>
                <label className="label-caps text-muted-foreground text-lg mb-2 block">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full bg-transparent border-b border-primary/20 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            ))}
            <div>
              <label className="label-caps text-muted-foreground text-[12px] mb-2 block">الرسالة</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-primary/20 py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="label-caps text-[13px] text-primary-foreground gold-gradient px-10 py-4 mt-4 hover:opacity-90 transition-opacity duration-300"
            >
              إرسال الرسالة
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
