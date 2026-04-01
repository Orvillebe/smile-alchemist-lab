import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Fade, Label } from "@/components/Fade";

const PHASES = [
  {
    n: "01",
    title: "Understand the problem",
    text: "Before we draw a single line, we make sure we're solving the right problem. We challenge the brief, ask uncomfortable questions, and dig into what's actually going on. The modularity question that's really about repairability. The materials question that's really about the business model. We don't skip this step — it's what everything else is built on.",
  },
  {
    n: "02",
    title: "Explore and define",
    text: "Once the problem is clear, we explore broadly before narrowing down. Concepts, sketches, rough models — fast and cheap. We're not looking for the first good idea, we're looking for the best direction. This phase ends with a clear definition of what we're building and why.",
  },
  {
    n: "03",
    title: "Make, test, learn, repeat",
    text: "We build something, test it, learn from it, and do it again. Our own workshop, our own machines — 3D printers, laser cutters, CNC, casting. Every iteration makes the product sharper and the assumptions fewer. This isn't a phase. It's how every phase works.",
  },
  {
    n: "04",
    title: "Detail and engineer",
    text: "When the concept is proven, we engineer it for production. Material selection, tolerances, assembly logic, DFM. We think about who builds it, how it's assembled, and what happens when something goes wrong in the field. Every detail is a decision — we make them deliberately.",
  },
  {
    n: "05",
    title: "Production support",
    text: "We don't hand off a file and walk away. We stay involved through tooling, first samples, and production ramp-up. We talk to your manufacturer, solve problems on the spot, and make sure what comes off the line matches what was designed.",
  },
];

const PRINCIPLES = [
  {
    title: "Co-pilot, not consultant",
    text: "We work alongside you — where possible, a day per week at your location. You stay involved in every step. Your knowledge grows with the project, so you can make better informed decisions along the way.",
  },
  {
    title: "The snowball effect",
    text: "We always look at least one layer deeper than the obvious answer. What you see shapes what you think. What you think shapes what you do. Across a whole project, that compounds.",
  },
  {
    title: "Makers at heart",
    text: "Our own workshop, our own machines. We prototype fast, test early, and learn from our mistakes. That's how we catch problems before production does.",
  },
  {
    title: "We've shipped our own products",
    text: "We've developed and brought our own products to market. We've made the trade-offs, felt the weight of decisions that look simple on paper but aren't, and shipped anyway. That shapes how we work with you.",
  },
];

export default function Process() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <section className="bg-orville-charcoal px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] uppercase text-orville-mid hover:text-orville-green transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </Link>
          </Fade>
          <Fade delay={0.08}>
            <h1 className="font-heading text-[32px] md:text-[42px] lg:text-[50px] font-bold text-orville-offwhite leading-[1.2] max-w-[800px] mb-6">
              Our process and method
            </h1>
          </Fade>
          <Fade delay={0.14}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-orville-mid max-w-[640px]">
              Every project is different. But the way we think about them isn't.
              Here's how we work — from first conversation to production.
            </p>
          </Fade>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-orville-offwhite px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Label className="mb-14">The phases</Label>
          </Fade>
          <div className="flex flex-col gap-16">
            {PHASES.map((phase, i) => (
              <Fade key={phase.n} delay={0.08 + i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                  <Label variant="green" className="md:pt-1">
                    {phase.n}
                  </Label>
                  <div>
                    <h2 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground mb-4 leading-snug">
                      {phase.title}
                    </h2>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.75] text-orville-mid max-w-[640px]">
                      {phase.text}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Label className="mb-14">What drives how we work</Label>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {PRINCIPLES.map((item, i) => (
              <Fade key={item.title} delay={0.08 + i * 0.06}>
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.75] text-orville-mid">
                    {item.text}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orville-charcoal px-6 md:px-10 py-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <Fade>
            <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-orville-offwhite mb-4">
              Got a project in mind?
            </h2>
          </Fade>
          <Fade delay={0.08}>
            <p className="font-body text-[16px] text-orville-mid mb-8">
              Let's talk about what you're working on.
            </p>
          </Fade>
          <Fade delay={0.14}>
            <Link
              to="/#contact"
              className="inline-block font-heading text-[15px] font-medium text-orville-charcoal bg-orville-green px-8 py-3 rounded hover:brightness-110 transition-all"
            >
              Get in touch
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}
