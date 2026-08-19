import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-start gap-4 p-6 rounded-xl border border-slate-800 bg-slate-900/50"
        >
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
            <GraduationCap size={22} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              B.Tech Information Technology
            </h3>
            <p className="text-emerald-400 text-sm">
              Walchand College of Engineering, Sangli
            </p>
            <p className="text-slate-500 text-sm mt-1">[Start Year] - [End Year]</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
