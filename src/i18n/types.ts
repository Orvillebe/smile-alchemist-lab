export type Locale = "nl" | "en";

export interface Translations {
  nav: {
    who: string;
    ourWork: string;
    ourProcess: string;
    contact: string;
  };
  hero: {
    label: string;
    line1: string;
    line2: string;
    body: string;
  };
  intro: {
    label: string;
    heading: string;
    body: string;
  };
  process: {
    label: string;
    heading: string;
    steps: { n: string; title: string; desc: string }[];
    methodLabel: string;
    methodBody: string;
    methodLink: string;
    cycleLabels: [string, string, string];
  };
  collaboration: {
    label: string;
    heading: string;
    copilot: string;
    body: string;
  };
  studio: {
    label: string;
    heading: string;
    subtitle: string;
    an: {
      name: string;
      role: string;
      bio: string;
      stuck: string;
    };
    vincent: {
      name: string;
      role: string;
      bio: string;
      stuck: string;
    };
    together: string;
    founded: string;
  };
  cases: {
    label: string;
    heading: string;
    coreProblem: string;
    whatWeDid: string;
    whyYes: string;
    projects: {
      tab: string;
      client: string;
      name: string;
      tags: string[];
      problem: string;
      what: string;
      why: string;
    }[];
  };
  expect: {
    label: string;
    items: { n: string; title: string; text: string }[];
  };
  name: {
    label: string;
    title: string;
    subtitle: string;
    body1: string;
    body2: string;
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    expectLabel: string;
    expectBody: string;
    footer: string;
    copyright: string;
  };
  howWeWork: {
    label: string;
    items: { n: string; title: string; text: string }[];
    link: string;
  };
  processPage: {
    back: string;
    heading: string;
    intro: string;
    phasesLabel: string;
    phases: { n: string; title: string; text: string }[];
    principlesLabel: string;
    principles: { title: string; text: string }[];
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
}
