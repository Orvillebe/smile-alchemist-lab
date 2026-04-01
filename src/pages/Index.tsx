import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expect from "@/components/Expect";
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
      <Studio />
      <Cases />
      <NameSection />
      <Contact />
    </div>
  );
};

export default Index;
