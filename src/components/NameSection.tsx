import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NameSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-[88px] border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.name.label}</Label>
        </Fade>
        <Fade delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-[60px] items-start">
            <div>
              <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-semibold text-foreground leading-[1.25] mb-2 tracking-tight">
                {t.name.title}
              </h2>
              <p className="font-body text-sm text-orville-mid">
                {t.name.subtitle}
              </p>
            </div>
            <div>
              <p className="font-body text-base leading-[1.75] text-foreground mb-5">
                {t.name.body1}
              </p>
              <p className="font-body text-base leading-[1.75] text-orville-mid">
                {t.name.body2}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
