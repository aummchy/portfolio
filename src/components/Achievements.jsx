import { motion } from "framer-motion";
import { Award, Code2, ExternalLink } from "lucide-react";
import achievements from "../data/achievements";

const categoryIcons = {
  certification: Award,
  "competitive-programming": Code2,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Achievements &amp; Activities
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {item.issuer}
                      </p>
                      <p className="text-slate-600 text-xs mt-1">{item.date}</p>
                    </div>
                  </div>
                  {item.link && item.link !== "#" && (
                    <a
                      href={item.link}
                      aria-label={`View ${item.title}`}
                      className="text-slate-600 hover:text-white transition-colors shrink-0"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
