"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxScroll() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [-480, 0], {
    clamp: false,
  });

  return (
    <motion.div
      style={{
        y,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        willChange: "transform",
      }}
    >
      {/* FIX: Wrapper prevents flickering */}
      <div style={{ width: 250, height: 250 }}>
        <Image
          className="object-contain"
          src="/products/product1.jpg"
          width={250}
          height={250}
          alt="product1"
          priority
        />
      </div>
    </motion.div>
  );
}
