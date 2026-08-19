import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Experience
        </motion.h2>

        <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500" />
              <div>
                <p className="text-xs text-slate-500 font-mono mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-emerald-400 text-sm mb-2">{item.company}</p>
                <ul className="space-y-1">
                  {item.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
