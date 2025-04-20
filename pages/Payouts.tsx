import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: 'linear',
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Payouts: React.FC = () => {
  return (
    <div className="min-h-1/2 flex items-center justify-center m-10 bg-[#F7F9FF] text-slate-700">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-t-transparent border-[#305AFF] rounded-full mx-auto mb-6"
          variants={spinnerVariants}
          animate="animate"
        />
        <motion.h1
          className="text-4xl font-extrabold tracking-wide mb-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.7 }}
        >
          We’re working hard to bring you something amazing. Stay tuned!
        </motion.p>
      </div>
    </div>
  );
};

export default Payouts;
