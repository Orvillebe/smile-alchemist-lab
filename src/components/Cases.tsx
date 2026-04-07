import { useState } from "react";
import { Fade, Label } from "./Fade";
import fairvacuumImg from "@/assets/fairvacuum.jpg";
import itrackImg from "@/assets/itrack.png";
import icall2Img from "@/assets/icall2.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const IMAGES: Record<string, string | null> = {
  "Model 1": fairvacuumImg,
  "Multimedia Handset": "https://www.orville.be/web/image/1156-185d6852/mmhandset2.png",
  "PURE-D": "https://www.orville.be/web/image/1149-fcfa87fe/pure-d-header-muse-min.png",
  "iTrack": itrackImg,
  "iCall 2": icall2Img,
  "Foote": "https://www.orville.be/web/image/1150-13a13916/Foote.gif",
};

export default function Cases() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const projects = t.cases.projects;
  const p = projects[active];
  const image = IMAGES[p.tab] ?? null;

  return (
    <section
      id="cases"
      className="bg-orville-offwhite px-6 md:px-10 py-24 md:py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.cases.label}</Label>
        </Fade>
        <Fade delay={0.05}>
          <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-semibold text-foreground leading-[1.25] max-w-[720px] mb-12 tracking-tight">
            {t.cases.heading}
          </h2>
        </Fade>

        <Fade delay={0.1}>
          <div className="mb-16 overflow-x-auto">
            <div role="tablist" className="flex items-end min-w-max border-b border-border">
              {projects.map((proj, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={proj.tab}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`relative -mb-px px-7 pt-4 pb-3 text-left flex-shrink-0 rounded-t-[16px] border transition-all duration-200 ${
                      isActive
                        ? "z-10 bg-orville-offwhite border-border border-b-orville-offwhite shadow-[0_-1px_0_0_hsl(var(--border))]"
                        : "mt-3 bg-muted/30 border-border hover:bg-muted/45"
                    }`}
                  >
                    <span
                      className={`absolute left-0 right-0 top-0 h-[3px] rounded-t-[16px] transition-colors duration-200 ${
                        isActive ? "bg-orville-green" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`font-heading text-[15px] block leading-snug transition-colors duration-200 ${
                        isActive
                          ? "font-semibold text-foreground"
                          : "font-normal text-foreground/70"
                      }`}
                    >
                      {proj.tab}
                    </span>
                    <span
                      className={`font-mono text-[11px] tracking-[0.04em] block mt-0.5 transition-colors duration-200 ${
                        isActive ? "text-orville-green" : "text-foreground/45"
                      }`}
                    >
                      {proj.client}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Fade>

        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16 animate-fade-in"
        >
          <div>
            {image && (
              <img
                src={image}
                alt={p.name}
                className="w-full rounded block bg-background mb-8"
              />
            )}
            <p className="font-mono text-xs text-orville-mid uppercase tracking-[1.5px] mb-2">
              {p.client}
            </p>
            <h3 className="font-heading text-[clamp(24px,3vw,36px)] font-semibold text-foreground leading-tight tracking-tight mb-5">
              {p.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-orville-mid border border-border rounded-sm px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                {t.cases.coreProblem}
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-orville-mid">
                {p.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                {t.cases.whatWeDid}
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-orville-mid">
                {p.what}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                {t.cases.whyYes}
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-orville-mid">
                {p.why}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
