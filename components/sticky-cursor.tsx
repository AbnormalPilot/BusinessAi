"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function StickyCursor() {
  const [isActive, setIsActive] = useState(false)
  const [cursorSize, setCursorSize] = useState(15)
  const cursorRef = useRef<HTMLDivElement>(null)
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Always follow the mouse position
      mouse.x.set(clientX)
      mouse.y.set(clientY)
      
      const target = e.target as HTMLElement;
      // Use closest() to find the nearest interactive ancestor or self. 
      // This is much faster (O(depth)) than querySelectorAll (O(DOM size)).
      const interactiveElement = target.closest('button, a, [data-magnetic]');

      if (interactiveElement) {
        setIsActive(true)
        const rect = interactiveElement.getBoundingClientRect()
        // Use the larger dimension to ensure full coverage, matching original logic
        const maxSize = Math.max(rect.width, rect.height)
        setCursorSize(maxSize)
      } else {
        setIsActive(false)
        setCursorSize(15)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: isActive ? cursorSize : 12,
        height: isActive ? cursorSize : 12,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        backgroundColor: isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        backgroundColor: { duration: 0.2 },
        width: { type: "spring", stiffness: 200, damping: 20 },
        height: { type: "spring", stiffness: 200, damping: 20 }
      }}
      className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference -translate-x-1/2 -translate-y-1/2 origin-center"
    />
  )
}

