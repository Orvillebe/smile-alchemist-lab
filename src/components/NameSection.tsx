import { Fade, Label } from "./Fade";

export default function NameSection() {
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-[88px] border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-[60px] items-start">
            <div>
              <Label variant="green" className="mb-4">
                The name
              </Label>
              <h2 className="font-heading text-4xl md:text-[42px] font-semibold text-foreground leading-none mb-2 tracking-tight">
                Orville
              </h2>
              <p className="font-body text-sm text-orville-mid">
                Wright, 1871–1948
              </p>
            </div>
            <div>
              <p className="font-body text-base leading-[1.75] text-foreground mb-5">
                The name is not chosen randomly. It refers to the Wright brothers,
                two bicycle makers who in 1903, on a modest budget, achieved the
                first motorized flight while much bigger players failed.
              </p>
              <p className="font-body text-base leading-[1.75] text-orville-mid">
                Innovation is not reserved for the big. Their approach: work
                iteratively, test, and learn from mistakes. That is our approach
                too.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
