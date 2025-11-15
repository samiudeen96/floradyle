"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxScrollToRight() {
  const { scrollYProgress } = useScroll(); // value from 0 to 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]); // maps 0→1 scroll to scale 0.5→2

  return (
    <motion.div
      style={{
        scale, // automatically updates as you scroll
        background: "red",
        width: 100,
        height: 100,
        margin: "200px auto",
      }}
    />
  );
}
