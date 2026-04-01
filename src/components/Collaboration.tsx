import { Fade, Label } from "./Fade";

export default function Collaboration() {
  return (
    <section className="bg-orville-charcoal px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-8">The collaboration</Label>
        </Fade>
        <Fade delay={0.08}>
          <h2 className="font-heading text-[24px] md:text-[32px] lg:text-[38px] font-semibold text-orville-offwhite leading-[1.3] max-w-[900px] mb-6">
            We work with you the way a{" "}
            <span className="text-orville-green">co-pilot</span> works with a
            pilot. You don't hand us a problem and get a three-weekly update.
            You're in our process, and we're in yours. That's how both the
            project and your own insight grow at the same pace.
          </h2>
        </Fade>
        <Fade delay={0.14}>
          <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-orville-mid max-w-[680px]">
            Where possible, a day per week at your location. This isn't a
            courtesy visit. It strengthens communication, sharpens decisions, and
            makes sure nothing gets lost in translation between meetings.
          </p>
        </Fade>
      </div>
    </section>
  );
}
