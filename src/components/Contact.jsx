import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:[your-email]",
    icon: Mail,
    display: "[your-email]",
  },
  {
    label: "GitHub",
    href: "#",
    icon: GithubIcon,
    display: "github.com/[your-username]",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedinIcon,
    display: "linkedin.com/in/[your-username]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 max-w-md mx-auto mb-8"
        >
          I&apos;m currently looking for internship and placement opportunities.
          Feel free to reach out if you&apos;d like to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
              >
                <Icon size={16} />
                <span className="text-sm">{link.display}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
