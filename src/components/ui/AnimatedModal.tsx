import React from "react";
import { motion } from "framer-motion";

interface AnimatedModalProps {
  modalPosition: {
    top: number;
    left: number;
  };
  children: React.ReactNode;
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({ modalPosition, children }) => {
  return (
    <motion.div
      className="fixed z-50 rounded-xl w-96 overflow-hidden p-1"
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
        background: "linear-gradient(270deg, #60A5FA, #3B82F6, #60A5FA)",
        backgroundSize: "600% 600%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="bg-white rounded-xl p-4 shadow-lg">{children}</div>
    </motion.div>
  );
};

export default AnimatedModal;
