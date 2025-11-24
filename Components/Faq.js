import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "./ComponentsData";
import ActionCardsComponent from "./ActionCards";



export default function FAQComponent() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqRef = useRef(null);

  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* FAQ Section */}
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0 }}
        animate={faqInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-16 py-20"
      >
        <div className="bg-linear-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={faqInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Frequently
                <br />
                <span className="bg-linear-to-r from-lime-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Asked
                </span>
                <br />
                Questions
              </h2>
            </motion.div>

            {/* Right Side - Questions */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-white text-base md:text-lg font-medium flex-1">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-lime-400 text-xl mt-1 flex-shrink-0" />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <ActionCardsComponent />
    </div>
  );
}
