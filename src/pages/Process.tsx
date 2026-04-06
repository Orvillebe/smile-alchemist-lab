import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Fade, Label } from "@/components/Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const pp = t.processPage;

  return (
    <div className="bg-background text-foreground">
      <section className="bg-orville-charcoal px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] uppercase text-orville-mid hover:text-orville-green transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {pp.back}
            </Link>
          </Fade>
          <Fade delay={0.08}>
            <h1 className="font-heading text-[32px] md:text-[42px] lg:text-[50px] font-bold text-orville-offwhite leading-[1.2] max-w-[800px] mb-6">
              {pp.heading}
            </h1>
          </Fade>
          <Fade delay={0.14}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-orville-mid max-w-[640px]">
              {pp.intro}
            </p>
          </Fade>
        </div>
      </section>

      <section className="bg-orville-offwhite px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Label className="mb-14">{pp.phasesLabel}</Label>
          </Fade>
          <div className="flex flex-col gap-16">
            {pp.phases.map((phase, i) => (
              <Fade key={phase.n} delay={0.08 + i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                  <Label variant="green" className="md:pt-1">
                    {phase.n}
                  </Label>
                  <div>
                    <h2 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground mb-4 leading-snug">
                      {phase.title}
                    </h2>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.75] text-orville-mid max-w-[640px]">
                      {phase.text}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <Fade>
            <Label className="mb-14">{pp.principlesLabel}</Label>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {pp.principles.map((item, i) => (
              <Fade key={item.title} delay={0.08 + i * 0.06}>
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.75] text-orville-mid">
                    {item.text}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orville-charcoal px-6 md:px-10 py-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <Fade>
            <h2 className="font-heading text-[24px] md:text-[30px] font-semibold text-orville-offwhite mb-4">
              {pp.ctaHeading}
            </h2>
          </Fade>
          <Fade delay={0.08}>
            <p className="font-body text-[16px] text-orville-mid mb-8">
              {pp.ctaBody}
            </p>
          </Fade>
          <Fade delay={0.14}>
            <Link
              to="/#contact"
              className="inline-block font-heading text-[15px] font-medium text-orville-charcoal bg-orville-green px-8 py-3 rounded hover:brightness-110 transition-all"
            >
              {pp.ctaButton}
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
}
