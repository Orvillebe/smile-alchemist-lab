import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Expect() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.expect.label}</Label>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">
          {t.expect.items.map((item, i) => (
            <Fade key={item.n} delay={0.1 + i * 0.08}>
              <div>
                <Label variant="green" className="mb-2.5">
                  {item.n}
                </Label>
                <h3 className="font-heading text-[18px] font-medium text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                  {item.text}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
