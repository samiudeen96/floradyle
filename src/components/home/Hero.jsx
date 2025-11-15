"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-64px)] grid lg:grid-cols-2 px-6 lg:px-20 overflow-hidden">
      <motion.h1
        className=""
        initial={{ opacity: 0, y: "36vh" }}
        animate={{
          opacity: 1,
          transition: { duration: 1 }, // fade-in only
        }}
      >
        <motion.span
          animate={{
            y: "-29vh",
            transition: {
              delay: 5, // wait 5 seconds
              duration: 0.5, // smooth move to top
              ease: "easeInOut",
            },
          }}
          style={{ display: "inline-block" }}
        >
          Your healthiest <br /> skin revealed.
        </motion.span>
      </motion.h1>

      {/* <motion.div>
        <Image
          src="/products/product1.jpg"
          width={250}
          height={250}
          alt="product1"
        />
      </motion.div> */}

      <div className="">
        <div className="flex h-full w-full items-center lg:justify-end">
          <motion.p
            className="sm:text-3xl text-sm lg:text-end sm:block hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We strip away the <br /> unnecessary to focus <br /> on what truly
            works.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
