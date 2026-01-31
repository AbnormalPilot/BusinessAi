"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CircularHeroTextProps {
  text: string;
  radius?: number; // Outer radius
  className?: string;
  children?: React.ReactNode;
}

export function CircularHeroText({ 
  text, 
  radius = 200,
  className = "",
  children
}: CircularHeroTextProps) {
  // We'll use a viewBox based on radius. 
  // Center is (radius, radius). Total size is 2*radius.
  const size = radius * 2;
  const center = radius;
  
  // Calculate radii for rings and text
  const outerRingRadius = radius - 2; // slight padding
  const innerRingRadius = radius * 0.7; // 70% of outer
  const textRadius = (outerRingRadius + innerRingRadius) / 2; // Centered between rings

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Ring */}
      <div 
        className="absolute inset-0 rounded-full border-[1.5px] border-primary/20"
        style={{ width: size, height: size }}
      />

      {/* Inner Ring */}
      <div 
        className="absolute rounded-full border-[1.5px] border-primary/20"
        style={{ 
          width: innerRingRadius * 2, 
          height: innerRingRadius * 2,
          top: (size - innerRingRadius * 2) / 2,
          left: (size - innerRingRadius * 2) / 2
        }}
      />

      {/* Rotating Text */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, // Slow rotation
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          width={size} 
          height={size} 
          className="w-full h-full overflow-visible"
        >
          <defs>
            <path 
              id="circlePath" 
              d={`
                M ${center}, ${center}
                m -${textRadius}, 0
                a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0
                a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0
              `}
            />
          </defs>
          <text className="text-[14px] font-bold uppercase tracking-[0.15em] fill-primary">
            <textPath href="#circlePath" startOffset="0%">
              {text} • {text} • {text} •
            </textPath>
          </text>
        </svg>
      </motion.div>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div style={{ maxWidth: innerRingRadius * 1.5 }} className="text-center">
          {children}
        </div>
      </div>
    </div>
  )
}


