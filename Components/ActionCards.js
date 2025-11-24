"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import { actionCards } from "./ComponentsData";

const ActionCardsComponent = () => {
  const actionRef = useRef(null);
  const actionInView = useInView(actionRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Action Cards Section */}
      <motion.div
        ref={actionRef}
        initial={{ opacity: 0 }}
        animate={actionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-16 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actionCards.map((card, index) => (
            <motion.div
              href={card.link}
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl  group transition-all duration-500 ease-in "
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{
                    skewX: 1,
                    skewY: 1,
                    rotate: 20,
                    borderRadius: 100,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.15 }}
                  className={`size-12 bg-radial-[at_25%_25%] ${card.colors} to-75% rounded-xl group-hover:rounded-full  transition-all duration-300 ease-in-out flex items-center justify-center`}
                >
                  <card.icon className="text-white text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.subtitle}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 border-2 border-gray-900 rounded-full hover:border-none transition-all duration-150 ease-in-out hover:bg-radial-[at_95%_15%] from-white to-zinc-900 to-75% text-gray-900 text-xs font-semibold tracking-wide hover:bg-gray-900 hover:text-white"
                >
                  {card.button}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ActionCardsComponent;
