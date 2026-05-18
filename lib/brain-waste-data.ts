// Brain Waste - Timeline Slides
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
  // INTRO SLIDE
  {
    _id: "intro",
    title: "Brain Waste: What Builds Up Hourly",
    subtitle: "ROS ? Amyloid-beta ? Tau",
    content: "Every hour, your brain produces toxins. Without proper clearance, they accumulate?leading to oxidative stress, plaques, and tangles.",
    timeLabel: "The Problem",
    bgImage: "",
    features: [],
    highlight: "The goal: Understand what builds up. Learn how to clear it.",
    isIntro: true
  },
  // 6:00 AM
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
  // 8:00 AM
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
  // 10:00 AM
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
  // 12:00 PM
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
  // 2:00 PM
  {
    _id: "5",
    title: "Early Afternoon",
    subtitle: "More Accumulation",
    content: "Continuous stress and focus lead to steady toxin buildup.",
    timeLabel: "2:00 PM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779095692/mind-recovery/87100c9b-33db-4479-b62b-df777fd4a459.png",
    features: [
      { title: "Sustained Stress", color: "amber" },
      { title: "Back-to-Back Meetings", color: "orange" },
      { title: "Caffeine Sustains", color: "yellow" },
      { title: "Screen Time High", color: "rose" }
    ],
    highlight: "Continuous stress and focus lead to steady toxin buildup."
  },
  // 4:00 PM
  {
    _id: "6",
    title: "Late Afternoon",
    subtitle: "Damage High",
    content: "Damage increases as mental fatigue and stress persist.",
    timeLabel: "4:00 PM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779096850/mind-recovery/9933640f-589a-4aac-b3b5-cfe21bee81de.png",
    features: [
      { title: "High Stress", color: "red" },
      { title: "Deadline Pressure", color: "orange" },
      { title: "Energy Crash Approaching", color: "amber" },
      { title: "Mental Fatigue Sets In", color: "rose" }
    ],
    highlight: "Damage increases as mental fatigue and stress persist."
  }
  ,  // 12:00 AM
  {
    _id: "7",
    title: "Midnight",
    subtitle: "Clearance Begins",
    content: "Glymphatic system activates. Waste removal begins slowly.",
    timeLabel: "12:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779098509/mind-recovery/49b757b3-cb16-45c8-ac18-44df99e2d3c0.png",
    features: [
      { title: "Deep Sleep Has Begun", color: "blue" },
      { title: "Glymphatic System Activating", color: "cyan" },
      { title: "Body Restoring", color: "sky" },
      { title: "Minimal Stimulation", color: "indigo" }
    ],
    highlight: "Glymphatic system activates. Waste removal begins slowly."
  },
  // 2:00 AM
  {
    _id: "8",
    title: "Active Cleansing",
    subtitle: "Deep Sleep Continues",
    content: "Clearance rate increases during deep sleep.",
    timeLabel: "2:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779098571/mind-recovery/9a0a3ffd-6e68-4dc3-b35f-3696d81449d7.png",
    features: [
      { title: "Waste Clearance Increases", color: "cyan" },
      { title: "Heart Rate Low", color: "sky" },
      { title: "Brain Resting Deeply", color: "blue" },
      { title: "Toxins Flushed Out", color: "indigo" }
    ],
    highlight: "Clearance rate increases during deep sleep."
  },
  // 4:00 AM
  {
    _id: "9",
    title: "Deep Clean Phase",
    subtitle: "Maximum Clearance",
    content: "Peak clearance window. Brain deeply cleanses and repairs.",
    timeLabel: "4:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779098600/mind-recovery/fbc31f47-e84d-49fc-b098-3f1c31c5cf34.png",
    features: [
      { title: "REM Cycles Active", color: "indigo" },
      { title: "Maximum Waste Removal", color: "blue" },
      { title: "Immune System Active", color: "cyan" },
      { title: "Vital Signs Stable", color: "sky" }
    ],
    highlight: "Peak clearance window. Brain deeply cleanses and repairs."
  },
  // 6:00 AM (Duplicate of morning reset - keeping as separate sleep completion)
  {
    _id: "10",
    title: "Reset Complete",
    subtitle: "Morning Recovery",
    content: "Most toxins cleared. Brain is refreshed and ready.",
    timeLabel: "6:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779098633/mind-recovery/68080612-ad44-4d54-ab9c-f72c9f54cf2a.png",
    features: [
      { title: "Waking Up Approaching", color: "yellow" },
      { title: "System Reset Almost Complete", color: "sky" },
      { title: "Hydration Restored", color: "blue" },
      { title: "Ready for the Day", color: "cyan" }
    ],
    highlight: "Most toxins cleared. Brain is refreshed and ready."
  }
];

export async function getBrainWasteSlides(): Promise<BrainWasteSlide[]> {
  return Promise.resolve(staticSlides);
}
