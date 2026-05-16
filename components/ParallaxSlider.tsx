"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Slide {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  order: number;
  bgImage?: string;
  isTitleSlide?: boolean;
}

export default function ParallaxSlider({ slides }: { slides: Slide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-scroll">
      {slides.map((slide, index) => {
        const slideStart = index / slides.length;
        const slideEnd = (index + 1) / slides.length;
        const inputRange = [Math.max(0, slideStart), Math.min(1, slideEnd)];
        const outputRangeY = ["0%", "-15%"];
        const outputRangeOpacity = [1, 0.8];
        
        const y = useTransform(scrollYProgress, inputRange, outputRangeY);
        const opacity = useTransform(scrollYProgress, inputRange, outputRangeOpacity);
        
        const hasImage = slide.bgImage && slide.bgImage.length > 0;
        const isTitleSlide = slide.isTitleSlide === true;
        const imageOnRight = index % 2 === 0;
        
        // TITLE SLIDE - centered, no image, dark background
        if (isTitleSlide) {
          const hasTitleImage = slide.bgImage && slide.bgImage.length > 0;
          return (
            <motion.section
              key={slide._id}
              style={{ y, opacity, position: "sticky", top: 0 }}
              className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            >
              {hasTitleImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </>
              )}
              {!hasTitleImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2335] via-[#1e2a45] to-[#243354]" />
              )}
              <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          );
        }
        
        // CONTENT SLIDES - 2 column with images
        return (
          <motion.section
            key={slide._id}
            style={{ y, opacity, position: "sticky", top: 0 }}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2335] via-[#1e2a45] to-[#243354]"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-400/15 blur-2xl" />
              <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-2xl" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${imageOnRight ? '' : 'md:[direction:rtl]'}`}>
                
                {/* Text Column */}
                <div className={imageOnRight ? '' : 'md:[direction:ltr]'}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-left"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-light mb-4">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.content && (
                      <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed whitespace-pre-line">
                        {slide.content}
                      </p>
                    )}
                  </motion.div>
                </div>
                
                {/* Image Column - LARGE */}
                <div className={imageOnRight ? '' : 'md:[direction:ltr]'}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    {hasImage ? (
                      <div className="relative w-full max-w-2xl group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img
                          src={slide.bgImage}
                          alt={slide.title}
                          className="relative w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/20"
                        />
                        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_50px_rgba(0,240,255,0.15)] pointer-events-none" />
                      </div>
                    ) : (
                      <div className="w-full max-w-md h-80 bg-white/5 rounded-2xl border border-white/20 flex items-center justify-center">
                        <span className="text-white/30">Image coming soon</span>
                      </div>
                    )}
                  </motion.div>
                </div>
                
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
