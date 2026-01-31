"use client"

import { motion } from "framer-motion"
import { Store, Coffee, Scissors, Wrench, ShoppingBag, UtensilsCrossed } from "lucide-react"

export function SocialProof() {
  const businessTypes = [
    { name: "Kirana Stores", icon: Store },
    { name: "Restaurants", icon: UtensilsCrossed },
    { name: "Retail Shops", icon: ShoppingBag },
    { name: "Salons", icon: Scissors },
    { name: "Cafes", icon: Coffee },
    { name: "Workshops", icon: Wrench },
  ]

  return (
    <section className="border-y border-white/20 bg-white/5 backdrop-blur-sm py-10 relative overflow-hidden">
      {/* Ambient background for section */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative">
          {/* Left side: Trust text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm text-muted-foreground">
              Built for <span className="text-foreground font-medium">MSMEs</span> across India
            </p>
          </motion.div>



          {/* Right side: Business type icons - Infinite Marquee */}
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/40 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
               className="flex items-center gap-12 whitespace-nowrap"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                 duration: 25, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
            >
              {[...businessTypes, ...businessTypes].map((business, index) => {
                const Icon = business.icon
                return (
                  <div
                    key={`${business.name}-${index}`}
                    className="flex items-center gap-3 text-muted-foreground/80 transition-colors hover:text-primary shrink-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-background/40 flex items-center justify-center border border-border/40">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{business.name}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
