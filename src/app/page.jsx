import Hero from "@/components/home/Hero";
import ParallaxScroll from "@/components/animations/ParallaxScroll";
import Image from "next/image";
import HiddenText from "@/components/animations/HiddenText";

export default function Home() {
  return (
    <div>
      <Hero />
      <ParallaxScroll />
      <HiddenText />
      {/* <Hero /> */}
    </div>
  );
}
