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

//     const smoother = ScrollSmoother.create({
//   smooth: 1.2,        // smooth scroll speed on desktop
//   smoothTouch: 0.12,  // small smoothing on mobile
//   effects: true,       // allow parallax / speed effects
//   normalizeScroll: true, // keeps pinned sections stable
//   ignoreMobileResize: true, // prevents jitter when resizing
// });

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  // smoothTouch: 0.12,
  effects: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
});



    return () => {
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return children;
}
