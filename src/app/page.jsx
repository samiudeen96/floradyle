import ParallaxScroll from "@/components/animations/ParallaxScroll";
import ParallelScrollToRight from "@/components/animations/ParallaxScrollToRight";
import Hero from "@/components/pages/home/Hero";
import HiddenText from "@/components/pages/home/HiddenText";
import Product from "@/components/pages/home/Product";
import ScrollSection from "@/components/pages/home/ScrollSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <HiddenText />
      <ScrollSection />
      <Product /> */}
      {/* <ParallelScrollToRight  /> */}
    </div>
  );
}
