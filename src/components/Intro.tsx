import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Intro() {
  const { t } = useLanguage();
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-20">
      <div className="max-w-[1200px] mx-auto relative">
        <Fade>
          <Label className="mb-10 md:mb-0 md:absolute md:top-0 md:left-0">{t.intro.label}</Label>
        </Fade>
        <div className="md:pl-[200px]">
          <Fade delay={0.08}>
            <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-semibold text-foreground leading-[1.25] max-w-[900px] mb-4 tracking-tight">
              {t.intro.heading}
            </h2>
          </Fade>
          <Fade delay={0.14}>
            <p className="font-body text-[16px] leading-[1.7] text-orville-mid max-w-[860px]">
              {t.intro.body}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
