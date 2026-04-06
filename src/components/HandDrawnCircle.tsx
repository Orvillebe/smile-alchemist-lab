import { useEffect, useRef } from "react";

// Multiple irregular concentric paths to mimic the sketchy hand-drawn circle
// Drawn from inside out, each path slightly wobbly
const PATHS = [
  // Inner ring — tight, wobbly
  "M220,185 C225,165 245,148 265,145 C285,142 310,148 325,160 C340,172 352,192 353,212 C354,232 345,258 332,272 C319,286 298,296 278,297 C258,298 234,290 220,276 C206,262 198,240 197,222 C196,204 205,188 215,180",
  // Inner-mid ring
  "M210,170 C218,148 242,128 268,122 C294,116 326,122 347,140 C368,158 382,188 384,216 C386,244 374,278 356,298 C338,318 308,332 280,335 C252,338 218,328 198,308 C178,288 166,256 164,228 C162,200 172,172 186,158",
  // Mid ring
  "M195,155 C208,130 235,108 264,100 C293,92 330,96 355,116 C380,136 400,172 404,208 C408,244 396,288 374,314 C352,340 316,360 282,364 C248,368 208,354 182,330 C156,306 140,268 138,234 C136,200 148,166 164,148",
  // Mid-outer ring
  "M182,142 C198,114 228,90 262,80 C296,70 340,74 370,96 C400,118 422,158 428,198 C434,238 422,290 398,320 C374,350 334,374 296,380 C258,386 210,372 178,346 C146,320 124,278 120,240 C116,202 130,160 148,138",
  // Outer ring — widest, most expressive
  "M168,128 C188,96 224,68 264,56 C304,44 354,50 390,76 C426,102 452,148 458,198 C464,248 448,310 418,346 C388,382 340,406 294,412 C248,418 194,400 158,368 C122,336 98,286 94,240 C90,194 108,142 132,116",
];

export default function HandDrawnCircle({ className = "" }: { className?: string }) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];

    // Measure each path length and set up dasharray
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    // Animate each ring sequentially, inside → outside
    const delayBase = 600; // initial delay (ms)
    const perRing = 500; // time per ring

    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      const delay = delayBase + i * perRing;

      path.animate(
        [
          { strokeDashoffset: `${length}`, opacity: 0.6 + i * 0.08 },
          { strokeDashoffset: "0", opacity: 0.7 + i * 0.07 },
        ],
        {
          duration: perRing + 200,
          delay,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
        }
      );
    });
  }, []);

  return (
    <svg
      viewBox="60 30 440 420"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {PATHS.map((d, i) => (
        <path
          key={i}
          ref={(el) => { pathRefs.current[i] = el; }}
          d={d}
          stroke="hsl(0 0% 92%)"
          strokeWidth={i === 0 ? 2 : 1.5 + i * 0.3}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
        />
      ))}
    </svg>
  );
}
