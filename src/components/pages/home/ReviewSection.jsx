"use client"
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react';
import { review } from '@/utils/constant';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      /* ---------------------------------------------
       1️⃣ Pin the first-content smoothly
      --------------------------------------------- */
      ScrollTrigger.create({
        trigger: ".first-content",
        start: "top 64px",
        endTrigger: ".forth-content",
        end: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
      });

      /* ---------------------------------------------
       2️⃣ Door opening animation (triggered by scroll)
      --------------------------------------------- */
      gsap.to(".left-door", {
        x: -800,               // Left door goes LEFT
        opacity: 0,
        scrollTrigger: {
          trigger: ".third-content",
          start: "top top+=90px",    // starts as second section enters
          end: "top top-=500px",
          scrub: 1,
          markers: true
        }
      });

      gsap.to(".right-door", {
        x: 800,                // Right door goes RIGHT
        opacity: 0,
        scrollTrigger: {
          trigger: ".third-content",
          start: "top top+=90px", 
          end: "top top-=500px",
          scrub: 1,
          // markers: true
        }
      });

      gsap.fromTo(".hiddenContent", 
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".third-content",
            start: "top top+=90px", 
            end: "top top-=500px",
            scrub: 1,
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []); // Added empty dependency array

  return (
    <div ref={containerRef} className='container'>

      {/* FIRST SECTION (PINNED) */}
      <div className='h-[calc(100vh-64px)] flex items-center justify-center first-content relative'>
        <div className='text-center leading-none z-0 doorText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
          <p className='text-[200px] font-semibold left-door'>What are</p>
          <p className='text-[200px] font-semibold right-door'>they saying</p>
        </div>

        <div className='hiddenContent text-center'>
          <div className='flex gap-1 items-center justify-center'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                width={12}
                height={12}
                alt="star"
              />
            ))}
          </div>
          <p className='mt-2'>2500+ five-star reviews</p>
          <h3 className='mt-4'>hidden content</h3>
          <div className='grid grid-cols-6 gap-2 mt-15'>
            {review.map((item, index) => (
              <div key={index} className='relative w-[230px] h-[230px] rounded-lg overflow-hidden'>
                <Image className='object-cover' src={item.profileImg} fill alt={item.profileImg} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className='min-h-[calc(100vh-64px)] flex items-center justify-center second-content relative z-10'>
        <div className="grid grid-cols-2 gap-20 justify-between">
          {review.map((item, index) => (
            <div
              key={index}
              className={`p-5 w-96 min-h-96 flex flex-col justify-between bg-white rounded-lg ${
                (index + 1) % 3 === 0 ? "col-span-2 mx-auto" : ""
              }`}
            >
              <div>{item.content}</div>

              <div className='flex gap-2'>
                <div className='relative w-12 h-12 bg-amber-200 rounded-lg overflow-hidden'>
                  <Image className='object-cover' src={item.profileImg} fill alt={item.name} />
                </div>
                <div>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='text-xs'>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EMPTY THIRD SECTION TO RELEASE PIN */}
      <div className='min-h-[calc(100vh-64px)] flex items-center justify-center third-content opacity-0'>
        {/* This section triggers the animations */}
      </div>
      
      <div className='min-h-[calc(100vh)] flex items-center justify-center forth-content opacity-0'>
        {/* This section ends the pinning */}
      </div>
    </div>
  );
}

export default ReviewSection;