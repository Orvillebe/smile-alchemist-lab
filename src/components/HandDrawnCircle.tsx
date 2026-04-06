import { useEffect, useRef } from "react";

// Sketchy, overlapping hand-drawn strokes — inner to outer
// Each path loops ~360° with organic wobble, mimicking pen on paper
const PATHS = [
  // Inner ring — small, tight
  "M240,200 C242,188 252,178 264,175 C276,172 292,176 302,184 C312,192 318,206 318,218 C318,230 312,244 302,252 C292,260 276,264 264,262 C252,260 240,252 234,242 C228,232 226,218 228,208 C230,198 238,192 242,190",
  // Inner ring wobble overlay
  "M238,204 C240,190 250,176 266,174 C282,172 300,178 310,190 C320,202 324,220 320,234 C316,248 304,260 290,264 C276,268 256,264 244,254 C232,244 226,228 226,214 C226,200 234,190 238,186",
  // Mid-inner ring
  "M218,178 C224,160 240,144 260,138 C280,132 306,134 322,146 C338,158 350,180 352,200 C354,220 346,246 332,262 C318,278 296,288 276,290 C256,292 232,284 218,270 C204,256 196,234 196,214 C196,194 204,178 212,170",
  // Mid ring
  "M204,164 C212,142 232,122 258,114 C284,106 318,110 340,128 C362,146 376,178 378,208 C380,238 368,274 348,296 C328,318 296,332 268,334 C240,336 208,324 190,302 C172,280 164,246 164,216 C164,186 176,160 190,148",
  // Mid ring wobble
  "M210,158 C216,138 238,118 262,110 C286,102 318,106 340,124 C362,142 378,172 380,204 C382,236 370,276 350,298 C330,320 298,336 270,338 C242,340 210,326 192,304 C174,282 166,248 166,218 C166,188 178,162 192,150",
  // Mid-outer ring
  "M188,142 C198,116 222,92 252,82 C282,72 322,76 348,98 C374,120 394,158 398,196 C402,234 390,280 368,308 C346,336 310,356 278,360 C246,364 206,350 180,324 C154,298 140,258 140,222 C140,186 154,150 170,132",
  // Outer ring
  "M174,128 C186,100 214,74 248,62 C282,50 326,54 356,78 C386,102 408,146 414,190 C420,234 408,288 384,320 C360,352 320,376 284,382 C248,388 204,374 174,346 C144,318 126,274 124,234 C122,194 136,148 152,124",
  // Outer ring wobble overlay
  "M170,134 C184,104 212,78 246,64 C280,50 324,52 356,74 C388,96 412,140 416,186 C420,232 406,286 382,318 C358,350 322,374 286,380 C250,386 206,372 176,344 C146,316 128,272 126,234 C124,196 138,152 154,128",
];

export default function HandDrawnCircle({ className = "" }: { className?: string }) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    // Stagger each stroke with slight overlap so they flow naturally
    const delayBase = 500;
    const perStroke = 350;

    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      const delay = delayBase + i * perStroke;

      path.animate(
        [
          { strokeDashoffset: `${length}` },
          { strokeDashoffset: "0" },
        ],
        {
          duration: perStroke + 300,
          delay,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
        }
      );
    });
  }, []);

  return (
    <svg
      viewBox="90 30 380 400"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {PATHS.map((d, i) => (
        <path
          key={i}
          ref={(el) => { pathRefs.current[i] = el; }}
          d={d}
          stroke="hsl(0 0% 88%)"
          strokeWidth={1.2 + Math.random() * 0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.5 + i * 0.06}
        />
      ))}
    </svg>
  );
}
