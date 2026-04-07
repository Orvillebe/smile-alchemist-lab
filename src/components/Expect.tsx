import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Expect() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: label, heading, paragraphs */}
          <div>
            <Fade>
              <Label className="mb-7">{t.expect.label}</Label>
            </Fade>
            <Fade delay={0.06}>
              <h2 className="font-heading font-light text-[28px] md:text-[32px] leading-[1.35] text-foreground mb-8">
                {t.expect.heading}
              </h2>
            </Fade>
            {t.expect.paragraphs.map((p, i) => (
              <Fade key={i} delay={0.12 + i * 0.06}>
                <p className="font-body text-[15.5px] leading-[1.75] text-foreground mb-5 last:mb-0">
                  {p}
                </p>
              </Fade>
            ))}
          </div>

          {/* Right: numbered steps */}
          <div className="flex flex-col pt-0 md:pt-12">
            {t.expect.steps.map((step, i) => (
              <Fade key={step.n} delay={0.1 + i * 0.08}>
                <div
                  className={`py-7 grid grid-cols-[32px_1fr] gap-4 items-baseline ${
                    i < t.expect.steps.length - 1
                      ? "border-b border-foreground/10"
                      : ""
                  } ${i === 0 ? "pt-0" : ""}`}
                >
                  <Label variant="green" className="!mb-0">
                    {step.n}
                  </Label>
                  <p className="font-body text-[15px] leading-[1.7] text-foreground">
                    {step.text}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
