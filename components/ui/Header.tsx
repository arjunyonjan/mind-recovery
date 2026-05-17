"use client";

import { useState, useEffect } from "react";
import { NepalFlag } from "@/components/NepalFlag";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-2xl" 
          : "bg-gradient-to-r from-black/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5">
        
        {/* Logo - Links to Home */}
        <a href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="relative">
            <span className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 inline-block drop-shadow-lg">
              🧠
            </span>
            <div className="absolute -inset-3 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent tracking-tight">
              Mind Recovery
            </span>
            <div className="flex items-center gap-1.5">
              <NepalFlag className="h-6 w-auto md:h-7" />
              <span className="text-xs md:text-sm text-white font-bold tracking-wider drop-shadow-lg">
                NEPAL
              </span>
            </div>
          </div>
        </a>

        {/* Navigation - With Real Routes */}
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-8">
          <a href="/" className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/brain-waste" className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium group">
            Brain Waste
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105">
          Start Journey
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl">
          ☰
        </button>
      </div>
    </header>
  );
}
