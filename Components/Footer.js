import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Footer Section */}
      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-black"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            {/* Logo and Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={footerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                whileHover={{ scale: 1.05 }}
              >
                SamPada
              </motion.h3>
              <p className="text-gray-400 text-sm">
                Elite Brain Science Program.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex flex-col gap-2 text-right">
                <div className="flex gap-6 text-white text-sm font-medium">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#84cc16" }}
                    className="hover:text-lime-400 transition-colors"
                  >
                    Home
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#84cc16" }}
                    className="hover:text-lime-400 transition-colors"
                  >
                    Program
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, color: "#84cc16" }}
                    className="hover:text-lime-400 transition-colors"
                  >
                    Case Studies
                  </motion.a>
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  MAIL US DIRECTLY
                </p>
                <motion.a
                  href="mailto:hello@aampada.in"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-white text-base font-medium hover:text-lime-400 transition-colors"
                >
                  hello@sampada.in
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-gray-500 text-sm">
              2025 Sampada. All Right Reserved.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-white/10 hover:bg-radial-[at_25%_25%] from-green-400 via-green-500 to-green-900  rounded-full flex items-center justify-center transition-all"
              >
                <FaWhatsapp className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="w-10 h-10 bg-white/10 hover:bg-radial-[at_25%_25%] from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center transition-all"
              >
                <FaInstagram className="text-white text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
