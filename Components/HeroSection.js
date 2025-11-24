"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { features } from "./ComponentsData";
import { Sparkle, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://www.pexels.com/download/video/3423019/"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Animated linear Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-6 lg:px-16"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 2000 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold text-white leading-tight mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className=" flex flex-nowrap"
                >
                  Grow From Level{" "}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className=" pl-4 hidden md:block bg-linear-to-r from-lime-500 via-emerald-600 to-green-700  bg-clip-text text-transparent"
                  >
                    1 To 100
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className=" pl-4 bg-linear-to-r md:hidden from-lime-500 via-emerald-600 to-green-700  bg-clip-text text-transparent"
                >
                  1 To 100
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block text-5xl"
                >
                  In Every Area Of Your Life
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-block *:sm:text-sm px-4 py-2 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <p className="text-white group    hidden md:flex md:gap-4 md:items-center text-base md:text-sm font-light">
                  <Sparkles className="text-yellow-500 size-5 group-hover:animate-pulse " />
                  Join India's Only Brain Science Program To Get 10 Years Of
                  Growth Compressed Into 2 Years.
                  <Sparkles className="text-yellow-500 size-5 group-hover:animate-pulse " />
                </p>
                <p className="text-white group md:hidden flex gap-4 items-center text-base md:text-sm font-light">
                  <Sparkles className="text-yellow-500 size-5 group-hover:animate-pulse " />
                  Join Us to to grow in your field
                  <Sparkles className="text-yellow-500 size-5 group-hover:animate-pulse " />
                </p>
              </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    transition: { duration: 0.2 },
                  }}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                >
                  <motion.div
                    whileHover={{ skewX: 1, skewY: 1, rotate: 12, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-lime-500 via-emerald-600 to-green-700  rounded-xl mb-4"
                  >
                    <feature.icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base">{feature.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Cursor Follower */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-6 h-6 bg-linear-to-r from-blue-400 to-purple-400 rounded-full opacity-50 blur-sm z-50 hidden lg:block"
            style={{ x, y }}
          />
        </div>

        {/* Scroll Indicator */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="hidden md:block absolute bottom-8  left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>
    </>
  );
}
