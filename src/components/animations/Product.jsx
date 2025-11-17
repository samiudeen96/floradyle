"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Product = () => {
  const tl = gsap.timeline();

  const productRef = useRef();

  //   useGSAP(()=>{
  //     tl.to(productRef, {

  //     })
  //   })

  

  return (
    <div className="h-screen w-full bg-amber-200">
      <Image
        ref={productRef}
        src="/products/product2.avif"
        width={250}
        height={250}
        alt="Product"
        className="rounded-xl"
      />
    </div>
  );
};

export default Product;
