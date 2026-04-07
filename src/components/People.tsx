import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function People() {
  const { t } = useLanguage();
  return (
    <section id="studio" className="bg-background px-6 md:px-10 py-16 md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.people.label}</Label>
        </Fade>
        <Fade delay={0.05}>
          <h2 className="font-heading font-semibold text-foreground text-[clamp(28px,3.5vw,42px)] leading-[1.25] mb-6 tracking-tight max-w-[720px]">
            {t.people.heading}
          </h2>
        </Fade>
        <Fade delay={0.1}>
          <p className="font-body text-[15px] leading-[1.7] text-orville-mid max-w-[640px]">
            {t.people.body}
          </p>
        </Fade>
      </div>
    </section>
  );
}
