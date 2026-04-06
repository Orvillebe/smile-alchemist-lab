import { Fade, Label } from "./Fade";
import teamPhoto from "@/assets/team-photo.png";

export default function Studio() {
  return (
    <section id="studio" className="bg-background px-6 md:px-10 py-16 md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top area: heading left, photo right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-12 md:mb-[72px]">
          <div>
            <Fade>
              <Label className="mb-6">The people</Label>
            </Fade>
            <Fade delay={0.05}>
              <h2 className="font-heading font-semibold text-foreground text-[clamp(28px,3.5vw,42px)] leading-[1.25] mb-3 tracking-tight">
                The people who do the presentation are the people who solve the problem.
              </h2>
            </Fade>
            <Fade delay={0.1}>
              <p className="font-mono text-sm text-orville-mid">
                No handoff. No junior team behind the scenes.
              </p>
            </Fade>
          </div>
          <Fade delay={0.15}>
            <img
              src={teamPhoto}
              alt="An Pirlot and Vincent Ramaekers at work"
              className="w-full rounded aspect-[3/2] object-cover"
            />
          </Fade>
        </div>

        {/* People grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Fade delay={0.2}>
            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                An Pirlot
              </h3>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[1px] mb-5">
                Software engineer turned manufacturing technologist
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                She studied software engineering at KU Leuven, then went back
                for product design and manufacturing because software gave her
                the analytical framework but she needed the physical product.
                She designs, models, runs FEA, and builds prototypes. When she
                needs a tool that doesn't exist, she makes it. When a solution
                doesn't exist in the field she's working in, she finds one in
                another field and makes it fit.
              </p>
              <p className="font-mono text-[13px] text-orville-mid opacity-60 mt-4">
                When stuck, she asks herself: "What would the Doctor do?"
              </p>
            </div>
          </Fade>

          <Fade delay={0.25}>
            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Vincent Ramaekers
              </h3>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[1px] mb-5">
                Mechanical engineer bringing a decade of experience
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                A decade of product design, 3D modelling, FEA analysis,
                prototyping, and design for manufacturing. He has seen the
                failure modes, not once, not in theory, but repeatedly across
                years of practice. He can hold every constraint, every option,
                every interdependency of a complex project in his head and work
                with it directly.
              </p>
              <p className="font-mono text-[13px] text-orville-mid opacity-60 mt-4">
                When stuck, he asks himself: "What would Captain Picard do?"
              </p>
            </div>
          </Fade>
        </div>

        {/* Together */}
        <Fade delay={0.3}>
          <p className="font-heading font-medium text-xl leading-[1.5] max-w-[640px] text-foreground mt-12 md:mt-[72px]">
            Together: she sees across subjects to the pattern, he sees through a
            subject to its core. Nothing gets missed. Something gets decided.{" "}
            <span className="text-orville-mid text-base">Founded in 2019.</span>
          </p>
        </Fade>
      </div>
    </section>
  );
}
