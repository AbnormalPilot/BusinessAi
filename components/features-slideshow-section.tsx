"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "Vendors & Manufacturers",
    description:
      "Get paid upfront, empower customers with flexible payments, and leave the collections burden to us. Partner channel approved.",
    image: "/images/slideshow-vendors.png",
  },
  {
    id: 2,
    title: "Reseller Partners",
    description: "Cut closing from weeks to minutes with easy financing, seamless checkout, and faster payouts.",
    image: "/images/slideshow-resellers.png",
  },
  {
    id: 3,
    title: "Buyers",
    description:
      "Allow your customers to access the technology and services they need to be successful with flexible payment options.",
    image: "/images/slideshow-buyers.png",
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    description:
      "Scale your business with enterprise-grade financing solutions, custom terms, and dedicated support for high-volume transactions.",
    image: "/images/slideshow-enterprise.png",
  },
  {
    id: 5,
    title: "Logistics Partners",
    description:
      "Seamlessly integrate delivery services. Auto-schedule pickups, track shipments, and provide real-time updates to customers.",
    image: "/images/slideshow-logistics.png",
  },
  {
    id: 6,
    title: "Financial Institutions",
    description:
      "Enable instant credit checks, automated loan processing, and secure banking integrations for your merchant network.",
    image: "/images/slideshow-finance.png",
  },
  {
    id: 7,
    title: "Developer Ecosystem",
    description:
      "Build custom apps and integrations on top of the BusinessAi API. Expand capabilities and create tailored solutions.",
    image: "/images/slideshow-developers.png",
  },
]

export function FeaturesSlideshowSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: scrollContainerRef })
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-4">Partners</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-balance tracking-tight">
              Win-win for your business, partners, and customers
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80 border-border/50 transition-transform active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80 border-border/50 transition-transform active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group/scroll">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id} 
                className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-16px)] snap-center group"
              >
                <div className="rounded-2xl overflow-hidden mb-6 bg-muted/30 relative aspect-[4/5] sm:aspect-[4/3] border border-border/30">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {slide.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Custom Scroll Progress Bar */}
          <div className="h-1 w-full bg-muted/30 rounded-full mt-4 overflow-hidden relative">
            <motion.div 
               className="absolute inset-y-0 left-0 bg-primary/40 rounded-full origin-left"
               style={{ scaleX }} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
