import { useState, useEffect } from "react";
import { Fade, Label } from "./Fade";
import orvilleLogo from "@/assets/orville-logo.png";
import FlightPlanBg from "./FlightPlanBg";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const NAV_ITEMS: [string, string][] = [
    [t.nav.who, "studio"],
    [t.nav.ourWork, "cases"],
    [t.nav.ourProcess, "process-link"],
    [t.nav.contact, "contact"],
  ];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) => {
    if (id === "process-link") {
      window.location.href = "/process";
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-orville-charcoal relative overflow-hidden">
      <FlightPlanBg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.38]" />

      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(38,38,42,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(245,244,240,0.1)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img src={orvilleLogo} alt="Orville" className="h-8 w-8 rounded" />
            <span className="font-heading text-lg font-semibold tracking-tight text-orville-offwhite">
              Orville
            </span>
          </button>
          <nav className="hidden sm:flex gap-7 items-center">
            {NAV_ITEMS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="font-mono text-xs tracking-[0.05em] transition-colors duration-300 text-white/50 hover:text-orville-offwhite"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setLocale(locale === "nl" ? "en" : "nl")}
              className="font-mono text-xs tracking-[0.05em] text-white/50 hover:text-orville-offwhite transition-colors duration-300 border border-white/20 rounded px-2 py-1"
            >
              {locale === "nl" ? "EN" : "NL"}
            </button>
          </nav>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 relative z-10">
        <Fade delay={0.15}>
          <Label variant="green" className="mb-7">
            {t.hero.label}
          </Label>
        </Fade>
        <Fade delay={0.35}>
          <h1 className="font-heading text-3xl md:text-[46px] font-light leading-[1.22] text-orville-offwhite tracking-tight">
            {t.hero.line1}
          </h1>
        </Fade>
        <Fade delay={0.5}>
          <h1 className="font-heading text-3xl md:text-[46px] font-semibold leading-[1.22] text-orville-offwhite tracking-tight mb-8">
            {t.hero.line2}
          </h1>
        </Fade>
        <Fade delay={0.65}>
          <p className="font-body text-lg leading-[1.7] text-orville-offwhite/85 max-w-[560px]">
            {t.hero.body}
          </p>
        </Fade>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-auto animate-breathe" style={{ left: 'calc(max((100% - 1200px) / 2, 24px) + 0px)' }}>
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
