"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, Clock, TrendingUp, FileText, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Problem Side */}
          <div className="space-y-8">
             <div className="inline-block rounded-lg bg-red-50 px-3 py-1 text-sm text-red-600 font-semibold mb-2">The Struggle</div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
               Running a business manually is slowing you down
             </h2>
             <div className="space-y-6">
                {[
                  { icon: Clock, text: "Manual work wastes hours every day" },
                  { icon: FileText, text: "Lost invoices and delayed payments" },
                  { icon: TrendingUp, text: "No clear visibility on profit or loss" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="p-2 rounded-full bg-red-100 text-red-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg text-slate-700 font-medium pt-1">{item.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-[2rem] -z-10 opacity-50 blur-xl"></div>
             <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600 font-semibold mb-2">The Solution</div>
             <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
               Automate your growth with intelligent tools
             </h2>
             <div className="space-y-6">
                {[
                  { icon: Zap, text: "Automation replaces manual tasks" },
                  { icon: CheckCircle, text: "Instant automated invoicing & reminders" },
                  { icon: TrendingUp, text: "Real-time analytics dashboard" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 shadow-sm"
                  >
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg text-slate-700 font-medium pt-1">{item.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
