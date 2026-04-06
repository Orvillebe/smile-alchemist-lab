import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Fade, Label } from "./Fade";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HowWeWork() {
  const { t } = useLanguage();
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.howWeWork.label}</Label>
        </Fade>
        <div className="max-w-[600px]">
          {t.howWeWork.items.map((item, i) => (
            <Fade key={item.n} delay={0.1 + i * 0.08}>
              <div
                className={`pb-8 mb-8 ${
                  i < t.howWeWork.items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <Label variant="green">{item.n}</Label>
                  <h3 className="font-heading text-[18px] font-medium text-foreground leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-[15px] leading-[1.7] text-orville-mid pl-9">
                  {item.text}
                </p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={0.3}>
          <div className="mt-2">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 font-heading text-[15px] font-medium text-foreground hover:text-orville-green transition-colors duration-200 group"
            >
              {t.howWeWork.link}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
