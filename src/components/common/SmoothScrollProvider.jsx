// "use client";

// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// export default function SmoothScrollProvider({ children }) {
//   useLayoutEffect(() => {
//     const smoother = ScrollSmoother.create({
//       smooth: 1.2,
//       smoothTouch: 0.1,
//       effects: true,
//     });

//     return () => {
//       smoother.kill();
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return children;
// }

"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return children;
}
