// Brain Waste - Timeline Slides (with Intro)
export type BrainWasteSlide = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  timeLabel: string;
  bgImage?: string;
  features?: { title: string; color: string }[];
  highlight?: string;
  isIntro?: boolean;
};

const staticSlides: BrainWasteSlide[] = [
  // INTRO SLIDE (no time, no image side)
  {
    _id: "intro", isIntro: true,
    title: "Brain Waste: What Builds Up Hourly",
    subtitle: "ROS · Amyloid-beta · Tau",
    content: "Every hour, your brain produces toxins. Without proper clearance, they accumulate—leading to oxidative stress, plaques, and tangles.",
    timeLabel: "The Problem",
    bgImage: "",
    features: [],
    highlight: "The goal: Understand what builds up. Learn how to clear it.",
    isIntro: true
  },
  {
    _id: "1",
    title: "Morning Reset",
    subtitle: "Clean & Refreshed",
    content: "After deep sleep, the brain enters its most refreshed state. Stress markers remain low, neural activity is balanced, and mental clarity feels effortless.",
    timeLabel: "6:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779086360/mind-recovery/ChatGPT_Image_May_18_2026_12_23_53_PM_o3jjjy.png",
    features: [
      { title: "Low Stress", color: "sky" },
      { title: "Rested Mind", color: "cyan" },
      { title: "Hydrated", color: "blue" },
      { title: "Deep Sleep Complete", color: "indigo" }
    ],
    highlight: "Brain cleared and ready for the day."
  },
  {
    _id: "2",
    title: "Getting Started",
    subtitle: "Early Activity",
    content: "Brain becomes active with early stimulation.",
    timeLabel: "8:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779086999/mind-recovery/8d070535-3d4e-4b38-81b1-2d78d6a3597b.png",
    features: [
      { title: "Mild Stress", color: "orange" },
      { title: "Starting Work", color: "amber" },
      { title: "Morning Coffee", color: "yellow" },
      { title: "Screen Time Begins", color: "rose" }
    ],
    highlight: "Brain becomes active with early stimulation."
  },
  {
    _id: "3",
    title: "Mid-Morning",
    subtitle: "Stress Rising",
    content: "Mental effort and stimulation continue rising.",
    timeLabel: "10:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779088596/mind-recovery/a79a2d3d-02f2-4435-82ba-68210c5c326d.png",
    features: [
      { title: "Moderate Stress", color: "red" },
      { title: "Focus & Work", color: "orange" },
      { title: "Caffeine Boost", color: "amber" },
      { title: "Screen Time Increases", color: "pink" }
    ],
    highlight: "Mental effort and stimulation continue rising."
  },
  {
    _id: "4",
    title: "Noon",
    subtitle: "Toxins Building",
    content: "Cognitive load peaks as toxins continue accumulating.",
    timeLabel: "12:00 PM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779093445/mind-recovery/a33520e8-1d3e-4f90-b0bd-f37e0085c23c.png",
    features: [
      { title: "High Stress", color: "violet" },
      { title: "Peak Workload", color: "purple" },
      { title: "More Caffeine", color: "fuchsia" },
      { title: "High Screen Exposure", color: "rose" }
    ],
    highlight: "Cognitive load peaks as toxins continue accumulating."
  },
  {
    _id: "5",
    title: "Afternoon: Toxins Peak",
    subtitle: "Maximum Accumulation",
    content: "ROS levels peak. Amyloid-beta plaques begin forming.",
    timeLabel: "2:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  },
  {
    _id: "6",
    title: "Evening: Peak Damage",
    subtitle: "End of day stress",
    content: "Maximum toxin levels. Plaques and tangles forming.",
    timeLabel: "9:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  },
  {
    _id: "7",
    title: "Night: Sleep Needed",
    subtitle: "Glymphatic system activates",
    content: "Deep sleep clears 60-90% of amyloid-beta.",
    timeLabel: "11:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  }
];

export async function getBrainWasteSlides(): Promise<BrainWasteSlide[]> {
  return Promise.resolve(staticSlides);
}
