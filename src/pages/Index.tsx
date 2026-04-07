import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expect from "@/components/Expect";
import Collaboration from "@/components/Collaboration";
import ProcessBlock from "@/components/ProcessBlock";
import People from "@/components/People";
import Studio from "@/components/Studio";
import Cases from "@/components/Cases";
import NameSection from "@/components/NameSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Intro />
      <ProcessBlock />
      <Collaboration />
      <People />
      <Studio />
      <Cases />
      <Expect />
      <NameSection />
      <Contact />
    </div>
  );
};

export default Index;
