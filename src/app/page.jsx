import ParallaxScroll from "@/components/animations/ParallaxScroll";
import Hero from "@/components/pages/home/Hero";
import HiddenText from "@/components/pages/home/HiddenText";
import ScrollSection from "@/components/pages/home/ScrollSection";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <HiddenText />
      <ScrollSection />
      <ParallaxScroll />
      {/* <Hero /> */}
    </div>
  );
}
