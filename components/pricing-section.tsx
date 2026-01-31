"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"
import Magnetic from "./magnetic"

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for small shops just getting started with digital",
    features: [
      "Voice & text billing",
      "Basic inventory tracking",
      "Up to 100 invoices/month",
      "Customer database",
      "Hindi & English support",
      "WhatsApp notifications",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹499",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "Everything in Starter",
      "Unlimited invoices",
      "Advanced inventory AI",
      "Supplier management",
      "Profit & loss tracking",
      "Payment reminders",
      "GST reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "₹1,499",
    period: "/month",
    description: "For established businesses wanting full AI power",
    features: [
      "Everything in Growth",
      "Scenario planning AI",
      "Multi-location support",
      "Advanced analytics",
      "Custom reports",
      "API access",
      "Dedicated account manager",
      "WhatsApp Business integration",
      "Staff accounts",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide">
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you grow. No hidden charges. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tier.popular ? "relative z-10 md:-my-6 md:scale-110" : ""}
            >
              <Card
                className={`relative p-6 h-full flex flex-col transition-all duration-300 ${
                  tier.popular
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl scale-[1.02]"
                    : "border-border/60 bg-card hover:border-primary/50 hover:shadow-lg"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="font-display text-xl font-bold mb-1 tracking-tight">{tier.name}</h3>
                  <p className={`text-sm ${tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold font-display tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className={`ml-1 text-sm font-medium ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${tier.popular ? "bg-background/20" : "bg-primary/10"}`}>
                        <Check className={`h-3 w-3 ${tier.popular ? "text-background" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm font-medium ${tier.popular ? "text-primary-foreground/90" : "text-foreground/80"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Magnetic>
                  <ShinyButton
                    variant={tier.popular ? "secondary" : "primary"} // Fixed variant type
                    className={`w-full justify-center text-lg py-6 ${tier.popular ? "bg-background text-foreground hover:bg-background/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                  >
                    {tier.cta}
                  </ShinyButton>
                </Magnetic>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Trust badge */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="text-center mt-16"
        >
           <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium opacity-60">
             Trusted by 500+ Indian Business Owners
           </p>
        </motion.div>
      </div>
    </section>
  )
}
