"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Receipt, Users, LineChart, Megaphone, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: LayoutDashboard,
    title: "Smart Business Dashboard",
    description: "Get a bird's eye view of your entire business performance in one place."
  },
  {
    icon: Receipt,
    title: "Automated Invoicing",
    description: "Create GST-compliant invoices and send automated payment reminders."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Track customer details, purchase history, and manage relationships easily."
  },
  {
    icon: LineChart,
    title: "AI Growth Insights",
    description: "Data-driven recommendations to help you identify new opportunities."
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Run targeted SMS and WhatsApp campaigns to boost repeat sales."
  },
  {
    icon: Lock,
    title: "Secure Cloud Access",
    description: "Bank-grade security ensures your business data is safe and accessible anywhere."
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal variant="slide-up">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Everything you need to scale
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="slide-up" delay={0.1}>
            <p className="text-lg text-slate-600">
              Powerful features designed specifically for the needs of modern Indian businesses.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
