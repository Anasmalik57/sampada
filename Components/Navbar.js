"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-4 md:px-8 lg:px-16 py-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-3xl bg-linear-to-r font-extrabold from-lime-500 via-emerald-600 to-green-700  bg-clip-text text-transparent"
        >
          Intrinsic_by_Sampada
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {["HOME", "PROGRAM", "CASE STUDIES"].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ color: "#00c951", y: -2 }}
              className="text-sm font-medium tracking-wider transition-colors  "
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-white/20 transition-shadow"
        >
          <span className="hidden md:block">REQUEST AN INVITE</span>
          <span className="md:hidden uppercase">Connect</span>

          <FaArrowRight className="text-xs" />
        </motion.button>
      </motion.nav>
    </>
  );
};

export default Navbar;
