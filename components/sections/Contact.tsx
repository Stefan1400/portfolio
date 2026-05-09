import { Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const email = "stefan.besonen783@gmail.com";

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#131313] text-[#f5f5f5] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-50 md:pt-40 lg:pt-40 pb-40">
        <h1 className="text-white/20 mb-2 text-2xl sm:text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight pointer-events-none select-none">
          get in touch
        </h1>

        <div className="max-w-3xl">

          {/* EMAIL SECTION */}
          <div className="mt-7">
            <h2 className="text-white/40 mb-2 text-1xl sm:text-1xl md:text-1xl leading-[1.15] font-normal tracking-tight">
              Contact via email
            </h2>

            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-zinc-300 break-all"
            >
              {email}

              <button
                type="button"
                aria-label="Copy email"
              >
                <Copy size={20} />
              </button>
            </a>
          </div>

          {/* SOCIAL SECTION */}
          <div className="mt-20">
            <h2 className="text-white/40 mb-4 text-1xl sm:text-1xl md:text-1xl leading-[1.15] font-normal tracking-tight">
              Other ways to reach me
            </h2>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/stefan-besonen-02a670385/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                
              >
                <FaLinkedin
                  size={26}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/Stefan1400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  size={26}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}