"use client";

import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [value, setValue] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Increment the counter quickly to 100
    const duration = 2000; // 2 seconds total loading animation
    const intervalTime = 20; // Check every 20ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;

      // Easing function for smoother number roll
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const nextValue = Math.min(100, Math.floor(easeOutQuart * 100));

      setValue(nextValue);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 500); // Small delay to show 100 before disappearing
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#04060B] text-white overflow-hidden pointer-events-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex justify-center items-center">
            <Counter
              value={value}
              places={[100, 10, 1]}
              fontSize={120}
              padding={10}
              gap={8}
              textColor="white"
              fontWeight={900}
              gradientFrom="#04060B"
              gradientTo="transparent"
            />
          </div>

          <div className="absolute bottom-10 w-full flex justify-center">
            <motion.div
              className="h-[2px] bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${value}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
