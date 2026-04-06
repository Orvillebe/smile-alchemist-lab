import { Fade, Label } from "./Fade";
import teamPhoto from "@/assets/team-photo.png";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Studio() {
  const { t } = useLanguage();
  return (
    <section id="studio" className="bg-background px-6 md:px-10 py-16 md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-10">{t.studio.label}</Label>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-12 md:mb-[72px]">
          <div>
            <Fade delay={0.05}>
              <h2 className="font-heading font-semibold text-foreground text-[clamp(28px,3.5vw,42px)] leading-[1.25] mb-3 tracking-tight">
                {t.studio.heading}
              </h2>
            </Fade>
            <Fade delay={0.1}>
              <p className="font-mono text-sm text-orville-mid">
                {t.studio.subtitle}
              </p>
            </Fade>
          </div>
          <Fade delay={0.15}>
            <img
              src={teamPhoto}
              alt="An Pirlot and Vincent Ramaekers at work"
              className="w-full rounded aspect-[3/2] object-cover"
            />
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Fade delay={0.2}>
            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {t.studio.an.name}
              </h3>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[1px] mb-5">
                {t.studio.an.role}
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                {t.studio.an.bio}
              </p>
              <p className="font-mono text-[13px] text-orville-mid opacity-60 mt-4">
                {t.studio.an.stuck}
              </p>
            </div>
          </Fade>

          <Fade delay={0.25}>
            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {t.studio.vincent.name}
              </h3>
              <p className="font-mono text-xs text-orville-green uppercase tracking-[1px] mb-5">
                {t.studio.vincent.role}
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                {t.studio.vincent.bio}
              </p>
              <p className="font-mono text-[13px] text-orville-mid opacity-60 mt-4">
                {t.studio.vincent.stuck}
              </p>
            </div>
          </Fade>
        </div>

        <Fade delay={0.3}>
          <p className="font-heading font-medium text-xl leading-[1.5] max-w-[640px] text-foreground mt-12 md:mt-[72px]">
            {t.studio.together}{" "}
            <span className="text-orville-mid text-base">{t.studio.founded}</span>
          </p>
        </Fade>
      </div>
    </section>
  );
}
