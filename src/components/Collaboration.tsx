import { Fade, Label } from "./Fade";

export default function Collaboration() {
  return (
    <section className="bg-orville-charcoal px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-6">The collaboration</Label>
        </Fade>
        <Fade delay={0.08}>
          <p className="font-heading text-[20px] md:text-[clamp(20px,2.4vw,24px)] font-normal text-orville-offwhite leading-[1.38] max-w-[860px] mb-6 tracking-tight">
            We work with you the way a{" "}
            <span className="text-orville-green">co-pilot</span> works with a
            pilot. You don't hand us a problem and get a three-weekly update.
            You're in our process, and we're in yours. That's how both the
            project and your own insight grow at the same pace.
          </p>
        </Fade>
        <Fade delay={0.14}>
          <p className="font-body text-[15px] leading-[1.7] text-orville-mid max-w-[600px]">
            Where possible, a day per week at your location. This isn't a
            courtesy visit. It strengthens communication, sharpens decisions, and
            makes sure nothing gets lost in translation between meetings.
          </p>
        </Fade>
      </div>
    </section>
  );
}
