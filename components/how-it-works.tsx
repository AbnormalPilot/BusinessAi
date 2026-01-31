"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign Up in Minutes",
    description: "Create your account with just your phone number. No complex paperwork required."
  },
  {
    number: "2",
    title: "Connect Your Data",
    description: "Easily upload your products or sync with your existing tools."
  },
  {
    number: "3",
    title: "Grow with Insights",
    description: "Get actionable tips and watch your business scale with automation."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Start growing in three simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

           {steps.map((step, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               viewport={{ once: true }}
               className="flex flex-col items-center text-center group"
             >
               <div className="h-24 w-24 rounded-full bg-white border-4 border-blue-50 shadow-sm flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl font-bold text-blue-600">{step.number}</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
               <p className="text-slate-600 max-w-xs">{step.description}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
