import { Fade, Label } from "./Fade";

const ITEMS = [
  {
    n: "01",
    title: "Curious by default",
    text: "Broad knowledge, genuine curiosity about how things really work, and a refusal to stop asking difficult questions. That's the fuel. From mycorrhiza networks in soil to how small details in tax legislation can ripple through society, you'll struggle to find a subject that doesn't fascinate us. This means we're good at finding new solutions, and at taking what works in one domain and applying it in a completely different one.",
  },
  {
    n: "02",
    title: "Compounding",
    text: "What you know shapes what you see. What you see shapes how you decide. How you decide shapes what you do. Knowledge doesn't just add up. It compounds. Each project, each field, each question asked reveals a deeper layer. We always look at least one level further than the obvious answer.",
  },
  {
    n: "03",
    title: "Makers",
    text: "We are builders. Inventing new things and putting them together is what we love most. It's why we became engineers and why we're designers now. Over the years, not just our skills grew but also our machine park. 3D printers, a laser cutter, a CNC machine, a vacuum pump, materials for hand casting. Any excuse is good enough to buy a new machine or new materials. This helps us prototype fast, test early, and learn from our mistakes.",
  },
  {
    n: "04",
    title: "Pilots too",
    text: "Your own ideas are always the best ideas. That's why we've also developed, produced, and brought our own products to market. We know what's involved. Not from a textbook, but because we've done it. We haven't just been co-pilot. We've been pilot too.",
  },
];

export default function Expect() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="max-w-[1200px] mx-auto">
        <Fade>
          <Label className="mb-12">Typisch Orville</Label>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-8">
          {ITEMS.map((item, i) => (
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
