"use client";
import { menu } from "@/utils/constant";
import Image from "next/image";
import React from "react";
import Cart from "./Cart";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <section
        className="h-16 lg:px-12 sm:px-6 px-4 grid grid-cols-3 
        items-center justify-between
        bg-white/60 backdrop-blur-md border-b border-white/20"
      >
        {/* Mobile Menu */}
        <div className="block sm:hidden">
          {/* <HamIcon /> */}
          <Image
            src="/menu.svg"
            width={32}
            height={32}
            alt="menu icon"
            priority
          />
        </div>

        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Hero image"
            width={140}
            height={50}
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="sm:flex gap-4 items-center justify-center hidden">
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right Side (Order + Bag) */}
        <div className="flex justify-end">
          <div className="sm:flex gap-5 items-center hidden">
            <button className="button2">Order Now</button>
            <Cart />
          </div>
          <div className="sm:hidden">
            <Cart />
          </div>
        </div>
        {/* <Cart /> */}
      </section>
    </header>
  );
};

export default Header;
