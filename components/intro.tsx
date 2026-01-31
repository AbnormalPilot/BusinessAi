"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"



export function Intro({ onComplete }: { onComplete: () => void }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      onComplete()
    }, 4500)
    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isMounted) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -translate-y-16"
      >
        <h1 className="text-[12vw] font-bold tracking-tighter text-stroke-theme text-transparent uppercase whitespace-nowrap font-outfit">
          BUSINESS AI
        </h1>
      </motion.div>

      {/* Shiny Overlay Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -translate-y-16"
      >
        <h1 className="text-[12vw] font-bold tracking-tighter shiny-text uppercase whitespace-nowrap font-outfit">
          BUSINESS AI
        </h1>
      </motion.div>

      {/* Central Coin Animation */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.23, 1, 0.32, 1],
          delay: 0.2
        }}
        className="relative z-10 -translate-y-16 w-full max-w-[800px] px-4 flex justify-center"
      >
        <DotLottieReact
          src="https://lottie.host/ca3ae6ad-9600-497f-9309-d980983fb3ee/B0K3QTJ1EY.lottie"
          style={{ width: "100%", height: "auto" }}
          autoplay
          loop
        />
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}
