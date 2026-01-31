"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Kya BusinessAi sirf Hindi mein kaam karta hai?",
    answer:
      "Nahi! BusinessAi Hindi aur English dono mein kaam karta hai. Aap jis bhi language mein comfortable ho, usi mein baat kar sakte ho. Voice commands bhi dono languages mein support hain.",
  },
  {
    question: "Mujhe computer ya technical knowledge chahiye?",
    answer:
      "Bilkul nahi! BusinessAi specially non-technical business owners ke liye banaaya gaya hai. Agar aap WhatsApp use kar sakte ho, toh BusinessAi bhi use kar sakte ho. Simple chat interface hai, koi training nahi chahiye.",
  },
  {
    question: "Kya ye mere existing billing system ke saath kaam karega?",
    answer:
      "Haan, BusinessAi aapke purane data ko import kar sakta hai. Chahe aap register mein likhte ho ya koi aur software use karte ho, hum migration mein help karenge. Setup sirf 1 din mein ho jaata hai.",
  },
  {
    question: "GST compliance ke liye kya karna padega?",
    answer:
      "Kuch nahi! BusinessAi automatically GST-compliant invoices banata hai. CGST, SGST, IGST sab calculate ho jaata hai. GST filing ke time reports bhi ready milte hain. Aapko sirf approve karna hai.",
  },
  {
    question: "Mera data safe rahega?",
    answer:
      "100% safe! Aapka data encrypted hai aur sirf aap access kar sakte ho. Hum Google Cloud use karte hain jo bank-level security deta hai. Aapka data kabhi bhi share nahi hota.",
  },
  {
    question: "Offline mode available hai?",
    answer:
      "Haan! Basic billing aur inventory check offline bhi kaam karta hai. Jab internet aaye, data automatically sync ho jaata hai. Rural areas ke liye bhi perfect hai.",
  },
  {
    question: "Free plan mein kya limitations hain?",
    answer:
      "Free plan mein 100 invoices per month aur basic features milte hain. Jab business grow ho, tab upgrade kar sakte ho. Koi hidden charges nahi, koi commitment nahi.",
  },
  {
    question: "Support kaise milega agar problem ho?",
    answer:
      "WhatsApp pe direct support available hai. Hindi mein baat kar sakte ho. Response time usually 2-4 hours hai. Premium plans mein phone support bhi milta hai.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide">
            FAQ
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Aksar pooche jaane wale sawaal
          </h2>
          <p className="text-center mt-4 text-base sm:text-lg text-muted-foreground">
            BusinessAi ke baare mein jaaniye. Aur sawaal ho toh WhatsApp karein!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Aur koi sawaal hai?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            WhatsApp pe contact karein
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
