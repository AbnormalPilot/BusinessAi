"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Mic, Brain, TrendingUp, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Magnetic from "./magnetic"
import { ShinyButton } from "@/components/ui/shiny-button"

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Determine line drawing length based on scroll
  // We want the line to draw as we scroll through the section
  // It's a bit tricky to perfectly map SVG path length to scroll without knowing exact path length,
  // but we can estimate or use a simple 0-1 percentage for a gradient mark.
  
  return (
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-background" id="how-it-works">
      {/* Narrative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 relative"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary/80">The Workflow</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-6">
            From Chaos to <br />
            Clarity in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 bg-[length:200%_auto] animate-shiny">
              Seconds
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed">
            Experience the art of automated business management. No learning curve, just pure efficiency.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden md:block" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY: smoothProgress }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-primary origin-top hidden md:block shadow-[0_0_15px_rgba(49,10,49,0.5)]" 
          />

          <Step 
            number="01" 
            title="Bolo ya Likho" 
            description="Just send a voice note or text on WhatsApp. Like talking to your smartest manager."
            icon={Mic}
            align="left"
            visual={<VisualOne />}
            index={0}
          />
          
          <Step 
            number="02" 
            title="BusinessAi Works" 
            description="Our AI instantly processes your request. It generates invoices, updates inventory, and logs data."
            icon={Brain}
            align="right"
            visual={<VisualTwo />}
            index={1}
          />
          
          <Step 
            number="03" 
            title="Profit Badhta Hai" 
            description="Focus on growth while we handle the boring stuff. Automatic reports, reminders, and insights."
            icon={TrendingUp}
            align="left"
            visual={<VisualThree />}
            index={2}
          />
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Magnetic>
              <ShinyButton className="relative z-10 bg-primary text-primary-foreground px-12 py-6 rounded-full text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all border border-primary/20 hover:bg-primary/90 hover:scale-105">
                Start Your Journey
                <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ShinyButton>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Step({ number, title, description, icon: Icon, align, visual, index }: { 
  number: string, 
  title: string, 
  description: string, 
  icon: any, 
  align: "left" | "right",
  visual: React.ReactNode,
  index: number
}) {
  const isLeft = align === "left"
  
  return (
    <div className={cn(
      "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32 items-center",
      // On mobile, everything is stacked. On desktop, we respect alignment logic or just alternating
    )}>
      {/* Timeline Node (Center Dot) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-primary z-20 shadow-[0_0_20px_rgba(49,10,49,0.3)] flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "pl-12 md:pl-0",
          align === "right" ? "md:order-2 md:pl-16 text-left" : "md:order-1 md:pr-16 md:text-right"
        )}
      >
        <div className={cn(
          "inline-flex items-center gap-3 mb-4",
          align === "right" ? "flex-row" : "md:flex-row-reverse"
        )}>
           <span className="text-6xl font-display font-black text-primary/5 select-none absolute -z-10 scale-150 origin-center">{number}</span>
           <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center shadow-lg text-white">
             <Icon className="w-6 h-6" />
           </div>
           <span className="font-mono text-primary/60 text-sm tracking-wider uppercase">Step {number}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          {description}
        </p>
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={cn(
          "pl-12 md:pl-0",
          align === "right" ? "md:order-1 md:pr-16" : "md:order-2 md:pl-16"
        )}
      >
        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-2 shadow-2xl transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6">
            {visual}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Custom Visual Components for each step

function VisualOne() {
  return (
    <div className="bg-white/90 p-6 rounded-2xl overflow-hidden relative min-h-[220px] flex flex-col justify-between border border-primary/5">
      <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
           <Mic className="w-5 h-5 text-green-600" />
        </div>
        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-primary/5 text-sm max-w-[80%]">
          <p className="text-foreground/90 font-medium">Gupta ji ka bill bana do ₹1200 ka, item detergent.</p>
          <span className="text-[10px] text-muted-foreground mt-2 block">10:42 AM</span>
        </div>
      </div>

      <div className="flex items-end justify-end gap-4 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-none shadow-lg text-sm max-w-[80%]">
          <p>Processing request... Invoice generating.</p>
          <span className="text-[10px] text-primary-foreground/70 mt-2 block text-right">Just now</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
           <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Mic className="w-24 h-24 rotate-12 text-primary" />
      </div>
    </div>
  )
}

function VisualTwo() {
  return (
    <div className="bg-white/90 p-6 rounded-2xl overflow-hidden relative min-h-[220px] flex items-center justify-center border border-primary/5">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl z-10 animate-pulse">
            <Brain className="w-8 h-8" />
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white px-3 py-1 rounded-full shadow-sm border border-primary/10 text-[10px] font-bold whitespace-nowrap text-primary animate-bounce">
          Stock Updated
        </div>
        <div className="absolute bottom-0 right-1/4 translate-y-4 bg-white px-3 py-1 rounded-full shadow-sm border border-primary/10 text-[10px] font-bold whitespace-nowrap text-primary animate-bounce delay-75">
          Invoice Sent
        </div>
        <div className="absolute bottom-0 left-1/4 translate-y-4 bg-white px-3 py-1 rounded-full shadow-sm border border-primary/10 text-[10px] font-bold whitespace-nowrap text-primary animate-bounce delay-150">
          GST Calculated
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
    </div>
  )
}

function VisualThree() {
  return (
    <div className="bg-white/90 p-6 rounded-2xl overflow-hidden relative min-h-[220px] border border-primary/5 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-6">
         <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Revenue</p>
            <h4 className="text-2xl font-bold font-display text-foreground">₹ 24,500.00</h4>
         </div>
         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <TrendingUp className="w-4 h-4" />
         </div>
      </div>
      
      <div className="space-y-3">
        {[0.7, 0.9, 0.6, 0.8].map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${val * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={cn(
                  "h-full rounded-full",
                  i === 1 ? "bg-primary" : "bg-primary/40"
                )}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-xs text-green-600 font-medium">
         <CheckCircle2 className="w-3 h-3" />
         <span>Target exceeded by 15%</span>
      </div>
    </div>
  )
}
