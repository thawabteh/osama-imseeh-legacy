import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
              Connect
            </motion.p>
            <motion.h2
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="section-heading text-foreground max-w-md"
            >
              Begin the <span className="text-primary">Conversation</span>
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-md mt-6"
            >
              For inquiries regarding speaking engagements, investment partnerships, 
              or media requests, please reach out through the form or the channels below.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="mt-12 space-y-4"
            >
              {["LinkedIn", "Twitter", "Email"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="block nav-link link-underline w-fit"
                >
                  {platform}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.form
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="label-caps text-muted-foreground text-[10px] mb-2 block">
                  {field.label}
                </label>
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
              <label className="label-caps text-muted-foreground text-[10px] mb-2 block">
                Message
              </label>
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
              className="label-caps text-[10px] text-primary-foreground gold-gradient px-10 py-4 mt-4 hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
