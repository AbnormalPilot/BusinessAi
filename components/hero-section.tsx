"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50/50 to-white">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 lg:items-start text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mx-auto lg:mx-0 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                New: AI Growth Assistant
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Powering Growth for India’s <span className="text-blue-600 inline-block">MSMEs</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-[600px] text-lg text-slate-600 mx-auto lg:mx-0">
              Smart tools to manage, automate, and scale your business — all in one platform.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group shadow-lg shadow-blue-600/20">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group shadow-sm hover:shadow-md border-slate-200">
                  <PlayCircle className="mr-2 h-4 w-4 text-slate-500 group-hover:text-blue-600" />
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
               <div className="flex items-center gap-1">
                 <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                 <span className="font-medium text-slate-700">4.9/5</span>
                 <span>from 2,000+ businesses</span>
               </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Video */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden shadow-2xl border border-white/60 group">
               <video 
                 src="/hero-video.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
               
               {/* Optional overlay for better text contrast if video is light, 
                   or just a subtle gloss effect */}
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Kept the floating growth badge as it complements the video nicely */}
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-10 bg-white p-3 rounded-xl shadow-xl border border-slate-100 z-20"
            >
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                    <div className="text-xs text-slate-500">Weekly Growth</div>
                    <div className="text-sm font-bold text-slate-900">+24.5%</div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
