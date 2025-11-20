"use client";
import Test from "@/components/animations/Test";
import Logo from "@/components/Logo";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useScreenSize } from "@/hooks/useScreenSize";
import { scrollContent } from "@/utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const blurTextRef = useRef(null);
  const productWrapperRef = useRef(null);
  // const scrollRefs = useRef([]);
  const handRef = useRef(null);
  //  const textRef = useRef(null);
  // const { width } = useScreenSize();
  const device = useDeviceType();
  // "xs-mobile" / "mobile" / "tablet" / "laptop" / "desktop" / "large-desktop"

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const chars = blurTextRef.current.querySelectorAll(".char");

    gsap
      .timeline()
      .fromTo(
        ".text1",
        { opacity: 0, y: "0%" }, // start centered
        { opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .to(".text1", {
        y: "-35vh", // move to very top
        duration: 1.4,
        ease: "power1.inOut",
      });

    // Product initial scroll animation
    gsap.fromTo(
      productWrapperRef.current,
      {
        yPercent: -28, // initially move it up by 50% of its own height (center vertically)
        xPercent: -50, // center horizontally
        top: "28%", // ensure it starts at 50% of parent
        left: "50%", // ensure it starts at 50% horizontally
        position: "absolute", // needed for top/left positioning
      },
      {
        yPercent: 65,
        top: "65%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".heroSec1",
          start: "top-=128px",
          end: "bottom center+=200px",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      chars,
      { opacity: 0, filter: "blur(8px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".productWrapperRef",
          start: "bottom center+=250px",
          // endTrigger: ".hiddenContent",
          end: "bottom center-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      }
    );

    // gsap.to(".hand", {
    //   y: 500,
    //   // opacity: 0,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: productWrapperRef.current,
    //     start: "top center-=20%",
    //     end: "top top",
    //     scrub: true,
    //   },
    // });

    // Hidden text fade in
    // gsap.to(".hiddenText", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".hiddenText",
    //     start: "top 40%",
    //     end: "bottom top",
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: true
    //   },
    // });
    // gsap.fromTo(
    //       chars,
    //       { opacity: 0, filter: "blur(8px)" },       // start invisible
    //       {
    //         opacity: 1,
    //         filter: "blur(0px)",      // reveal
    //         stagger: 0.05,      // reveal each char one by one
    //         ease: "power2.out",
    //         scrollTrigger: {
    //           trigger: textRef.current,
    //           start: "top 40%",
    //         end: "bottom top",
    //           scrub: true,       // smooth progress with scroll
    //           pin: true,
    //         },
    //       }
    //     );

    // ---------------------------
    // ✔️ Single pin timeline
    // ---------------------------
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".hiddenContent",
    //     start: "top center",
    //     // end: "bottom+=1700 top",
    //     end: "bottom+=1000 top",
    //     scrub: true,
    //     pin: true,
    //   },
    // });

    // tl.to(productWrapperRef.current, {
    //   y: 280,
    //   duration: 1,
    //   ease: "power1.out",
    // });

    // tl.to(productWrapperRef.current, {
    //   x: 280,
    //   y: -50,
    //   duration: 2,
    //   ease: "power1.in",
    // });

    // // Pin scroll sections
    // scrollRefs.current.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "top top",
    //     end: "bottom top",
    //     pin: true,
    //     pinSpacing: true,
    //   });
    // });
  });

  //  const sentence = "Five proven ingredients that actually work. Less bottles. Better skin. Smarter routine.";

  // SINGLE sentence (for mobile)
  const oneLine =
    "Five proven ingredients that actually work. Less bottles. Better skin. Smarter routine.";

  // TWO sentence layout (for desktop)
  const line1 = "Five proven ingredients that actually work.";
  const line2 = "Less bottles. Better skin. Smarter routine.";

  return (
    <section className="relative">
      {/* ---------------- SECTION 1 ---------------- */}
      {/* <div className="hidden handRef"></div> */}
      <div className="section z-0 relative heroSec1">
        <div
          className="h-[calc(100vh-64px)] w-full flex items-center justify-between"
          ref={handRef}
        >
          <h1 className="text1 opacity-0">
            Your healthiest <br /> skin revealed.
          </h1>
        </div>
      </div>

      {/* ---------------- PRODUCT IMAGE ---------------- */}
      <div className="absolute top-0 left-0 z-0  h-[calc(100vh-64px)] w-full  productWrapperRef">
        <div
          className="relative sm:w-[400px] sm:h-[400px] md:w-[250px] md:h-[280px] w-[280px] h-[250px] "
          ref={productWrapperRef}
        >
          <Image
            className="object-contain"
            src="/bottle.png"
            fill
            alt="Product"
          />
        </div>
      </div>

      <div className="absolute top-0 flex items-center justify-center h-[155vh] w-full">
        <h3 ref={blurTextRef} className="leading-[75px] text-center">
          {/* DESKTOP (md and up): Two lines */}
          <span className="hidden md:inline-block">
            <span className="flex flex-wrap justify-center gap-2 ">
              {line1.split(" ").map((word, i) => (
                <span key={i} className="word inline-flex">
                  {word.split("").map((char, j) => (
                    <span key={j} className="char inline-block opacity-0">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>

            <span className="flex flex-wrap justify-center gap-2">
              {line2.split(" ").map((word, i) => (
                <span key={i} className="word inline-flex">
                  {word.split("").map((char, j) => (
                    <span key={j} className="char inline-block opacity-0">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </span>

          {/* MOBILE (smaller than md): Single line */}
          <span className="md:hidden inline-flex flex-wrap gap-2 justify-center">
            {oneLine.split(" ").map((word, i) => (
              <span key={i} className="word inline-flex">
                {word.split("").map((char, j) => (
                  <span key={j} className="char inline-block opacity-0">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h3>
      </div>

      {/* <div className=" h-[calc(100vh-64px)]"></div> */}

      {/* <div className="fixed bottom-0 flex justify-center items-end left-1/2 -translate-x-1/2 z-1">
        <Image
          className="mt-20 hand"
          src="/hand.avif"
          width={900}
          height={335}
          alt="hand"
        />
      </div> */}

      {/* ---------------- SCROLL SECTIONS ---------------- */}
      {/* {scrollContent.map((item, index) => (
        <div
          key={index}
          className="h-screen flex items-center"
          ref={addToRefs}
        >
          <div className="container">
            <div className="sm:w-4/12">
              <div className="bg-[#D4DCCF] text-xs w-fit py-1 px-3 rounded-md">0{index + 1}</div>
              <h4 className="mt-3 mb-5">{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))} */}

      {/* <Test /> */}

      <div className="fixed bottom-10 right-10 text-red-800">{device}</div>

      {/* <Logo /> */}
    </section>
  );
};

export default Hero;
