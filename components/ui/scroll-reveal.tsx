"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  variant?: "fade" | "slide-up" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  width = "fit-content",
  className = "",
  variant = "slide-up",
  delay = 0,
  duration = 0.5,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: "backOut" } },
    },
  };

  const selectedVariant = variants[variant] as { hidden: Variant; visible: Variant };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={selectedVariant}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
