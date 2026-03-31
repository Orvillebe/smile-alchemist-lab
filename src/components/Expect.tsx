import { Fade, Label } from "./Fade";

const ITEMS = [
  {
    n: "01",
    title: "Co-pilot",
    text: "We work alongside you, not at a distance. Where possible, a day per week at your location. You stay involved in every step of our process. Your knowledge grows with the project, so you can make better informed decisions along the way.",
  },
  {
    n: "02",
    title: "Problem first",
    text: "We spend the first phase making sure the right problem is on the table. The modularity question that's really a repairability question. The materials question that's really a business model question. Sometimes the brief is right and we confirm it. Sometimes it isn't and we say so.",
  },
  {
    n: "03",
    title: "The snowball effect",
    text: "We always look at least one layer deeper than the obvious answer. You see a bird. Look again: it's a seagull. One more layer: you're near shore. What you see shapes what you think. What you think shapes what you do. Across a whole project, that compounds.",
  },
  {
    n: "04",
    title: "Makers",
    text: "We are builders. Our own workshop, our own machines. 3D printers, laser cutters, CNC, casting and hand moulding. We prototype fast, test early, and learn from our mistakes. That's how we catch problems before production does.",
  },
  {
    n: "05",
    title: "Pilot experience",
    text: "We've developed and brought our own products to market. We've made the trade-offs, felt the weight of decisions that look simple on paper but aren't, and shipped anyway. That shapes how we work with you.",
  },
];

export default function Expect() {
  return (
    <section className="bg-orville-offwhite px-6 md:px-[60px] py-24">
      <Fade>
        <Label className="mb-12">What you can expect from us</Label>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 max-w-[1200px]">
        {ITEMS.map((item, i) => (
          <Fade key={item.n} delay={0.1 + i * 0.08}>
            <div>
              <Label variant="green" className="mb-2.5">
                {item.n}
              </Label>
              <h3 className="font-heading text-lg font-medium text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] text-orville-mid">
                {item.text}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
