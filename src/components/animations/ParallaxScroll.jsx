// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// export default function ParallaxScroll() {
//   const { scrollYProgress } = useScroll();

//   const y = useTransform(scrollYProgress, [0, 1], [-480, 0], {
//     clamp: false,
//   });

//   return (
//     <motion.div
//       style={{
//         y,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         willChange: "transform",
//       }}
//     >

//       <div style={{ width: 250, height: 250 }}>
//         <Image
//           className="object-contain"
//           src="/products/product1.jpg"
//           width={250}
//           height={250}
//           alt="product1"
//           priority
//         />
//       </div>
//     </motion.div>
//   );
// }

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ParallaxScroll = () => {
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

export default ParallaxScroll;
