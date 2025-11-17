"use client";
import { scrollContent } from "@/utils/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ScrollSection = () => {
  const scrollRefs = useRef([]);
  scrollRefs.current = [];

  useGSAP(() => {
    scrollRefs.current.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 30%",       // start pinning when section top hits viewport top
          end: "bottom top",      // unpin when section bottom hits viewport top
          pin: true,              // pin the section
          pinSpacing: true,       // keep space while pinned
          markers: false,          // optional: shows start/end markers
        },
      });
    });
  });

  const addToRefs = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return (
    <>
      {scrollContent.map((item, index) => (
        <section
          key={index}
          className="h-screen"
          ref={addToRefs}
        >
          <div className="w-8/12 mx-auto">
            <div className="w-4/12">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ScrollSection;



