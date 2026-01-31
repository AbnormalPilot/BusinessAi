"use client";

import { Card } from "@/components/ui/card";

export default function TrustSection() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { value: "10,000+", label: "MSMEs Served" },
                { value: "₹500Cr+", label: "Transactions Managed" },
                { value: "4.8★", label: "Average Rating" },
                { value: "24/7", label: "Support" },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                    </div>
                    <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
