import { Fade, Label } from "./Fade";

export default function Intro() {
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-20">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-6">What you can expect from us</Label>
        </Fade>
        <Fade delay={0.08}>
          <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-semibold text-foreground leading-[1.25] max-w-[900px] mb-4 tracking-tight">
            We design and engineer physical products. From first problem
            definition through prototyping to production-ready design.
          </h2>
        </Fade>
        <Fade delay={0.14}>
          <p className="font-body text-[16px] leading-[1.7] text-orville-mid max-w-[860px]">
            Mechanical engineering, material selection, design for manufacturing,
            functional prototyping, 3D modeling, and CAD/CAM. For companies where
            circularity, modularity, or technical feasibility are central to the brief.
          </p>
        </Fade>
      </div>
    </section>
  );
}
