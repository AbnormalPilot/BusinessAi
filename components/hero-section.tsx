"use client"

import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight, Sparkles, Store } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BusinessChat } from "./business-chat"
import Magnetic from "./magnetic"
import { CircularHeroText } from "./circular-hero-text"
import Image from "next/image"

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null;

  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
      {/* Aurora Background Layer */}
      <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none z-0" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
        {/* Left Column: Content - Extreme Left */}
        <div className="flex flex-col items-start pl-0 lg:pl-0 relative min-h-[600px] justify-center">
           {/* Badge - absolute or just above with some margin if needed, but 'extreme left' might imply image.
               Let's give the badge some left margin so it's not cut off, but the image is extreme left. 
           */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute top-0 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-foreground/80 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>AI-Powered Business Intelligence</span>
          </motion.div>

          {/* Animated Character - Extreme Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} 
            className="w-full relative h-[450px] sm:h-[550px] lg:h-[700px] -ml-4 sm:-ml-8 lg:-ml-12 -mt-[0px] flex items-center justify-center" 
          >
             {/* Circular Text Background/Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 scale-[0.55] sm:scale-75 lg:scale-100 origin-center">
                <CircularHeroText 
                  text="AI TO REMOVE COMPLEXITY AND LET BUSINESSES FOCUS ON GROWTH" 
                  radius={320} // Large radius to surround character
                  className="text-primary/10" // Subtle text color? Or keep it bold? User said "hero text", likely visible.
                />
             </div>

             {/* Dollar Sign Behind Character */}
             <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.4 },
                  scale: { duration: 0.8, delay: 0.4 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
             >
                <span className="text-[200px] sm:text-[350px] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-lg animate-pulse">
                  $
                </span>
             </motion.div>

             <div className="absolute inset-y-0 left-[-125px] w-[120%] h-full z-10">
                <Image
                  src="/hero-character-v2.png"
                  alt="Business Character"
                  fill
                  className="object-contain object-left drop-shadow-2xl"
                  priority
                />
             </div>
          </motion.div>

        </div>

        {/* Center Vertical Text - Desktop Only */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[10px] hidden lg:flex items-center justify-center pointer-events-none z-0">
          <div className="-rotate-90 origin-center">
            <h1 className="text-[100px] font-bold text-foreground/10 whitespace-nowrap tracking-widest uppercase select-none font-display">
              BusinessAi
            </h1>
          </div>
        </div>


        {/* Right Column: Business Chat Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-xl ml-auto mr-0 pr-[25px] lg:self-start lg:mt-[30px] perspective-1000"
        >
          <div className="relative group transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
            {/* Subtle underglow */}
            <div className="absolute -inset-8 bg-primary/20 blur-[60px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
            <BusinessChat />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
