import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              aria-label={`${project.title} GitHub repository`}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              aria-label={`${project.title} live demo`}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
