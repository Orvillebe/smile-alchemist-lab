import { Fade, Label } from "./Fade";

const ITEMS = [
  {
    n: "01",
    title: "Problem first",
    text: "We spend the first phase making sure the right problem is on the table. The modularity question that's really a repairability question. The materials question that's really a business model question. Sometimes the brief is right and we confirm it. Sometimes it isn't and we say so.",
  },
  {
    n: "02",
    title: "Make, test, learn, repeat",
    text: "We don't design in the abstract. We build something, test it, learn from it, and do it again. Every iteration makes the product sharper and the assumptions fewer. This isn't a phase. It's how every phase works.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-orville-offwhite px-6 md:px-10 py-20">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-12">How we work</Label>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {ITEMS.map((item, i) => (
            <Fade key={item.n} delay={0.1 + i * 0.08}>
              <div>
                <Label variant="green" className="mb-2">
                  {item.n}
                </Label>
                <h3 className="font-heading text-[20px] md:text-[22px] font-semibold text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.75] text-orville-mid">
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
