// "use client"
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HiddenText() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // animation triggers when section comes in/out
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       ref={ref}
//       style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
//     >
//       <motion.h1 style={{ y, opacity, fontSize: "3rem" }}>
//         Section Scroll Animation
//       </motion.h1>
//     </section>
//   );
// }


import React from 'react'

const HiddenText = () => {
  return (
    <div className='h-[50vh] bg-green-200 flex items-center justify-center'>
      <h2>HiddenText</h2>
    </div>
  )
}

export default HiddenText