"use client";
import { scrollContent } from "@/utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const productWrapperRef = useRef(null);
  const scrollRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  useGSAP(() => {
  gsap.timeline()
    .to(".text1", { opacity: 1, delay: 1, ease: "power1.inOut" })
    .to(".text1", { y: 20, duration: 1.3, ease: "power1.inOut" });

  // Product initial scroll animation
  gsap.to(productWrapperRef.current, {
    y: 350,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: productWrapperRef.current,
      start: "top center",
      end: "top top",
      scrub: true,
    },
  });

  // Hidden text fade in
  gsap.to(".hiddenText", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".hiddenText",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  });

  // ---------------------------
  // 🚫 REMOVED containerRef pin
  // ---------------------------

  // ---------------------------
  // ✔️ Single pin timeline
  // ---------------------------
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hiddenText",
      start: "top top",
      end: "bottom+=500 top",
      scrub: true,
      pin: true,
    },
  });

  tl.to(productWrapperRef.current, { y: 350, duration: 1, ease: "power1.inOut" });
  tl.to(productWrapperRef.current, { x: 250, y: -50, duration: 1, ease: "power1.inOut" });

  // Pin scroll sections
  scrollRefs.current.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
    });
  });
});


  return (
    <section className="relative">

      {/* ---------------- SECTION 1 ---------------- */}
      <div className="relative h-[calc(100vh-380px)] w-full">
        <h1 className="text1 opacity-0 translate-y-[38vh]">
          Your healthiest <br /> skin revealed.
        </h1>
      </div>

      {/* ---------------- SECTION 2 ---------------- */}
      <div
        ref={containerRef}
        className="flex items-start justify-center h-[100vh]"
      >
        <h1 className="hiddenText opacity-0">HiddenText</h1>
      </div>



      {/* ---------------- PRODUCT IMAGE ---------------- */}
      <div
        ref={productWrapperRef}
        // className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/products/product2.avif"
          width={300}
          height={300}
          alt="Product"
        />
      </div>

      {/* ---------------- SCROLL SECTIONS ---------------- */}
      {scrollContent.map((item, index) => (
        <div key={index} className="h-screen  flex items-center" ref={addToRefs}>
          <div className="w-8/12 mx-auto">
            <div className="w-4/12">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Hero;
