"use client";

import { slide } from "@/utils/constant";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 64px",
        end: `+=${slide.length * 500}`, // scroll distance per card
        scrub: true,
        pin: true,
      },
    });

    const cards = cardsRef.current;

    // Loop through each card
    for (let i = 0; i < cards.length; i++) {
      const topCard = cards[i];
      const remainingCards = cards.slice(i + 1);

      // 1️⃣ Move top card up and fade (skip last card)
      if (i < cards.length - 1) {
        tl.to(
          topCard,
          {
            y: -500,
            opacity: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          "+=0.2"
        );
      }

      // 2️⃣ Shift remaining cards forward in the stack
      remainingCards.forEach((card, idx) => {
        const targetIndex = idx;
        const targetX = targetIndex * 45;
        const targetScale = 1 - targetIndex * 0.1;
        tl.to(
          card,
          {
            x: targetX,
            scale: targetScale,
            ease: "power2.inOut",
            duration: 2,
          },
          "<" // animate at same time as top card
        );
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="container h-[calc(100vh-64px)] grid sm:grid-cols-2 items-center gap-10"
    >
      <h4 className="leading-[60px]">
        Your new skincare <br /> routine is beautifully <br /> simple.
      </h4>

      <div className="relative w-[440px] h-[580px]">
        {slide.map((item, i) => {
          const scale = 1 - i * 0.1;
          const offset = i * 45;

          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-full h-full rounded-2xl absolute top-0 left-0 overflow-hidden"
              style={{
                zIndex: slide.length - i,
                transform: `translateX(${offset}px) scale(${scale})`,
              }}
            >

              <div className="relative w-full h-full"> 
                <Image
                className="object-cover"
                src={item.img}
                fill
                alt={item.label}
              />
                <div className="absolute z-1w-full h-full flex items-end p-6 bg-black/15">
                  <div>
                    <div className="pill">Step 0{i + 1}</div>
                    <h5 className="font-semibold semi-bold text-white mt-2">{item.label}</h5>
                  <p className="text-white mt-3">{item.content}</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCards;
