"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 -z-10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

      <div className="container px-4 md:px-6 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Build. Automate. Grow.
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-10">
            Everything your MSME needs to succeed in the digital age. Join thousands of other business owners today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8">
                Start Your Free Journey
            </Button>
        </div>
      </div>
    </section>
  );
}
