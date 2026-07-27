// src/constants/Navbar.jsx
import { useState } from "react";
import { openDemoFullscreen } from "../utils/openDemoFullscreen";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export default function Navbar({ variant = "light" }) {
  const [open, setOpen] = useState(false);
  const dark = variant === "dark"; // "dark" = navy bg, white text (non-landing pages) · "light" = white bg, navy text (landing page)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] animate-slideDown py-3.5 ${
        dark
          ? "bg-navy border-b border-ice/10"
          : "bg-white/90 backdrop-blur-xl border-b border-navy/10 shadow-[0_1px_0_rgba(10,31,68,0.04)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${
            dark ? "bg-ice/10 border border-ice/20" : "bg-navy"
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </span>
          <span className={`font-display font-semibold text-[1.05rem] tracking-tight ${
            dark ? "text-ice" : "text-navy"
          }`}>
            <span className="text-amex-blue">Voyager</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-body text-[0.85rem] transition-colors duration-300 py-1
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                  after:bg-amex-blue after:transition-all after:duration-300 hover:after:w-full ${
                    dark ? "text-ice/70 hover:text-ice" : "text-navy/60 hover:text-navy"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openDemoFullscreen}
          className={`hidden md:inline-flex items-center gap-1.5 font-body font-medium text-[0.85rem] px-5 py-2.5 rounded-lg
            transition-all duration-300 hover:-translate-y-0.5 ${
              dark
                ? "bg-ice text-navy hover:bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                : "bg-navy text-white hover:bg-amex-blue shadow-[0_1px_2px_rgba(10,31,68,0.15)] hover:shadow-[0_6px_16px_rgba(0,111,207,0.25)]"
            }`}
        >
          Watch Demo
        </button>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-[1.5px] transition-all duration-300 ${dark ? "bg-ice" : "bg-navy"} ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`h-[1.5px] transition-all duration-300 ${dark ? "bg-ice" : "bg-navy"} ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[1.5px] transition-all duration-300 ${dark ? "bg-ice" : "bg-navy"} ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-t px-6 py-6 animate-fadeUp ${
          dark ? "bg-navy/95 border-ice/10" : "bg-white/95 border-navy/10"
        }`}>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block font-body py-2.5 border-b transition-colors duration-300 ${
                    dark ? "text-ice/70 hover:text-ice border-ice/5" : "text-navy/70 hover:text-navy border-navy/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openDemoFullscreen();
            }}
            className={`mt-5 block text-center font-body font-medium text-sm px-5 py-3 rounded-lg ${
              dark ? "bg-ice text-navy" : "bg-navy text-white"
            }`}
          >
            Watch Demo
          </button>
        </div>
      )}
    </header>
  );
}