"use client"
import Image from "next/image"

import { Navigation } from "@/components/navigation"
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/hero-section").then(mod => mod.HeroSection), { ssr: false })
const Intro = dynamic(() => import("@/components/intro").then(mod => mod.Intro), { ssr: false })

import { SocialProof } from "@/components/social-proof"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"

import { FeaturesSlideshowSection } from "@/components/features-slideshow-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"



export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introPhase, setIntroPhase] = useState<"intro" | "transition" | "content">("intro")

  const [showNavExpansion, setShowNavExpansion] = useState(false)

  const handleIntroComplete = () => {
    setIntroPhase("transition")
    // Hero content appears almost immediately
    setTimeout(() => {
      setShowNavExpansion(true)
    }, 100)

    setTimeout(() => {
      setIntroPhase("content")
      setShowIntro(false)
    }, 400) // Fast transition
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <AnimatePresence mode="wait">
        {introPhase === "intro" && (
          <Intro key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <Navigation isExpanded={showNavExpansion} />

      <motion.div
        initial={false}
        animate={{ 
          opacity: introPhase !== "intro" ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <main>
          <HeroSection />
          <SocialProof />
          <HowItWorksSection />

          <FeaturesSection />
          <FeaturesSlideshowSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
        </main>
        <footer className="border-t border-border py-12 mt-20" style={{ backgroundColor: 'var(--nav-footer-bg)', color: 'var(--nav-footer-fg)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black/90 flex items-center justify-center overflow-hidden border border-white/20 relative">
                    <Image 
                      src="/logo-new.png" 
                      alt="BusinessAi Logo" 
                      fill
                      className="object-cover scale-150"
                    />
                  </div>
                  <span className="text-base font-semibold tracking-tight font-display text-[var(--nav-footer-fg)]">
                    BusinessAi
                  </span>
                </div>
                <p className="text-sm text-[var(--nav-footer-fg)]/70">
                  AI-powered business management for MSMEs across India.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-sm text-[var(--nav-footer-fg)]">Product</h4>
                <ul className="space-y-2.5 text-sm text-[var(--nav-footer-fg)]/70">
                  <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-sm text-[var(--nav-footer-fg)]">Company</h4>
                <ul className="space-y-2.5 text-sm text-[var(--nav-footer-fg)]/70">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-sm text-[var(--nav-footer-fg)]">Legal</h4>
                <ul className="space-y-2.5 text-sm text-[var(--nav-footer-fg)]/70">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-10 pt-8 text-center text-sm text-[var(--nav-footer-fg)]/60">
              © 2025 BusinessAi. All rights reserved.
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
