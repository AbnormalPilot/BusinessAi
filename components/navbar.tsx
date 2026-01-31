"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center space-x-2" href="#">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BusinessAi</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <Link className="transition-colors hover:text-blue-600" href="#features">
            Features
          </Link>
          <Link className="transition-colors hover:text-blue-600" href="#how-it-works">
            How it Works
          </Link>
          <Link className="transition-colors hover:text-blue-600" href="#">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex text-slate-600">
            Log in
          </Button>
          <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
