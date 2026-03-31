import { useRef, useState, useEffect, ReactNode } from "react";

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          o.unobserve(el);
        }
      },
      { threshold }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

export function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, vis] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function Label({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "green" | "amber";
  className?: string;
}) {
  const colorClass =
    variant === "green"
      ? "text-orville-green"
      : variant === "amber"
      ? "text-orville-amber"
      : "text-orville-mid";

  return (
    <span
      className={`font-mono text-[12px] tracking-[0.08em] uppercase block ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
