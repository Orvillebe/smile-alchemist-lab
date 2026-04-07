import type { Translations } from "./types";

const INDIGO_WHY =
  "Manufacturing in the EU. Value in knowing how to make things. Repairing instead of replacing. Products that last.";

export const en: Translations = {
  nav: {
    who: "Who",
    ourWork: "Our work",
    ourProcess: "Our process",
    contact: "Contact",
  },
  hero: {
    label: "Product Design & Engineering",
    line1: "Design choices are never neutral.",
    line2: "We co-pilot yours so your product becomes part of the solution, not the problem.",
    body: "Two engineers from Belgium developing modular, repairable physical products at the intersection of circularity and technical feasibility. From concept to production.",
  },
  intro: {
    label: "What you can expect from us",
    heading:
      "We design and engineer physical products. From first problem definition through prototyping to production-ready design.",
    body: "Mechanical engineering, material selection, design for manufacturing, functional prototyping, 3D modeling, and CAD/CAM. For companies where circularity, modularity, or technical feasibility are central to the brief.",
  },
  process: {
    label: "How we work",
    heading: "Three phases, one method.",
    steps: [
      {
        n: "01",
        title: "Dissect",
        desc: "Every project starts with the core problem. We strip away assumptions until we know what we really need to solve. We haven't done everything before but we're good at figuring things out. What the client can explain to us would be crazy to go figure out ourselves. So we start there. Then we do the rest.",
      },
      {
        n: "02",
        title: "Design",
        desc: "Technical, functional, and aesthetic at once. Not sequentially. The solution must check all three, or it doesn't check out. That brings trade-offs, and we don't hide them. Beautiful design matters. But we make enough ourselves to know what happens when form wins over engineering: it gets expensive, it gets fragile, or it gets both.",
      },
      {
        n: "03",
        title: "Develop",
        desc: "From prototype to production. We stay with it until the product is manufacturable and scalable.",
      },
    ],
    methodLabel: "Method",
    methodBody:
      "Within each phase we iteratively make, test what we made, and let the result determine the next step.",
    methodLink: "More about our process →",
    cycleLabels: ["MAKE", "TEST", "LEARN"],
  },
  collaboration: {
    label: "The collaboration",
    heading:
      'We work with you the way a <green>co-pilot</green> works with a pilot. You don\'t hand us a problem and get a three-weekly update. You\'re in our process, and we\'re in yours. That\'s how both the project and your own insight grow at the same pace.',
    copilot: "co-pilot",
    body: "Where possible, a day per week at your location. This isn't a courtesy visit. It strengthens communication, sharpens decisions, and makes sure nothing gets lost in translation between meetings.",
  },
  people: {
    label: "The people",
    heading: "The people who do the presentation are the people who solve the problem.",
    body: "No handoff. No junior team behind the scenes. Just two people. A deliberate maximum of four projects at a time. The engineers you talk to are the engineers who do the work.",
  },
  studio: {
    label: "The people",
    heading: "The people who do the presentation are the people who solve the problem.",
    subtitle: "No handoff. No junior team behind the scenes.",
    an: {
      name: "An Pirlot",
      role: "Software engineer turned manufacturing technologist",
      bio: "She studied software engineering at KU Leuven, then went back for product design and manufacturing because software gave her the analytical framework but she needed the physical product. She designs, models, runs FEA, and builds prototypes. When she needs a tool that doesn't exist, she makes it. When a solution doesn't exist in the field she's working in, she finds one in another field and makes it fit.",
      stuck: 'When stuck, she asks herself: "What would the Doctor do?"',
    },
    vincent: {
      name: "Vincent Ramaekers",
      role: "Mechanical engineer bringing a decade of experience",
      bio: "A decade of product design, 3D modelling, FEA analysis, prototyping, and design for manufacturing. He has seen the failure modes, not once, not in theory, but repeatedly across years of practice. He can hold every constraint, every option, every interdependency of a complex project in his head and work with it directly.",
      stuck: 'When stuck, he asks himself: "What would Captain Picard do?"',
    },
    together:
      "Together: she sees across subjects to the pattern, he sees through a subject to its core. Nothing gets missed. Something gets decided.",
    founded: "Founded in 2019.",
  },
  cases: {
    label: "Cases",
    heading: "Projects where we said yes for a reason.",
    coreProblem: "The core problem",
    whatWeDid: "What we did",
    whyYes: "Why we said yes",
    projects: [
      {
        tab: "Model 1",
        client: "FairVacuum",
        name: "Model 1",
        tags: ["circular", "modular", "e-waste", "universal"],
        problem:
          "Vacuum cleaners die as a unit when one component fails. The real waste isn't the broken part, it's the perfectly functional parts that get thrown away with it.",
        what: "Designed a modular vacuum housing where every component can be replaced independently. Before committing to production, we built Model 1 as a DIY kit and sold it. Real users, real homes, real data on what works technically, functionally, and as a business. Those kits are being delivered now. Everything we learn feeds straight into Model 2, the production version.",
        why: "Right to repair. Cleaning up a world dirtied by others. That others profit from pollution doesn't mean we should too.",
        url: "https://www.fairvacuum.com",
      },
      {
        tab: "Multimedia Handset",
        client: "IndigoCare",
        name: "Multimedia Handset",
        tags: ["healthcare", "waterproof", "DFM"],
        problem:
          "A nurse call handset that needed to work in two orientations. Cable out the top when hanging, cable out the bottom when docked. Fully waterproof in both. On top of that, the battery must be replaceable without tools or adhesives and the housing must remain watertight after every swap. Every configuration choice had to survive daily use in care environments.",
        what: "Took a partially completed model and turned it into a customizable, waterproof, production-ready design. Full mechanical engineering, DFM, manufacturer coordination, and many rounds of waterproof testing with functional prototypes.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/multimedia-handset",
      },
      {
        tab: "PURE-D",
        client: "Denck",
        name: "PURE-D",
        tags: ["startup", "thermoset compression", "consumer product"],
        problem:
          "How do you build reliable ventilation into a toilet seat people use daily, without electrical connection, at a consumer price point?",
        what: "Full product development from concept through prototyping to production-ready design. Mechanical engineering, airflow simulation, material selection, and DFM for thermoset compression moulding.",
        why: "Dennis is honest and fair. He believes in building things locally, with people worth trusting. He's making a product people enjoy, and he's making it properly. No corners cut to get the margin up.",
        url: "https://www.denck.eu",
      },
      {
        tab: "iTrack",
        client: "IndigoCare",
        name: "iTrack bracelet",
        tags: ["healthcare", "wearable", "waterproof", "tool-free battery swap"],
        problem:
          "Three wireless technologies need to coexist in one housing small enough to wear on a wrist, robust enough for daily use in healthcare, and waterproof. On top of that, the battery must be replaceable without tools or adhesives, and the housing must remain watertight after every swap.",
        what: "Designed a compact housing integrating three wireless technologies. Engineered a tool-free battery replacement mechanism that maintains the waterproof seal. Full mechanical design, waterproofing strategy, comfort testing, and production-ready CAD.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/itrack-wireless-nurse-call",
      },
      {
        tab: "iCall 2",
        client: "IndigoCare",
        name: "iCall 2",
        tags: ["healthcare", "modularity", "open-ended design", "upgradability"],
        problem:
          "Healthcare equipment gets replaced, not repaired. How do you redesign an entire product range so field support can fix it on-site, with fewer parts, fewer materials, and housings shared across models. while keeping the platform open for future upgrades?",
        what: "Redesigned the entire product range around modularity and upgradability. Shared housings across models, reduced part count, designed for on-site repair by support staff, and built in an open-ended architecture that accommodates future modules without redesign.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/icall2",
      },
      {
        tab: "Foote",
        client: "Orville",
        name: "Foote",
        tags: ["own product", "ergonomic", "bamboo", "portable"],
        problem:
          "A portable monitor needs a stand. Every stand is a separate piece you forget, lose, or fumble with. Can the stand simply be part of the monitor, and be ergonomic enough for daily use?",
        what: "Full product development and go-to-market. From first sketch to shipping label. Mechanical design, ergonomic positioning, material selection (bamboo), hinge engineering, packaging, and production coordination.",
        why: "We wanted to prove we could take a product from concept to market. Not advise, do. From the first sketch to the shipping label.",
        url: "https://www.foote.be",
      },
    ],
  },
  expect: {
    label: "Typically Orville",
    items: [
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
    ],
  },
  name: {
    label: "The name",
    title: "Orville",
    subtitle: "Wright, 1871–1948",
    body1: "The name is not chosen randomly. It refers to the Wright brothers, two bicycle makers who in 1903, on a modest budget, achieved the first motorized flight while much bigger players failed.",
    body2: "Innovation is not reserved for the big. Their approach: work iteratively, test, and learn from mistakes. That is our approach too.",
  },
  contact: {
    label: "Contact",
    heading: "Let's talk.",
    body: "For complete product development where circularity, repairability, or technical feasibility are central. Not sure yet where you stand? A conversation usually clarifies that quickly.",
    expectLabel: "What to expect",
    expectBody: "Block half an hour. Most people stay longer because the subject gets interesting. No obligations, no intake procedure.",
    footer: "Orville BV, Kortessem, Belgium",
    copyright: "© 2026",
  },
  howWeWork: {
    label: "How we work",
    items: [
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
    ],
    link: "Read more about our process and method",
  },
  processPage: {
    back: "Back",
    heading: "Our process and method",
    intro:
      "Every project is different. But the way we think about them isn't. Here's how we work, from first conversation to production.",
    phasesLabel: "The phases",
    phases: [
      {
        n: "01",
        title: "Understand the problem",
        text: "Before we draw a single line, we make sure we're solving the right problem. We challenge the brief, ask uncomfortable questions, and dig into what's actually going on. The modularity question that's really about repairability. The materials question that's really about the business model. We don't skip this step. It's what everything else is built on.",
      },
      {
        n: "02",
        title: "Explore and define",
        text: "Once the problem is clear, we explore broadly before narrowing down. Concepts, sketches, rough models, fast and cheap. We're not looking for the first good idea, we're looking for the best direction. This phase ends with a clear definition of what we're building and why.",
      },
      {
        n: "03",
        title: "Make, test, learn, repeat",
        text: "We build something, test it, learn from it, and do it again. Our own workshop, our own machines: 3D printers, laser cutters, CNC, casting. Every iteration makes the product sharper and the assumptions fewer. This isn't a phase. It's how every phase works.",
      },
      {
        n: "04",
        title: "Detail and engineer",
        text: "When the concept is proven, we engineer it for production. Material selection, tolerances, assembly logic, DFM. We think about who builds it, how it's assembled, and what happens when something goes wrong in the field. Every detail is a decision, and we make them deliberately.",
      },
      {
        n: "05",
        title: "Production support",
        text: "We don't hand off a file and walk away. We stay involved through tooling, first samples, and production ramp-up. We talk to your manufacturer, solve problems on the spot, and make sure what comes off the line matches what was designed.",
      },
    ],
    principlesLabel: "What drives how we work",
    principles: [
      {
        title: "Co-pilot, not consultant",
        text: "We work alongside you, where possible, a day per week at your location. You stay involved in every step. Your knowledge grows with the project, so you can make better informed decisions along the way.",
      },
      {
        title: "The snowball effect",
        text: "We always look at least one layer deeper than the obvious answer. What you see shapes what you think. What you think shapes what you do. Across a whole project, that compounds.",
      },
      {
        title: "Makers at heart",
        text: "Our own workshop, our own machines. We prototype fast, test early, and learn from our mistakes. That's how we catch problems before production does.",
      },
      {
        title: "We've shipped our own products",
        text: "We've developed and brought our own products to market. We've made the trade-offs, felt the weight of decisions that look simple on paper but aren't, and shipped anyway. That shapes how we work with you.",
      },
    ],
    ctaHeading: "Got a project in mind?",
    ctaBody: "Let's talk about what you're working on.",
    ctaButton: "Get in touch",
  },
};
