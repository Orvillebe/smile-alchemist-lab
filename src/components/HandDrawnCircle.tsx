import { useEffect, useRef } from "react";

const NUM_STROKES = 30;
const BASE_RADIUS = 128;
const WOBBLE = 10;
const STROKE_DRAW_DURATION = 400;
const STROKE_DELAY = 60;

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

export default function HandDrawnCircle({ className = "" }: { className?: string }) {
  const gRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = gRef.current;
    if (!g) return;

    // Clear any previous paths
    g.innerHTML = "";

    const strokes: SVGPathElement[] = [];

    for (let i = 0; i < NUM_STROKES; i++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const radiusOffset = (i - NUM_STROKES / 2) * 1.6 + Math.sin(i * 1.3) * 3;
      const rotation = (i - NUM_STROKES / 2) * 1.4 + Math.sin(i * 0.9) * 1.5;
      const seed = i * 2.3;

      const d = makeWobbleCircle(BASE_RADIUS + radiusOffset, WOBBLE + (i % 5) * 1.5, seed);
      path.setAttribute("d", d);
      path.setAttribute("transform", `rotate(${rotation})`);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#FFFEF5");
      path.setAttribute("stroke-width", "3.5");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.style.opacity = "0";

      const opacity = 0.7 + Math.random() * 0.3;
      path.dataset.targetOpacity = String(opacity);

      g.appendChild(path);
      strokes.push(path);
    }

    // Set up dash arrays
    strokes.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
    });

    // Animate each stroke
    strokes.forEach((path, i) => {
      const len = path.getTotalLength();
      const delay = i * STROKE_DELAY + 300;

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
  }, []);

  return (
    <svg
      viewBox="-232 -232 464 464"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref={gRef} />
    </svg>
  );
}
