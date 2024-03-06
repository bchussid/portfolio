"use client";
import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/hooks/useScrollProgress";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  // exit: { opacity: 0, x: 0, y: -100 },
};

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.2 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-50 bg-primary h-1 top-0 left-0 right-0 transition-all duration-700"
      ></span>
      {/* controls height of screen! */}
      {/* <div className="h-[4000px]"></div> */}
    </>
  );
};

export default Template;
