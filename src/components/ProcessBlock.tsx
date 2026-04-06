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

const NUM_STROKES = 20;
const BASE_RADIUS = 80;
const WOBBLE = 6;
const STROKE_DRAW_DURATION = 350;
const STROKE_DELAY = 50;

function makeWobbleCircle(baseRadius: number, wobbleAmt: number, seed: number): string {
  const points: [number, number][] = [];
  const steps = 360;
  const freqs = [2, 3, 5, 7];
  const phases = freqs.map((_, i) => seed * 1.7 + i * 2.1);
  const amps = [wobbleAmt * 0.5, wobbleAmt * 0.35, wobbleAmt * 0.2, wobbleAmt * 0.12];

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    let r = baseRadius;
    for (let f = 0; f < freqs.length; f++) {
      r += amps[f] * Math.sin(freqs[f] * angle + phases[f]);
    }
    points.push([r * Math.cos(angle), r * Math.sin(angle)]);
  }

  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i][0].toFixed(2)} ${points[i][1].toFixed(2)}`;
  }
  return d;
}

function CycleVisual() {
  const gRef = useRef<SVGGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const g = gRef.current;
    if (!g) return;

    function buildStrokes() {
      g.innerHTML = "";
      const strokes: SVGPathElement[] = [];
      for (let i = 0; i < NUM_STROKES; i++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const radiusOffset = (i - NUM_STROKES / 2) * 1.4 + Math.sin(i * 1.3) * 2;
        const rotation = (i - NUM_STROKES / 2) * 1.4 + Math.sin(i * 0.9) * 1.5;
        const seed = i * 2.3;
        const d = makeWobbleCircle(BASE_RADIUS + radiusOffset, WOBBLE + (i % 5) * 1, seed);
        path.setAttribute("d", d);
        path.setAttribute("transform", `rotate(${rotation})`);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "hsl(var(--foreground))");
        path.setAttribute("stroke-width", "1.5");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.style.opacity = "0";
        const opacity = 0.15 + (i / NUM_STROKES) * 0.45;
        path.dataset.targetOpacity = String(opacity);
        g.appendChild(path);
        strokes.push(path);
      }
      return strokes;
    }

    function animateRound() {
      const strokes = buildStrokes();

      strokes.forEach((path) => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
      });

      strokes.forEach((path, i) => {
        const len = path.getTotalLength();
        const delay = i * STROKE_DELAY + 200;
        setTimeout(() => {
          path.style.opacity = path.dataset.targetOpacity || "1";
          const start = performance.now();
          function tick(now: number) {
            const t = Math.min((now - start) / STROKE_DRAW_DURATION, 1);
            const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            path.style.strokeDashoffset = String(len * (1 - ease));
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }, delay);
      });

      // Total draw time + pause, then repeat
      const totalDraw = 200 + NUM_STROKES * STROKE_DELAY + STROKE_DRAW_DURATION;
      timeout = window.setTimeout(() => {
        // Fade out
        strokes.forEach((p) => {
          p.style.transition = "opacity 0.6s ease-out";
          p.style.opacity = "0";
        });
        timeout = window.setTimeout(animateRound, 800);
      }, totalDraw + 1500);
    }

    let timeout: number;
    animateRound();

    return () => clearTimeout(timeout);
  }, []);

  const R = BASE_RADIUS;
  // Position labels at 120° intervals: top, bottom-right, bottom-left
  const labelR = R + 20;
  const labels = [
    { text: "MAKE", x: 0, y: -labelR, anchor: "middle" as const },
    { text: "TEST", x: labelR * Math.sin((2 * Math.PI) / 3), y: labelR * Math.cos((2 * Math.PI) / 3), anchor: "start" as const },
    { text: "LEARN", x: -labelR * Math.sin((2 * Math.PI) / 3), y: labelR * Math.cos((2 * Math.PI) / 3), anchor: "end" as const },
  ];

  return (
    <svg viewBox="-140 -140 280 280" fill="none" className="w-[260px] h-[260px]">
      <g ref={gRef} />
      {labels.map((l) => (
        <text
          key={l.text}
          x={l.x}
          y={l.y + 4}
          textAnchor={l.anchor}
          className="font-mono text-[11px] font-medium fill-foreground"
          letterSpacing="0.08em"
        >
          {l.text}
        </text>
      ))}
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
