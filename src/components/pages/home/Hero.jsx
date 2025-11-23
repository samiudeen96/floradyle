"use client";
// import { useDeviceType } from "@/hooks/useDeviceType";
import { scrollContent } from "@/utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const blurTextRef = useRef(null);
  const productWrapperRef = useRef(null);
  const scrollRefs = useRef([]);
  const handRef = useRef(null);

  const device = useDeviceType();

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  useGSAP(() => {
  const ctx = gsap.context(() => {
    const chars = blurTextRef.current.querySelectorAll(".char");

    // TEXT 1 Animation (Responsive Y movement)
    gsap.timeline()
      .fromTo(
        ".text1",
        { opacity: 0, y: "0%" },
        { opacity: 1, duration: 1, ease: "power1.inOut" }
      )
      .to(".text1", {
        y: "-35vh",
        // y:
        //   device === "mobile"
        //     ? "-15vh"
        //     : device === "tablet"
        //     ? "-25vh"
        //     : "-35vh", // desktop
        duration: 1.4,
        ease: "power1.inOut",
      });

    // CHARS BLUR Animation (Responsive stagger + pin)
    gsap.fromTo(
      chars,
      { opacity: 0, filter: "blur(8px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: device === "mobile" ? 0.02 : 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".heroSec2",
          start: device === "mobile" ? "top-=90 top+=130"  : "top-=200 top+=200",
          end: "bottom center",
          scrub: true,
          pin: true, // disable pin on mobile
          pinSpacing: true,
          // markers: true
        },
      }
    );

    // PIN SECTIONS (unchanged)
    scrollRefs.current.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: device === "mobile" ? "top top+=80px" : "top top+=64px",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        // markers: true
      });
    });

    // PRODUCT PIN (unchanged)
    ScrollTrigger.create({
      trigger: ".product-pin-section",
      start: "top 64px",
      endTrigger: ".sectionEnd",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      markers: true
    });

    // PRODUCT INITIAL ANIMATION (Responsive start)
    gsap.fromTo(
      productWrapperRef.current,
      {
        yPercent: device === "mobile" ? -50 : device === "tablet" ? -30 : -20,
        xPercent: -50,
        top: device === "mobile" ? "50%" : "20%",
        left: "50%",
        position: "absolute",
      },
      {
        yPercent: 56,
        top: "56%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".heroSec1",
          start: "top top+=64px",
          end: "bottom center+=200px",
          scrub: true,
        },
      }
    );

    // PRODUCT EXIT MOTION (same for all devices)
    gsap.to(productWrapperRef.current, {
      y:  device == "mobile" ? -90 : -330,
      x: device == "mobile" ? "" :  330,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".heroSec2",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  });

  ScrollTrigger.refresh(); // IMPORTANT

  return () => ctx.revert();
}, [device]); // ✅ device added here


//   useGSAP(() => {
//   const ctx = gsap.context(() => {
//     // all GSAP code here
//     const chars = blurTextRef.current.querySelectorAll(".char");

//     gsap
//       .timeline()
//       .fromTo(
//         ".text1",
//         { opacity: 0, y: "0%" }, // start centered
//         { opacity: 1, duration: 1, ease: "power1.inOut" }
//       )
//       .to(".text1", {
//         y: "-35vh", // move to very top
//         duration: 1.4,
//         ease: "power1.inOut",
//       });


//     gsap.fromTo(
//       chars,
//       { opacity: 0, filter: "blur(8px)" },
//       {
//         opacity: 1,
//         filter: "blur(0px)",
//         stagger: 0.04,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".heroSec2",
//           start: "top-=200 top+=200",
//           end: "bottom center",
//           scrub: true,
//           pin: true,
//           // markers: true,
//           pinSpacing: true,
//         },
//       }
//     );


//         // Pin scroll sections
//         scrollRefs.current.forEach((section) => {
//           ScrollTrigger.create({
//             trigger: section,
//             start: "top top+=64px",
//             end: "bottom top",
//             pin: true,
//             pinSpacing: true,
//             // markers: true
//           });
//         });


//                   // ⭐ PRODUCT PIN (instead of CSS fixed)

//       // if (scrollRefs.current.length < 5) return; // wait until refs exist
//       ScrollTrigger.create({
//         trigger: ".product-pin-section",
//         start: "top 64px",
//         endTrigger: ".sectionEnd",
//         end: "bottom bottom",
//         pin: true,
//         pinSpacing: false,
//         // markers: true
//       });


//           // Product initial scroll animation
//     gsap.fromTo(
//       productWrapperRef.current,
//       {
//         yPercent: -20, 
//         xPercent: -50, 
//         top: "20%", 
//         left: "50%", 
//         position: "absolute", 
//       },
//       {
//         yPercent: 41,
//         top: "41%",
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: ".heroSec1",
//           start: "top top+=64px",
//           end: "bottom center+=200px",
//           scrub: true,
//           // markers: true,
//         },
//       },
//     );


//     gsap.to(productWrapperRef.current, {
//       y: -330,
//       x: 330,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".heroSec2",
//         start: "bottom bottom",
//         end: "bottom top",
//         scrub: true,
//         // markers: true,
//       },
//     });

//   });

//   return () => ctx.revert();
// });


  // SINGLE sentence (for mobile)
  const oneLine =
    "Five proven ingredients that actually work. Less bottles. Better skin. Smarter routine.";

  // TWO sentence layout (for desktop)
  const line1 = "Five proven ingredients that actually work.";
  const line2 = "Less bottles. Better skin. Smarter routine.";

  return (
    <section className="relative">

      <div className=" top-0 left-0 h-full w-full">
        <div
          className=" section h-[calc(100vh-64px)] w-full flex items-center justify-between heroSec1"
          ref={handRef}
        >
          <h1 className="text1 opacity-0">
            Your healthiest <br /> skin revealed.
          </h1>
        </div>
      {/* </div> */}

      <div className="h-[calc(100vh-64px)] flex items-start justify-center w-full heroSec2 relative">
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

      {/* ---------------- SCROLL SECTIONS ---------------- */}
      <div className="heroSec3 section">
              {scrollContent.map((item, index) => (
        <div
          key={index}
          className="h-[calc(100vh-64px)] flex items-start md:items-center"
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
      ))}
      </div>
      
      <div className="sectionEnd"></div>


        <div
          className="absolute top-0 left-0 w-full h-[calc(100vh-64px)] flex justify-center product-pin-section"
        >
          <div className="" ref={productWrapperRef}>
        <div className="relative lg:w-[500px] lg:h-[500px] md:w-[250px] md:h-[280px] w-[280px] h-[250px]"
            
          >
            <Image
              className="object-contain"
              src="/bottle.png"
              fill
              alt="Product"
            />
          </div>
          </div>
        </div>



      {/* <div className="fixed bottom-10 right-10 text-red-800">{device}</div> */}
      </div>




    </section>
  );
};

export default Hero;
