"use client";

import { motion } from "framer-motion";

interface BrainWasteSlide {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  timeLabel: string;
  bgImage?: string;
}

export default function BrainWasteSlider({ slides }: { slides: BrainWasteSlide[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2335] via-[#1e2a45] to-[#243354]">
      {slides.map((slide) => (
        <section
          key={slide._id}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              ⏰ {slide.timeLabel}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-cyan-400 font-light mb-6"
            >
              {slide.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed"
            >
              {slide.content}
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  );
}
