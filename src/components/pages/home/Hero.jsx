"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".text1", {
      // y: 20,
      opacity: 1,
      delay: 2,
      ease: "power1.inOut",
    });

    tl.to(".text1", {
      y: 20,
      // opacity: 1,
      delay: 2,
      duration: 1.3,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="h-[calc(100vh-64px)] bg-red-200">
      <h1 className="text1 translate-y-[38dvh] opacity-0">
        Your healthiest <br /> skin revealed.
      </h1>
    </section>
  );
};

export default Hero;