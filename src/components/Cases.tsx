import { useState } from "react";
import { Fade, Label } from "./Fade";
import fairvacuumImg from "@/assets/fairvacuum.jpg";
import itrackImg from "@/assets/itrack.png";
import icall2Img from "@/assets/icall2.jpg";

const INDIGO_WHY =
  "Manufacturing in the EU. Value in knowing how to make things. Repairing instead of replacing. Products that last.";

interface Project {
  tab: string;
  client: string;
  image: string | null;
  name: string;
  tags: string[];
  problem: string;
  what: string;
  why: string;
}

const PROJECTS: Project[] = [
  {
    tab: "Model 1",
    client: "FairVacuum",
    image: fairvacuumImg,
    name: "Model 1",
    tags: ["circular", "modular", "e-waste", "universal"],
    problem:
      "Vacuum cleaners die as a unit when one component fails. The real waste isn't the broken part, it's the perfectly functional parts that get thrown away with it.",
    what: "Designed a modular vacuum housing that allows individual components to be replaced independently. Developed the snap-fit system, material selection for recycled plastics, and full production-ready CAD. From problem definition through prototyping to manufacture-ready.",
    why: "Right to repair. Cleaning up a world dirtied by others. That others profit from pollution doesn't mean we should too.",
  },
  {
    tab: "Multimedia Handset",
    client: "IndigoCare",
    image:
      "https://www.orville.be/web/image/1156-185d6852/mmhandset2.png",
    name: "Multimedia Handset",
    tags: ["healthcare", "waterproof", "DFM"],
    problem:
      "How do you take a beautiful sketch and a partially completed model and turn it into something customizable, waterproof, and ready for production?",
    what: "Took a partially completed model and turned it into a customizable, waterproof, production-ready design. Full mechanical engineering, DFM, and manufacturer coordination.",
    why: INDIGO_WHY,
  },
  {
    tab: "PURE-D",
    client: "Denck",
    image:
      "https://www.orville.be/web/image/1149-fcfa87fe/pure-d-header-muse-min.png",
    name: "PURE-D",
    tags: ["startup", "thermoset compression", "consumer product"],
    problem:
      "How do you build reliable ventilation into a toilet seat people use daily, without electrical connection, at a consumer price point?",
    what: "Full product development from concept through prototyping to production-ready design. Mechanical engineering, airflow simulation, material selection, and DFM for thermoset compression moulding.",
    why: "Dennis is honest and fair. He believes in building things locally, with people worth trusting. Making money, but not by stealing it from others.",
  },
  {
    tab: "iTrack",
    client: "IndigoCare",
    image: itrackImg,
    name: "iTrack bracelet",
    tags: ["healthcare", "wearable", "waterproof", "tool-free battery swap"],
    problem:
      "Three wireless technologies need to coexist in one housing small enough to wear on a wrist, robust enough for daily use in healthcare, and waterproof. On top of that, the battery must be replaceable without tools or adhesives — and the housing must remain watertight after every swap.",
    what: "Designed a compact housing integrating three wireless technologies. Engineered a tool-free battery replacement mechanism that maintains the waterproof seal. Full mechanical design, waterproofing strategy, comfort testing, and production-ready CAD.",
    why: INDIGO_WHY,
  },
  {
    tab: "iCall 2",
    client: "IndigoCare",
    image: icall2Img,
    name: "iCall 2",
    tags: ["healthcare", "modularity", "open-ended design", "upgradability"],
    problem:
      "Healthcare equipment gets replaced, not repaired. How do you redesign an entire product range so field support can fix it on-site, with fewer parts, fewer materials, and housings shared across models — while keeping the platform open for future upgrades?",
    what: "Redesigned the entire product range around modularity and upgradability. Shared housings across models, reduced part count, designed for on-site repair by support staff, and built in an open-ended architecture that accommodates future modules without redesign.",
    why: INDIGO_WHY,
  },
  {
    tab: "Foote",
    client: "Orville",
    image: "https://www.orville.be/web/image/1150-13a13916/Foote.gif",
    name: "Foote",
    tags: ["own product", "ergonomic", "bamboo", "portable"],
    problem:
      "A portable monitor needs a stand. Every stand is a separate piece you forget, lose, or fumble with. Can the stand simply be part of the monitor — and be ergonomic enough for daily use?",
    what: "Full product development and go-to-market. From first sketch to shipping label. Mechanical design, ergonomic positioning, material selection (bamboo), hinge engineering, packaging, and production coordination.",
    why: "We wanted to prove we could take a product from concept to market. Not advise — do. From the first sketch to the shipping label.",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section
      id="cases"
      className="bg-orville-offwhite px-6 md:px-12 py-24 md:py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <p className="font-mono text-xs text-orville-mid uppercase tracking-[2px] mb-6">
            Cases
          </p>
        </Fade>
        <Fade delay={0.05}>
          <h2 className="font-heading text-[clamp(32px,4.5vw,56px)] font-semibold text-foreground leading-[1.2] max-w-[640px] mb-12 tracking-tight">
            Projects where we said yes for a reason.
          </h2>
        </Fade>

        {/* Tabs — underline style */}
        <Fade delay={0.1}>
          <div className="flex gap-0 overflow-x-auto border-b border-border mb-16">
            {PROJECTS.map((proj, i) => (
              <button
                key={proj.tab}
                onClick={() => setActive(i)}
                className={`px-0 pr-10 pb-4 text-left flex-shrink-0 relative transition-colors duration-200`}
              >
                <span
                  className={`font-heading text-[15px] block leading-snug transition-colors duration-200 ${
                    active === i
                      ? "font-semibold text-foreground"
                      : "font-normal text-orville-mid"
                  }`}
                >
                  {proj.tab}
                </span>
                <span
                  className={`font-mono text-[11px] tracking-[0.04em] block mt-0.5 transition-colors duration-200 ${
                    active === i ? "text-orville-green" : "text-orville-mid/60"
                  }`}
                >
                  {proj.client}
                </span>
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 right-10 h-[2px] transition-all duration-200 ${
                    active === i ? "bg-foreground" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </Fade>

        {/* Project detail */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16 animate-fade-in"
        >
          {/* Left: image + meta */}
          <div>
            {/* Image */}
            {p.image && (
              <img
                src={p.image}
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

            {/* Tags */}
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

          {/* Right: content sections */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                The core problem
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-orville-mid">
                {p.problem}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                What we did
              </p>
              <p className="font-body text-[17px] leading-[1.7] text-orville-mid">
                {p.what}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[2px] mb-3">
                Why we said yes
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
