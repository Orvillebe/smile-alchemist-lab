import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Collaboration() {
  const { t } = useLanguage();

  const parts = t.collaboration.heading.split(/<green>(.*?)<\/green>/);

  return (
    <section className="bg-orville-charcoal px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-6">{t.collaboration.label}</Label>
        </Fade>
        <Fade delay={0.08}>
          <p className="font-heading text-[20px] md:text-[clamp(20px,2.4vw,24px)] font-normal text-orville-offwhite leading-[1.38] max-w-[860px] mb-6 tracking-tight">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <span key={i} className="text-orville-green">{part}</span>
              ) : (
                part
              )
            )}
          </p>
        </Fade>
        <Fade delay={0.14}>
          <p className="font-body text-[15px] leading-[1.7] text-orville-mid max-w-[600px]">
            {t.collaboration.body}
          </p>
        </Fade>
      </div>
    </section>
  );
}
