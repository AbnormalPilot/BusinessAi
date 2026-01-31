"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for new businesses just starting out.",
    features: ["Basic Business Dashboard", "Up to 10 Invoices/mo", "Basic Customer Management", "Email Support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹499",
    period: "/mo",
    description: "For growing businesses needing automation.",
    features: ["Everything in Starter", "Unlimited Invoices", "Payment Reminders", "Marketing Campaigns", "Priority Support"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    price: "₹1,299",
    period: "/mo",
    description: "Advanced tools for scaling operations.",
    features: ["Everything in Growth", "AI Insights & GST Reports", "Dedicated Account Manager", "API Access", "Multiple Users"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className={`flex flex-col relative transition-all duration-300 hover:shadow-xl ${tier.popular ? 'border-blue-600 shadow-lg scale-105 z-10' : 'border-slate-200'}`}>
              {tier.popular && (
                <div className="absolute top-0 right-0 left-0 -translate-y-1/2 flex justify-center">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Most Popular
                    </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="flex items-baseline mt-4">
                   <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                   {tier.period && <span className="text-slate-500 ml-1">{tier.period}</span>}
                </div>
                <CardDescription className="mt-2 text-slate-500">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button className={`w-full ${tier.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={tier.popular ? "default" : "outline"}>
                    {tier.cta}
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
