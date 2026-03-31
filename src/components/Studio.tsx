import { Fade, Label } from "./Fade";

export default function Studio() {
  return (
    <section id="studio" className="bg-background px-6 md:px-[60px] py-[88px]">
      <Fade>
        <Label className="mb-10">The people behind the work</Label>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 max-w-[1200px] items-start">
        <Fade delay={0.1}>
          <div>
            {/* Placeholder for team photo */}
            <div className="w-full aspect-[4/3] rounded bg-orville-offwhite border border-border flex items-center justify-center">
              <span className="font-mono text-xs text-orville-mid uppercase tracking-wider">
                Team photo
              </span>
            </div>
            <div className="border-l-2 border-orville-green pl-5 mt-7">
              <p className="font-body text-sm leading-[1.7] text-orville-mid italic">
                The people who do the presentation are the people who solve the
                problem. No handoff. No junior team behind the scenes.
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={0.2}>
          <div>
            {/* An */}
            <div className="mb-9">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1 leading-snug">
                An Pirlot
              </h3>
              <Label variant="green" className="mb-3">
                Software engineer turned manufacturing technologist
              </Label>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid mb-2">
                She studied software engineering at KU Leuven, then went back
                for product design and manufacturing because software gave her
                the analytical framework but she needed the physical product.
                She designs, models, runs FEA, and builds prototypes. When she
                needs a tool that doesn't exist, she makes it. When a solution
                doesn't exist in the field she's working in, she finds one in
                another field and makes it fit.
              </p>
              <p className="font-mono text-xs text-orville-green tracking-wide">
                When stuck, she asks herself: "What would the Doctor do?"
              </p>
            </div>

            {/* Vincent */}
            <div className="pt-7 border-t border-border">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1 leading-snug">
                Vincent Ramaekers
              </h3>
              <Label variant="green" className="mb-3">
                Mechanical engineer
              </Label>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid mb-2">
                A decade of product design, 3D modelling, FEA analysis,
                prototyping, and design for manufacturing. He has seen the
                failure modes, not once, not in theory, but repeatedly across
                years of practice. He can hold every constraint, every option,
                every interdependency of a complex project in his head and work
                with it directly.
              </p>
              <p className="font-mono text-xs text-orville-green tracking-wide">
                When stuck, he asks himself: "What would Captain Picard do?"
              </p>
            </div>

            {/* Together */}
            <div className="mt-7 pt-5 border-t border-border">
              <p className="font-body text-[15px] leading-[1.7] text-foreground">
                Together: she sees across subjects to the pattern, he sees
                through a subject to its core. Nothing gets missed. Something
                gets decided. Founded in 2019.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
