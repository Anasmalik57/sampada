import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaQuoteLeft, FaLinkedin, FaTwitter, FaInstagram, FaAward, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function CEOSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const achievements = [
    { icon: FaAward, text: '20+ Years of Experience' },
    { icon: FaStar, text: 'Transformed 1000+ Lives' },
    { icon: FaCheckCircle, text: 'Featured in Forbes & TEDx' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  return (
    <section ref={sectionRef} className="relative bg-linear-to-b from-black to-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
      />

      {/* Geometric Decorations */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 border-2 border-green-400/20 rounded-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 right-32 w-24 h-24 border-2 border-purple-400/20 rounded-full"
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-3/4"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                    alt="Sampada Kapoor"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Quote Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute top-8 left-2 bg-linear-to-br from-lime-400 via-emerald-500 to-green-600 p-4 z-50 rounded-2xl shadow-2xl"
                >
                  <FaQuoteLeft className="text-white text-3xl" />
                </motion.div>

                {/* Name Badge at Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                >
                  <h3 className="text-3xl font-bold text-white mb-1">Sampada Kapoor</h3>
                  <p className="text-green-300 text-lg font-medium">Founder & CEO</p>
                </motion.div>
              </div>

              {/* Decorative Border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -inset-4 bg-linear-to-br from-green-500/20 to-purple-500/20 rounded-3xl -z-10 blur-xl"
              />
            </motion.div>

            {/* Achievements Badges */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-3 mt-8"
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:bg-white/10 transition-all"
                >
                  <achievement.icon className="text-green-400 text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-xs font-medium">{achievement.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm font-semibold">Meet Our Visionary Leader</span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1.5 bg-linear-to-r from-lime-400 via-emerald-500 to-green-600 rounded-full mb-6"
              />
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                Guided by
                <br />
                <span className="bg-linear-to-r from-lime-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                With over <span className="text-green-400 font-semibold">20 years of experience</span> in neuroscience, psychology, and personal development, <span className="text-white font-semibold">Sampada Kapoor</span> has dedicated her life to unlocking human potential.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Her groundbreaking approach combines cutting-edge brain science with proven strategies to help high-performers achieve multidimensional success. She believes that greatness isn't a gift—it's a skill that can be developed.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Under her leadership, Defyn has transformed the lives of thousands, helping them compress <span className="text-emerald-400 font-semibold">10 years of growth into just 2 years</span>.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={itemVariants}
              className="relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            >
              <FaQuoteLeft className="text-green-400/30 text-4xl mb-4" />
              <p className="text-white text-xl italic leading-relaxed mb-4">
                "Your potential is not a ceiling—it's a launchpad. Every limitation you perceive is simply an invitation to expand beyond what you thought possible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-linear-to-r from-green-400 to-emerald-600" />
                <span className="text-green-300 font-semibold">Sampada Kapoor</span>
              </div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-white/70 group-hover:text-white text-xl transition-colors" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-bold text-base shadow-2xl shadow-green-500/30 transition-all"
              >
                Learn More About Intrinsic_by_Sampada
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '20+', label: 'Years Experience' },
            { number: '1000+', label: 'Lives Transformed' },
            { number: '50+', label: 'Speaking Events' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 200 }}
                className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-lime-400 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}