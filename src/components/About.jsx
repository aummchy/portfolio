import { motion } from "framer-motion";
import personal from "../data/personal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-slate-400 leading-relaxed">
              Hello! I&apos;m Aum, a software engineering student passionate about
              building real-world applications. I enjoy working across the stack
              and am always looking for opportunities to learn and grow.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My interest in programming started with solving problems in C++ and
              has evolved into building full-stack web applications using React,
              Node.js, and modern databases. I&apos;m also exploring AI/ML and
              expanding my skill set every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Education
              </h3>
              <p className="text-slate-300 font-medium">
                {personal.degree}
              </p>
              <p className="text-slate-500 text-sm">
                {personal.college}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Current Focus
              </h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>C++ / Data Structures &amp; Algorithms</li>
                <li>React &amp; Frontend Development</li>
                <li>Node.js &amp; Backend Development</li>
                <li>FastAPI &amp; Flask</li>
                <li>AI/ML fundamentals</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
