import { useEffect } from "react";
import gsap from "gsap";

export const useGsapResponsive = (callback) => {
  useEffect(() => {
    const ctx = gsap.matchMedia();

    ctx.add("(max-width: 640px)", () => {
      callback("mobile");
    });

    ctx.add("(min-width: 641px) and (max-width: 1023px)", () => {
      callback("tablet");
    });

    ctx.add("(min-width: 1024px)", () => {
      callback("desktop");
    });

    ctx.add("(min-width: 1920px)", () => callback("large-desktop"));




    return () => ctx.revert();
  }, [callback]);
};
