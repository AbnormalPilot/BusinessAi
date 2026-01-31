"use client"

import Link from "next/link"
import Image from "next/image"
import { ShinyButton } from "@/components/ui/shiny-button"
import { motion, AnimatePresence } from "framer-motion"
import Magnetic from "@/components/magnetic"
import { useState } from "react"

export function Navigation({ isExpanded = false }: { isExpanded?: boolean }) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false) // Simple check or use media query hook if prefer

  return (
    <div className="fixed top-0 left-0 right-0 z-[150] flex justify-center px-4 pt-4">
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0, scale: 0.3 }}
        animate={{ 
          y: 0,
          opacity: 1,
          scale: isExpanded ? [1, 1.05, 1] : 1, 
          width: isExpanded ? "auto" : "56px",
          height: isExpanded ? "auto" : "56px",
          backgroundColor: isExpanded ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.4)",
          borderRadius: isExpanded ? (isMobileMenuOpen ? "24px" : "9999px") : "50%",
          padding: isExpanded ? "8px 20px" : "0px",
          backdropFilter: isExpanded ? ["blur(0px) saturate(100%)", "blur(16px) saturate(180%)", "blur(12px) saturate(150%)"] : "blur(0px) saturate(100%)",
        }}
        transition={{ 
          type: "spring",
          stiffness: 180, 
          damping: 25,
          mass: 1,
          scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Apple-inspired easing
          backdropFilter: { duration: 0.5, ease: "linear" },
          y: { type: "spring", stiffness: 200, damping: 25 },
          layout: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }}
        className={`flex flex-col items-center ${isExpanded ? 'justify-start md:justify-between md:flex-row gap-6' : 'justify-center'} border border-white/30 shadow-[0_8px_32px_rgba(49,10,49,0.15)] overflow-hidden`}
      >
        <div className="flex items-center justify-between w-full md:w-auto gap-8">
          {/* Logo Section */}
          <Magnetic>
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group flex-shrink-0"
            >
              <motion.div 
                layout
                animate={{ 
                  rotate: isExpanded ? 360 : 0,
                  scale: isExpanded ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden border border-white/20 ${isExpanded ? 'bg-black shadow-[0_0_20px_rgba(122,63,145,0.2)]' : 'bg-transparent'}`}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/logo-new.png" 
                    alt="BusinessAi Logo" 
                    fill
                    className="object-cover scale-150"
                  />
                </div>
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.span 
                    initial={{ opacity: 0, x: -20, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, scale: 0.8, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    // Text needs to be foreground on the light glass background
                    className="text-3xl tracking-wide text-foreground font-[family-name:var(--font-outfit)] font-bold whitespace-nowrap overflow-hidden pt-1"
                  >
                    BusinessAi
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </Magnetic>

          {/* Mobile Hamburger - Only visible when expanded */}
          {isExpanded && (
            <div className="md:hidden ml-auto">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground focus:outline-none"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  {/* Simple Hamburger to Cross animation */}
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-foreground rounded-full origin-left"
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-full h-0.5 bg-foreground rounded-full"
                  />
                  <motion.span 
                    animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-foreground rounded-full origin-left"
                  />
                </div>
              </button>
            </div>
          )}

          {/* Desktop Nav Links */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="hidden md:flex items-center gap-1"
                onMouseLeave={() => setHoveredTab(null)}
              >
                {['How It Works', 'Features', 'Pricing'].map((item, i) => (
                  <motion.div
                    key={item}
                    className="relative px-2 py-1"
                    onMouseEnter={() => setHoveredTab(item)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                      <Link
                        href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const id = item.toLowerCase().replace(/ /g, '-');
                          const element = document.getElementById(id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                            window.history.pushState(null, '', `#${id}`);
                          }
                        }}
                        className={`relative z-10 px-3 py-1.5 text-sm transition-colors font-medium block ${hoveredTab === item ? "text-primary font-semibold" : "text-foreground/70"}`}
                      >
                        {item}
                      </Link>
                    {hoveredTab === item && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-0 border border-primary/20 shadow-[0_4px_12px_rgba(49,10,49,0.15)] backdrop-blur-sm"
                        transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isExpanded && isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:hidden flex flex-col items-center gap-4 py-4 border-t border-black/5 mt-2"
            >
               {['How It Works', 'Features', 'Pricing'].map((item, i) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const id = item.toLowerCase().replace(/ /g, '-');
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', `#${id}`);
                      }
                    }}
                    className="text-lg font-medium text-foreground py-2"
                  >
                    {item}
                  </Link>
               ))}
               <div className="flex flex-col gap-3 w-full px-8 mt-2">
                  <ShinyButton variant="ghost" size="sm" className="w-full justify-center text-foreground/70 hover:text-primary">
                    Sign in
                  </ShinyButton>
                  <ShinyButton size="sm" className="w-full justify-center">
                    Get Started
                  </ShinyButton>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop CTA Buttons */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              layout
              initial={{ opacity: 0, x: 40, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 40, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="hidden md:flex items-center gap-2"
            >
              <Magnetic>
                <ShinyButton variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground/70 hover:text-primary">
                  Sign in
                </ShinyButton>
              </Magnetic>
              <Magnetic>
                <ShinyButton size="sm">
                  Get Started
                </ShinyButton>
              </Magnetic>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
