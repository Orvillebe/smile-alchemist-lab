import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expect from "@/components/Expect";
import Collaboration from "@/components/Collaboration";
import HowWeWork from "@/components/HowWeWork";
import Studio from "@/components/Studio";
import Cases from "@/components/Cases";
import NameSection from "@/components/NameSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Intro />
      <Expect />
      <HowWeWork />
      <Studio />
      <Cases />
      <Collaboration />
      <NameSection />
      <Contact />
    </div>
  );
};

export default Index;
