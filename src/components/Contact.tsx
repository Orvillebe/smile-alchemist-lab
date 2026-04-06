import { Fade, Label } from "./Fade";
import orvilleLogoLong from "@/assets/orville-logo-long.jpeg";

export default function Contact() {
  return (
    <section id="contact" className="bg-orville-charcoal px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-7">Contact</Label>
          <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-normal text-orville-offwhite mb-[18px] tracking-tight">
            Let's talk.
          </h2>
          <p className="font-body text-[15px] leading-[1.7] text-orville-mid max-w-[500px] mb-8">
            For complex product development where circularity, modularity, or
            technical feasibility are central. Whether you know exactly what you
            need or have a nagging feeling the problem hasn't been defined yet.
            That's a conversation worth having.
          </p>
          <a
            href="mailto:hello@orville.be"
            className="font-heading text-[22px] font-medium text-orville-green border-b border-transparent hover:border-orville-green transition-colors duration-300"
          >
            hello@orville.be
          </a>
          <div className="mt-[52px] pt-7 border-t border-white/[0.12] flex justify-between items-center flex-wrap gap-3">
            <span className="font-mono text-[11px] text-white/[0.22]">
              Orville BV — Kortessem, Belgium
            </span>
            <span className="font-mono text-[11px] text-white/[0.22]">
              © 2026
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
}
