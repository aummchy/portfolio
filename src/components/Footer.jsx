import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Aum Choudhary
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:[your-email]"
            aria-label="Email"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
