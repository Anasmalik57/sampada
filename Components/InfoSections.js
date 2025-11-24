"use client"
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight, FaRocket, FaBrain, FaChartLine, FaStar } from 'react-icons/fa';

export default function InfoSection() {
  const sectionRef = useRef(null);
  const blackSectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isBlackInView = useInView(blackSectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* White Section */}
      <section ref={sectionRef} className="relative bg-linear-to-b from-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-linear-to-tl from-lime-500 via-emerald-600 to-green-700 rounded-full"
              />
              
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                Empowering{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">High-Performers,</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 -z-0 origin-left"
                  />
                </span>
                <br />
                <span className="bg-linear-to-l from-lime-500 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                  Legacy Families
                </span>
                <br />
                and Business Leaders{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">to Thrive</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 -z-0 origin-left"
                  />
                </span>
                <br />
                Since 2004.
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: FaStar, text: '20+ Years' },
                  { icon: FaBrain, text: 'Brain Science' },
                  { icon: FaRocket, text: '1000+ Lives Changed' }
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100"
                  >
                    <badge.icon className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-linear-to-br from-teal-700 to-teal-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-teal-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                  >
                    <FaBrain className="text-3xl text-white" />
                  </motion.div>
                  <p className="text-white text-lg leading-relaxed">
                    SamPada is an invite-only program to accelerate growth. With advanced neurology & a tailored roadmap, we help you exceed your potential.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-linear-to-br from-lime-500 via-emerald-600 to-green-700 rounded-2xl flex items-center justify-center"
                  >
                    <FaChartLine className="text-3xl text-white" />
                  </motion.div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    If you're interested, please request an invite. We'll review your application, and if it aligns, our team will reach out to schedule an initial consultation with our founders.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-semibold shadow-lg shadow-teal-700/30 transition-all group"
                  >
                    Time to Grow
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Black Section */}
    
      
    </>
  );
}