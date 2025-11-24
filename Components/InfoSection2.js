"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaArrowRight,
  
} from "react-icons/fa";
import { targetAudiences } from "./ComponentsData";

export default function InfoSection2() {
  const potentialRef = useRef(null);
  const whoIsRef = useRef(null);
  const blackSectionRef = useRef(null);

  const isPotentialInView = useInView(potentialRef, {
    once: true,
    amount: 0.3,
  });
  const isWhoIsInView = useInView(whoIsRef, { once: true, amount: 0.2 });
  const isBlackInView = useInView(blackSectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Potential Section - Black Background */}
      <section
        ref={potentialRef}
        className="relative bg-black py-20 lg:py-32 overflow-hidden"
      >
        <section ref={blackSectionRef} className="relative bg-black py-20 md:py-24overflow-hidden" >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-linear(rgba(255,255,255,.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* linear Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isBlackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isBlackInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-sm font-medium">
                  Why Choose Sampada
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isBlackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8"
              >
                Top Reasons{" "}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-lime-500 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                    High Performers
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isBlackInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-lime-500 via-emerald-600 to-green-700 origin-left"
                  />
                </span>
                <br />
                Join SamPada
              </motion.h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isBlackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-6 mb-10"
              >
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                  We help you go from Level 1 to Level 10 in 2 years instead of
                  10. We are a science-backed, growth-focused program that
                  generates real, tangible, measurable results faster than a
                  pace you can ever imagine.
                </p>
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                  We are the only program focusing on multidimensional success,
                  so you don't have to compromise on any area of your life, and
                  you can truly own your greatness.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isBlackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-radial-[at_15%_25%] from-emerald-500 to-green-900 to-75% hover:to-40% transition-all duration-300 ease-in delay-100  hover text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/30 group"
                >
                  Request an Invite
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute bottom-32 left-32 w-24 h-24 border border-white/10 rounded-full"
          />
        </section>
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isPotentialInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left - Image Grid */}
            <motion.div variants={itemVariants} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
                  //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=300&fit=crop",
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    variants={imageVariants}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`relative overflow-hidden rounded-2xl ${
                      i === 0
                        ? "col-span-1 row-span-2"
                        : i === 4
                        ? "col-span-2"
                        : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isPotentialInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-linear-to-br bg-radial-[at_15%_25%] from-green-300 via-emerald-600 to-green-900 to-75% text-white px-8 py-4 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Lives Transformed</div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ width: 0 }}
                animate={isPotentialInView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1.5 bg-radial-[at_15%_25%] from-green-300 via-emerald-600 to-green-900 rounded-full"
              />

              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                Your Potential
                <br />
                isn't fixed
                <br />
                <span className="relative inline-block">
                  <span className="bg-linear-to-bl from-lime-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                    It's Limitless!
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isPotentialInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-radial-[at_25%_25%] from-green-300 via-emerald-600 to-green-900 origin-left"
                  />
                </span>
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Some genius you're born with, but the rest? You develop. With
                  the right tools, techniques and strategies, you can unlock
                  your maximum potential.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We don't just solve problems or spot loopholes—we help you
                  evolve it, expand it, and add new dimensions to your
                  brilliance. So you can go from Level 1 to Level 100 easily,
                  while living a superb quality, integrated life.
                </p>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px #18181b" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-radial-[at_15%_25%] from-green-500 via-emerald-600 to-green-300 hover:to-green-700 transition-colors duration-300 ease-in text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/30 mt-6"
              >
                Unlock Your Potential
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For Section - White Background */}
      <section
        ref={whoIsRef}
        className="relative bg-linear-to-b from-white to-gray-50 py-20 lg:py-32 overflow-hidden"
      >
        {/* Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isWhoIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isWhoIsInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 border border-green-900/30 rounded-full mb-6"
            >
              <span className="text-green-600 text-sm font-semibold">
                Perfect For You
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Who is this program for?
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              This program is best suited for people who are already high
              performers or want to become high-performers.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isWhoIsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {targetAudiences.map((audience, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isWhoIsInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30"
                  >
                    <audience.icon className="text-white text-xl" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-gray-900">
                  <motion.div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 w-10 h-10 bg-linear-to-br from-green-600 to-green-900 rotate-45 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaArrowRight className="text-white text-sm" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              isWhoIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-lg shadow-2xl transition-all"
            >
              Find Your Perfect Program
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
