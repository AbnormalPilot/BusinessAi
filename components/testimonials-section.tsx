"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Pehle poora din stock count mein jaata tha. Ab BusinessAi sab yaad rakhta hai. Voice se bill bana leta hoon, customer khush!",
    image: "/images/avatar-indian-man-1.png",
    name: "Rajesh Sharma",
    role: "Kirana Store Owner, Delhi",
  },
  {
    text: "GST filing ke time tension hoti thi. Ab sab automatic hai. Monthly ₹15,000 accountant ka paisa bachta hai.",
    image: "/images/avatar-indian-man-2.png",
    name: "Vikram Patel",
    role: "Electronics Shop, Ahmedabad",
  },
  {
    text: "Mera restaurant mein waste 40% kam ho gaya. AI batata hai kaunsa item zyada banana hai, kaunsa kam.",
    image: "/images/avatar-indian-woman-1.png",
    name: "Priya Mehta",
    role: "Restaurant Owner, Mumbai",
  },
  {
    text: "Hindi mein baat kar sakta hoon, ye sabse badi baat hai. Mujhe English nahi aati thi, ab koi problem nahi.",
    image: "/images/avatar-indian-man-3.png",
    name: "Suresh Kumar",
    role: "Grocery Store, Lucknow",
  },
  {
    text: "Supplier ne rate badha diya tha chupke se. BusinessAi ne turant alert diya. ₹8,000 bach gaye ek order mein!",
    image: "/images/avatar-indian-woman-2.png",
    name: "Anita Singh",
    role: "Retail Shop Owner, Jaipur",
  },
  {
    text: "Festival season mein stock khatam ho jaata tha. Ab AI predict karta hai, pehle se order kar leta hoon.",
    image: "/images/avatar-indian-man-1.png",
    name: "Mohammed Farooq",
    role: "Wholesale Trader, Hyderabad",
  },
  {
    text: "Payment yaad dilane mein sharam aati thi. Ab WhatsApp reminder automatic jaata hai, 90% time pe payment milta hai.",
    image: "/images/avatar-indian-woman-3.png",
    name: "Kavita Joshi",
    role: "Salon Owner, Pune",
  },
  {
    text: "Poori family ka business hai. Sabko pata rehta hai kya chal raha hai. Daily report WhatsApp pe aa jati hai.",
    image: "/images/avatar-indian-man-2.png",
    name: "Arun Gupta",
    role: "Medical Store, Kolkata",
  },
  {
    text: "Pehle accountant pe depend tha. Ab khud sab dekh leta hoon phone se. Profit loss real-time pata hai.",
    image: "/images/avatar-indian-man-3.png",
    name: "Deepak Verma",
    role: "Auto Parts Shop, Chennai",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide">
            Success Stories
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Dukandaars ki Awaaz
          </h2>
          <p className="text-center mt-4 text-base sm:text-lg text-muted-foreground">
            Real business owners sharing how BusinessAi transformed their operations.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
