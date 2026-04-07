import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-orville-charcoal px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.contact.label}</Label>
        </Fade>
        <Fade delay={0.08}>
          <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-bold text-orville-offwhite mb-6 tracking-tight">
            {t.contact.heading}
          </h2>
        </Fade>
        <Fade delay={0.12}>
          <p className="font-body text-lg leading-[1.7] text-orville-offwhite/85 max-w-[720px] mb-0">
            {t.contact.body}
          </p>
        </Fade>

        <Fade delay={0.16}>
          <div className="mt-14 pt-10 border-t border-white/[0.12]">
            <Label variant="green" className="mb-5">{t.contact.expectLabel}</Label>
            <p className="font-body text-[clamp(16px,1.4vw,20px)] leading-[1.65] text-orville-mid max-w-[720px] mb-10">
              {t.contact.expectBody}
            </p>
            <a
              href="mailto:hello@orville.be"
              className="font-heading text-[22px] font-medium text-orville-green border-b border-orville-green/40 hover:border-orville-green transition-colors duration-300 pb-1"
            >
              hello@orville.be
            </a>
          </div>
        </Fade>

        <div className="mt-[52px] pt-7 border-t border-white/[0.12] flex justify-between items-center flex-wrap gap-3">
          <span className="font-mono text-[11px] text-white/[0.22]">
            {t.contact.footer}
          </span>
          <span className="font-mono text-[11px] text-white/[0.22]">
            {t.contact.copyright}
          </span>
        </div>
      </div>
    </section>
  );
}
