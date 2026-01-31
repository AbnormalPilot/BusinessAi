"use client"

import React from "react"
import { motion } from "motion/react"

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}

export const TestimonialsColumn = (props: TestimonialsColumnProps) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border border-border/60 max-w-xs w-full bg-card"
                  key={i}
                >
                  <p className="text-sm text-foreground leading-relaxed">{text}</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/40">
                    <img
                      width={36}
                      height={36}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium leading-tight">{name}</span>
                      <span className="text-xs text-muted-foreground leading-tight">{role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
