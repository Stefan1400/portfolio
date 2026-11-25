'use client';

import type { MouseEvent } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLenis } from "../smoothScrolling";

export default function FloatingActions() {
  const lenisRef = useLenis();

  function navigateToContact(event: MouseEvent<HTMLAnchorElement>) {
    if (
      !lenisRef?.current ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", event.currentTarget.href);
    lenisRef.current.scrollTo("#contact");
  }

  return (
    <div className="fixed right-[calc(1rem+env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex w-fit max-w-[calc(100vw-2rem-env(safe-area-inset-left)-env(safe-area-inset-right))] flex-col items-stretch gap-4 sm:right-[calc(1.5rem+env(safe-area-inset-right))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:flex-row sm:items-center">
      <Link
        href="/#contact"
        onClick={navigateToContact}
        className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-black transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-200 hover:cursor-pointer active:scale-[0.99]"
      >
        <span className="text-sm font-semibold tracking-wide">
          Get in touch
        </span>
        <Mail
          size={18}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>

      <a
        href="https://github.com/Stefan1400"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#131313] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:cursor-pointer active:scale-[0.99]"
      >
        <span className="text-sm font-semibold tracking-wide">
          View GitHub
        </span>
        <FaGithub
          size={18}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  );
}
