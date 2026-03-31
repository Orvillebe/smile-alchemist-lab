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
  imagePlaceholder?: string;
  name: string;
  description: string;
  why: string;
  problem: string;
}

const PROJECTS: Project[] = [
  {
    tab: "FairVacuum",
    client: "Own venture",
    image: fairvacuumImg,
    name: "FairVacuum",
    description:
      "Circular vacuum cleaner — modular housing built around reused components.",
    why: "Right to repair. Cleaning up a world dirtied by others. That others profit from pollution doesn't mean we should too.",
    problem:
      "Vacuums are discarded when one component fails. The rest works fine. Full modularity makes products expensive and complex. Where is the line?",
  },
  {
    tab: "Multimedia Handset",
    client: "IndigoCare",
    image:
      "https://www.orville.be/web/image/1156-185d6852/mmhandset2.png",
    name: "Multimedia Handset",
    description:
      "The first multimedia handset that can be used upside down. IndigoCare had a sketch and a clear requirement: make it customizable, make it waterproof, make it work. We turned it into a producible design.",
    why: INDIGO_WHY,
    problem:
      "How do you take a beautiful sketch and a partially completed model and turn it into something customizable, waterproof, and ready for production?",
  },
  {
    tab: "PURE-D",
    client: "Denck",
    image:
      "https://www.orville.be/web/image/1149-fcfa87fe/pure-d-header-muse-min.png",
    name: "PURE-D",
    description:
      "Toilet seat with integrated odor extraction. Made in Belgium. Technically complex consumer product, developed through two-weekly prototypes.",
    why: "Dennis is honest and fair. He believes in building things locally, with people worth trusting. Making money, but not by stealing it from others.",
    problem:
      "How do you build reliable ventilation into a toilet seat people use daily, without electrical connection, at a consumer price point?",
  },
  {
    tab: "iTrack",
    client: "IndigoCare",
    image:
      "https://www.orville.be/web/image/1152-3fafe7f0/iTrack_polsband.png",
    name: "iTrack bracelet",
    description:
      "Wireless nurse call bracelet combining three different wireless technologies into one reliable, waterproof, comfortable housing. Designed for daily wear in care environments.",
    why: INDIGO_WHY,
    problem:
      "Three wireless technologies need to coexist in one housing small enough to wear on a wrist, robust enough for daily use in healthcare, and waterproof. How do you fit all that without compromising any of it?",
  },
  {
    tab: "iCall 2",
    client: "IndigoCare",
    image: null,
    imagePlaceholder: "iC2",
    name: "iCall 2",
    description:
      "Complete redesign of their entire standard nurse call range. 10+ housings. Quick assembly, on-site repair by customer support, one housing across multiple models, fewer parts, fewer materials. They trusted us with everything.",
    why: INDIGO_WHY,
    problem:
      "Healthcare equipment gets replaced, not repaired. How do you redesign an entire product range so field support can fix it on-site, with fewer parts, fewer materials, and housings shared across models?",
  },
  {
    tab: "Foote",
    client: "Own product",
    image: "https://www.orville.be/web/image/1150-13a13916/Foote.gif",
    name: "Foote",
    description:
      "Portable monitor with integrated foldable bamboo stand. Designed, prototyped, tested, and brought to market ourselves.",
    why: "We wanted to prove we could take a product from concept to market. Not advise — do. From the first sketch to the shipping label.",
    problem:
      "A portable monitor needs a stand. Every stand is a separate piece you forget, lose, or fumble with. Can the stand simply be part of the monitor?",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section
      id="cases"
      className="bg-orville-offwhite px-6 md:px-10 py-24"
    >
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-8">Our work</Label>
        </Fade>

        {/* Tab strip */}
        <Fade delay={0.1}>
          <div className="flex gap-5 md:gap-8 border-b border-border mb-0 overflow-x-auto">
            {PROJECTS.map((proj, i) => (
              <button
                key={proj.tab}
                onClick={() => setActive(i)}
                className={`group relative pb-4 pt-4 text-left transition-all duration-250 ${
                  active === i ? "" : "opacity-70 hover:opacity-100"
                }`}
              >
                <span
                  className={`font-mono text-[9.5px] tracking-[0.06em] uppercase block mb-0.5 transition-colors duration-250 ${
                    active === i ? "text-orville-green" : "text-orville-mid"
                  }`}
                >
                  {proj.client}
                </span>
                <span
                  className={`font-heading text-[15px] transition-all duration-250 ${
                    active === i
                      ? "font-semibold text-foreground"
                      : "font-normal text-orville-mid"
                  }`}
                >
                  {proj.tab}
                </span>
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-250 ${
                    active === i ? "bg-orville-green" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </Fade>

        {/* Project detail */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 py-12 animate-fade-in"
        >
          {/* Image */}
          <div>
            {p.image ? (
              <img
                src={p.image}
                alt={p.name}
                className="w-full rounded block bg-background"
              />
            ) : (
              <div className="w-full aspect-[4/3] rounded bg-background border border-border flex flex-col items-center justify-center gap-2">
                <span className="font-heading text-[32px] font-semibold text-border">
                  {p.imagePlaceholder}
                </span>
                <span className="font-mono text-[10px] text-border uppercase tracking-[0.06em]">
                  Image coming soon
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <Label className="mb-1.5">{p.client}</Label>
            <h3 className="font-heading text-[26px] font-semibold text-foreground mt-1 mb-4 leading-tight">
              {p.name}
            </h3>
            <p className="font-body text-[15px] leading-[1.7] text-orville-mid mb-7">
              {p.description}
            </p>

            <div className="flex flex-col gap-5">
              <div className="border-l-[3px] border-orville-green pl-4">
                <Label variant="green" className="mb-1.5">
                  Why we said yes
                </Label>
                <p className="font-body text-sm leading-[1.65] text-foreground italic">
                  {p.why}
                </p>
              </div>
              <div className="border-l-[3px] border-orville-amber pl-4">
                <Label variant="amber" className="mb-1.5">
                  The core problem
                </Label>
                <p className="font-body text-[15px] leading-[1.6] text-foreground font-medium">
                  {p.problem}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
