import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Fade, Label } from "./Fade";

const STEPS = [
  {
    n: "01",
    title: "Dissect",
    desc: "Every project starts with the core problem. We strip away assumptions until we know what we really need to solve.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Technical, functional, and aesthetic at once. Not sequentially. The solution must check all three, or it doesn't check out.",
  },
  {
    n: "03",
    title: "Develop",
    desc: "From prototype to production. We stay with it until the product is manufacturable and scalable.",
  },
];

function CycleVisual() {
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    dot.animate(
      [
        { offsetDistance: "0%" },
        { offsetDistance: "100%" },
      ],
      {
        duration: 6000,
        iterations: Infinity,
        easing: "linear",
      }
    );
  }, []);

  return (
    <svg viewBox="0 0 260 260" fill="none" className="w-[260px] h-[260px]">
      <ellipse cx="126" cy="130" rx="74" ry="70" stroke="hsl(var(--foreground))" strokeWidth="0.7" opacity="0.12" transform="rotate(-2 126 130)" />
      <ellipse cx="132" cy="128" rx="76" ry="72" stroke="hsl(var(--foreground))" strokeWidth="0.7" opacity="0.16" transform="rotate(3 132 128)" />
      <ellipse cx="128" cy="134" rx="72" ry="74" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.2" transform="rotate(-4 128 134)" />
      <ellipse cx="130" cy="132" rx="74" ry="71" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.25" transform="rotate(1 130 132)" />
      <ellipse cx="131" cy="130" rx="73" ry="73" stroke="hsl(var(--foreground))" strokeWidth="0.9" opacity="0.3" transform="rotate(-1 131 130)" />
      <circle cx="130" cy="134" r="72" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.6" />

      <circle
        ref={dotRef}
        r="5"
        fill="hsl(var(--orville-green))"
        style={{
          offsetPath: "circle(72px at 130px 134px)",
          offsetRotate: "0deg",
        }}
      />

      <text x="130" y="52" textAnchor="middle" className="font-mono text-[11px] font-medium fill-foreground" letterSpacing="0.08em">MAKE</text>
      <text x="214" y="170" textAnchor="start" className="font-mono text-[11px] font-medium fill-foreground" letterSpacing="0.08em">TEST</text>
      <text x="46" y="170" textAnchor="end" className="font-mono text-[11px] font-medium fill-foreground" letterSpacing="0.08em">LEARN</text>
    </svg>
  );
}

export default function ProcessBlock() {
  return (
    <section className="bg-background px-6 md:px-10 py-[88px] border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label variant="green" className="mb-12">How we work</Label>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — title + steps */}
          <Fade delay={0.1}>
            <div>
              <h2 className="font-heading text-[clamp(26px,3vw,38px)] font-normal leading-[1.3] text-foreground mb-10 tracking-tight">
                Three phases, one method. The result determines the next step.
              </h2>
              <div className="flex flex-col">
                {STEPS.map((step, i) => (
                  <div
                    key={step.n}
                    className={`grid grid-cols-[28px_1fr] gap-5 py-5 border-b border-border ${
                      i === 0 ? "border-t" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-orville-green pt-[3px]">
                      {step.n}
                    </span>
                    <div>
                      <div className="font-heading text-2xl text-foreground mb-1.5">
                        {step.title}
                      </div>
                      <p className="font-body text-sm leading-[1.6] text-orville-mid">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Right — cycle visual + method text */}
          <Fade delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-9">
              <CycleVisual />
              <div className="text-center max-w-[300px]">
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground mb-2.5">
                  Method
                </p>
                <p className="font-body text-sm leading-[1.65] text-orville-mid mb-6">
                  Within each phase we make, test what we made, and let the result determine the next step.
                </p>
                <Link
                  to="/process"
                  className="font-mono text-[13px] text-orville-green tracking-[0.04em] hover:underline"
                >
                  More about our process →
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
