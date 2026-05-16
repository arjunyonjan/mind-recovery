'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Slide {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  backgroundImage: string;
  order: number;
}

export default function ParallaxSlider({ slides }: { slides: Slide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="relative">
      {slides.map((slide, index) => {
        const start = index / slides.length;
        const end = (index + 1) / slides.length;
        const y = useTransform(scrollYProgress, [start, end], ['0%', '-50%']);
        
        return (
          <motion.section
            key={slide._id}
            className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden"
            style={{ y }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl mb-6"
              >
                {slide.subtitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed"
              >
                {slide.content}
              </motion.p>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
