"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
}

export function ShinyButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "default",
  disabled = false,
}: ShinyButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]"

  const variants = {
    primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-md",
    ghost: "hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
  }

  const sizes = {
    sm: "h-9 px-4 text-sm",
    default: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base"
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
