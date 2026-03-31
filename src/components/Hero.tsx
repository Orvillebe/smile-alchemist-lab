import { useState, useEffect } from "react";
import { Fade, Label } from "./Fade";

const NAV_ITEMS: [string, string][] = [
  ["Studio", "studio"],
  ["Our work", "cases"],
  ["Contact", "contact"],
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-[60px] bg-orville-charcoal relative">
      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-400"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled
            ? "1px solid hsl(var(--border))"
            : "1px solid transparent",
        }}
      >
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-heading text-lg font-semibold cursor-pointer tracking-tight transition-colors duration-400 ${
            scrolled ? "text-foreground" : "text-orville-offwhite"
          }`}
        >
          Orville
        </span>
        <nav className="hidden sm:flex gap-7">
          {NAV_ITEMS.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`font-mono text-xs tracking-[0.05em] transition-colors duration-300 hover:${
                scrolled ? "text-foreground" : "text-orville-offwhite"
              } ${
                scrolled
                  ? "text-orville-mid hover:text-foreground"
                  : "text-white/50 hover:text-orville-offwhite"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero content */}
      <div className="max-w-[860px]">
        <Fade delay={0.15}>
          <Label variant="green" className="mb-7">
            Product Design & Engineering
          </Label>
        </Fade>
        <Fade delay={0.35}>
          <h1 className="font-heading text-3xl md:text-[46px] font-light leading-[1.22] text-orville-offwhite tracking-tight">
            Design choices are never neutral.
          </h1>
        </Fade>
        <Fade delay={0.5}>
          <h1 className="font-heading text-3xl md:text-[46px] font-semibold leading-[1.22] text-orville-offwhite tracking-tight mb-8">
            We co-pilot yours so your product becomes part of the solution, not
            the problem.
          </h1>
        </Fade>
        <Fade delay={0.65}>
          <p className="font-body text-[17px] leading-[1.75] text-orville-mid max-w-[560px]">
            Two engineers from Belgium developing modular, repairable physical
            products at the intersection of circularity and technical
            feasibility. We validate the problem before we design the solution.
            Then we stay with it, from concept to production.
          </p>
        </Fade>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-[60px] animate-breathe">
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path
            d="M9 3 L9 19 M3 14 L9 20 L15 14"
            stroke="hsl(var(--orville-mid))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
