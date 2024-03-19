"use client";

import Link from "next/link";
import logo from "../app/icon.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? "fixed left-0 top-0 z-[100] w-full" : ""}`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-[24.94px] pb-3 pt-[10px] lg:py-2 lg:pl-[75px] lg:pr-[16.83px]">
        <div className="flex items-center gap-[148.76px]">
          <Image src={logo} alt="Inspiraspace logo" className="" />

          <div className="hidden items-center gap-10 lg:flex">
            <Link href="#" className="leading-8">
              How it Works
            </Link>
            <Link href="#" className="leading-8">
              Contact
            </Link>
            <Link href="/about" className="leading-8">
              About
            </Link>
          </div>
        </div>

        <button className="hidden h-[48px] rounded-[25px] border-[0.5px] border-[#DD9F3980] px-[17.95px] font-bold leading-[18px] text-[#DD9F3980] lg:block">
          Download App
        </button>

        <div className="cursor-pointer lg:hidden">
          <div className="my-[5px] h-[3.48px] w-[25px] bg-black"></div>
          <div className="my-[5px] h-[3.48px] w-[25px] bg-black"></div>
          <div className="my-[5px] h-[3.48px] w-[25px] bg-black"></div>
        </div>
      </nav>
    </header>
  );
}
