"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Feature {
  title: string;
  color: string;
}

interface BrainWasteSlide {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  timeLabel: string;
  bgImage?: string;
  features?: Feature[];
  highlight?: string;
  isIntro?: boolean;
}

const colorClasses: Record<string, string> = {
  sky: "border-sky-200 bg-sky-50 text-sky-800",
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-800",
  orange: "border-orange-200 bg-orange-50 text-orange-800",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  yellow: "border-yellow-200 bg-yellow-50 text-yellow-800",
  rose: "border-rose-200 bg-rose-50 text-rose-800",
  red: "border-red-200 bg-red-50 text-red-800",
  pink: "border-pink-200 bg-pink-50 text-pink-800",
  violet: "border-violet-200 bg-violet-50 text-violet-800",
  purple: "border-purple-200 bg-purple-50 text-purple-800",
  fuchsia: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800",
};

const iconColors: Record<string, string> = {
  sky: "text-sky-600",
  cyan: "text-cyan-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  orange: "text-orange-600",
  amber: "text-amber-600",
  yellow: "text-yellow-600",
  rose: "text-rose-600",
  red: "text-red-600",
  pink: "text-pink-600",
  violet: "text-violet-600",
  purple: "text-purple-600",
  fuchsia: "text-fuchsia-600",
};

const BoltIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 3a3 3 0 00-3 3v1a3 3 0 00-2 3v2a3 3 0 002 3v1a3 3 0 003 3h1V3H9z" />
    <path d="M15 3a3 3 0 013 3v1a3 3 0 012 3v2a3 3 0 01-2 3v1a3 3 0 01-3 3h-1V3h1z" />
  </svg>
);

const DropletIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 15.5A8.5 8.5 0 1110.5 6 7 7 0 0020 15.5z" />
  </svg>
);

const getIcon = (title: string) => {
  if (title.includes("Stress")) return <BoltIcon />;
  if (title.includes("Mind")) return <BrainIcon />;
  if (title.includes("Hydrated")) return <DropletIcon />;
  return <MoonIcon />;
};

export default function BrainWasteSlider({ slides }: { slides: BrainWasteSlide[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <div className="min-h-screen bg-white">
        {slides.map((slide) => {
          // INTRO SLIDE
          if (slide.isIntro) {
            return (
              <section key={slide._id} className="min-h-screen w-full flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 17h16" />
                      <path d="M6 17a6 6 0 0112 0" />
                      <path d="M12 4v3" />
                    </svg>
                    {slide.timeLabel}
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium text-sky-600 mb-6">
                    {slide.subtitle}
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                    {slide.content}
                  </p>
                  {slide.highlight && (
                    <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-indigo-50 px-6 py-4 max-w-md mx-auto">
                      <p className="text-sm text-sky-800">{slide.highlight}</p>
                    </div>
                  )}
                </div>
              </section>
            );
          }
          
          // REGULAR SLIDES
          return (
            <section key={slide._id} className="min-h-screen w-full flex items-center justify-center">
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
                  <div className="text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 17h16" />
                        <path d="M6 17a6 6 0 0112 0" />
                        <path d="M12 4v3" />
                      </svg>
                      {slide.timeLabel}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-xl sm:text-2xl font-medium text-sky-600 mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-slate-600 mb-8 max-w-md">
                      {slide.content}
                    </p>
                    {slide.features && slide.features.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className={`flex items-center gap-3 rounded-xl border ${colorClasses[feature.color].split(" ")[0]} ${colorClasses[feature.color].split(" ")[1]} p-3`}>
                            <div className={iconColors[feature.color]}>
                              {getIcon(feature.title)}
                            </div>
                            <span className={`text-sm font-medium ${colorClasses[feature.color].split(" ")[2]}`}>
                              {feature.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.highlight && (
                      <div className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-4">
                        <p className="text-sm text-sky-800">{slide.highlight}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {slide.bgImage ? (
                      <div className="relative w-full max-w-2xl mx-auto">
                        <img
                          src={slide.bgImage}
                          alt={slide.title}
                          className="w-full h-auto rounded-lg cursor-pointer"
                          onClick={() => {
                            setCurrentImage(slide.bgImage || "");
                            setIsOpen(true);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full max-w-md h-80 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center">
                        <span className="text-slate-400">Image coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src: currentImage }]}
        plugins={[Zoom]}
      />
    </>
  );
}
