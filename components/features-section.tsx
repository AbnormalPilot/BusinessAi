"use client"

import {
  Receipt,
  Package,
  TrendingUp,
  MessageSquare,
  Brain,
  Mic,
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Receipt,
    title: "GST Billing",
    description: "Voice-powered invoicing with auto GST calculation",
  },
  {
    icon: Package,
    title: "Smart Inventory",
    description: "AI predicts stock-outs before they happen",
  },
  {
    icon: TrendingUp,
    title: "Profit Tracking",
    description: "Real-time profit/loss view at a glance",
  },
  {
    icon: MessageSquare,
    title: "Hindi & English",
    description: "Chat naturally in your preferred language",
  },
  {
    icon: Brain,
    title: "Decision AI",
    description: "Get clear recommendations when you need them",
  },
  {
    icon: Mic,
    title: "Voice Commands",
    description: "Run your business hands-free",
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40" id="features">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#062C2A] leading-[1.1]">
          Everything you need to<br className="hidden sm:block" /> run your business
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-lg sm:text-xl text-[#5F7A76] max-w-2xl mx-auto leading-relaxed"
        >
          One AI that handles billing, inventory, finances, and more — so you can focus on what matters.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group relative"
            >
              <div 
                className="h-full p-8 rounded-[18px] border border-[rgba(19,78,74,0.08)] bg-gradient-to-b from-white to-[#F5FBF7] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,44,42,0.06)] flex flex-col items-start text-left relative overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-6 rounded-xl bg-[#E0F2F1] p-3 shadow-sm text-[#134E4A] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                {/* Text */}
                <h3 className="text-lg font-bold mb-2.5 text-[#062C2A] tracking-tight">{feature.title}</h3>
                <p className="text-[#5F7A76] text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
                
                {/* Subtle highlight gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/0 via-[#2DD4BF]/0 to-[#2DD4BF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
