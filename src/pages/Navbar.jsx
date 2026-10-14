import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

function Brand() {
  return (
    <a href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#176747] text-white shadow-sm">
        <GraduationCap size={24} strokeWidth={1.8} />
      </div>

      <div>
        <p className="text-[16px] font-extrabold leading-tight tracking-[-0.04em] text-[#173B30]">
          EAK International
        </p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.23em] text-[#87938D]">
          School · Learn to lead
        </p>
      </div>
    </a>
  );
}

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Facilities", "/facilities"],
  ["Campus Life", "/events"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="bg-[#173B30] px-4 py-2.5 text-center text-xs font-medium text-white/90 sm:text-[13px]">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#A9E5C2]" />
        Admissions inquiry for the upcoming academic session is now open.

        <a
          href="/admissions"
          className="ml-2 inline-flex items-center gap-1 font-bold text-[#C6F1D7] underline decoration-white/30 underline-offset-4 transition hover:text-white"
        >
          Explore <ArrowRight size={13} />
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E8EDE9] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-semibold text-[#61716A] transition-colors hover:text-[#176747]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/contact"
              className="px-3 py-2 text-[13px] font-bold text-[#24463A] transition hover:text-emerald-700"
            >
              Get in touch
            </a>

            <a
              href="/admissions"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#176747] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#10553A] hover:shadow-lg hover:shadow-emerald-900/10"
            >
              Apply for Admission
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5ECE7] text-[#24463A] lg:hidden"
          >
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="border-t border-[#E8EDE9] bg-white px-5 py-4 lg:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="block border-b border-[#EEF1EE] py-3.5 text-sm font-semibold text-[#52635B] last:border-0"
              >
                {label}
              </a>
            ))}

            <a
              href="/admissions"
              onClick={() => setMobileMenu(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#176747] px-5 py-3.5 text-sm font-bold text-white"
            >
              Apply for Admission <ArrowRight size={16} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}