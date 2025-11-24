"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import HeroSection from "@/Components/HeroSection";
import React from "react";
import InfoSection from "@/Components/InfoSections";
import InfoSection2 from "@/Components/InfoSection2";
import FAQComponent from "@/Components/Faq";
import Footer from "@/Components/Footer";

const page = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Magical Cursor */}
      <motion.div
        className="fixed top-0 left-0 size-6 border-2  border-white  bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%  rounded-full pointer-events-none z-50 mix-blend-screen opacity-70 "
        style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
      />

      <HeroSection />
      <InfoSection />
      <InfoSection2 />
      <FAQComponent />
      <Footer />
    </>
  );
};

export default page;
